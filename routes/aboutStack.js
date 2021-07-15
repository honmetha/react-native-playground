import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "GameZone",
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: { backgroundColor: "#006994", height: 80 },
  },
});

export default AboutStack;
