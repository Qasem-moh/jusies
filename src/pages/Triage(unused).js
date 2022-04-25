import React, { useState } from "react";
import { PatinatsModule } from "../components/Modules";
import { useParams } from "react-router-dom";
import { NavLink, useSearchParams, withRouter } from "react-router-dom";

let fillData = JSON.parse(localStorage.getItem("patinats"));

const Triage = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      {/* <div className="container"> */}
      {fillData.map((element, idx) => {
        return (
          <NavLink to={`/Triage/${element.idN}`} key={element.idN}>
            {element.idN}
          </NavLink>
        );
      })}
      {/* </div> */}
      {/* <Outlet/> */}
    </>
  );
};

export default withRouter(Triage);
