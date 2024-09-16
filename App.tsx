import React, { useCallback, useEffect, useState } from 'react'
import Home from './screens/home'
import Dummypage from './screens/dummyPage'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()
const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'manrope-regular': require('./assets/fonts/Manrope-Regular.ttf'),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setFontsLoaded(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Dummy" component={Dummypage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
