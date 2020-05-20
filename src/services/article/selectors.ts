import { StateTypes } from 'src/types'

export const articleSelector = (
  state: StateTypes.RootState
): StateTypes.ArticleState => state.article
