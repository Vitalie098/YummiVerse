import {TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import { actionButtonType, getIcon } from '../../../../utils/renderIcons/RecipeDetailsHeader'

interface IActionButton {
  onPress: () => void
  type: actionButtonType
}

const ActionButton = ({type, onPress}: IActionButton) => {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      {getIcon(type)}
    </TouchableOpacity>
  )
}

export default ActionButton