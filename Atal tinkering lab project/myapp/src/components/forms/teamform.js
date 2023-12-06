import React from "react";
import { useState } from "react";
// import "./teamform.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import db from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import Image from "../images/IMAGE4.jpg"


const Teamform = () => {
  const [UserData, setUserData] = useState({
    name: "",
    leader: "",
    currentexp: "",
  });

  const postUserData = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  const [team, setteam] = useState([""]);
  const teamhandleChange = (event, index) => {
    let updatedteam = [...team];
    updatedteam[index] = event.target.value;
    setteam(updatedteam);
  };

  const addteam = (Event) => {
    Event.preventDefault();
    setteam([...team, ""]);
  };

  const deleteteam = (index) => {
    const deleteteam = [...team];
    deleteteam.splice(index, 1);
    setteam(deleteteam);
  };

  const data=collection(db,"teamdata")
  const handlesubmit=async(e)=>{
      e.preventDefault()
      addDoc(data,{
          name:UserData.name,
          leader:UserData.leader,
          currentexp:UserData.currentexp,
          team:team
  
      }).then(alert("submitted successsfully"))

      setUserData({
        name:'',
        leader:'',
        currentexp:'',
      })
      setteam([{team:''}])
  }
  

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <img src={Image} alt="unknow error" />
        {/* <h1>Team Form</h1> */}
        <div>
          <label htmlFor="name">Team Name</label>
          <input type="text" name="name" id="name" value={UserData.name} onChange={postUserData} />
        </div>
        <div>
          <label htmlFor="leader">Team Leader</label>
          <input type="text" name="leader" id="leader" value={UserData.leader }  onChange={postUserData}/>
        </div>
        <div>
          <label htmlFor="teammembers">Team Members</label>

          {team.map((teammember, index) => (
            <span key={index}>
              <input id="goals" type="text" name="team" value={teammember.team} onChange={(event) => teamhandleChange(event, index)}/>
            </span>
          ))}
          <button type="button" className="add" onClick={addteam}> <FontAwesomeIcon icon={faPlus}  /></button>
          <button type="button" className="delete" onClick={deleteteam}><FontAwesomeIcon icon={faTrash}  /></button>
        </div>

        <div>
          <label htmlFor="currentexp">Team Current Experiment</label>
          <input type="text" name="currentexp" id="currentexp" value={UserData.currentexp} onChange={postUserData}/>
        </div>

        <div >
        <input className="submit1" type="submit" id="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default Teamform;
