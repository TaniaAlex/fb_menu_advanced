import "./index.css";
import { ReactComponent as BellIcon } from "./assets/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./assets/icons/caret.svg";
import { ReactComponent as PlusIcon } from "./assets/icons/plus.svg";
import { ReactComponent as CogIcon } from "./assets/icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./assets/icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./assets/icons/arrow.svg";
import { ReactComponent as Hammer } from "./assets/icons/hammer.svg";
import { ReactComponent as Fox } from "./assets/icons/fox.svg";
import { ReactComponent as Jslogo } from "./assets/icons/js.svg";
import { ReactComponent as Csslogo } from "./assets/icons/css.svg";
import { ReactComponent as Reactlogo } from "./assets/icons/react.svg";
import { ReactComponent as Htmllogo } from "./assets/icons/html.svg";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<Fox />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<Hammer />}
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Find Friends
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorials</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<Htmllogo />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<Csslogo />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<Jslogo />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Reactlogo />}>React</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Friends</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Tony Stark</DropdownItem>
          <DropdownItem leftIcon="🐸">Loki</DropdownItem>
          <DropdownItem leftIcon="🦋">Thor</DropdownItem>
          <DropdownItem leftIcon="🦔">Nick Fury</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
