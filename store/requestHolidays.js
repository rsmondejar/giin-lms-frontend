import { getField, updateField } from "vuex-map-fields"
export const state = () => ({
  requestHolidays: [],
})
export const getters = {
  getField,
  requestHolidays(state) {
    return state.requestHolidays
  },
}
export const actions = {
  getRequestHolidays({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$axios
        .$get(`api/request-holidays`)
        .then(({ data }) => {
          commit("updateField", {
            path: "requestHolidays",
            value: data,
          })
          resolve(data)
        })
    })
  },
  setRequestHolidays({ commit }, requestHolidays) {
    commit("updateField", {
      path: "requestHolidays",
      value: requestHolidays,
    })
  },
}
export const mutations = {
  updateField,
}
