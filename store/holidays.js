import { getField, updateField } from "vuex-map-fields"
export const state = () => ({
  holidays: [],
})
export const getters = {
  getField,
  holidays(state) {
    return state.holidays
  },
}
export const actions = {
  getHolidays({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$axios.$get(`api/holidays`).then(({ data }) => {
        commit("updateField", {
          path: "holidays",
          value: data,
        })
        resolve(data)
      })
    })
  },
  setHolidays({ commit }, holidays) {
    commit("updateField", {
      path: "holidays",
      value: holidays,
    })
  },
}
export const mutations = {
  updateField,
}
