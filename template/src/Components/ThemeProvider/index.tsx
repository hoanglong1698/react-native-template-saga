import React, { useState } from 'react'

import { ITheme, IThemeContext } from '@/Types'

export const ThemeContext = React.createContext<IThemeContext>({ theme: 'light', toggleTheme: () => null })

interface Props {
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = props => {
  const { children } = props
  const [theme, setTheme] = useState<ITheme>('light')

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
