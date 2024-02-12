// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
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
    },
  },
  image: {
    provider: "ipx",
  },
});
