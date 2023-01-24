import { getField, updateField } from "vuex-map-fields"
export const state = () => ({
  holidaySummaryRequest: [],
})
export const getters = {
  getField,
  holidaySummaryRequest(state) {
    return state.holidaySummaryRequest
  },
}
export const actions = {
  getHolidaySummaryRequest({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$axios
        .$get(`api/holiday-summary`)
        .then(({ data }) => {
          commit("updateField", {
            path: "holidaySummaryRequest",
            value: data,
          })
          resolve(data)
        })
    })
  },
  setHolidaySummaryRequest({ commit }, holidaySummaryRequest) {
    commit("updateField", {
      path: "holidaySummaryRequest",
      value: holidaySummaryRequest,
    })
  },
}
export const mutations = {
  updateField,
}
