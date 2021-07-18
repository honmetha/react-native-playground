import * as React from "react";
import { createStackNavigator } from "react-navigation-stack";

import About from "../screens/about";
import Header from "../shared/header";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About GameZone" />
        ),
      };
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
