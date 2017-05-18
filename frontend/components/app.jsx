import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./home/home_page";
import MainPage from "./main/main_page";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
  <div>
    <AuthRoute path="/" component={HomePage} />
    <ProtectedRoute path="/" component={MainPage} />
  </div>
);

export default App;
