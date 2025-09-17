import React from 'react'
import ThreeElements from './templates/ThreeElements'
import OneElement from './templates/OneElement'
import { View } from 'react-native'
import styles from "./styles"
import { displayModeButton } from '../../../../utils/global/globalTypes'
import { PostData, RecipesAllType } from '../../../../utils/fakeData/RecipesAllScreenData'

interface IElementGridLayout {
  data: PostData[]
  reverse: boolean
  displayMode: displayModeButton
}

const ElementGridLayout = ({data, reverse, displayMode}: IElementGridLayout) => {
  const renderContent = () => {
    if(displayMode === 1) return <OneElement data={data} />
    return <ThreeElements data={data} reverse={reverse}/>
  }

  return (
    <View style={styles.container}>
      {renderContent()}
    </View>
  )
}

export default ElementGridLayout