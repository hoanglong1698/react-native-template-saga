import { PayloadAction } from '@reduxjs/toolkit'
import { all, takeLatest } from 'redux-saga/effects'
import { settingActions } from './SettingRedux'

export function* watchSetting() {
  yield all([takeLatest(settingActions.changeLanguage.type, handleChangeLanguage)])
}

function* handleChangeLanguage(action: PayloadAction<any>): any {
  try {
  } catch (error) {}
}
