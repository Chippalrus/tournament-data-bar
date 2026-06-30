import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://chippalrus.dev',
    base: '/tournament-data-bar',
    fonts:
    [
        {
            name: "Noto Sans KR",
            cssVariable:"--font-noto-sans-kr",
            provider: fontProviders.google(),
            subsets: ["korean", "latin"],
            weights: [400, 700],
            styles: ["normal"],
        },
        {
            name: "Saira",
            cssVariable:"--font-saira",
            provider: fontProviders.google(),
            subsets: ["latin"],
            weights: [400, 600, 700],
            styles: ["normal"],
        }

    ],
    vite:
    {
        plugins: [tailwindcss()],
    },
});
