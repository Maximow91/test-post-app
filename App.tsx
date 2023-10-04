import React from 'react'
import {StyleSheet} from 'react-native'
import {Provider} from 'react-redux'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {MainScreen} from './src/screens/MainScreen/MainScreen'
import {store} from './src/store/store'
import GradientBackground from './src/components/GradientBackground/GradientBackground'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GradientBackground>
          <MainScreen />
        </GradientBackground>
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
