export const recipesForYouData: RecipesForYou = {
	help: [
    {
      uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
      title: 'Caramel Strawberry Pancake Stack',
    },
    {
      uri: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg',
      title: 'Warm Shrimp & Greens Bowl',
    },
    {
      uri: 'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg',
      title: 'Roasted Tomato Quiche',
    },
    {
      uri: 'https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg',
      title: 'Strawberries & Cream Parfait',
    },
    {
      uri: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg',
      title: 'Sesame-Seed Cheeseburger',
    },
  ],
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
  help: IHelp[]
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

export interface IHelp {
  title: string
	uri: string
} 