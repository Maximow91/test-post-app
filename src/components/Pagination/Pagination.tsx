import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  ScrollView,
} from 'react-native'

interface PaginationProps {
  currentPage: number
  limit: number
  total: number
  onPageChange: (page: number) => void
  containerStyle?: ViewStyle
}

export const Pagination = ({
  currentPage,
  limit,
  total,
  onPageChange,
  containerStyle,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / limit)
  const pages = Array.from({length: totalPages}, (_, i) => i + 1)

  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={[styles.paginationContainer, containerStyle]}>
      {pages.map(page => (
        <TouchableOpacity
          key={page}
          onPress={() => onPageChange(page)}
          style={[
            styles.paginationButton,
            currentPage === page && styles.activePaginationButton,
          ]}>
          <Text
            style={[
              styles.paginationText,
              currentPage === page && styles.activePaginationText,
            ]}>
            {page}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {paddingBottom: 80},
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  paginationButton: {
    padding: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: '#454C5E99',
  },
  activePaginationButton: {
    backgroundColor: 'blue',
    opacity: 0.8,
    borderColor: 'blue',
  },
  paginationText: {
    color: 'black',
  },
  activePaginationText: {
    color: 'white',
  },
})

export default Pagination
