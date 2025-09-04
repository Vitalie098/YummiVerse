import Plus from "../../assets/svg/Plus.svg"
import Share from "../../assets/svg/Share.svg"
import { colors } from "../global/globalStyles"

export type actionButtonType = "plus" | "share"

export const getIcon = (iconType: actionButtonType) => {
  switch(iconType) {
    case "plus":
      return <Plus color={colors.mainColorT}/>
    case "share":
      return <Share color={colors.mainColorT}/> 
    default: 
      const _: never = iconType
      throw new Error('There is no such type');
      // if (Config.ENV === 'dev') throw new Error('There is no such type');
  }
}