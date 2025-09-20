import { View, Text, TextInput, LayoutChangeEvent, Pressable, FlatList } from 'react-native'
import React, { useRef } from 'react'
import styles from "./styles"
import Comment from './components/Comment'
import { comments } from '../../../../utils/fakeData/RecipesDetailsData'

interface IComments {
  handleLayout: (event: LayoutChangeEvent) => void
}

const Comments = ({handleLayout}: IComments) => {
  const inputRef = useRef<TextInput>(null)
  const onFocusReplyHandler = () => inputRef.current?.focus()

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>Comments</Text>
        <Text style={styles.subtitle}>Tips and hacks that may be helpful to you</Text>
        
        <View style={styles.writeWrapper}>
          <View style={styles.avatarWrapper}/>

          <View style={styles.inputWrapper}>
            <TextInput style={styles.input} placeholder='Write a comment...' ref={inputRef} />
          </View>
        </View>
      </View>

      <View style={styles.commentsWrapper}>
        <FlatList 
          data={comments}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Comment item={item} onFocusReplyHandler={onFocusReplyHandler}/>}
          scrollEnabled={false}
        />
       
      </View>
    </View>
  )
}

export default Comments