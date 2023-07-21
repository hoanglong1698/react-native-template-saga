import { MiddlewareArray, combineReducers, configureStore } from '@reduxjs/toolkit'
import reduxSaga, { settingReducer } from '@/Redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

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
})

export const persistor = persistStore(store)

sagaMiddleware.run(reduxSaga)

export type RootState = ReturnType<typeof store.getState>
