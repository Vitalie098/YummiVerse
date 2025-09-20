import { View } from 'react-native'
import React, { memo, useState } from 'react'
import ElementGridLayout from '../ElementGridLayout'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '../Header'
import styles from "./styles"
import { displayModeButton } from '../../../../../utils/global/globalTypes'
import { recipesAllData } from '../../../../../utils/fakeData/RecipesAllScreenData'
import Animated from 'react-native-reanimated'

interface IRecipesAllContent {
  scrollHandler: any
}

const RecipesAllContent = memo(({scrollHandler}: IRecipesAllContent) => {
  const [displayMode, setDisplayMode] = useState<displayModeButton>(2)

  const insets = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={recipesAllData}
        bounces={false}
        style={styles.flatList}
        onScroll={scrollHandler}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => <ElementGridLayout displayMode={displayMode} reverse={index % 2 == 0} data={item} />}
        ListHeaderComponent={() => <Header displayMode={displayMode} setDisplayMode={setDisplayMode} />}
        ListFooterComponent={() => <View style={{paddingBottom: insets.bottom}}/>}
      />
    </View>
  )
})

export default RecipesAllContent