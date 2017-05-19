import React from "react";
import { Route } from "react-router-dom";
import HomePageContainer from "./home/home_page_container";
import MainPageContainer from "./main/main_page_container";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

const App = () => (
  <div>
    <AuthRoute path="/" component={HomePageContainer} />
    <ProtectedRoute path="/" component={MainPageContainer} />
  </div>
);

export default App;
