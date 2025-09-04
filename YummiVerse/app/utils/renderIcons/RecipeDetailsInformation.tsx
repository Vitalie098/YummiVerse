import Grain from "../../assets/svg/Grain.svg"
import Lactose from "../../assets/svg/Lactose.svg"

export type recipeContain = "gluten" | "lactose"

export const getIcon = (iconType: recipeContain) => {
  switch(iconType) {
    case "gluten":
      return <Grain />
    case "lactose":
      return <Lactose /> 
    default: 
      const _: never = iconType
      throw new Error('There is no such type');
      // if (Config.ENV === 'dev') throw new Error('There is no such type');
  }
}