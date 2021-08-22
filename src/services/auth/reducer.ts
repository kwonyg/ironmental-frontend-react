import { TypedState, TypedActions } from 'src/types'
import {
  START_AUTH_LOADING,
  END_AUTH_LOADING,
  SEND_AUTH_CONFIRM_FAILURE,
  SEND_AUTH_CONFIRM_SUCCESS,
} from './actions'

const initialState: TypedState.AuthState = {
  error: null,
  loading: false,
  result: { message: '' },
}

export const authReducer = (
  state: TypedState.AuthState = initialState,
  action: TypedActions.Auth
) => {
  switch (action.type) {
    case START_AUTH_LOADING: {
      return { ...state, loading: true }
    }
    case END_AUTH_LOADING: {
      return { ...state, loading: false }
    }
    case SEND_AUTH_CONFIRM_SUCCESS: {
      const { message } = action.payload
      return { ...state, result: { message } }
    }
    case SEND_AUTH_CONFIRM_FAILURE: {
      const { error } = action.payload
      return { ...state, error }
    }
    default:
      return state
  }
}
