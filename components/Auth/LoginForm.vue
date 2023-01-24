<template>
  <div class="Login">
    <v-flex xs12>
      <div class="text-center"></div>
      <v-card min-width="200" class="c-card">
        <v-card-title class="headline">Login</v-card-title>
        <v-card-text>
          <v-flex>
            <v-form  @submit.prevent="requestLogin()">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :error-messages="errorMessage"
                    hide-details="auto"
                    append-outer-icon="mdi-account"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Email del usuario"
                    type="email"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    :rules="emailPassword"
                    :error-messages="errorMessage"
                    hide-details="auto"
                    append-outer-icon="mdi-lock"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Contraseña del usuario"
                    type="password"
                    required
                  >
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn
                    class="mr-4"
                    type="submit"
                  >
                    Login
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    email: null,
    password: null,
    errors: [],
    errorMessage: null,
    emailRules: [
      v => !!v || 'E-mail es obligatorio',
      v => /.+@.+/.test(v) || 'E-mail no es válido',
    ],
    emailPassword: [
      v => !!v || 'La contraseña es obligatoria',
    ],
  }),
  methods: {
    async requestLogin() {
      const login = {
        email: this.email,
        password: this.password,
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })
      await this.$auth
        .loginWith("laravelSanctum", {
          data: login,
        })
        .catch((error) => {
          this.errorMessage = error.response.data?.message
        })
        .finally(() => {
          this.$nuxt.$loading.finish()
        })
    },
  },
}
</script>
