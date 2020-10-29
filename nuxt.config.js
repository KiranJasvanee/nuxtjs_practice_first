export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: '/nuxtjs_practice_first/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-blog-seo',
    meta: [
      { hid: "twitter:card", name: "twitter:card", content: options.twitter_card },
      { hid: "twitter:site", name: "twitter:site", content: options.twitter },
      { hid: "twitter:creator", name: "twitter:creator", content: options.twitter },
      { hid: "twitter:title", name: "twitter:title", content: options.title },
      { hid: "twitter:description", name: "twitter:description", content: options.description },
      { hid: "twitter:image", name: "twitter:image", content: options.img },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
