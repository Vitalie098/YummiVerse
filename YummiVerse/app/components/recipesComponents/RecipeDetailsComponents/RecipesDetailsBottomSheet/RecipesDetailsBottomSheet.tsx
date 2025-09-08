import { View, Text, TouchableOpacity } from 'react-native'
import React, { forwardRef, memo } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import styles from "./styles"
import { useNavigation } from '@react-navigation/native';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import Counter from '../../../globalComponents/Counter';
import { RecipesNavigationProp } from '../../../../core/navigation/types/RecipesNavigatorTypes';

interface IRecipesDetailsBottomSheet {
  onChange: (index: number) => void
  closeBottomSheetHandler: () => void
}

const RecipesDetailsBottomSheet = memo(forwardRef<BottomSheetMethods, IRecipesDetailsBottomSheet>(({onChange, closeBottomSheetHandler}, ref) => {
  const navigation = useNavigation<RecipesNavigationProp>()

  const goToCookingModal = () => {
    navigation.navigate("CookingMode")
    closeBottomSheetHandler()
  }

  return (
    <BottomSheet
      index={-1}
      ref={ref}
      snapPoints={[161]}
      enablePanDownToClose={true}
      onChange={onChange}
      handleIndicatorStyle={styles.hadnleIndicator}
    >
      <BottomSheetView style={styles.container}>
        <Text style={styles.question}>How many of you?</Text>

        <View style={styles.buttonsWrapper}>
          <Counter />

          <TouchableOpacity 
            style={styles.confirmButtonWrapper} 
            onPress={goToCookingModal}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  )
}))

export default RecipesDetailsBottomSheet