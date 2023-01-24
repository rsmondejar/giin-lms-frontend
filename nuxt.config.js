import path from 'path'
import fs from 'fs'
import colors from 'vuetify/es5/util/colors'

export default {
  loading: "~/components/LoadingScreen.vue",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - giin-lms-frontend',
    title: 'giin-lms-frontend',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/nuxt-community/svg-module
    "@nuxtjs/svg",
    // https://github.com/nuxt-community/fontawesome-module
    "@nuxtjs/fontawesome",
    // https://github.com/nuxt-community/moment-module
    "@nuxtjs/moment",
  ],

  moment: {
    defaultLocale: "es",
    locales: ["es"],
    defaultTimezone: "Europe/Madrid",
  },

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true,
      regular: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/dotenv",
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://reegodev.github.io/vue-screen/guide/getting-started.html
    "vue-screen/nuxt",
    // https://auth.nuxtjs.org/guide/setup
    "@nuxtjs/auth-next",
    "@nuxtjs/manifest",
    "@nuxtjs/robots",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL,
    credentials: true,
  },

  router: {
    middleware: ["auth"],
    extendRoutes(routes, resolve) {
      return [
        {
          name: "login",
          path: "/login",
          component: resolve(__dirname, "pages/Login.vue"),
          chunkName: "pages/login",
        },
        {
          name: "home",
          path: "/",
          component: resolve(__dirname, "pages/Home.vue"),
          chunkName: "pages/home",
        },
      ]
    },
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: "laravel/sanctum",
        url: process.env.API_URL,
        endpoints: {
          login: {
            url: "/api/auth/login",
          },
          logout: {
            url: "/api/auth/logout",
          },
          user: {
            url: "/api/auth/user",
          },
        },
        redirects: {
          logout: "/login",
          home: "/",
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  manifest: {
    name: "GIIN LMS Sistema gestión de vacaciones",
    short_name: "GIIN LMS",
    lang: "es",
    crossorigin: "use-credentials",
    theme_color: "#72cbe3",
  },

  dotenv: {
    /* module options */
  },

  robots: {
    /* module options */
    UserAgent: "*",
    Disallow: "/",
  },

  server: {
    https:
      process.env.NODE_ENV === "development" &&
      process.env.USE_LOCAL_HTTPS === "true"
        ? {
          key: fs.readFileSync(path.resolve(__dirname, "localhost-key.pem")),
          cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem")),
        }
        : false,
  },
}
