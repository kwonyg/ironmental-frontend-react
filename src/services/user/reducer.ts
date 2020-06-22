import { StateTypes, ActionTypes } from 'src/types'
import {
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_FAILURE,
  SEND_JOIN_SUCCESS,
  SEND_JOIN_FAILURE,
  START_USER_LOADING,
  END_USER_LOADING,
  SET_PREV_URL,
} from './actions'

const initialState: StateTypes.UserState = {
  loading: false,
  user: {
    userId: '',
    email: '',
    username: '',
  },
  prevUrl: '',
  error: null,
}

export const userReducer = (
  state: StateTypes.UserState = initialState,
  action: ActionTypes.User
) => {
  switch (action.type) {
    case SEND_LOGIN_SUCCESS:
    case SEND_JOIN_SUCCESS: {
      const { user } = action.payload

      return { ...state, user, error: null }
    }

    case SEND_LOGIN_FAILURE:
    case SEND_JOIN_FAILURE: {
      const { error } = action.payload

      return { ...state, user: null, error }
    }

    case START_USER_LOADING: {
      return { ...state, loading: true }
    }

    case END_USER_LOADING: {
      return { ...state, loading: false }
    }

    case SET_PREV_URL: {
      const { prevUrl } = action.payload

      return { ...state, prevUrl }
    }

    default: {
      return state
    }
  }
}
