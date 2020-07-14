import { TypedState } from 'src/types'

export const selectArticle = (
  state: TypedState.RootState
): TypedState.ArticleState => state.article
