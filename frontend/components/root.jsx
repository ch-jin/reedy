import React from "react";
import { Provider } from "react-redux";
import SessionForm from "./session/session_form";

const Root = ({ store }) => (
  <Provider store={store}>
    <SessionForm />
  </Provider>
);

export default Root;
