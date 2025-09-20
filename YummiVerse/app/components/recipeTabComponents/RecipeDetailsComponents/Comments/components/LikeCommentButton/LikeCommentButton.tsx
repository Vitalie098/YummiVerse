import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles"
import { getIcon, iconType } from '../../../../../../utils/renderIcons/RecipeDetailsComments'

interface ILikeCommentButton {
  likes: number
  type: iconType
}

const LikeCommentButton = ({likes, type}: ILikeCommentButton) => {
  return (
    <View style={styles.container}>
      {getIcon(type)}
      <Text style={styles.text}>{likes}</Text>
    </View>
  )
}

export default LikeCommentButton