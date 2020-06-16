import {
  getArticles,
  getArticlesSuccess,
  getArticlesFailure,
  startArticlesLoading,
  endArticlesLoading,
  getMoreArticles,
  getMoreArticlesSuccess,
  getMoreArticlesFailure,
} from 'src/services/articles/actions'
import {
  getArticleById,
  getArticleByIdSuccess,
  getArticleByIdFailure,
  startArticleLoading,
  endArticleLoading,
} from 'src/services/article/actions'
import {
  sendEmailSubscribe,
  sendEmailSubscribeSuccess,
  startSubscribeLoading,
  endSubscribeLoading,
  sendEmailSubscribeFailure,
} from 'src/services/subscribe/actions'
import {
  startAuthLoading,
  endAuthLoading,
  sendAuthConfirmFailure,
  sendAuthConfirmSuccess,
  sendAuthConfirm,
} from 'src/services/auth/actions'
import {
  startSetUserLoading,
  endSetUserLoading,
  sendLogin,
  sendLoginSuccess,
  sendLoginFailure,
  sendJoin,
  sendJoinSuccess,
  sendJoinFailure,
  setUser,
  setUserSuccess,
  setUserFailure,
  setPrevUrl,
  setPrevUrlSuccess,
} from 'src/services/user/actions'

export type Articles =
  | ReturnType<typeof getArticles>
  | ReturnType<typeof getArticlesSuccess>
  | ReturnType<typeof getArticlesFailure>
  | ReturnType<typeof startArticlesLoading>
  | ReturnType<typeof endArticlesLoading>
  | ReturnType<typeof getMoreArticles>
  | ReturnType<typeof getMoreArticlesSuccess>
  | ReturnType<typeof getMoreArticlesFailure>

export type Article =
  | ReturnType<typeof getArticleById>
  | ReturnType<typeof getArticleByIdSuccess>
  | ReturnType<typeof getArticleByIdFailure>
  | ReturnType<typeof startArticleLoading>
  | ReturnType<typeof endArticleLoading>

export type Subscribe =
  | ReturnType<typeof sendEmailSubscribe>
  | ReturnType<typeof sendEmailSubscribeSuccess>
  | ReturnType<typeof sendEmailSubscribeFailure>
  | ReturnType<typeof startSubscribeLoading>
  | ReturnType<typeof endSubscribeLoading>

export type Auth =
  | ReturnType<typeof startAuthLoading>
  | ReturnType<typeof endAuthLoading>
  | ReturnType<typeof sendAuthConfirm>
  | ReturnType<typeof sendAuthConfirmSuccess>
  | ReturnType<typeof sendAuthConfirmFailure>

export type User =
  | ReturnType<typeof startSetUserLoading>
  | ReturnType<typeof endSetUserLoading>
  | ReturnType<typeof setUser>
  | ReturnType<typeof setUserSuccess>
  | ReturnType<typeof setUserFailure>
  | ReturnType<typeof sendLogin>
  | ReturnType<typeof sendLoginSuccess>
  | ReturnType<typeof sendLoginFailure>
  | ReturnType<typeof sendJoin>
  | ReturnType<typeof sendJoinSuccess>
  | ReturnType<typeof sendJoinFailure>
  | ReturnType<typeof setPrevUrl>
  | ReturnType<typeof setPrevUrlSuccess>
