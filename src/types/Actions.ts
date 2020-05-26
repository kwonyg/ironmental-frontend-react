import {
  getArticleList,
  setArticles,
  startArticlesLoading,
  endArticlesLoading,
} from 'src/services/articles/reducer'
import { getArticleById, setArticle } from 'src/services/article/reducer'
import { startLoading, finishLoading } from 'src/services/loading/reducer'
import {
  sendEmailSubscribe,
  sendEmailSubscribeSuccess,
  startSubscribeLoading,
  endSubscribeLoading,
} from 'src/services/subscribe/reducer'

export type Articles =
  | ReturnType<typeof getArticleList>
  | ReturnType<typeof setArticles>
  | ReturnType<typeof startArticlesLoading>
  | ReturnType<typeof endArticlesLoading>

export type Article =
  | ReturnType<typeof getArticleById>
  | ReturnType<typeof setArticle>

export type Loading =
  | ReturnType<typeof startLoading>
  | ReturnType<typeof finishLoading>

export type Subscribe =
  | ReturnType<typeof sendEmailSubscribe>
  | ReturnType<typeof sendEmailSubscribeSuccess>
  | ReturnType<typeof startSubscribeLoading>
  | ReturnType<typeof endSubscribeLoading>
