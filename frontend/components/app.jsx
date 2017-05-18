import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/home_page";
import MainPageContainer from "./main/main_page_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
  <div>
    <AuthRoute path="/" component={HomePage} />
    <ProtectedRoute path="/" component={MainPageContainer} />
  </div>
);

export default App;
