import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize/modern-normalize.css";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import App from "./components/App";
import { myTheme } from "./theme/my-theme";
import { GlobalStyles } from "./theme/GlobalStyle";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ThemeProvider theme={myTheme}>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  </>
);
