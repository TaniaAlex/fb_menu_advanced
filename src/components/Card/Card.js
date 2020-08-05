import React, { useState } from "react";
import { css } from "emotion";

const Card = () => {
  const [bg, setBg] = useState("#3d2756");
  const [fontColor, setFontColor] = useState("#ebe1ed");
  const setStyle = (background, fontColor) => {
    setBg(background);
    setFontColor(fontColor);
  };
  /**
   * css in js with Emotion JS library
   * can use variables from state, pass it into background colour in css,
   * if that state changes, so the background value in css and it will be reflected in the component
   *
   */

  const card = css`
    max-width: 600px;
    margin: 0 auto;
    padding: 40px 40px 20px 40px;
    background-color: ${bg};
    h1 {
      font-family: "Merienda", cursive;
      font-weight: 400;
      font-size: 2.3rem;
      margin-bottom: 10px;
      color: ${fontColor};
    }
    p {
      font-family: "Merienda", cursive;
      font-weight: 300;
      font-size: 1.2em;
      margin-bottom: 20px;
      color: ${fontColor};
    }
  `;

  const cardButtons = css`
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;

    button {
      font-family: "Merienda", cursive;
      font-weight: 500;
      font-size: 1em;
      padding: 10px 30px;
      margin-right: 20px;
      margin-bottom: 20px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
    }
  `;

  const redButton = css`
    color: #ebe1ed;
    background-color: #9e2245;
  `;

  const greenButton = css`
    color: #ebe1ed;
    background-color: #1d9b66;
  `;

  const orangeButton = css`
    color: #ebe1ed;
    background-color: #f99148;
  `;

  return (
    <div className={card}>
      <h1>Your Life Your Rules</h1>
      <p>You Have As Many Hours In A Day As The People You Admire Most.</p>
      <div className={cardButtons}>
        <button
          onMouseEnter={() => setStyle("#9e2245", "#ebe1ed")}
          onMouseOut={() => setStyle("#3d2756", "#ebe1ed")}
          className={redButton}
        >
          Red
        </button>
        <button
          onMouseEnter={() => setStyle("#1d9b66", "#33333f")}
          onMouseOut={() => setStyle("#3d2756", "#ebe1ed")}
          className={greenButton}
        >
          Green
        </button>
        <button
          onMouseEnter={() => setStyle("#f99148", "#33333f")}
          onMouseOut={() => setStyle("#3d2756", "#ebe1ed")}
          className={orangeButton}
        >
          Orange
        </button>
      </div>
    </div>
  );
};

export default Card;
