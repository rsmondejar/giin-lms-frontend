<template>
  <section>
    <p>Solicitar vacaciones</p>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-select
              v-model="reason"
              :items="reasons"
              item-text="name"
              item-value="id"
              label="Seleccionar tipo"
              required
            >
            </v-select>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-select
              v-model="manager"
              :items="managers"
              item-text="name"
              item-value="id"
              label="Seleccionar Responsable"
              required
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-date-picker
              v-model="dates"
              :allowed-dates="allowedDates"
              first-day-of-week="1"
              locales="es"
              multiple
            ></v-date-picker>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-menu
              :close-on-content-click="false"
              :return-value.sync="dates"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template #activator="{ on, attrs }">
                <v-combobox
                  v-model="dates"
                  multiple
                  chips
                  small-chips
                  label="Días seleccionados"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-combobox>
              </template>
              <v-date-picker
                v-model="dates"
                multiple
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>

        <v-row>

          <v-col
            cols="12"
            md="12"
          >
            <v-text-field
              v-model="comment"
              label="Comentario"
              counter
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="submit"
            >
              Enviar solicitud
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </section>
</template>

<script>
import {mapFields} from "vuex-map-fields"

export default {
  name: 'HolidaysRequestPage',
  data: () => ({
    reason: null,
    manager: null,
    comment: null,
    dates: null,
    disabledDates: [],
    valid: true,
  }),
  computed: {
    ...mapFields("reasons", ["reasons"]),
    ...mapFields("managers", ["managers"]),
    ...mapFields("holidays", ["holidays"]),
  },
  watch: {
    holidays(newHolidays) {
      this.disabledDates = newHolidays.map((item) => item.date)
    },
  },
  mounted() {
    this.$store.dispatch("reasons/getReasons")
    this.$store.dispatch("managers/getManagers")
    this.$store.dispatch("holidays/getHolidays")
  },
  methods: {
    allowedDates(val) {
      return !this.disabledDates.includes(val);
    },
    submit() {
      this.valid = false

      this.$axios
        .$post("api/request-holidays", {
          reason: this.reason,
          manager: this.manager,
          comment: this.comment,
          dates: this.dates,
        })
        .then(() => {
          this.resetForm()

          this.$store.dispatch("holidaySummary/getHolidaySummaryRequest")
          this.$store.dispatch("holidays/getHolidays")
          this.$store.dispatch("requestHolidays/getRequestHolidays")

          alert('Solitud registrada correctamente')
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error)
          alert(error)
        })
        .finally(() => {
          this.valid = true
        })
    },
    resetForm() {
      this.reason = null
      this.manager = null
      this.dates = []
      this.comment = null
    },
  },
}
</script>
