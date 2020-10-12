import React, { useState, useEffect } from "react";
import "./Compensation.scss";

// components
import Table from "../../Components/Compensation/Table/Table";
import HeaderComp from "../../Components/Compensation/HeaderComp/HeaderComp";

let dummy = [
  {
    date: new Date(),
    fullName: "רז קדם",
    phone: "0546565417",
    address: "ויתקין 4, ראשון לציון",
    comment: "בזמן שהשליח הגיע אליי לבניין הוא החליק וכל הרוטב נשפך על הרצפה",
    compensation: "2 רולים במתנה",
    status: true,
    doneDate: new Date(),
  },
  {
    date: new Date(),
    fullName: "עמרי קדם",
    phone: "0522213147",
    address: "ויתקין 4, ראשון לציון",
    comment: "נשפך האוכל מהשקית",
    compensation: "2 רולים במתנה",
    status: true,
    doneDate: new Date(),
  },
  {
    date: new Date(),
    fullName: "בר לוי",
    phone: "0547951338",
    address: "ויתקין 4, ראשון לציון",
    comment: "נשפך האוכל מהשקית",
    compensation: "2 רולים במתנה",
    status: false,
    doneDate: null,
  },
];

const Compensation = () => {
  const [searchVal, setSearchVal] = useState("");
  const [filter, setFilter] = useState("0");
  const [compensations, setCompensations] = useState(dummy);
  const [filteredComp, setFilteredComp] = useState([]);

  //filter table
  useEffect(() => {
    if (compensations) {
      let origin = [...compensations];
      let output;
      setFilteredComp(origin);

      switch (filter) {
        case "0":
          return setFilteredComp(origin);
        case "1":
          output = compensations.filter((item) => item.status);
          return setFilteredComp(output);
        case "2":
          output = compensations.filter((item) => !item.status);
          return setFilteredComp(output);

        default:
          break;
      }
    }
  }, [filter, compensations]);

  return (
    <div className="Compensation basicLayout">
      <HeaderComp
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        selectedFilter={filter}
        onChange={(val) => setFilter(val)}
      />

      <Table data={filteredComp} searchVal={searchVal} />
    </div>
  );
};

export default Compensation;
