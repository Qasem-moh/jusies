import React from "react";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { useState } from "react/cjs/react.development";
import { PatinatsModule } from "../components/Modules";
// function redirectdata() {
//   let data = localStorage.getItem("patinats");
//   let d=JSON.parse(data)
//   // console.log(d);
//   d.map((item, idx) => {
//     console.log(idx);
//   });
// };

export const View = ({ patinats, deletepatinat }) => {
  // ID_Patinat	Patinat	Patinat_ID	Age	saved	Vaccin	state	Confirm	Delete
  return patinats.map((patinat) => {
    return (
      <Row
        id={patinat.id}
        name={patinat.name}
        age={patinat.age}
        isSaved={patinat.isSaved}
        isVaccin={patinat.isVaccin}
        idN={patinat.idN}
        state={patinat.state}
      />
    );
  });
};

function Row(props) {
  const [state, setState] = useState(props.state);
  console.log(state);
  function sendToDashboard(patinat) {
    let PatinatsStore = JSON.parse(localStorage.getItem("patinats"));

    if (PatinatsStore.filter((el) => patinat.id === el.id).length === 0) {
      PatinatsStore.push(patinat);
      localStorage.setItem("dashboard", JSON.stringify(PatinatsStore));
    } else {
      PatinatsStore.map((el) => {
        if (el.id === patinat.id) {
          el.state = state;
        }
        return el;
      });

      localStorage.setItem("patinats", JSON.stringify(PatinatsStore));
    }
    let dashboardStore = JSON.parse(localStorage.getItem("dashboard"));

    if (dashboardStore.filter((el) => patinat.id === el.id).length === 0) {
      dashboardStore.push(patinat);
      localStorage.setItem("dashboard", JSON.stringify(dashboardStore));
    } else {
      dashboardStore.map((el) => {
        if (el.id === patinat.id) {
          el.state = state;
        }
        return el;
      });

      localStorage.setItem("dashboard", JSON.stringify(dashboardStore));
    }
  }

  return (
    <>
      <tr id="da" key={props.id} className={state}>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.idN}</td>
        <td>{props.age}</td>
        <td>{props.isSaved}</td>
        <td>{props.isVaccin}</td>

        <td>
          <select
            name="cars"
            id="patiant"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          >
            <option value="none">none</option>
            <option value="Critical">Critical</option>
            <option value="Emergency">Emergency</option>
            <option value="Urgent">Urgent</option>
            <option value="Semi-Urgent">Semi-Urgent</option>
          </select>
          <br></br>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              sendToDashboard(
                new PatinatsModule(
                  props.id,
                  props.idN,
                  props.name,
                  props.age,
                  props.isSaved,
                  props.isVaccin,
                  state
                )
              );
            }}
          >
            Confirm
          </button>
        </td>
        {/* <td className="delete-btn" onClick={props.delete}>
          <Icon icon={trash} />
        </td> */}
        {/* <td>key={props.id}</td> */}
      </tr>
    </>
  );
}
