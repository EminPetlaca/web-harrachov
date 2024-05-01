import "./Header.css";
import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

export default function Header() {
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
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/uredni"}><li>Úřední</li></Link>
            <Link to={"/obec"}><li>Obec</li></Link>
            <Link to={"/zpravodaj"}><li>Zpravodaj</li></Link>
            <Link to={"/dokumenty"}><li>Dokumenty</li></Link>
          </ul>
        </div>


        {/* header profile */}
        <div className="header-profile">
        <Avatar src="/broken-image.jpg" />
        </div>
      </div>

    </>
  )
}
