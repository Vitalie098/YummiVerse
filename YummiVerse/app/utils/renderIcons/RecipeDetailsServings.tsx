import AddWhite from "../../assets/svg/Add.svg"
import AddBlack from "../../assets/svg/BlackAdd.svg"

export const getIcon = (iconType: "light" | "dark") => {
  switch(iconType) {
    case "light":
      return <AddBlack /> 
    case "dark":
      return <AddWhite />
    default: 
      const _: never = iconType
      throw new Error('There is no such type');
      // if (Config.ENV === 'dev') throw new Error('There is no such type');
  }
}