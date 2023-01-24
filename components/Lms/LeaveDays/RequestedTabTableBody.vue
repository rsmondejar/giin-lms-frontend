<template>
  <v-data-table
    :headers="headers"
    :items="holidayStates"
    :items-per-page="5"
  >
    <template #[`item.dates`]="{ item }">
      <v-list dense flat color="transparent">
        <v-list-item v-for="date in item.dates" :key="date.id">
          {{ $moment(date.date).format("DD MMM Y") }} <span v-show="date.is_half_day">(Medio día)</span>
        </v-list-item>
      </v-list>
    </template>
    <template #[`item.total_days`]="{ item }">
      <v-chip
        dark
      >
        {{ item.dates.length }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "RequestedTabTableBody",
  props: {
    holidayStates: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id',
      },
      { text: 'Comentario', value: 'comment', sortable: true, },
      { text: 'Días', value: 'dates', sortable: false,},
      { text: 'Total días', value: 'total_days', sortable: false,},
      { text: 'manager', value: 'manager.name' },
      { text: 'Tipo', value: 'type.name' },
    ],
  }),
}
</script>
