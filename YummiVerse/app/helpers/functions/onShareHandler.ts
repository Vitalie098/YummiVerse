import { Share } from "react-native";

export const onShareHandler = async () => {
  try {
    const result = await Share.share({message: ""})

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
         
      } else {
          
      }
    } else if (result.action === Share.dismissedAction) {
        
    }
  } catch (error) {
    console.log(error)
  }
}