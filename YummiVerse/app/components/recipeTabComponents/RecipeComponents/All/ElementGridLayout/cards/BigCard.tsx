import { StyleSheet, DimensionValue, TouchableOpacity, View, Platform } from 'react-native'
import React from 'react'
import ContextMenu from 'react-native-context-menu-view'
import { screenWidth } from '../../../../../../utils/global/globalValues'
import CardBottomDetails from '../../../ForYou/CardBottomDetails/CardBottomDetails'
import RecipeCardHeader from '../../../ForYou/RecipeCardHeader'

const actions = [{ title: "View Recipe", icon: "eye"}, { title: "Add to My Menu Plan", icon: "add"}, {title: "Chat with Buddies", icon: "chat"}, {title: "Not interested", icon: "dislike"}]
const isIos = Platform.OS === "ios"

interface IBigCard {
  title: string
  h?: DimensionValue
  mh?: boolean
}
  
const BigCard = ({title, h, mh = false}: IBigCard) => {
  return (
    <ContextMenu
      disabled={!isIos}
      actions={actions}
      onPress={(e) => {}}
      style={[{flex: 1, height: 307,}, h ? {height: h} : null, mh && {marginHorizontal: 17}]}
    >
      <TouchableOpacity style={[styles.container]}>
        <RecipeCardHeader />     
        <CardBottomDetails title={title} />
      </TouchableOpacity>
    </ContextMenu>
  )
}

export default BigCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 307, 
    paddingTop: 8,
    paddingLeft: 8, 
    paddingRight: 12, 
    borderRadius: 16, 
    paddingBottom: 12, 
    backgroundColor: "green", 
   }
})