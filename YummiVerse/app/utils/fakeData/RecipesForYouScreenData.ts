export const recipesForYouData: RecipesForYou = {
	help: [
		{
			uri: 'https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			title: "Creamy Mango and Eggnog Cookies",
		},
		{
			uri: 'https://images.pexels.com/photos/1237611/pexels-photo-1237611.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			title: "Creamy Mango and Eggnog Cookies",
		},
		{
			uri: 'https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			title: "Creamy Mango and Eggnog Cookies",
		},
		{
			uri: 'https://images.pexels.com/photos/4906249/pexels-photo-4906249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			title: "Creamy Mango and Eggnog Cookies",
		},
		{
			uri: 'https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			title: "Creamy Mango and Eggnog Cookies",
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