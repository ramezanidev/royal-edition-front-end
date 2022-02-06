import { GetterTree, MutationTree } from 'vuex'

interface State {
  step: number;
  isAnimation: boolean;
}

export const state = (): State => ({
  step: 1,
  isAnimation: false
})

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  step (state): State['step'] {
    return state.step
  },
  isAnimation (state): State['isAnimation'] {
    return state.isAnimation
  }
}

export const mutations: MutationTree<RootState> = {
  increase (state) {
    if (!state.isAnimation) {
      state.step++
    }
  },
  dicrease (state) {
    if (!state.isAnimation && state.step > 1) {
      state.step--
    }
  },
  setStep (state, value: State['step']) {
    state.step = value
  },
  setAnimation (state, value: State['isAnimation']) {
    state.isAnimation = value
  }
}
