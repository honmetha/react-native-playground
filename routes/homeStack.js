import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
      // headerStyle: { backgroundColor: "purple" },
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "ReviewDetails",
      // headerStyle: { backgroundColor: "purple" },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#006994", height: 80 },
  },
});

export default createAppContainer(HomeStack);
