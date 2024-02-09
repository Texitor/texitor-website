// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Texitor: Dedicated LaTeX Editor",
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
});
