import React, { forwardRef, memo } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from './styles';

interface IRecipesDetailsBottomSheet {
  children: React.ReactNode;
  onChange: (index: number) => void
}

const CookingModeBottomSheet = memo(forwardRef<BottomSheetMethods, IRecipesDetailsBottomSheet>(({onChange, children}, ref) => {
  return (
    <BottomSheet
      index={-1}
      ref={ref}
      onChange={onChange}
      snapPoints={[161]}
      enablePanDownToClose={true}
      handleIndicatorStyle={styles.hadnleIndicator}
    >
      <BottomSheetView style={styles.container}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  )
}))

export default CookingModeBottomSheet