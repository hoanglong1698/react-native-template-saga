import React from 'react'
import Navigation from '@/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider, GlobalLoading, globalLoadingRef } from '@/Components'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/Languages'

export default function App() {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <Navigation />
          <GlobalLoading ref={globalLoadingRef} />
        </ThemeProvider>
      </I18nextProvider>
    </SafeAreaProvider>
  )
}
