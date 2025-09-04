import { useEffect, useState } from 'react';
import { Keyboard, KeyboardEvent, Platform } from 'react-native';

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    function onKeyboardDidShow(e: KeyboardEvent) {
      if(Platform.OS === "android") setKeyboardHeight(e.endCoordinates.height);
    }

    function onKeyboardDidHide() {
      setKeyboardHeight(0);
    }

    function onKeyboardWillShow(e: KeyboardEvent) {
      setKeyboardHeight(e.endCoordinates.height)
    }

    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    const willShowSubscription = Keyboard.addListener('keyboardWillShow', onKeyboardWillShow);
    
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
      willShowSubscription.remove()
    };
  }, []);

  return keyboardHeight;
};