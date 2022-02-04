import { GetterTree, MutationTree } from 'vuex'

interface State {
    position : {
        x: ('left' | 'right'),
        rotate: ('up' | 'down')
    }
}

export const state = ():State => ({
  position: {
    x: 'left',
    rotate: 'down'
  }
})

export type RootState = ReturnType<typeof state>

export const getters:GetterTree<RootState, RootState> = {
  position (state):State['position'] {
    return state.position
  }
}

export const mutations:MutationTree<RootState> = {
  changePosition: (state, payload:State['position']):void => {
    state.position = {
      ...state.position,
      ...payload
    }
  }
}
