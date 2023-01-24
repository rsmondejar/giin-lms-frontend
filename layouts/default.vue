<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list v-if="$auth.user">
        <v-list-item
          :to="{ name: 'home' }"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          :to="{ name: 'request-holidays' }"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-calendar-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Solicitar vacaciones
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          :to="{ name: 'festives' }"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>mdi-calendar-month</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Festivos
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          exact
          @click.prevent="logout"
        >
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Cerrar sesión
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <span v-if="$auth.user">{{ $auth.user.name }} <v-icon>mdi-account</v-icon></span>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      miniVariant: false,
      title: 'GIIN LMS'
    }
  },
  methods: {
    logout() {
      this.$auth.logout().then(() => this.$router.go("/login"))
    },
  }
}
</script>
