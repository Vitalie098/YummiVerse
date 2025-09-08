import ArrowLeft from "../../assets/svg/ArrowLeft.svg"
import ArrowRight from "../../assets/svg/ArrowRight.svg"
import Close from "../../assets/svg/CloseModalIcon.svg"
import { colors } from "../global/globalStyles"

export type iconType = "close" | "back"
export type actionButton = "prev" | "next"

export const getIcon = (iconType: iconType, isLightMode: boolean) => {
  switch(iconType) {
    case "close":
      return <Close color={getColor(isLightMode)}/>
    case "back":
      return <ArrowLeft color={colors.mainColorT}/>
    default: 
      const _: never = iconType
      throw new Error('There is no such type');
      // if (Config.ENV === 'dev') throw new Error('There is no such type');
  }
}

export const getControlIcon = (type: actionButton, active: boolean, isLightMode: boolean) => {
  if(type === "next") return <ArrowRight color={active ? getColor(!isLightMode) : getColor(isLightMode)} />
  if(type === "prev") return <ArrowLeft color={active ? getColor(!isLightMode) : getColor(isLightMode)} />
}

export const getColor = (isLightMode: boolean) => {
  return isLightMode ? colors.mainColorT : "#fff"
}