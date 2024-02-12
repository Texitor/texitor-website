// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Texitor: Dedicated LaTeX Editor",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Texitor is a free and modern LaTeX editor for Windows, macOS and Linux.",
        },
        { name: "author", content: "Texitor" },
      ],
      script: [
        {
          src: "https://static.cloudflareinsights.com/beacon.min.js",
          defer: true,
          tagPosition: "bodyClose",
          "data-cf-beacon": '{"token": "5177a72985c846338aad3014ec801418"}',
        },
      ],
    },
  },
});
