export const recipesAllData: RecipesAllType = [
    [
        {
            title: "Classic hummus",
        },
        {
            title: "Vegan BLT sandwich",
        },
        {
            title: "Vegan bowl with grilled tofu and avocado",
        } 
    ],
    [
        {
            title: "Vegan burger with tomatoes and chickpeas",
        },
        {
            title: "Pork belly ramen",
        },
        {
            title: "Classic hummus",
        },
    ],
    [
        {
            title: "Raspberry and cream chiffon cake",
        },
        {
            title: "Pork belly ramen",
        },
        {
            title: "Pumpkin soup with crème fraîche",  
        } 
    ],
]

import { recipesAllIconType } from "../renderIcons/RecipesAll";

export const recipesAllBottomSheet: IRecipesAllBottomSheet[] = [
  {
    text: "Add to My Menu Plan",
    iconType: "plus"
  },
  {
    text: "Customise with your buddies",
    iconType: "chat"
  },
  {
    text: "Not interested",
    iconType: "dislike"
  },
]

export type RecipesAllType = PostData[][]

interface IRecipesAllBottomSheet {
  text: string
  iconType: recipesAllIconType
}

export interface PostData {
  title: string
}

