<template>
  <section>
    <p>Festivos</p>
    <LmsFestivesTableBody :public-holidays="publicHolidays" />
  </section>
</template>

<script>
import { mapFields } from "vuex-map-fields"
export default {
  name: 'FestivesPage',
  data: () => ({
  }),
  computed: {
    ...mapFields("publicHolidays", ["publicHolidays"]),
  },
  mounted() {
    this.$store.dispatch("publicHolidays/getHolidays")
  }
}
</script>
