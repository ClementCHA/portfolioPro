import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Currency from "../SvgIcons/currencyConverter.svgIcons";
import Sudoku from "../SvgIcons/sudoku.svgIcons";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CalculateIcon from "@mui/icons-material/Calculate";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";

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
      width: "1.7em",
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
      overflowY: "hidden",
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
      <div style={{ height: "50%", marginTop: "30px" }}>
        <div className={style.bouttonHover}>
          <NavLink to="/" onClick={handleClose} className={style.menuBoutton}>
            <span className={style.menuBouttonContent}>
              {" "}
              <HomeIcon className={style.icon} />
              Home
            </span>
          </NavLink>
        </div>

        <div className={style.menuBoutton} onClick={handleClick}>
          <span className={style.menuBouttonContent}>
            {" "}
            <FolderIcon className={style.icon} />
            My Projects {isListOpen ? <ExpandLess /> : <ExpandMore />}
          </span>
        </div>

        <Collapse
          in={isListOpen}
          unmountOnExit
          style={{ marginBottom: "30px" }}
        >
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
          <NavLink
            to="/sudocute"
            className={style.menuBoutton}
            onClick={handleClose}
          >
            <span className={style.subMenuBouttonContent}>
              {" "}
              <Sudoku className={style.icon} />
              Sudoku
            </span>
          </NavLink>
          <NavLink
            to="/games"
            className={style.menuBoutton}
            onClick={handleClose}
          >
            <span className={style.subMenuBouttonContent}>
              {" "}
              <SportsEsportsIcon className={style.icon} fontSize="medium" />
              Games
            </span>
          </NavLink>
        </Collapse>
        <div className={style.bouttonHover}>
          <NavLink
            to="/background"
            className={style.menuBoutton}
            onClick={handleClose}
          >
            <span className={style.menuBouttonContent}>
              {" "}
              <SchoolIcon className={style.icon} />
              Curriculum Vitæ
            </span>
          </NavLink>
        </div>
        <div className={style.bouttonHover}>
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
        </div>
      </div>
      <p
        style={{
          borderBottom: "1px white solid",
          marginRight: "20px",
          marginLeft: "20px",
          marginTop: "10em",
        }}
      ></p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "4em",
        }}
      >
        <div className={style.logoTwitter}>
          <TwitterIcon
            //hover #00ACEE"
            onClick={() =>
              window.open("https://twitter.com/Cle_char", "_blank")
            }
          />
        </div>
        <div className={style.logoLk}>
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/clementchar/", "_blank")
            }
          />
        </div>
        <div className={style.logoGithub}>
          <GitHubIcon
            style={{ color: "white", cursor: "pointer" }}
            onClick={() =>
              window.open("https://github.com/ClementCHA", "_blank")
            }
          />
        </div>
      </div>
    </Menu>
  );
};

export default SlideMenu;
