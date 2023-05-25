
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import "./main.css";
import { Provider } from "react-redux";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


import { router } from "./Router/router";
import { theme } from "./theme";
import store from "./redux/store";


firebase.initializeApp({
  apiKey: "AIzaSyBxXl27PFwrvJWdy_86fT1m4x__1sZU4Eg",
  authDomain: "volonterhub-cf687.firebaseapp.com",
  projectId: "volonterhub-cf687",
  storageBucket: "volonterhub-cf687.appspot.com",
  messagingSenderId: "827710421368",
  appId: "1:827710421368:web:cd86b433097021652a308d",
  measurementId: "G-TE4E9KHL54",
});
// Ініціалізуємо Firebase


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);