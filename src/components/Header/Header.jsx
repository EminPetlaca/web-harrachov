import "./Header.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import ObecDrop from "../Menus/DropDowns/ObecDrop";
import AccountMenu from "../Avatar/AccountMenu";
import DokumentyDrop from "../Menus//DokumentyDrop/DokumentyDrop";
import UredniDrop from "../Menus//UredniDrop/UredniDrop";

export default function Header(props) {
  const [isObecDropVisible, setIsObecDropVisible] = useState(false);

  const toggleObecDropVisibility = (e) => {
    e.preventDefault();
    setIsObecDropVisible(!isObecDropVisible);
  };
  const [isUredniDropVisible, setUredniDropVisible] = useState(false);

  const togglUredniDropVisibility = (e) => {
    e.preventDefault();
    setUredniDropVisible(!isUredniDropVisible);
  };
  const [isDokumentyDropVisible, setDokumentyDrop] = useState(false);

  const toggleDokumentyDropVisibility = (e) => {
    e.preventDefault();
    setDokumentyDrop(!isDokumentyDropVisible);
  };

  return (
    <>
      <div className="header">
        {/* header logo */}
        <div className="header-logo">
          <img src="src\assets\img\Cimelice_logo.png" alt="logo" />
        </div>
        {/* header menu */}
        <div className="header-menu">
          <ul className="nav-links">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/uredni"}>
              <li onClick={toggleObecDropVisibility}>
                Uredni <i class="arrow down"></i>
              </li>
            </Link>
            <Link>
              <li onClick={toggleObecDropVisibility}>
                Obec <i class="arrow down"></i>
              </li>
            </Link>
            <Link to={"/zpravodaj"}>
              <li>Zpravodaj</li>
            </Link>
            <Link to={"/dokumenty"}>
              <li onClick={toggleObecDropVisibility}>
                Dokumenty <i class="arrow down"></i>
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
