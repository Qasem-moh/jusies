import React, { useState, useEffect } from "react";
import { View } from "./View";

// getting the values of local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("patinats");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const App = () => {
  // main array of objects state || patinats state || patinats array of objects
  const [patinats, setpatinats] = useState(getDatafromLS());

  // input field states
  const [name, setPatinat] = useState("");
  const [id, setID_Patinat] = useState("");
  const [isVaccin, setIsbn] = useState("");
  const [age, setAge] = useState("");
  const [isSaved, setSaved] = useState("");
  const [state, setState] = useState("");
  const [idN, setPatinat_ID] = useState("");

  // form submit event
  const handleAddpatinatsubmit = (e) => {
    e.preventDefault();
 
    let patinat = {
      id,
      name,
      age,
      idN,
      isVaccin,
      isSaved,
      state,
      weight: "",
      haartRate: "",
      bloodPresure: "",
      note: "",
      category: "",
    };
    setpatinats([...patinats, patinat]);
    setID_Patinat("");
    setPatinat("");
    setAge("");
    setPatinat_ID("");
    setIsbn("");
    setSaved("");
    setState("");
  };

  // // delete patinat from LS
  const deletepatinat = (isbn) => {
    const filteredpatinats = patinats.filter((element, index) => {
      return element.isbn !== isbn;
    });
    setpatinats(filteredpatinats);
  };

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem("patinats", JSON.stringify(patinats));
  }, [patinats]);

  return (
    <div className="wrapper">
      <h1>Welcome in Add Patiant</h1>
      <p>fill data to store</p>
      <div className="main">
        <div
          className="form-container"
          id="cont"
          style={{
            position: "absolute",
            // border: "2px solid",
            // borderRadius: "15px",
            width: "30%",
            height: "70%",
            margin: "200px 10px 0px 30%",
            transition: "all 0.6s ease-in-out",
          }}
        >
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddpatinatsubmit}
          >
            <fieldset>
              {/* <legend>Register</legend> */}
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                id="ID_Patinat"
                required
                onChange={(e) => setID_Patinat(e.target.value)}
                value={id}
                placeholder="Please Enter First Name"
              ></input>
              <label id="ErrorID"></label>
              <br></br>
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setPatinat(e.target.value)}
                value={name}
                placeholder="Please Enter last name"
              ></input>
              <br></br>
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                // id="ID_Patinat"
                required
                onChange={(e) => setAge(e.target.value)}
                value={age}
                // min="1"
                // max="150"
                // onchange={checkID()}
                placeholder="Please Enter ID for Patiant"
              ></input>
              <br></br>
              <label>Patinat_ID</label>
              <input
                type="number"
                className="form-control"
                required
                onChange={(e) => setPatinat_ID(e.target.value)}
                value={idN}
                placeholder="Enter ID"
              ></input>
              <br></br>
              <label>Phone</label>
              <input
                type="phone"
                className="form-control"
                required
                onChange={(e) => setSaved(e.target.value)}
                value={isSaved}
                placeholder="+966 0000000"
              ></input>
              <br></br>
              <label>Current Address</label>
              <input
                type="text"
                className="form-control"
                required
                onChange={(e) => setIsbn(e.target.value)}
                value={isVaccin}
                placeholder="Address"
              ></input>
              <br></br>
              <button type="submit" className="btn btn-success btn-md">
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
