import React from "react";
import { Button } from "../../styles/theme";

const MainPage = props => (
  <div className="main-wrapper">
    Hi {props.username}
    <Button onClick={props.handleLogout}>
      Log Out
    </Button>
  </div>
);

export default MainPage;
