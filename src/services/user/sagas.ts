import { SEND_LOGIN, SEND_JOIN, CHECK_LOGGED_IN, actions } from './actions'
import { sendJoin, sendLogin, checkLoggedIn } from './request'
import { AnyAction } from 'redux'
import { put, call, takeEvery } from 'redux-saga/effects'
import { routeUtils, localStorageUtils } from 'src/utils'
import { routePath } from 'src/constants'

const sendLoginSaga = function*(action: AnyAction) {
  yield put(actions.startSetUserLoading())
  try {
    const { code } = action.payload
    const response = yield call(sendLogin, code)

    const user = response.data.data
    localStorageUtils.setUser(user)
    yield put(actions.sendLoginSuccess(user))
    yield call(routeUtils.push, routePath.HOME)
  } catch (e) {
    yield put(actions.sendLoginFailure(e))
    yield call(routeUtils.gotoError, '500') // FIXME: 500인자가 넘어가지 않는 부분 고치기
  } finally {
    yield put(actions.endSetUserLoading())
  }
}

const sendJoinSaga = function*(action: AnyAction) {
  yield put(actions.startSetUserLoading())
  try {
    const { code } = action.payload
    const response = yield call(sendJoin, code)

    const user = response.data.data

    alert('가입성공!!')
    localStorageUtils.setUser(user)
    yield call(routeUtils.push, routePath.HOME)
    yield put(actions.sendJoinSuccess(user))
  } catch (e) {
    yield put(actions.sendJoinFailure(e))
    yield call(routeUtils.gotoError, '500')
  } finally {
    yield put(actions.endSetUserLoading())
  }
}

const checkLoggedInSaga = function*(action: AnyAction) {
  yield put(actions.startSetUserLoading())
  try {
    yield call(checkLoggedIn) // TODO: 홈 화면 첫 진입시 check 결과가 나오기 전까지 헤더 로그인 상태바 깜빡임 원인

    const user = localStorageUtils.getUser()
    yield put(actions.checkLoggedInSuccess(user))
  } catch (e) {
    localStorageUtils.removeUser()
    yield put(actions.checkLoggedInFailure(e))
  } finally {
    yield put(actions.endSetUserLoading())
  }
}

export function* rootUserSaga() {
  yield takeEvery(SEND_LOGIN, sendLoginSaga)
  yield takeEvery(SEND_JOIN, sendJoinSaga)
  yield takeEvery(CHECK_LOGGED_IN, checkLoggedInSaga)
}
