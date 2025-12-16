FROM node:24-alpine AS base

ENV CI=1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

FROM base AS build

ENV CI=1

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /build/

WORKDIR /build

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY astro.config.ts tsconfig.json /build/
COPY public/ /build/public/
COPY src/ /build/src/

RUN pnpm build

FROM nginx:latest

COPY --from=build /build/dist/ /usr/share/nginx/html/
COPY docker/nginx.conf /etc/nginx/nginx.conf
