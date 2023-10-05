import React, {useEffect, useRef, useState} from 'react'
import {FlatList, StyleSheet, View, ActivityIndicator} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {useSelector} from 'react-redux'
import {FilterBar} from '../../components/FilterBar/FilterBar'
import Pagination from '../../components/Pagination/Pagination'
import {PostCard} from '../../components/PostCard/PostCard'
import {AppTextInput} from '../../components/ui/Input/AppTextInput'
import {LIMIT} from '../../const/const'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {getPosts} from '../../services/getPosts'
import {getPostsState} from '../../store/selectors/getPostsState'
import {postsActions} from '../../store/slices/postSlice'
import {Post} from '../../types/types'

export const MainScreen = () => {
  const {top} = useSafeAreaInsets()
  const {posts, filter, total, currentPage, isLoading, error} =
    useSelector(getPostsState)
  const dispatch = useAppDispatch()
  const [refreshing, setRefreshing] = useState(false)
  const [search, setSearch] = useState('')

  const flatListRef = useRef<FlatList<Post> | null>(null)

  const fetchPosts = () => {
    dispatch(getPosts())
  }

  useEffect(() => {
    fetchPosts()
  }, [currentPage])

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({animated: true, offset: 0})
    }
  }, [filter])

  const handlePageChange = (page: number) => {
    setSearch('')
    dispatch(postsActions.setSearchStr(''))
    dispatch(postsActions.setPage(page))
  }

  const handleInputChange = (text: string) => {
    setSearch(text)
    dispatch(postsActions.setSearchStr(text))
  }

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <AppTextInput
            value={search}
            maxLength={50}
            containerStyle={styles.input}
            onChangeText={handleInputChange}
            placeholder='type to search'
          />
          <FilterBar value={filter} />
        </View>

        {isLoading ? (
          <ActivityIndicator color='#454C5E99' size='large' />
        ) : (
          <FlatList
            ref={flatListRef}
            data={posts}
            keyExtractor={item => item.id.toString()}
            keyboardShouldPersistTaps='always'
            ListHeaderComponent={() => <View style={styles.listHeader} />}
            refreshing={false}
            onRefresh={fetchPosts}
            stickyHeaderIndices={[0]}
            renderItem={PostCard}
          />
        )}
        <Pagination
          currentPage={currentPage}
          limit={LIMIT}
          total={total}
          onPageChange={handlePageChange}
          containerStyle={styles.pagin}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    marginTop: 40,
    borderTopWidth: 1,
    paddingTop: 16,
    backgroundColor: '#ffffff44',
    borderColor: '#ffffff7f',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 0.0001,
    borderBottomLeftRadius: 0.0001,
    borderWidth: 2,
    borderBottomWidth: 0,
  },
  header: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    borderBottomWidth: 0.2,
    borderColor: 'white',
  },
  listHeader: {
    paddingVertical: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  input: {
    marginBottom: 16,
  },
  pagin: {
    marginBottom: 0,
    position: 'absolute',
    bottom: 10,
    left: 0,
    width: '100%',
  },
})
