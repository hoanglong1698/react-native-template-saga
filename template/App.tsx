import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { ThemeProvider, GlobalLoading, globalLoadingRef } from '@/Components'
import i18n from '@/Languages'
import Navigation from '@/Navigation'
import { store } from '@/Redux/Store'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider>
              <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent />
              <Navigation />
              <GlobalLoading ref={globalLoadingRef} />
            </ThemeProvider>
          </I18nextProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
