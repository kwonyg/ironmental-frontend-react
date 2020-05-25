import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchArticles } from './request'
import { startLoading, finishLoading } from 'src/services/loading/reducer'
import { GET_ARTICLES, setArticles } from './reducer'

export const getArticlesSaga = function*() {
  yield put(startLoading())
  try {
    const response = yield call(fetchArticles)
    const { datas, links } = response.data

    yield put(setArticles({ articles: datas, nextLink: links.next }))
  } catch (e) {
    // put 실패스
  } finally {
    yield put(finishLoading())
  }
}

export function* rootArticlesSaga() {
  yield takeEvery(GET_ARTICLES, getArticlesSaga)
}
