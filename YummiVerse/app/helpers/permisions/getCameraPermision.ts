import { Alert, Linking, PermissionsAndroid, Platform } from "react-native";
import DeviceInfo from "react-native-device-info";
import { Asset, ImagePickerResponse, launchCamera, OptionsCommon } from "react-native-image-picker";
import { PERMISSIONS, requestMultiple, RESULTS } from "react-native-permissions";
import { RecipesNavigationProp } from "../../core/navigation/types/RecipesNavigatorTypes";

const requestPermissions = async () => {
  if (Number(DeviceInfo.getSystemVersion()) > 12) {
    try {
      const statuses = await requestMultiple([PERMISSIONS.ANDROID.CAMERA]);
      return statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.GRANTED;
    } catch (err) { console.log(err) } 
  } else {
    try {
      const result = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA])
      return result[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED
    } catch (err) { console.log(err) }
  }
}

export const getPermissionAndTakePhoto = (setImage?: React.Dispatch<React.SetStateAction<Asset | undefined>>, navigation?: RecipesNavigationProp) => {
  if (Platform.OS === 'android') {
    requestPermissions().then(success => {
      if (success) {
        openCamera(setImage, navigation);
    } else {
      Alert.alert(
        'Ups',
        'Camera permissions have not been granted',
        [
          {text: 'OK', onPress: () => {}},
          {
            text: 'Configure the settings.',
            onPress: () => { Linking.openSettings() },
          },
        ],
        {cancelable: false},
      );
    }
  });
  } else {
    openCamera(setImage, navigation)
  }
}

const openCamera = (setImage?: React.Dispatch<React.SetStateAction<Asset | undefined>>, navigation?: RecipesNavigationProp) => {
  const options: OptionsCommon = {
    mediaType: 'photo',
    maxWidth: 400,
    maxHeight: 500,
  }
  launchCamera(options, response => {treatResponse(response, setImage, navigation) })
}

const treatResponse = (response: ImagePickerResponse, setImage?: React.Dispatch<React.SetStateAction<Asset | undefined>>, navigation?: RecipesNavigationProp) => {
  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.errorMessage) {
    console.log('ImagePicker Error: ', response.errorMessage);
  } else if (response.errorCode) {
    switch (response.errorCode) {
      case 'permission':
        Alert.alert(
          'Ups',
          'Camera permissions were not granted.',
          [
            {text: 'OK', onPress: () => {}},
            {text: 'Configure settings', onPress: () => { Linking.openSettings() }}
          ], 
          {cancelable: false}
        );
        break;
      case 'camera_unavailable':
        console.log('permission');
        break;
      default:
        break;
    }
  } else {
    if (response.assets && response.assets.length) {
        navigation && navigation.navigate("Share", {photo: response.assets[0], type: "photo"})
        setImage && setImage(response.assets[0])
    } else {
      Alert.alert(
        'Ups',
        'Camera or library error',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    }
  }
};
