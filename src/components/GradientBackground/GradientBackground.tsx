import React, {ReactNode} from 'react'
import {StyleSheet, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'

interface GradientBackgroundProps {
  children: ReactNode
}

export const GradientBackground = ({children}: GradientBackgroundProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4da6ff', '#aaffff']}
        style={styles.gradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        {children}
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  gradient: {
    flex: 1,
  },
})

export default GradientBackground
