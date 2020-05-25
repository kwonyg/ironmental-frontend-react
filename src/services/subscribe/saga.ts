import { takeLatest, call, put } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { sendEmailAuth } from 'src/services/subscribe/request'
import { SEND_EMAIL_SUBSCRIBE, actions } from 'src/services/subscribe/reducer'
// import {
//   SEND_EMAIL_SUBSCRIBE,
//   sendEmailSubscribeSuccess,
// } from 'src/services/subscribe/reducer'

// TODO: 사가 함수에 액션 파라미터를 넘길 때 타입이 먹히지 않는 이슈 아직 유효 한 지 확인하기
// https://github.com/redux-saga/redux-saga/issues/1188
const sendEmailSaga = function*(action: AnyAction) {
  try {
    const response = yield call(sendEmailAuth, action.payload.email)
    // console.log('response: ', response)
    const { isSub, isCertify } = response.data
    yield put(actions.sendEmailSubscribeSuccess(isSub, isCertify))
  } catch (e) {
    // errer_failure
  }
}

export function* rootEmailSaga() {
  yield takeLatest(SEND_EMAIL_SUBSCRIBE, sendEmailSaga)
}
