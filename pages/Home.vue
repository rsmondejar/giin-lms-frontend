<template>
  <section>
    <LmsLeaveDaysGrid
      v-if="Object.keys(holidaySummaryRequest).length > 0"
      :summary="holidaySummaryRequest"
    />
    <LmsLeaveDaysRequested
      v-if="Object.keys(requestHolidays).length > 0"
      :request-holidays="requestHolidays"
    />
  </section>
</template>

<script>
import { mapFields } from "vuex-map-fields"
export default {
  name: 'HomePage',
  data: () => ({
  }),
  computed: {
    ...mapFields("holidaySummary", ["holidaySummaryRequest"]),
    ...mapFields("holidays", ["holidays"]),
    ...mapFields("requestHolidays", ["requestHolidays"]),
  },
  mounted() {
    this.$store.dispatch("holidaySummary/getHolidaySummaryRequest")
    this.$store.dispatch("holidays/getHolidays")
    this.$store.dispatch("requestHolidays/getRequestHolidays")
  }
}
</script>
