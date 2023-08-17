import React from 'react'

import { useTheme } from '@/Hooks'
import { ITheme } from '@/Types'

type Generator<T extends {}> = (theme: ITheme) => T

const useThemedStyles = <T extends {}>(createStyles: Generator<T>) => {
  const { theme } = useTheme()

  const ThemedStylesObject = React.useMemo(() => createStyles(theme), [createStyles, theme])
  return ThemedStylesObject
}
export default useThemedStyles
