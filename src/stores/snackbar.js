import { defineStore } from 'pinia'

const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    state: false, // snackbar toggle
    data: null,
  }),
  actions: {
    SET_SNACKBAR_DATA (data) {
      this.state = true
      this.data = data
    },
  },
  getters: {
    GET_SNACKBAR_STATE: (state) => {
      return state.state
    },
    GET_SNACKBAR_DATA: (state) => {
      state.state = false
      return state.data
    },
  },
})

export { useSnackbarStore }
