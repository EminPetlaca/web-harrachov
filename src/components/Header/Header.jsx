import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AccountMenu from "../Avatar/AccountMenu";
import ObecDrop from "../Menus/DropDowns/ObecDrop";
import DokumentyDrop from "../Menus/DokumentyDrop/DokumentyDrop";
import UredniDrop from "../Menus/UredniDrop/UredniDrop";

export default function Header(props) {
  const [isObecDropVisible, setIsObecDropVisible] = useState(false);
  const [isUredniDropVisible, setUredniDropVisible] = useState(false);
  const [isDokumentyDropVisible, setDokumentyDropVisible] = useState(false);

  const toggleObecDropVisibility = (e) => {
    e.preventDefault();
    setIsObecDropVisible(!isObecDropVisible);
  };

  const toggleUredniDropVisibility = (e) => {
    e.preventDefault();
    setUredniDropVisible(!isUredniDropVisible);
  };

  const toggleDokumentyDropVisibility = (e) => {
    e.preventDefault();
    setDokumentyDropVisible(!isDokumentyDropVisible);
  };
 {/* responsive menu*/}
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuVisible(true);
      } else{
        setIsMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="header">
        {/* burger icon menu*/}
        <img
          src="src/assets/img/Hamburger_icon.svg.png"
          alt="burger icon"
          className="burger-icon"
          onClick={toggleMenuVisibility}
        />

        {/* header logo */}
        <div className="header-logo">
          <img src="src/assets/img/Cimelice_logo.png" alt="logo" />
        </div>

        {/* header menu */}
        <div
          className="header-menu"
          style={{ display: isMenuVisible ? "flex" : "none" }}
        >
          <ul className="nav-links" >
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/uredni"}>
              <li onClick={toggleUredniDropVisibility}>
                Uredni <i className="arrow down"></i>
              </li>
            </Link>
            <Link>
              <li onClick={toggleObecDropVisibility}>
                Obec <i className="arrow down"></i>
              </li>
            </Link>
            <Link to={"/zpravodaj"}>
              <li>Zpravodaj</li>
            </Link>
            <Link to={"/dokumenty"}>
              <li onClick={toggleDokumentyDropVisibility}>
                Dokumenty <i className="arrow down"></i>
              </li>
            </Link>
          </ul>
        </div>

        {/* header profile */}
        <div className="header-profile">
          <AccountMenu />
        </div>
      </div>

      <hr />

      {isObecDropVisible && <ObecDrop className="header-obecDrop" />}
      {isUredniDropVisible && <UredniDrop className="header-obecDrop" />}
      {isDokumentyDropVisible && <DokumentyDrop className="header-obecDrop" />}
    </>
  );
}