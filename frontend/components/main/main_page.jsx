import React from "react";

const MainPage = props => (
  <div className="main-wrapper">
    <button onClick={props.handleLogout}> Logout </button>
  </div>
);

export default MainPage;
