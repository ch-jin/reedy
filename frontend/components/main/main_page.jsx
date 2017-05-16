import React from "react";

const MainPage = props => (
  <div className="main-wrapper">
    Hi {props.username}
    <button onClick={props.handleLogout}> Logout </button>
  </div>
);

export default MainPage;
