import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    integrations: [react(), partytown(), mdx(), sitemap()],
    site: "https://pandora.flailingwords.com/",
    vite: {
        plugins: [tailwindcss()],
    },
});
