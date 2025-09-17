import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Dashboard from "../../../../assets/svg/Dashboard.svg"
import Menu from "../../../../assets/svg/Menu.svg"
import styles from "./styles"
import Filters from '../Filters'
import { displayModeButton } from '../../../../utils/global/globalTypes'
import { colors } from '../../../../utils/global/globalStyles'

interface IHeader {
  displayMode: displayModeButton
  setDisplayMode: React.Dispatch<React.SetStateAction<displayModeButton>>
}

const Header = ({displayMode, setDisplayMode}: IHeader) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>All recipes</Text>

        <View style={styles.modeWrapper}>
          <TouchableOpacity 
            style={[styles.button, displayMode === 2 && {backgroundColor: "#06231C"}]}
            onPress={() => setDisplayMode(2)}
          >
            <Dashboard color={displayMode === 2 ? "#fff" : colors.mainColorT}/>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[{...styles.button, marginRight: 0}, displayMode === 1 && {backgroundColor: "#06231C"}]}
            onPress={() => setDisplayMode(1)}
          > 
            <Menu color={displayMode === 1 ? "#fff" : colors.mainColorT}/>
          </TouchableOpacity>
        </View>
      </View>

      <Filters />
    </>
  )
}

export default Header