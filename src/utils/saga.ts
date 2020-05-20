// import { call, put } from 'redux-saga/effects'

export const createRequestActionTypes = (type: string): string[] => {
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`
  return [type, SUCCESS, FAILURE]
}

// export default function createRequestSaga<
//   Action extends { type: string; payload?: {} }
// >(type: string, request: () => Promise<void>) {
//   const SUCCESS = `${type}_SUCCESS`
//   const FAILURE = `${type}_FAILURE`

//   return function*(action: Action) {
//     // yield put(actions.loading.startLoading(type)) // 로딩 시작
//     try {
//       const response = yield call(request, action.payload)
//       yield put({
//         type: SUCCESS,
//         payload: response.data,
//       })
//     } catch (e) {
//       yield put({
//         type: FAILURE,
//         payload: e,
//         error: true,
//       })
//     }
//     // yield put(actions.loading.finishLoading(type)) // 로딩 끝
//   }
// }
