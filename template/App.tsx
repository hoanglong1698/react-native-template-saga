import React from 'react'
import Navigation from '@/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider, GlobalLoading, globalLoadingRef } from '@/Components'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/Languages'
import { Provider } from 'react-redux'
import { store } from '@/Redux/Store'
import { StatusBar } from 'react-native'

export default function App() {
  return (
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
  )
}
