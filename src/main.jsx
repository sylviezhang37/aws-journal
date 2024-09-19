import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authenticator, ThemeProvider, useTheme, View, Image} from "@aws-amplify/ui-react";
import customTheme from "./styles/theme.js";
import appLogo from "./assets/notepad.png";
import styles from "./styles/index.js";

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image src={appLogo} alt="AppLogo" style={styles.appLogo}/>
      </View>
    );
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <Authenticator components={components}>
        <App />
      </Authenticator>
    </ThemeProvider>
  </React.StrictMode>
);
