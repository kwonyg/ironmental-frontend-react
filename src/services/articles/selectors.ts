import { TypedState } from 'src/types'

export const articlesSelector = (
  state: TypedState.RootState
): TypedState.ArticlesState => state.articles
