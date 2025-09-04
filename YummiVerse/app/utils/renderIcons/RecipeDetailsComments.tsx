import Like from "../../assets/svg/Like.svg"
import Chat from "../../assets/svg/Chat.svg"

export type iconType = "like" | "comment"

export const getIcon = (iconType: iconType) => {
  switch(iconType) {
    case "like":
      return <Like />
    case "comment":
      return <Chat />
    default: 
      const _: never = iconType
      throw new Error('There is no such type');
      // if (Config.ENV === 'dev') throw new Error('There is no such type');
  }
}