let patients = [
    {
      firstName: "Ahmad",
      lastName: "Alshammari",
      age: "21",
      idN: 1,
      address: "Jeddah",
      phone: "055555590",
      Wedith: "67",
      BloodPresure: "120",
  
  
    },
    {
      firstName: "Wael",
      lastName: "Alsulami",
      age: "21",
      idN: 2,
      address: "Jeddah",
      phone: "055555590",
      Wedith: "67",
      BloodPresure: "120",
  
    },
    {
      firstName: "Osamah",
      lastName: "Alghamdi",
      age: "21",
      idN: 3,
      address: "Jeddah",
      phone: "055555590",
      Wedith: "67",
      BloodPresure: "120",
    },
  ]
  export function getPatients() {
    return patients;
  }
  
  
  export function getPatient(idN) {
    return patients.find(
      Patient => Patient.idN === idN
    );
    }