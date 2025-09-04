import Spoon from "../../assets/svg/Spoon.svg"
import Beater from "../../assets/svg/Beater.svg"
import Board from "../../assets/svg/Board.svg"

export type utensil = "spoon" | "beater" | "board"

export const getIcon = (type: utensil) => {
  switch(type) {
    case "spoon":
      return <Spoon />
    case "beater": 
      return <Beater />
    case "board":
      return <Board />
    default: 
      return null
  }
}