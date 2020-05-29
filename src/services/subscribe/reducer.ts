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
export const sendEmailSubscribeFailure = (error: Error) => ({
  type: SEND_EMAIL_SUBSCRIBE_FAILURE,
  payload: { error },
})
export const sendEmailSubscribeSuccess = ({
  isSubscribeCertified,
  message,
}: {
  isSubscribeCertified: boolean
  message: string
}) => ({
  type: SEND_EMAIL_SUBSCRIBE_SUCCESS,
  payload: { isSubscribeCertified, message },
})

const initialState: StateTypes.SubscribeState = {
  error: null,
  loading: false,
  result: {
    message: '',
    status: '',
  },
}
export const subscribeReducer = (
  state: StateTypes.SubscribeState = initialState,
  action: ActionTypes.Subscribe
) => {
  switch (action.type) {
    case SEND_EMAIL_SUBSCRIBE_SUCCESS: {
      const { isSubscribeCertified, message } = action.payload
      const status = isSubscribeCertified ? '미구독' : '구독중'

      return { ...state, result: { message, status } }
    }

    case SEND_EMAIL_SUBSCRIBE_FAILURE: {
      const { error } = action.payload

      return { ...state, error }
    }

    case START_SUBSCRIBE_LOADING: {
      return { ...state, loading: true }
    }

    case END_SUBSCRIBE_LOADING: {
      return { ...state, loading: false }
    }

    default: {
      return state
    }
  }
}
