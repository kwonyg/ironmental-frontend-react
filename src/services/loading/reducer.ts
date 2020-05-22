import { StateTypes, ActionTypes } from 'src/types'

const START_LOADING = 'loading/START_LOADING' as const
const FINISH_LOADING = 'loading/FINISH_LOADING' as const

export const startLoading = () => ({ type: START_LOADING })
export const finishLoading = () => ({ type: FINISH_LOADING })

const initialState = {
  isLoading: false,
}

export const loadingReducer = (
  state: StateTypes.LoadingState = initialState,
  action: ActionTypes.Loading
) => {
  switch (action.type) {
    case START_LOADING: {
      return { ...state, isLoading: true }
    }
    case FINISH_LOADING: {
      return { ...state, isLoading: false }
    }
    default: {
      return state
    }
  }
}
