import { test } from '@service/test'

export default {
  namespace: 'test',
  state: {
    name: 'name的初始值'
  },
  effects: {
    *test({ payload }, { call, put }) {
      let res = yield call(test, payload)
      yield put({
        type: 'save',
        payload: {
          name: res
        }
      })
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
