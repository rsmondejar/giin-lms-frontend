import { getField, updateField } from "vuex-map-fields"
export const state = () => ({
  publicHolidays: [],
})
export const getters = {
  getField,
  holidays(state) {
    return state.publicHolidays
  },
}
export const actions = {
  getHolidays({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$axios.$get(`api/public-holidays`).then(({ data }) => {
        commit("updateField", {
          path: "publicHolidays",
          value: data,
        })
        resolve(data)
      })
    })
  },
  setHolidays({ commit }, holidays) {
    commit("updateField", {
      path: "publicHolidays",
      value: holidays,
    })
  },
}
export const mutations = {
  updateField,
}
