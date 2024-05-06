import Button from "@mui/material/Button";
import PositionedMenu from "./components/Menus/LogMenu";
import Header from "./components/Header/Header";
import AppRoutes from "./pages/AppRoutes";
import "./App.css";
import { ClassNames } from "@emotion/react";

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}
