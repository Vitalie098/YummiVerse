import {Text} from 'react-native';

import RecipesIcon from '../../../../assets/svg/RecipesBottomTabNavigatorIconActive.svg';
import PlanIcon from '../../../../assets/svg/PlanBottomTabNavigatorIcon.svg';
import CommunityIcon from '../../../../assets/svg/CommunityBottomTabNavigatorIcon.svg';
import MyCoachIcon from '../../../../assets/svg/ChatAiBottomTabNavigatorIcon.svg';
import styles from './styles';

export const tabNavigatorOptions = {
  headerShown: false,
  headerTransparent: false,
  tabBarHideOnKeyboard: true,
};

export const recipesStackOptions = {
  tabBarIcon: ({focused}: {focused: Boolean}) => {
    return <RecipesIcon />;
  },
  tabBarLabel: ({focused}: {focused: boolean}) => {
    if (focused) return <Text style={styles.label}>Recipes</Text>;
    return null;
  }
};

export const planStackOptions = {
  tabBarIcon: ({focused}: {focused: Boolean}) => {
    return <PlanIcon />;
  },
  tabBarLabel: ({focused}: {focused: boolean}) => {
    if (focused) return <Text style={styles.label}>Plan</Text>;
    return null;
  },
};

export const communityStackOptions = {
  tabBarIcon: ({focused}: {focused: Boolean}) => {
    return <CommunityIcon />;
  },
  tabBarLabel: ({focused}: {focused: boolean}) => {
    if (focused) return <Text style={styles.label}>Community</Text>;
    return null;
  },
};

export const myCoachStackOptions = {
  tabBarIcon: ({focused}: {focused: Boolean}) => {
    return <MyCoachIcon />;
  },
  tabBarLabel: ({focused}: {focused: boolean}) => {
    if (focused) return <Text style={styles.label}>MyCoach</Text>;
    return null;
  },
};