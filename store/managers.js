import { getField, updateField } from "vuex-map-fields"
export const state = () => ({
  managers: [],
})
export const getters = {
  getField,
  managers(state) {
    return state.managers
  },
}
export const actions = {
  getManagers({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$axios.$get(`api/managers`).then(({ data }) => {
        commit("updateField", {
          path: "managers",
          value: data,
        })
        resolve(data)
      })
    })
  },
  setManagers({ commit }, managers) {
    commit("updateField", {
      path: "managers",
      value: managers,
    })
  },
}
export const mutations = {
  updateField,
}
