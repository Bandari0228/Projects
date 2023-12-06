import React, { useState } from "react";
// import "./studentform.css";
import db from "./firebase";
import Image from "../images/IMAGE2.jpg"
import { addDoc, collection } from "firebase/firestore";
const Studentform = () => {
  const [UserData, setUserData] = useState({
    School: "",
    FirstName: "",
    LastName: "",
    Gender: "",
    Class: "",
    Section: "",
    Email: "",
    Number: "",
    Aspiration: "",
    CurrentTinkeringActivity: "",
    Teamleader: "",
  });

  const ch = (e) => {
    // setData({...data,[e.target.name]:!data.Withinthecity});
    setUserData({ ...UserData, [e.target.name]: e.target.checked });
  };

  const postUserData = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };


  const data = collection(db, "studentdata");

  const handlesubmit = async (event) => {
    event.preventDefault();
    addDoc(data, {
      School: UserData.School,
      FirstName: UserData.FirstName,
      LastName: UserData.LastName,
      Gender: UserData.Gender,
      Class: UserData.Class,
      Section: UserData.Section,
      Email: UserData.Email,
      Number: UserData.Number,
      Aspiration: UserData.Aspiration,
      CurrentTinkeringActivity: UserData.CurrentTinkeringActivity,
      Teamleader: UserData.Teamleader
    }).then(alert("submited sucessfully"))
    console.log(UserData)
  };



  return (
    <>
      <form onSubmit={handlesubmit}>
        <div className="student">
          <img src={Image} alt="unknown" />
          {/* <h1>STUDENT FORM</h1> */}

          <div>
            <label htmlFor="school" id="labelschool">
              School:
            </label>
            <input type="text" id="school" name="School" value={UserData.School} onChange={postUserData} />
          </div>

          <div>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="FirstName" value={UserData.FirstName} onChange={postUserData} />
          </div>

          <div>
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="LastName" value={UserData.LastName} onChange={postUserData} />
          </div>

          <div className="gender">
            <label htmlFor="gender">Gender :</label>
            <input type="text" id="gender" name="Gender" value={UserData.Gender} onChange={postUserData} />
          </div>

          <div>
            <label htmlFor="class">Class:</label>
            <input type="number" id="class" name="Class" value={UserData.Class} onChange={postUserData} />
          </div>

          <div>
            <label htmlfor="section">Section:</label>
            <input type="text" id="section" name="Section" value={UserData.Section} onChange={postUserData} />
          </div>

          <div>
            <label htmlFor="email">Email-ID:</label>
            <input
              type="email"
              id="email"

              name="Email"
              value={UserData.Email}
              onChange={postUserData}
            />
          </div>

          <div>
            <label htmlFor="number">Whatsapp Number:</label>
            <input

              // type="tel"
              id="number"
              // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              name="Number"
              value={UserData.Number}
              onChange={postUserData}
            />
          </div>

          <div>
            <label htmlFor="Aspiration">Aspiration:</label>
            <input type="text" id="Aspiration" name="Aspiration" value={UserData.Aspiration} onChange={postUserData} />
          </div>

          <div>
            <label htmlFor="currentExp">Current Tinkering Activity:</label>
            <input type="text" id="currentExp" name="CurrentTinkeringActivity" value={UserData.CurrentTinkeringActivity} onChange={postUserData} />
          </div>

          <div>
            <label className="teamleader">Are you a team leader?</label>
            <input className="checkbox" type="checkbox" name="Teamleader" id="teamleader" value={UserData.Teamleader} onChange={ch} />
          </div>
          <hr />

          <div >
            <input className="submit1" type="Submit" id="submit" value="Submit" />
            <input className="submit1" type="reset" id="reset " value="Reset" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Studentform;
