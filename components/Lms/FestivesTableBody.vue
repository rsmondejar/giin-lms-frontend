<template>
  <v-data-table
    :headers="headers"
    :items="publicHolidays"
    :items-per-page="-1"
  >
    <template #[`item.date`]="{ item }">
      {{ $moment(item.date).format("DD MMM Y") }}
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "FestivesTableBody",
  props: {
    publicHolidays: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    headers: [
      { text: 'Día', value: 'date', sortable: true, },
      { text: 'Nombre', value: 'name', sortable: true,},
    ],
  }),
}
</script>
