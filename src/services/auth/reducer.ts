import { StateTypes, ActionTypes } from 'src/types'

export const SEND_EMAIL_AUTH = 'auth/SEND_AUTH' as const
export const SEND_EMAIL_AUTH_SUCCESS = 'auth/SEND_EMAIL_AUTH_SUCCESS' as const
export const SEND_EMAIL_AUTH_FAILURE = 'auth/SEND_EMAIL_AUTH_FAILURE' as const

export const sendEmailAuth = (email: string) => ({
  type: SEND_EMAIL_AUTH,
  payload: { email },
})

export const sendEmailAuthSuccess = (isSub: boolean, isCertify: boolean) => ({
  type: SEND_EMAIL_AUTH_SUCCESS,
  payload: { isSub, isCertify },
})

// export const sendEmailAuthFailure = error:Error => ({
//   type: SEND_EMAIL_AUTH_SUCCESS,
//   payload: { error },
// })

const initialState = {
  auth: {
    isSub: false,
    isCertify: false,
  },
}

export const emailReducer = (
  state: StateTypes.AuthState = initialState,
  action: ActionTypes.Auth
) => {
  switch (action.type) {
    case SEND_EMAIL_AUTH_SUCCESS: {
      const { isSub, isCertify } = action.payload

      return { ...state, isSub, isCertify }
    }
    default: {
      return state
    }
  }
}
