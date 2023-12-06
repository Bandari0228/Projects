import React, { useState } from "react";
// import "./events.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";
import Image from "../images/IMAGE6.jpg";
import db from "./firebase";
import { addDoc, collection } from "firebase/firestore";

const Events = () => {
  const [UserData, setUserData] = useState({
    EventName: "",
    School: "",
    Grade: "",
    Date: "",
    Location: "",
    Withinthecity: "",
  });

  const postUserData = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  const ch = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.checked });
  };

  const [ProspectiveStudents, setProspectiveStudents] = useState([""]);

  const handleChange = (event, index) => {
    let updatedStudents = [...ProspectiveStudents];
    updatedStudents[index] = event.target.value;
    setProspectiveStudents(updatedStudents);
  };

  const addStudent = (event) => {
    event.preventDefault();
    setProspectiveStudents([...ProspectiveStudents, ""]);
  };

  const removestudent = (index) => {
    const updatedstudent = [...ProspectiveStudents];
    updatedstudent.splice(index, 1);
    setProspectiveStudents(updatedstudent);
  };

  const [ActualStudentsattended, setActualStudentsattended] = useState([""]);
  const addhandleChange = (event, index) => {
    let updatedActualStudentsattended = [...ActualStudentsattended];
    updatedActualStudentsattended[index] = event.target.value;
    setActualStudentsattended(updatedActualStudentsattended);
  };

  const addActualStudentsattended = (event) => {
    event.preventDefault();
    setActualStudentsattended([...ActualStudentsattended, ""]);
  };


  const removeactualstudent= (index) => {
    const updatedstudent = [...ActualStudentsattended];
    updatedstudent.splice(index, 1);
    setActualStudentsattended(updatedstudent);
  };


  const data = collection(db, "Eventdata");
  const Updated = { ...UserData, ProspectiveStudents, ActualStudentsattended };
  const [records, setRecords] = useState([]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    addDoc(data, {
      EventName: UserData.EventName,
      School: UserData.School,
      Grade: UserData.Grade,
      Date: UserData.Date,
      Location: UserData.Location,
      Withinthecity: UserData.Withinthecity,
      ProspectiveStudents: ProspectiveStudents,
      ActualStudentsattended: ActualStudentsattended,
    }).then(() => {
      alert("Submitted successfully");
    });

    setUserData({
      EventName: "",
      School: "",
      Grade: "",
      Date: "",
      Withinthecity: "",
      Location: "",
    });

    setProspectiveStudents([]);
    setActualStudentsattended([]);

    const newRecord = { ...Updated, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
  };

  return (
    <>
      <div className="eventform">
        <form onSubmit={handlesubmit}>
          <div>
            <img src={Image} alt="unknown" />
            {/* <h3>Event Registration Form</h3> */}
            <div>
              <label htmlFor="event">Event Name</label>
              <input type="text" id="EventName" name="EventName" value={UserData.EventName} onChange={postUserData}/>
            </div>
            <div>
              <label htmlFor="School">School</label>
              <input
                type="text"
                name="School"
                value={UserData.School}
                onChange={postUserData}
              />
            </div>
            <div>
              <label htmlFor="grade">Grade</label>
              <input
                type="text"
                id="grade"
                name="Grade"
                value={UserData.Grade}
                onChange={postUserData}
              />
            </div>
            <div>
              <label htmlFor="Date">Date</label>
              <input
                type="date"
                id="DAte"
                name="Date"
                onChange={postUserData}
              />
            </div>

            <div>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                value={UserData.Location}
                name="Location"
                onChange={postUserData}
              />
            </div>
            <div>
              <label className="Withinthecity">Within the city</label>
              <input
                className="checkbox"
                type="checkbox"
                name="Withinthecity"
                
                checked={UserData.Withinthecity}
                onChange={ch}
              />
            </div>

            <div>
              <label>Prospective Students</label>
              {ProspectiveStudents.map((student, index) => (
                <span key={index}>
                  <input
                    id="ProspectiveStudents"
                    name="ProspectiveStudents"
                    type="text"
                    value={student}
                    onChange={(event) => handleChange(event, index)}
                  />
                </span>
              ))}
              <button className="add" id="addps" type="button" onClick={addStudent}>
              <FontAwesomeIcon icon={faPlus} />
              </button>
              <button className="delete" id="addps" type="button" onClick={removestudent}>
              <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>

            <div>
              <label htmlFor="ActualStudentsattended">
                Actual Students attended
              </label>
              {ActualStudentsattended.map((student, index) => (
                <span key={index}>
                  <input
                    id="ActualStudentsattended"
                    name="ActualStudentsattended"
                    type="text"
                    value={student}
                    onChange={(event) => addhandleChange(event, index)}
                  />
                </span>
              ))}
              <button className="add" id="addActualStudentsattended" onClick={addActualStudentsattended}>
              <FontAwesomeIcon icon={faPlus} />
              </button>   
              <button className="delete" id="addps" type="button" onClick={removeactualstudent}>
              <FontAwesomeIcon icon={faMinus} />
              </button>
            </div>

            <br />
            <div >
            <input className="submit1" type="submit" id="submit" value="Submit" />
            </div>
          </div>
        </form>
        <div className="record">
          {records.map((event) => {
            return (
              <div className="show" key={event.id}>
                <p>Event Name: {event.EventName}</p>
                <p>School: {event.School}</p>
                <p>Grade: {event.Grade}</p>
                <p>Date: {event.Date}</p>
                <p>Location: {event.Location}</p>
                <p>Within the city: {event.Withinthecity}</p>
                <p>Prospective Students:</p>
                <ul>
                  {event.ProspectiveStudents.map((student, index) => (
                    <li key={index}>{student}</li>
                  ))}
                </ul>
                <p>Actual Students attended:</p>
                <ul>
                  {event.ActualStudentsattended.map((student, index) => (
                    <li key={index}>{student}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
