<template>
  <v-row>
    <v-col>
      <v-card>
        <v-toolbar
          color="brown"
          dark
          flat
        >
          <v-toolbar-title>Días solicitados</v-toolbar-title>

          <template #extension>
            <v-tabs
              v-model="tab"

              color="yellow"
            >
              <v-tabs-slider color="yellow"></v-tabs-slider>

              <v-tab>Pendientes de aprobar</v-tab>
              <v-tab>Aprobadas</v-tab>
              <v-tab>Rechazadas</v-tab>
              <v-tab>Canceladas</v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <LmsLeaveDaysRequestedTabTableBody :holiday-states="requestHolidays.holidays_states['pending']" />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <LmsLeaveDaysRequestedTabTableBody :holiday-states="requestHolidays.holidays_states['approved']" />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <LmsLeaveDaysRequestedTabTableBody :holiday-states="requestHolidays.holidays_states['rejected']" />
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <LmsLeaveDaysRequestedTabTableBody :holiday-states="requestHolidays.holidays_states['cancelled']" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LeaveDaysRequested",
  props: {
    requestHolidays: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    tab: null,
  }),
}
</script>
