import AsyncStorage from '@react-native-async-storage/async-storage'
import { MiddlewareArray, combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import { ReactotronConfig } from '@/Configs'
import reduxSaga, { settingReducer } from '@/Redux'

const rootReducer = combineReducers({
  setting: settingReducer,
})

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['setting'],
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: persistedReducer,
  middleware: __DEV__ ? new MiddlewareArray().concat(sagaMiddleware) : [sagaMiddleware],
  enhancers: __DEV__ ? [ReactotronConfig.createEnhancer!()] : undefined,
})

export const persistor = persistStore(store)

sagaMiddleware.run(reduxSaga)

export type RootState = ReturnType<typeof store.getState>
