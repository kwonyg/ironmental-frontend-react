import { StateTypes, ActionTypes } from 'src/types'

export const START_SUBSCRIBE_LOADING = 'subscribe/START_LOADING' as const
export const END_SUBSCRIBE_LOADING = 'subscribe/END_LOADING' as const
export const SEND_EMAIL_SUBSCRIBE = 'subscribe/SEND_SUBSCRIBE' as const
export const SEND_EMAIL_SUBSCRIBE_SUCCESS = 'subscribe/SEND_EMAIL_SUBSCRIBE_SUCCESS' as const
export const SEND_EMAIL_SUBSCRIBE_FAILURE = 'subscribe/SEND_EMAIL_SUBSCRIBE_FAILURE' as const

export const startSubscribeLoading = () => ({ type: START_SUBSCRIBE_LOADING })
export const endSubscribeLoading = () => ({ type: END_SUBSCRIBE_LOADING })
export const sendEmailSubscribe = (email: string) => ({
  type: SEND_EMAIL_SUBSCRIBE,
  payload: { email },
})
export const sendEmailSubscribeSuccess = (
  isSub: boolean,
  isCertify: boolean
) => ({
  type: SEND_EMAIL_SUBSCRIBE_SUCCESS,
  payload: { isSub, isCertify },
})

const initialState = {
  isLoading: false,
  subscribe: {
    isSub: false,
    isCertify: false,
  },
}
export const subscribeReducer = (
  state: StateTypes.SubscribeState = initialState,
  action: ActionTypes.Subscribe
) => {
  switch (action.type) {
    case SEND_EMAIL_SUBSCRIBE_SUCCESS: {
      const { isSub, isCertify } = action.payload

      return { ...state, isSub, isCertify }
    }

    case START_SUBSCRIBE_LOADING: {
      return { ...state, isLoading: true }
    }

    case END_SUBSCRIBE_LOADING: {
      return { ...state, isLoading: false }
    }
    default: {
      return state
    }
  }
}
