import { TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./styles"
import { actionButton, getColor, getControlIcon } from '../../../../../../utils/renderIcons/CookingMode'

interface IPreviousNextButton {
  active: boolean
  onPress: () => void
  isLightMode: boolean
  type: actionButton
  disabled?: boolean
}

const PreviousNextButton = ({type, active, isLightMode, onPress, disabled}: IPreviousNextButton) => {
  return (
    <TouchableOpacity 
      style={[{...styles.container, borderColor: getColor(isLightMode)}, active && {backgroundColor: getColor(isLightMode)}]} 
      onPress={onPress}
      disabled={disabled}
      >
      {getControlIcon(type, active, isLightMode)}
    </TouchableOpacity>
  )
}

export default PreviousNextButton