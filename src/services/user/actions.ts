import { PropsTypes } from 'src/types'

export const START_SET_USER_LOADING = 'user/START_SET_USER_LOADING' as const
export const END_SET_USER_LOADING = 'user/END_SET_USER_LOADING' as const
export const SEND_LOGIN = 'user/SEND_LOGIN' as const
export const SEND_LOGIN_SUCCESS = 'user/SEND_LOGIN_SUCCESS' as const
export const SEND_LOGIN_FAILURE = 'user/SEND_LOGIN_FAILURE' as const
export const SEND_JOIN = 'user/SEND_JOIN' as const
export const SEND_JOIN_SUCCESS = 'user/SEND_JOIN_SUCCESS' as const
export const SEND_JOIN_FAILURE = 'user/SEND_JOIN_FAILURE' as const
export const SET_USER = 'user/SET_USER' as const
export const SET_USER_SUCCESS = 'user/SET_USER_SUCCESS' as const
export const SET_USER_FAILURE = 'user/SET_USER_FAILURE' as const
export const SET_PREV_URL = 'user/SET_PREV_URL' as const
export const SET_PREV_URL_SUCCESS = 'user/SET_PREV_URL_SUCCESS' as const
export const SET_PREV_URL_FAILURE = 'user/SET_PREV_URL_FAILURE' as const

export const startSetUserLoading = () => ({ type: START_SET_USER_LOADING })
export const endSetUserLoading = () => ({ type: END_SET_USER_LOADING })
export const sendLogin = (code: string) => ({
  type: SEND_LOGIN,
  payload: { code },
})
export const sendLoginSuccess = (code: string) => ({
  type: SEND_LOGIN_SUCCESS,
  payload: { code },
})
export const sendLoginFailure = (code: string) => ({
  type: SEND_LOGIN_FAILURE,
  payload: { code },
})
export const sendJoin = (code: string) => ({
  type: SEND_JOIN,
  payload: { code },
})
export const sendJoinSuccess = (code: string) => ({
  type: SEND_JOIN_SUCCESS,
  payload: { code },
})
export const sendJoinFailure = (code: string) => ({
  type: SEND_JOIN_FAILURE,
  payload: { code },
})
export const setUser = (user: PropsTypes.User) => ({
  type: SET_USER,
  payload: { user },
})
export const setUserSuccess = (user: PropsTypes.User) => ({
  type: SET_USER_SUCCESS,
  payload: { user },
})
export const setUserFailure = (error: Error) => ({
  type: SET_USER_FAILURE,
  payload: { error },
})
export const setPrevUrl = (prevUrl: string) => ({
  type: SET_PREV_URL,
  payload: { prevUrl },
})

export const setPrevUrlSuccess = (prevUrl: string) => ({
  type: SET_PREV_URL_SUCCESS,
  payload: { prevUrl },
})
