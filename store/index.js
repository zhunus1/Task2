export const state = () => ({
  state : true
})

export const mutations = {
  change(state) {
    state = !state;
  }
}
