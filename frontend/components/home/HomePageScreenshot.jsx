import React from "react";
import {
  Screenshot,
  MacWindow,
  ScreenshotImg,
} from "../../styles/home";

const HomePageScreenshot = () => (
  <Screenshot>
    <MacWindow />
    <ScreenshotImg src={window.reedyScreenshot} />
  </Screenshot>
);

export default HomePageScreenshot;
