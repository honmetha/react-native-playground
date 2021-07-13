import * as React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Navigator from "./routes/homeStack";

const getFonts = () =>
  Font.loadAsync({
    "playfairDisplay-regular": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "playfairDisplay-bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  if (fontsLoaded) {
    return <Navigator />;
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
