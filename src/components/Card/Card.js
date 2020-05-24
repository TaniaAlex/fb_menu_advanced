import React, { useState } from "react";
// import { css } from "@emotion/core";
import classes from "./Card.module.css";

const Card = (props) => {
  const [background, setBackground] = useState("#fdfdfd");

  const [font, setFont] = useState("#424246");

  const setStyle = (background, font) => {
    setBackground(background);
    setFont(font);
  };

  return (
    <div className={classes.Card}>
      <h1>Your Life Your Rules</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar sed
        elementum egestas blandit. Proin augue lacus, phasellus vel lorem risus.
      </p>
      <div className={classes.CardButtons}>
        <div
          onMouseEnter={() => {
            setBackground("black");
            setFont("red");
          }}
          onMouseOut={() => setStyle("#fdfdfd", "#424246")}
          className={classes.RedButton}
        >
          Red
        </div>
        <div
          onMouseEnter={() => setStyle("#1d499b", "#fdfdfd")}
          onMouseOut={() => setStyle("#fdfdfd", "#424246")}
          className={classes.GreenButton}
        >
          Green
        </div>
        <div
          onMouseEnter={() => setStyle("#f9d648", "#424246")}
          onMouseOut={() => setStyle("#fdfdfd", "#424246")}
          className={classes.OrangeButton}
        >
          Orange
        </div>
      </div>
    </div>
  );
};

export default Card;
