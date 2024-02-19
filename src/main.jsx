import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";

import { Provider } from "react-redux";
import { store, persistor } from "./store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
