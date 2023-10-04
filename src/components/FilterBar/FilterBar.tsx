import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {PostsSortField, SortFields} from '../../const/const'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {postsActions} from '../../store/slices/postSlice'
import {Entypo} from '@expo/vector-icons'

interface FilterBarProps {
  value: PostsSortField
}
export const FilterBar = ({value}: FilterBarProps) => {
  const dispatch = useAppDispatch()

  return (
    <View style={styles.container}>
      {SortFields.map(item => (
        <TouchableOpacity
          key={item.value}
          onPress={() => {
            dispatch(
              postsActions.setFilter(
                item.value === value ? PostsSortField.NUll : item.value,
              ),
            )
          }}
          style={styles.btn}>
          <Text style={{color: 'white'}}>{item.label}</Text>

          <Entypo
            name={
              value === item.value ? 'chevron-small-up' : 'chevron-small-down'
            }
            size={24}
            color='white'
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  btn: {
    paddingVertical: 12,
    backgroundColor: 'blue',
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 12,
    marginHorizontal: 4,
    flexDirection: 'row',
  },
})
