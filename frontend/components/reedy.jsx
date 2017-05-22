import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import configureStore from "../store/store.js";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);

  if (module.hot) {
    module.hot.accept("./root", () => {
      /*eslint-disable no-unused-vars*/
      const NextApp = require("./root").default;
      /*eslint-enable no-unused-vars*/

      ReactDOM.render(<Root store={store} />, root);
    });
  }
});
