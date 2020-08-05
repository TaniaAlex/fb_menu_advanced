import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import "./index.css";
import { ReactComponent as BellIcon } from "./assets/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./assets/icons/caret.svg";
import { ReactComponent as PlusIcon } from "./assets/icons/plus.svg";

import Navbar from "./components/Navi/Navbar";
import NavItem from "./components/Navi/NavItem";
import DropdownMenu from "./components/Navi/DropdownMenu";
import Card from "./components/Card/Card";

import THEMES from "./constants/theme";
import getTheme from "./getTheme";
import { Body, Buttons } from "./styles";

function App() {
  const [themeName, setThemeName] = useState(THEMES.BASIC);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <Navbar>
        <Buttons
          onClick={() => {
            setThemeName(THEMES.PLUM);
          }}
        >
          PlumTheme
        </Buttons>

        <Buttons
          onClick={() => {
            setThemeName(THEMES.PEAR);
          }}
        >
          PearTheme
        </Buttons>
        <Buttons
          onClick={() => {
            setThemeName(THEMES.BASIC);
          }}
        >
          BasicTheme
        </Buttons>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />

        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>

      <Body>
        <Card />
      </Body>
    </ThemeProvider>
  );
}

export default App;
