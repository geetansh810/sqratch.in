import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";
import AstroPWA from "@vite-pwa/astro";
import robotsTxt from "astro-robots-txt";
import { defaultLocale, locales, siteTitle, siteUrl } from "./site.config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  vite: {
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    solidJs(),
    icon(),
    tailwind({
      // Base style is applied on the file global.css
      applyBaseStyles: false,
    }),
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
    }),
    AstroPWA({
      mode: import.meta.env.PROD ? "production" : "development",
      base: "/",
      scope: "/",
      includeAssets: ["favicon.svg"],
      registerType: "autoUpdate",
      injectRegister: false,
      manifest: {
        name: siteTitle,
        short_name: siteTitle,
        theme_color: "#ffffff",
      },
      pwaAssets: {
        config: true,
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
        globIgnores: ["**/_worker.js/**/*", "_worker.js"],
        navigateFallbackDenylist: [/^\/keystatic/, /^\/api/],
        skipWaiting: true,
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
      },
      devOptions: {
        enabled: false,
        navigateFallbackAllowlist: [/^\//],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
});
