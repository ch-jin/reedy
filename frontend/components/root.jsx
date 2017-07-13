import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import App from "./app";

const Root = ({ store }) =>
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContainer>;

export default Root;
