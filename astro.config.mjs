// @ts-check
import {defineConfig, fontProviders} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://juntingwei.github.io',
    base: '/irenejunting26',
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Ephesis",
            cssVariable: "--font-script",
        },
        {
            provider: fontProviders.fontsource(),
            name: "Playfair Display",
            weights: [400],
            cssVariable: "--font-display",
        }
    ]
});