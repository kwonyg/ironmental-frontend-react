import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchArticles } from './request'
import { GET_ARTICLES, setArticles } from './reducer'

export const getArticlesSaga = function*() {
  try {
    const response = yield call(fetchArticles)
    const { datas, links } = response.data

    yield put(setArticles({ articles: datas, nextLink: links.next }))
  } catch (e) {
    // put 실패스
    // console.log('사가 요청 실패:', e)
  }
}

export function* rootArticlesSaga() {
  yield takeLatest(GET_ARTICLES, getArticlesSaga)
}
