import { View, Text, TextInput, LayoutChangeEvent, Pressable } from 'react-native'
import React from 'react'
import styles from "./styles"
import Comment from './components/Comment'
import { comments } from '../../../../utils/fakeData/RecipesDetailsData'

interface IComments {
  inputRef: React.RefObject<TextInput | null>
  handleLayout: (event: LayoutChangeEvent) => void
}

const Comments = ({inputRef, handleLayout}: IComments) => {
  const onFocusHandler = () => inputRef.current?.focus()

  const onFocusReplyHandler = () => {
    onFocusHandler()
  }

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <View style={styles.topWrapper}>
        <Text style={styles.title}>Comments</Text>
        <Text style={styles.subtitle}>Tips and hacks that may be helpful to you</Text>
        
        <View style={styles.writeWrapper}>
          <View style={styles.avatarWrapper}/>

          <Pressable style={styles.inputWrapper} onPress={onFocusHandler}>
            <Text style={styles.input}>Write your comments</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.commentsWrapper}>
        {comments.map((item, index) => <Comment item={item} key={index} onFocusReplyHandler={onFocusReplyHandler}/>)}
      </View>
    </View>
  )
}

export default Comments