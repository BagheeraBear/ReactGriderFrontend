// Webpack sticks this into the html-file!
import "./SeasonDisplay.css";

import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it's freezing chilly!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // text, iconName

  // const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left huge ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right huge ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

// new Date().getMonth() 10==november
//3 - 8;
