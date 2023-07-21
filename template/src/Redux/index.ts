import { all, fork } from 'redux-saga/effects'
import { watchSetting } from './SettingRedux'

export * from './SettingRedux'

export default function* reduxSaga() {
  yield all([fork(watchSetting)])
}
