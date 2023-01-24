import { getField, updateField } from "vuex-map-fields"
export const state = () => ({
  reasons: [],
})
export const getters = {
  getField,
  reasons(state) {
    return state.reasons
  },
}
export const actions = {
  getReasons({ commit }, payload) {
    return new Promise((resolve, reject) => {
      return this.$axios.$get(`api/reasons`).then(({ data }) => {
        commit("updateField", {
          path: "reasons",
          value: data,
        })
        resolve(data)
      })
    })
  },
  setReasons({ commit }, reasons) {
    commit("updateField", {
      path: "reasons",
      value: reasons,
    })
  },
}
export const mutations = {
  updateField,
}
