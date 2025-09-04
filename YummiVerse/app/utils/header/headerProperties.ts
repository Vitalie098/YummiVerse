export const menuByScreen = {
  Recipes: ["For you", "All"], 
  Plan: [], 
  Community: [], 
  MyCoach: [], 
}

export const routeNames = Object.keys(menuByScreen)
export const recipesDetailsMenu = ["Ingredients", "Instructions", "Comments"]

export type RouteName = "Plan" | "MyCoach" | "Profile" | "Recipes" | "Community"
export type RouteProp = {name: RouteName, key: ""}


