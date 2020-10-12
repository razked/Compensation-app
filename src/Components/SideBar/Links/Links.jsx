import React from "react";
import "./Links.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Links = () => {
  const { t } = useTranslation();

  const linksArr = [
    { text: t("sidebar.compensation"), url: "/compensation" },
    { text: t("sidebar.clientDebts"), url: "/debts" },
    { text: t("sidebar.clientPayAdvanced"), url: "/pay-advanced" },
  ];

  let linksList = linksArr.map((item, idx) => {
    return (
      <NavLink to={item.url} key={idx} activeClassName="activeLink">
        <span className="indicator"></span>
        <span className="link-text">{item.text}</span>
      </NavLink>
    );
  });

  return <div className="Links">{linksList}</div>;
};

export default Links;
