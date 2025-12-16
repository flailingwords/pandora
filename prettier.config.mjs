import config from "@tyisi/config-prettier";

config.overrides ??= [];

config.overrides.push({
    files: "*.astro",
    options: {
        parser: "astro",
    },
});

config.plugins.unshift("prettier-plugin-astro");

export default config;
