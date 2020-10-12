import React from "react";
import { useTranslation } from "react-i18next";
import "./SideBar.scss";

// logo
import logo from "../../images/logo.svg";

// components
import Links from '../../Components/SideBar/Links/Links'

const SideBar = () => {
  const { t } = useTranslation();
  return (
    <div className="SideBar">
      <div className="brand">
        <img src={logo} alt="logo" />
        <span className="app-title">{t("sidebar.title")}</span>
      </div>

      <Links />
    </div>
  );
};

export default SideBar;
