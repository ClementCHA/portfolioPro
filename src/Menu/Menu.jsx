import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Currency from "../SvgIcons/currencyConverter.svgIcons";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CalculateIcon from "@mui/icons-material/Calculate";

import style from "./style.module.scss";

const SlideMenu = () => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: "#cfcfcf",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "20px",
    },
    bmCross: {
      background: "#FFFFFF",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "rgb(48 48 48)",
      paddingTop: "2.5em",
      fontSize: "1.15em",
      letterSpacing: "10px",
      boxShadow: "5px 10px 25px black",
    },
    bmMorphShape: {
      fill: "#373a47",
    },

    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
    setIsListIsOpen(false);
  };
  const handleClick = () => {
    setIsListIsOpen(!isListOpen);
  };
  return (
    <Menu
      styles={styles}
      isOpen={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
    >
      <NavLink to="/" className={style.menuBoutton} onClick={handleClose}>
        <span className={style.menuBouttonContent}>
          {" "}
          <HomeIcon className={style.icon} />
          Home
        </span>
      </NavLink>
      <NavLink
        to="/contact"
        className={style.menuBoutton}
        onClick={handleClose}
      >
        <span className={style.menuBouttonContent}>
          {" "}
          <EmailIcon className={style.icon} />
          Contact
        </span>
      </NavLink>
      <div className={style.menuBoutton} onClick={handleClick}>
        <span className={style.menuBouttonContent}>
          {" "}
          <FolderIcon className={style.icon} />
          My Projects {isListOpen ? <ExpandLess /> : <ExpandMore />}
        </span>
      </div>

      <Collapse in={isListOpen} unmountOnExit>
        <NavLink
          to="/convertor"
          className={style.menuBoutton}
          onClick={handleClose}
        >
          <span className={style.subMenuBouttonContent}>
            {" "}
            <Currency className={style.icon} fontSize="medium" />
            Convertor
          </span>
        </NavLink>
        <NavLink
          to="/spotify"
          className={style.menuBoutton}
          onClick={handleClose}
        >
          <span className={style.subMenuBouttonContent}>
            {" "}
            <MusicNoteIcon className={style.icon} />
            Spotify
          </span>
        </NavLink>
        <NavLink
          to="/calculator"
          className={style.menuBoutton}
          onClick={handleClose}
        >
          <span className={style.subMenuBouttonContent}>
            {" "}
            <CalculateIcon className={style.icon} />
            Calculator
          </span>
        </NavLink>
      </Collapse>
    </Menu>
  );
};

export default SlideMenu;
