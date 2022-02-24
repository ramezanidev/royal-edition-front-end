import { GetterTree, MutationTree, ActionTree } from 'vuex'

interface State {
  darkMode: boolean;
}

export const state = (): State => ({
  darkMode: true
})

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  darkMode (state): State['darkMode'] {
    return state.darkMode
  }
}

export const mutations: MutationTree<RootState> = {
  setDarkMode (state, payload: State['darkMode']) {
    state.darkMode = payload
    // @ts-ignore
    this.$cookiz.set('darkMode', payload, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365 // 1 year
    })
  }
}

export const actions: ActionTree<RootState, RootState> = {
  init ({ state, commit }): State['darkMode'] {
    // @ts-ignore
    const darkMode = this.$cookiz.get('darkMode')
    if (typeof darkMode !== 'boolean') {
      commit('setDarkMode', true)
    }
    state.darkMode = darkMode
    return darkMode
  }
}
