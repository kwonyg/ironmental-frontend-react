import { getArticleList, setArticles } from 'src/services/articles/reducer'
import { getArticleById, setArticle } from 'src/services/article/reducer'
import { startLoading, finishLoading } from 'src/services/loading/reducer'
export type Articles =
  | ReturnType<typeof getArticleList>
  | ReturnType<typeof setArticles>

export type Article =
  | ReturnType<typeof getArticleById>
  | ReturnType<typeof setArticle>

export type Loading =
  | ReturnType<typeof startLoading>
  | ReturnType<typeof finishLoading>
