import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  language: 'en',
  theme: 'light',
}

const settingRedux = createSlice({
  name: 'SettingRedux',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        language: action.payload,
      }
    },
    changeTheme: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        theme: action.payload,
      }
    },
  },
})

const settingActions = settingRedux.actions
const settingReducer = settingRedux.reducer

export { settingActions }
export default settingReducer
