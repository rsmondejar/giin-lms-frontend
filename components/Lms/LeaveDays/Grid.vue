<template>
  <v-row justify="center" align="center">
    <v-col cols="12" :sm="sizes.sm" :md="sizes.md" :lg="sizes.lg">
      <v-card color="#FF5722">
        <v-card-title class="headline">
          Vacaciones
        </v-card-title>
        <v-card-subtitle>
          {{ $moment().subtract("1", "year").year() }}
        </v-card-subtitle>
        <v-card-text>
          {{ summary.last_year_vacations_days }} / {{ summary.last_year_vacations_per_year_days }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" :sm="sizes.sm" :md="sizes.md" :lg="sizes.lg">
      <v-card color="#00ACC1">
        <v-card-title class="headline">
          Vacaciones
        </v-card-title>
        <v-card-subtitle>
          {{ $moment().year() }}
        </v-card-subtitle>
        <v-card-text>
          {{ summary.vacations_days }} / {{ summary.vacations_per_year_days }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" :sm="sizes.sm" :md="sizes.md" :lg="sizes.lg">
      <v-card color="#6200EA">
        <v-card-title class="headline">
          Días Antigüedad
        </v-card-title>
        <v-card-subtitle>
          {{ $moment().year() }}
        </v-card-subtitle>
        <v-card-text>
          {{ summary.seniority_days }} / {{ summary.seniority_per_year_days }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" :sm="sizes.sm" :md="sizes.md" :lg="sizes.lg">
      <v-card color="#009688">
        <v-card-title class="headline">
          Días Enfermedad
        </v-card-title>
        <v-card-subtitle>
          {{ $moment().year() }}
        </v-card-subtitle>
        <v-card-text>
          {{ summary.sickness_days }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" :sm="sizes.sm" :md="sizes.md" :lg="sizes.lg">
      <v-card color="#8BC34A">
        <v-card-title class="headline">
          Días Ausencia
        </v-card-title>
        <v-card-subtitle>
          {{ $moment().year() }}
        </v-card-subtitle>
        <v-card-text>
          {{ summary.unofficial_leaves_days }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" :sm="sizes.sm" :md="sizes.md" :lg="sizes.lg">
      <v-card color="#E91E63">
        <v-card-title class="headline">
          Días Permiso
        </v-card-title>
        <v-card-subtitle>
          {{ $moment().year() }}
        </v-card-subtitle>
        <v-card-text>
          {{ summary.leaves_of_absence_days }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LeaveDaysSummary",
  props: {
    summary: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    sizes: {
      lg: 2,
      md: 6,
      sm: 8
    },
  }),
}
</script>
