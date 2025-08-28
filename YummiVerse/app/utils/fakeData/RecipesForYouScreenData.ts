export const recipesForYouData: RecipesForYou = {
  bestRecipes: [{
      title: "Parenting",
      image: require("../../assets/webp/MegaMeal.webp")
    },
    {
      title: "Quick & easy",
      image: require("../../assets/webp/MegaMeal.webp")

    },
    {
      title: "On a budget",
      image: require("../../assets/webp/MegaMeal.webp")
    },
    {
      title: "Healthy lovers",
      image: require("../../assets/webp/MegaMeal.webp")
    }
  ],
  breakfast: [{
      title: "Chuckie Chocomilky Cinnamon",
      image: require("../../assets/jpg/MealPrepService.jpg"),
      time: 5,
    },
    {
      title: "Melon Samalamig",
      image: require("../../assets/jpg/MealPrepService.jpg"),
      time: 10,
    },
  ],
  international: [{
      title: "Oyster Glazed Chicken Nuggets",
      image: require("../../assets/jpg/MealPrepService.jpg"),
      time: 50,
    },
    {
      title: "Kari Pan-steamed Eggs",
      image: require("../../assets/jpg/MealPrepService.jpg"),
      time: 30,
    },
  ],
  scary: [{
      title: "Chuckie Halloween Ice Pops",
      image: require("../../assets/jpg/MealPrepService.jpg"),
      time: 60,
    },
    {
      title: "Crunchy Fish Fillet Sandwich",
      image: require("../../assets/jpg/MealPrepService.jpg"),
      time: 120,
    },
  ],
}
export interface RecipesForYou {
  bestRecipes: ContentBestRecipes[]
  breakfast: Content[]
  international: Content[]
  scary: Content[]
}

export interface ContentBestRecipes  {
	title: string
	image: any
}

export interface Content {
  title: string
  time: number
	image: any
}