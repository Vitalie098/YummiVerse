import React, { createContext, ReactNode, useContext } from 'react';
import { SharedValue, useSharedValue } from 'react-native-reanimated';

interface ScrollAnimationContextProps {
  scrollY: SharedValue<number>;
  scrollYAnimated: SharedValue<number>;
  clampSourceScrollY: SharedValue<number>;
}

const ScrollAnimationContext = createContext<ScrollAnimationContextProps | undefined>(undefined);

export const ScrollAnimationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const scrollY = useSharedValue(0);
  const scrollYAnimated = useSharedValue(0);
  const clampSourceScrollY = useSharedValue(0);

  return (
    <ScrollAnimationContext.Provider value={{ scrollY, scrollYAnimated, clampSourceScrollY }}>
      {children}
    </ScrollAnimationContext.Provider>
  );
};

export const useScrollY = (): ScrollAnimationContextProps => {
  const context = useContext(ScrollAnimationContext);
  if (!context) {
    throw new Error('useScrollY must be used within a ScrollAnimationProvider');
  }
  return context;
};