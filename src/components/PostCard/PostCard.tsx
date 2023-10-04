import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Post} from '../../types/types'

interface PostCardProps {
  item: Post
}

export const PostCard = ({item}: PostCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${item.id}. ${item.title}`}</Text>
      <Text>{item.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 6,
    borderRadius: 8,
    flexDirection: 'column',
    marginHorizontal: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
  },
})
