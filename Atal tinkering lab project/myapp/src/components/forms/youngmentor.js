import { React, useState } from "react";
// import "./youngmentor.css";
import db from "./firebase";
import { addDoc, collection } from "firebase/firestore";
const Youngmentor = () => {
  const [UserData, setUserData] = useState({
    College: "",
    Name: "",
    Department: "",
    Study: "",
    Year: "",
    Email: "",
    Number: "",
    Aspiration: "",
    Currentexp: "",
    Competiton: "",
  });

  const postUserData = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  const data = collection(db, "youngmnetordata");
  const handlesubmit = async (event) => {
    event.preventDefault();
    addDoc(data, {
      College: UserData.College,
      Name: UserData.Name,
      Department: UserData.Department,
      Study: UserData.Study,
      Year: UserData.Year,
      Email: UserData.Email,
      Number: UserData.Number,
      Aspiration: UserData.Aspiration,
      Currentexp: UserData.Currentexp,
      Competiton: UserData.Competiton,
    }).then(alert("submitted successsfully"));
    // console.log(UserData)
    setUserData({
      College: "",
      Name: "",
      Department: "",
      Study: "",
      Year: "",
      Email: "",
      Number: "",
      Aspiration: "",
      Currentexp: "",
      Competiton: "",
    });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        {/* <h1>YOUNG MENTOR FORM</h1> */}
        <div>
          <label htmlFor="college"> College: </label>
          <input
            type="text"
            id="college"
            name="College"
            placeholder="Young Mentor College Name"
            value={UserData.College}
            onChange={postUserData}
          />
        </div>
        <div>
          <label htmlFor="name"> Name:</label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Young Mentor Name"
            value={UserData.Name}
            onChange={postUserData}
          />
        </div>
        <div>
          <label htmlFor="department"> Department:</label>
          <input
            type="text"
            id="department"
            name="Department"
            placeholder="Young Mentor department"
            value={UserData.Department}
            onChange={postUserData}
          />
        </div>
        <div>
          <label htmlFor="study"> Study:</label>
          <input
            type="text"
            id="study"
            name="Study"
            placeholder="Young Mentor Study"
            value={UserData.Study}
            onChange={postUserData}
          />
        </div>
        <div>
          <label htmlFor="year"> Year:</label>
          <input
            type="text"
            id="year"
            name="Year"
            placeholder="Young Mentor Year"
            value={UserData.Year}
            onChange={postUserData}
          />
        </div>
        <div>
          <label htmlFor="email"> Email:</label>
          <input
            type="text"
            id="year"
            name="Email"
            placeholder=" Young Mentor Email"
            value={UserData.Email}
            onChange={postUserData}
          />
        </div>
        <div>
          <label htmlFor="number"> Number:</label>
          <input
            type="text"
            id="number"
            name="Number"
            placeholder=" Young Mentor Number"
            value={UserData.Number}
            onChange={postUserData}
          />
        </div>

        <div>
          <label htmlFor="aspiration">Aspiration:</label>
          <input
            type="text"
            id="aspiration"
            name="Aspiration"
            placeholder="Young Mentor Aspirtion"
            value={UserData.Aspiration}
            onChange={postUserData}
          />
        </div>

        <div>
          <label htmlFor="currentexp">Current Tinkering Activity:</label>
          <input
            type="text"
            id="currentexp"
            name="Currentexp"
            placeholder="Young Mentor Current Experiment"
            value={UserData.Currentexp}
            onChange={postUserData}
          />
        </div>

        <div>
          <label htmlFor="Competiton">competiton Mapped:</label>
          <input
            type="text"
            id="Competiton"
            name="Competiton"
            placeholder="Young Mentor competiton Mapped"
            value={UserData.Competiton}
            onChange={postUserData}
          />
        </div>

        <div>
          <input className="submit1" type="Submit" id="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Youngmentor;
