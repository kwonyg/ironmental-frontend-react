import { PropsTypes } from 'src/types'

export const START_USER_LOADING = 'user/START_USER_LOADING' as const
export const END_USER_LOADING = 'user/END_USER_LOADING' as const
export const SEND_LOGIN = 'user/SEND_LOGIN' as const
export const SEND_LOGIN_SUCCESS = 'user/SEND_LOGIN_SUCCESS' as const
export const SEND_LOGIN_FAILURE = 'user/SEND_LOGIN_FAILURE' as const
export const SEND_JOIN = 'user/SEND_JOIN' as const
export const SEND_JOIN_SUCCESS = 'user/SEND_JOIN_SUCCESS' as const
export const SEND_JOIN_FAILURE = 'user/SEND_JOIN_FAILURE' as const
export const SET_PREV_URL = 'user/SET_PREV_URL' as const
export const SET_PREV_URL_SUCCESS = 'user/SET_PREV_URL_SUCCESS' as const
export const SET_PREV_URL_FAILURE = 'user/SET_PREV_URL_FAILURE' as const

export const actions = {
  startSetUserLoading: () => ({ type: START_USER_LOADING }),
  endSetUserLoading: () => ({ type: END_USER_LOADING }),
  sendLogin: (code: string) => ({
    type: SEND_LOGIN,
    payload: { code },
  }),
  sendLoginSuccess: (user: PropsTypes.User) => ({
    type: SEND_LOGIN_SUCCESS,
    payload: { user },
  }),
  sendLoginFailure: (error: Error) => ({
    type: SEND_LOGIN_FAILURE,
    payload: { error },
  }),
  sendJoin: (code: string) => ({
    type: SEND_JOIN,
    payload: { code },
  }),
  sendJoinSuccess: (user: PropsTypes.User) => ({
    type: SEND_JOIN_SUCCESS,
    payload: { user },
  }),
  sendJoinFailure: (error: Error) => ({
    type: SEND_JOIN_FAILURE,
    payload: { error },
  }),
  setPrevUrl: (prevUrl: string) => ({
    type: SET_PREV_URL,
    payload: { prevUrl },
  }),
  setPrevUrlSuccess: (prevUrl: string) => ({
    type: SET_PREV_URL_SUCCESS,
    payload: { prevUrl },
  }),
}
