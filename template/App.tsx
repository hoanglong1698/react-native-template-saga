import React from 'react'
import Navigation from '@/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GlobalLoading, globalLoadingRef } from '@/Components'

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <GlobalLoading ref={globalLoadingRef} />
    </SafeAreaProvider>
  )
}
