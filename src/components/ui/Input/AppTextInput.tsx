import React from 'react'
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import {EvilIcons} from '@expo/vector-icons'

interface MyTextInputProps {
  containerStyle?: ViewStyle
}

type AppTextInputProps = TextInputProps & MyTextInputProps

export const AppTextInput = (props: AppTextInputProps) => {
  const {containerStyle, ...otherProps} = props
  return (
    <View style={[styles.container, containerStyle]}>
      <EvilIcons name='search' size={24} color='white' />
      <TextInput {...otherProps} style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#454C5E99',
    borderRadius: 12,
    marginVertical: 10,
    flexDirection: 'row',
    padding: 8,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
  },
})
