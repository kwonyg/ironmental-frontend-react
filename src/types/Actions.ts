import { getArticleList, setArticles } from 'src/services/articles/reducer'
import { getArticleById, setArticle } from 'src/services/article/reducer'

export type Articles =
  | ReturnType<typeof getArticleList>
  | ReturnType<typeof setArticles>

export type Article =
  | ReturnType<typeof getArticleById>
  | ReturnType<typeof setArticle>
