import { AnyAction } from 'redux'
import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchArticleById } from './request'
import { ActionTypes, actions } from './actions'
import { routeUtils } from 'src/utils'

// TODO: 사가 함수에 액션 파라미터를 넘길 때 타입이 먹히지 않는 이슈 아직 유효 한 지 확인하기
// https://github.com/redux-saga/redux-saga/issues/1188
const getArticleSaga = function*(action: AnyAction) {
  yield put(actions.startArticleLoading())
  try {
    const { id } = action.payload

    const response = yield call(fetchArticleById, id)

    yield put(actions.getArticleByIdSuccess(response.data))
  } catch (e) {
    yield put(actions.getArticleByIdFailure(e))

    // TODO: e.response가 없을 수 도 있나??
    if (e.response) {
      const errorResponse = e.response.data.error

      yield call(routeUtils.gotoError, errorResponse)
    }
  } finally {
    yield put(actions.endArticleLoading())
  }
}

export function* rootArticleSaga() {
  yield takeEvery(ActionTypes.GET_ARTICLE, getArticleSaga)
}
