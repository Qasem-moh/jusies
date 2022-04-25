import React, { useState } from "react";
import { useParams, withRouter, useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
// import { getPatients } from "../data";
// import "../index.css";

function Triages2() {
  <p>hello</p>;
  let params = useLocation().pathname.split("/")[2];
  let patient = JSON.parse(localStorage.getItem("patinats"));
  let Objpatient = getPatient(params);

  let [displayBorder, setDisplayBorder] = useState(false);
  let [buttunRegister1, setButtunRegister1] = useState("grid");
  let [buttunRegister2, setButtunRegister2] = useState("none");
  let [haartRate, setHaartRate] = useState("");
  let [note, setNote] = useState("");
  let [Wedith, setWedith] = useState("");
  let [BloodPresure, setBloodPresure] = useState("");
  let [Category, setCategory] = useState("");

  function handleWedith(event) {
    setWedith(event.target.value);
  }
  function handleBloodPresure(event) {
    setBloodPresure(event.target.value);
  }
  function handleCategory(event) {
    console.log(event.target.value);
    setCategory(event.target.value);
  }
  function handleHaartRate(event) {
    setHaartRate(event.target.value);
  }
  function handleNote(event) {
    setNote(event.target.value);
  }

  function handelChangeborder(event) {
    event.preventDefault();
    if (displayBorder === false) {
      setButtunRegister2("none");
      setButtunRegister1("grid");
      setDisplayBorder(true);
    } else {
      setButtunRegister2("grid");
      setButtunRegister1("none");
      setDisplayBorder(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    Objpatient.bloodPresure = BloodPresure;
    Objpatient.weight = Wedith;
    Objpatient.category = Category;
    Objpatient.haartRate = Wedith;
    Objpatient.note = note;
    let NewArray = JSON.parse(localStorage.getItem("MyNewArray"));
    console.log(NewArray);
    NewArray.push(Objpatient);
    localStorage.setItem("MyNewArray", JSON.stringify(NewArray));
  }
  let fillData = JSON.parse(localStorage.getItem("patinats"));

  function getPatient(title) {
    return patient.find((Pat) => Pat.idN === title);
  }
  return (
    <main id="main" style={{ padding: "1rem", display: "flex" ,borderRight:"1px solid", width:"150px",marginRight:"150px"}}>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        {fillData.map((element, idx) => {
          return (
            <NavLink to={`/Triage/${element.idN}`} key={element.idN}>
              {element.id}
            </NavLink>
          );
        })}
      </div>
      {params ? (
        <div
          style={{ display: "flex", flexDirection: "column", padding: "20px" ,marginLeft:"150px"}}
        >
          <div class="container">
            <center>
              {" "}
              <h1> Registeration Form</h1>{" "}
            </center>
            <hr />
            <label> Firstname </label>
            <input type="text" name="firstName" value={Objpatient.id} />
            <label> Lastname: </label>
            <input type="text" name="lastName" value={Objpatient.name} />
            <label> Age: </label>
            <input type="text" name="age" value={Objpatient.age} />
            <label for="idN">
              <br />
              National Id
              <br />
            </label>
            <input type="text" value={Objpatient.idN} name="idN" />
            <button
              type="submit"
              onClick={handelChangeborder}
              class="registerbtn"
            >
              Confirm
            </button>
          </div>
          <hr />

          <div class="container">
            <label> Weight </label>
            <input
              type="text"
              onChange={handleWedith}
              name="wedith"
              placeholder="Wedith"
            />
            <label> Haart Rate </label>
            <input
              type="text"
              onChange={handleHaartRate}
              name="haartRate"
              placeholder=" Haart Rate "
            />
            <label> Blood Presure: </label>
            <input
              type="text"
              onChange={handleBloodPresure}
              name="BloodPresure"
              placeholder="Blood-Presure"
            />
            Category:
            <input
              type="radio"
              id="age1"
              name="age"
              onChange={handleCategory}
              value="Critical"
            />
            <label for="age1">Critical</label>
            <br />
            <input
              type="radio"
              id="age2"
              name="age"
              onChange={handleCategory}
              value="Emergency"
            />
            <label for="age2">Emergency</label>
            <br />
            <input
              type="radio"
              id="age3"
              name="age"
              onChange={handleCategory}
              value="Urgent"
            />
            <label for="age3">Urgent</label>
            <br />
            <br />
            <input
              type="radio"
              id="age3"
              name="age"
              value="Semi-Urgent"
              onChange={handleCategory}
            />
            <label for="age3">Semi-Urgent</label>
            <br />
            Semi-Urgent
            <textarea
              name="note"
              placeholder="Note"
              onChange={handleNote}
            ></textarea>
            <button type="submit" onClick={handleSubmit} class="registerbtn">
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="not Data"> </div>
      )}
    </main>
  );
}
export default withRouter(Triages2);

// import React, { useState, useEffect } from "react";
// import { PatinatsModule } from "../components/Modules";
// import { useParams } from "react-router-dom";
// import { View } from "./View";
// import { NavLink, Outlet, useSearchParams } from "react-router-dom";

// const getDatafromLS = () => {
//   let results = [];
//   const data = localStorage.getItem("patinats");
//   if (data) {
//     JSON.parse(data).map((elm) => {
//       console.log(elm);
//       results.push(
//         new PatinatsModule(
//           elm.id,
//           elm.idN,
//           elm.name,
//           elm.age,
//           elm.isSaved,
//           elm.isVaccin,
//           elm.state
//         )
//       );
//     });
//     return results;
//   } else {
//     return [];
//   }
// };
// let fillData = JSON.parse(localStorage.getItem("patinats"));

// export const Triage = () => {
//   const { id } = useParams();
//   // let NewArray = JSON.parse(localStorage.getItem("patinats"));
//   // let Objpatient = getPatient(Number(params.idN));
//   const [patinats, setpatinats] = useState(getDatafromLS());
//   const [ID_Patinat, setID_Patinat] = useState("");
//   const [Patinat, setPatinat] = useState("");
//   const [Age, setAge] = useState("");
//   const [Patinat_ID, setPatinat_ID] = useState("");
//   const [isbn, setIsbn] = useState("");
//   const [saved, setSaved] = useState("");
//   // function lo(){
//   //   console.log(JSON.stringify(params));
//   // }
//   // form submit event
//   const handleAddpatinatsubmit = (e) => {
//     e.preventDefault();
//     // creating an object
//     let patinat = {
//       ID_Patinat,
//       Patinat,
//       Age,
//       Patinat_ID,
//       isbn,
//       saved,
//     };
//     setpatinats([...patinats, patinat]);
//     setID_Patinat("");
//     setPatinat("");
//     setAge("");
//     setPatinat_ID("");
//     setIsbn("");
//     setSaved("");
//   };

//   // delete patinat from LS
//   const deletepatinat = (isbn) => {
//     const filteredpatinats = patinats.filter((element, index) => {
//       return element.isbn !== isbn;
//     });
//     setpatinats(filteredpatinats);
//   };
//   // function getPatient(idN) {
//   //   return NewArray.find((Pat) => Pat.idN === idN);
//   // }

//   // saving data to local storage
//   // useEffect(() => {
//   //   localStorage.setItem("patinats", JSON.stringify(patinats));
//   // }, [patinats]);

//   return (
//     <>
//       <div className="container">
//         {fillData.map((element, idx) => {
//           return (
//             // <p style={{ cursor: "pointer" }}>
//             //   {element.id}
//             // </p>
//             <NavLink to={`Triage/${element.idN}`} key={element.idN}>
//               {element.id}
//             </NavLink>
//           );
//         })}
//         <div>
//           <form>
//             <label>First name</label>
//             <input type="name" value=""></input>
//           </form>
//         </div>
//       </div>
//       <div className="wrapper">
//         <h1>patinatList App</h1>
//         <p>Add and view your patinats using local storage</p>
//         <div className="main">
//           <div className="form-container">{/*  */}</div>

//           <div className="view-container">
//             {patinats.length > 0 && (
//               <>
//                 <div className="table-responsive">
//                   <table className="table">
//                     <thead>
//                       <tr>
//                         <th>ID_Patinat</th>
//                         <th>Patinat</th>
//                         <th>Patinat_ID</th>
//                         <th>Age</th>
//                         <th>saved</th>
//                         <th>Vaccin</th>
//                         <th>state</th>
//                         <th>Confirm</th>
//                         {/* <th>Delete</th> */}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <View patinats={patinats} deletepatinat={deletepatinat} />
//                     </tbody>
//                   </table>
//                 </div>
//                 <button
//                   className="btn btn-danger btn-md"
//                   onClick={() => setpatinats([])}
//                 >
//                   Remove All
//                 </button>
//               </>
//             )}
//             {patinats.length < 1 && <div>No patinats are added yet</div>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Triage;
