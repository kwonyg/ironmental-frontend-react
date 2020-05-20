import { getArticleList, setArticles } from 'src/services/articles/reducer'

export type Articles =
  | ReturnType<typeof getArticleList>
  | ReturnType<typeof setArticles>
