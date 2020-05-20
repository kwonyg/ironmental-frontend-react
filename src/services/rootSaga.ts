import { all, fork } from 'redux-saga/effects'
import { rootArticlesSaga } from 'src/services/articles/saga'

export const rootSaga = function*() {
  yield all([fork(rootArticlesSaga)])
}
