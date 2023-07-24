import { useContext } from 'react'

import { ThemeContext } from '@/Components'

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return { theme, toggleTheme }
}

export default useTheme
