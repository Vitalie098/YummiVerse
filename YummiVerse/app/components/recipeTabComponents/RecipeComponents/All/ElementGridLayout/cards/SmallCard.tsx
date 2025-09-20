import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ContextMenu from 'react-native-context-menu-view'
import { colors, fontFamilies } from '../../../../../../utils/global/globalStyles'
import CardBottomDetails from '../../../ForYou/CardBottomDetails/CardBottomDetails'
import RecipeCardHeader from '../../../ForYou/RecipeCardHeader'

interface ISmallCard {
  title: string
}

const SmallCard = ({title}: ISmallCard) => {
  return (
    <ContextMenu
      actions={[{ title: "Title 1" }, { title: "Title 2" }]}
    >
      <TouchableOpacity style={styles.container}>
        <RecipeCardHeader onlyDots={true}/>     
        <CardBottomDetails title={title} />
      </TouchableOpacity>
    </ContextMenu>
  )
}

export default SmallCard

const styles = StyleSheet.create({
  container: {
    height: 149, 
    borderRadius: 16, 
    paddingTop: 10.5, 
    paddingBottom: 5.5, 
    paddingHorizontal: 7, 
    backgroundColor: colors.mainColorT, 
  },
  text: {
    fontSize: 14, 
    color: "#fff",
    lineHeight: 20, 
    fontFamily: fontFamilies.bold
  }
})