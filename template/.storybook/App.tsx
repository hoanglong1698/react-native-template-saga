import { getStorybookUI } from '@storybook/react-native'
import RNBootSplash from 'react-native-bootsplash'
import './storybook.requires'

RNBootSplash.hide({ fade: true })
const StorybookUIRoot = getStorybookUI({})

export default StorybookUIRoot
