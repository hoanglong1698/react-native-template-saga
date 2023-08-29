import { StackActions, createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export function reset(screen: string, params?: any) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name: screen, params }],
  })
}

export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    //@ts-ignore
    navigationRef.current?.navigate(name, params)
  }
}

export function goBack() {
  navigationRef.current?.goBack()
}

export function replace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function push(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.push(name, params))
}

export function pop(params: any) {
  navigationRef.current?.dispatch(StackActions.pop(params))
}

export function getCurrentRoute() {
  return navigationRef.getCurrentRoute()
}

export const ScreensName = {
  AuthStack: 'AuthStack',
  Login: 'Login',
  MainStack: 'MainStack',
  Home: 'Home',
  Profile: 'Profile',
}
