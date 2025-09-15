import { Dimensions } from "react-native"

const { width, height } = Dimensions.get('screen')

export const screenWidth = width
export const screenHeight = height
export const TAB_BAR_MAX_HEIGHT = 78;
export const TAB_BAR_MIN_HEIGHT = 65;

const bottomTabNavigatorTabs = ["Recipes", "Plan", "Community", "MyCoach"] 
export const bottomTabNavigatorStacks = [...bottomTabNavigatorTabs, ...bottomTabNavigatorTabs.map(el => el + "Stack")] 