import React from 'react'
import Navigation from '@/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider, GlobalLoading, globalLoadingRef } from '@/Components'

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Navigation />
        <GlobalLoading ref={globalLoadingRef} />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
