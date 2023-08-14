import React from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'

import { CButton, CText, CTextInput, Checkbox, DismissKeyboardView } from '@/Components'
import { SCREENS_NAME } from '@/Constants'
import { useTheme } from '@/Hooks'
import { Colors } from '@/Themes'
import { ITheme } from '@/Types'
import { reset } from '@/Utils'

export default function LoginScreen() {
  const { theme } = useTheme()

  return (
    <DismissKeyboardView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent />
      <CText bold fontSize={32}>
        Log in
      </CText>

      <View style={styles.emailTitleContainer}>
        <CText bold style={{ flex: 1 }}>
          Email
        </CText>
        <TouchableOpacity>
          <CText bold color={Colors[theme].primary}>
            Login with mobile
          </CText>
        </TouchableOpacity>
      </View>
      <CTextInput placeholder="Enter your email" containerStyle={styles.inputContainer} />

      <CText bold style={styles.passwordTitleContainer}>
        Password
      </CText>
      <CTextInput placeholder="Enter your password" containerStyle={styles.inputContainer} />

      <View>
        <Checkbox label="Remember me" />
      </View>
      <CButton style={styles.loginButton} title="Login" onPress={() => reset(SCREENS_NAME.MAIN_STACK)} />
    </DismissKeyboardView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  loginButton: {
    marginTop: 15,
  },
  emailTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordTitleContainer: {
    alignSelf: 'flex-start',
    marginTop: 15,
  },
  inputContainer: {
    marginTop: 10,
  },
})
