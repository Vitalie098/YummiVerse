import Serving from "../../assets/svg/ServingDome.svg"
import UtensilsIcon from "../../assets/svg/UtensilsIcon.svg"
import Light from "../../assets/svg/Light.svg"
import FastImage from "react-native-fast-image"

export type iconType = "serving" | "utensils"
export type adviceType = "nutritional" | "tasty"

export const getUtensilIcon = (iconType: iconType) => {
  switch(iconType) {
    case "serving":
      return <Serving />
    case "utensils":
      return <UtensilsIcon /> 
    default: 
      const _: never = iconType
      throw new Error('There is no such type');
      // if (Config.ENV === 'dev') throw new Error('There is no such type');
  }
}

export const getAdviceIcon = (iconType: adviceType) => {
  switch(iconType) {
    case "nutritional":
      return <Light />
    case "tasty":
      return <FastImage source={require("../../assets/png/Hand.png")} style={{width: 90, height: 102}}/>
    default: 
      const _: never = iconType
      throw new Error('There is no such type');
      // if (Config.ENV === 'dev') throw new Error('There is no such type');
  }
}