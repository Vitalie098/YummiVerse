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
  tabBarIcon: ({color}: {color: string}) => {
    return <RecipesIcon color={color}/>;
  },
  tabBarLabel: ({focused}: {focused: boolean}) => {
    if (focused) return <Text style={styles.label}>Recipes</Text>;
    return null;
  }
};

export const planStackOptions = {
  tabBarIcon: ({color}: {color: string}) => {
    return <PlanIcon color={color}/>;
  },
  tabBarLabel: ({focused}: {focused: boolean}) => {
    if (focused) return <Text style={styles.label}>Plan</Text>;
    return null;
  },
};

export const communityStackOptions = {
  tabBarIcon: ({color}: {color: string}) => {
    return <CommunityIcon color={color} />;
  },
  tabBarLabel: ({focused}: {focused: boolean}) => {
    if (focused) return <Text style={styles.label}>Community</Text>;
    return null;
  },
};

export const myCoachStackOptions = {
  tabBarIcon: ({color}: {color: string}) => {
    return <MyCoachIcon color={color}/>;
  },
  tabBarLabel: ({focused}: {focused: boolean}) => {
    if (focused) return <Text style={styles.label}>MyCoach</Text>;
    return null;
  },
};