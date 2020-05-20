import { all, fork } from 'redux-saga/effects'
import { rootArticlesSaga } from 'src/services/articles/saga'
import { rootArticleSaga } from 'src/services/article/saga'

export const rootSaga = function*() {
  yield all([fork(rootArticlesSaga), fork(rootArticleSaga)])
}
