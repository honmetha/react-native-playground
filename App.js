import * as React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Home from "./screens/home";

const getFonts = () =>
  Font.loadAsync({
    "playfairDisplay-regular": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "playfairDisplay-bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (fontsLoaded) {
    return <Home />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={console.warn}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
