export const START_SUBSCRIBE_LOADING = 'subscribe/START_LOADING' as const
export const END_SUBSCRIBE_LOADING = 'subscribe/END_LOADING' as const
export const SEND_EMAIL_SUBSCRIBE = 'subscribe/SEND_SUBSCRIBE' as const
export const SEND_EMAIL_SUBSCRIBE_SUCCESS = 'subscribe/SEND_EMAIL_SUBSCRIBE_SUCCESS' as const
export const SEND_EMAIL_SUBSCRIBE_FAILURE = 'subscribe/SEND_EMAIL_SUBSCRIBE_FAILURE' as const

export const actions = {
  startSubscribeLoading: () => ({ type: START_SUBSCRIBE_LOADING }),
  endSubscribeLoading: () => ({ type: END_SUBSCRIBE_LOADING }),
  sendEmailSubscribe: (email: string) => ({
    type: SEND_EMAIL_SUBSCRIBE,
    payload: { email },
  }),
  sendEmailSubscribeFailure: (error: Error) => ({
    type: SEND_EMAIL_SUBSCRIBE_FAILURE,
    payload: { error },
  }),
  sendEmailSubscribeSuccess: ({
    isSubscribeCertified,
    message,
  }: {
    isSubscribeCertified: boolean
    message: string
  }) => ({
    type: SEND_EMAIL_SUBSCRIBE_SUCCESS,
    payload: { isSubscribeCertified, message },
  }),
}
