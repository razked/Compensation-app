import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./Table.scss";

// // UI
import Loader from "../../UI/Loader/Loader";

// components
import Row from "./Row/Row";
import EditNewComp from '../EditNewComp/EditNewComp';

const Table = (props) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  let compansation = props.data;

  // table columns
  let columnsArr = [
    { col: t("compensation.date") },
    { col: t("compensation.fullName") },
    { col: t("compensation.phone") },
    { col: t("compensation.address") },
    { col: t("compensation.comment") },
    { col: t("compensation.compensation") },
    { col: t("compensation.status") },
    { col: t("compensation.doneDate") },
  ];

  let columns = null;
  if (!loading && compansation.length > 0) {
    columns = (
      <div className="columns">
        {columnsArr.map((item, idx) => {
          return <span key={idx}>{item.col}</span>;
        })}
      </div>
    );
  }

  // render rows
  let outputRows = null;
  if (!loading && compansation.length > 0) {
    outputRows = compansation
      .filter((item1) => item1.phone.startsWith(props.searchVal))
      .map((item, idx) => {
        return (
          <Row
            key={idx}
            date={item.date}
            fullName={item.fullName}
            phone={item.phone}
            address={item.address}
            comment={item.comment}
            compensation={item.compensation}
            status={item.status}
            doneDate={item.doneDate}
            openEdit={() => setModalContent(item)}
          />
        );
      });
  }

   // modal new compensation
let modalNewComp = null;
if(modalContent) {
    modalNewComp = <EditNewComp close={() => setModalContent(false)} data={modalContent}/>
}

  //   loader..
  let loader = <Loader />;
  if (!loading) {
    loader = null;
  }


  return (
    <div className="compansation-table component">
      {columns}
      {loader}
      {outputRows}
      {modalNewComp}
    </div>
  );
};

export default Table;
