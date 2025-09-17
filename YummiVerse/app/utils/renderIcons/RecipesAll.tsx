import Plus from "../../assets/svg/Plus.svg"
import Chat from "../../assets/svg/Chat.svg"
import Like from "../../assets/svg/Like.svg"

export type recipesAllIconType = "plus" | "chat" | "dislike"

export const getIcon = (iconType: recipesAllIconType) => {
  switch(iconType) {
    case "plus":
      return <Plus />
    case "chat":
      return <Chat /> 
    case "dislike":
      return <Like  /> 
    default: 
      const _: never = iconType
      // if (Config.ENV === 'dev') throw new Error('There is no such type');
  }
}