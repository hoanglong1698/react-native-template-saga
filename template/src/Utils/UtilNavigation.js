import { StackActions, createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export function reset(screen, params) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name: screen, params }],
  })
}

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name, params)
  }
}

export function goBack() {
  navigationRef.current?.goBack()
}

export function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function push(name, params) {
  navigationRef.current?.dispatch(StackActions.push(name, params))
}

export function pop(params) {
  navigationRef.current?.dispatch(StackActions.pop(params))
}

export function getCurrentRoute() {
  let state = navigationRef.current?.getRootState()
  let currentRoute = { screen_name: '', screen_class: '' }
  const routeState = state?.routes[state.index]?.state
  currentRoute = {
    screen_name: routeState?.routes[routeState.index]?.name,
    screen_class: state?.routes[state.index]?.name,
  }
  return currentRoute
}
