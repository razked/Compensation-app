import React from "react";
import moment from "moment";
import "./Row.scss";

// ICON
import check from "../../../../images/check.svg";

const Row = (props) => {

  // format date
  const formatDate = (date) => {
    return moment(date).format("DD.MM.YY");
  };

  //   add check mark to status row
  const foramtStatus = (status) => {
    if (status) {
      return <img src={check} alt="check" className="check-mark" />;
    } else {
      return "";
    }
  };

 

  return (
    <div
    onClick={() => props.openEdit()}
      className={
        props.status
          ? "compansation-table-row low-color"
          : "compansation-table-row"
      }
    >
      <span>{props.date ? formatDate(props.date) : null}</span>
      <span>{props.fullName ? props.fullName : null}</span>
      <span>{props.phone ? props.phone : null}</span>
      <span>{props.address ? props.address : null}</span>
      <span>{props.comment ? props.comment : null}</span>
      <span>{props.compensation ? props.compensation : null}</span>
      <span>{props.status ? foramtStatus(props.status) : null}</span>
      <span>{props.doneDate ? formatDate(props.doneDate) : null}</span>
    </div>
  );
};

export default Row;
