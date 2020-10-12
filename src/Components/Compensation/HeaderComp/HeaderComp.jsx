import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import "./HeaderComp.scss";

// UI
import Button from "../../UI/Button/Button";
import Search from "../../UI/Search/Search";
import Dropdown from "../../UI/Dropdown/Dropdown";

// components
import EditNewComp from '../EditNewComp/EditNewComp';

const HeaderComp = (props) => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);


//   drop down options
let options = [
    t("compensation.filterAll"),
    t("compensation.filterYes"),
    t("compensation.filterNo"),
]

// modal new compensation
let modalNewComp = null;
if(modalOpen) {
    modalNewComp = <EditNewComp close={() => setModalOpen(false)}/>
}




  return (
    <div className="HeaderComp">
      <span className="page-title">{t("compensation.title")}</span>
      <div className="title-actions">
        <Search
          onChange={(e) => props.setSearchVal(e.target.value)}
          placeholder={t("compensation.search")}
          value={props.searchVal}
        />
        <Dropdown 
        options={options}
        selected={props.selectedFilter}
        onChange={(val) => props.onChange(val)}
        />
        <Button
          text={t("compensation.btnNew")}
          onClick={() => setModalOpen(true)}
        />
      </div>
      {modalNewComp}
    </div>
  );
};

export default HeaderComp;
