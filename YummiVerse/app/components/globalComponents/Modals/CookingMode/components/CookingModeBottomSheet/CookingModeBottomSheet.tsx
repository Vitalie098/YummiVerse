import React, { forwardRef, memo } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import styles from './styles';

interface IRecipesDetailsBottomSheet {
  children: React.ReactNode;
  onAnimate: (_: number, toIndex: number) => void
}

const CookingModeBottomSheet = memo(forwardRef<BottomSheetMethods, IRecipesDetailsBottomSheet>(({onAnimate, children}, ref) => {
  return (
    <BottomSheet
      index={-1}
      ref={ref}
      snapPoints={[161]}
      enablePanDownToClose={true}
      onAnimate={onAnimate}
      handleIndicatorStyle={styles.hadnleIndicator}
    >
      <BottomSheetView style={styles.container}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  )
}))

export default CookingModeBottomSheet