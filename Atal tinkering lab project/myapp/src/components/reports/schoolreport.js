import React from "react";
import { useState } from "react";
import db from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import Image from "../images/IMAGE5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./schoolform.css"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const Schoolform = () => {
  const [UserData, setUserData] = useState({
    name: "",
    atlschool: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    inchargefirstname: "",
    inchargelastname: "",
    inchargeemail: "",
    inchargenumber: "",
    principalname: "",
    principalemail: "",
    principalnumber: "",
    sameasprincipal: "",
    correspondentfirstname: "",
    correspondentlastname: "",
    correspondentemail: "",
    correspondentcontact: "",
    syllabus: [],
    website: "",
    subscription: "",
  });
  const [links, setLinks] = useState([""]);

  const handleLinkChange = (event, index) => {
    let updatedLinks = [...links];
    updatedLinks[index] = event.target.value;
    setLinks(updatedLinks);
  };

  const addLink = (event) => {
    event.preventDefault();
    setLinks([...links, ""]);
  };

  const removeLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const postUserData = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const updatedSyllabus = checked
        ? [...(UserData.syllabus || []), value]
        : (UserData.syllabus || []).filter((syllabus) => syllabus !== value);
      setUserData({ ...UserData, syllabus: updatedSyllabus });
    } else {
      setUserData({ ...UserData, [name]: value });
    }
  };

  const ch = (e) => {
    const { name, checked, value } = e.target;
    if (name === "syllabus") {
      const updatedSyllabus = checked
        ? [...UserData.syllabus, value]
        : UserData.syllabus.filter((syllabus) => syllabus !== value);
      setUserData((prevState) => ({
        ...prevState,
        syllabus: updatedSyllabus,
      }));
    } else {
      setUserData((prevState) => ({ ...prevState, [name]: checked }));
    }
  };
  
  
  
  
  
  const data = collection(db, "schooldata");
  const handlesubmit = async (e) => {
    e.preventDefault();
    addDoc(data, {
      name: UserData.name,
      atlschool: UserData.atlschool,
      address: UserData.address,
      city: UserData.city,
      state: UserData.state,
      pincode: UserData.pincode,
      inchargefirstname: UserData.inchargefirstname,
      inchargelasename: UserData.inchargelastname,
      inchargenumber: UserData.inchargenumber,
      inchargeemail: UserData.inchargeemail,
      principalname: UserData.principalname,
      principalemail: UserData.principalemail,
      principalnumber: UserData.principalnumber,
      sameasprincipal: UserData.sameasprincipal,
      correspondentfirstname: UserData.correspondentfirstname,
      correspondentlastname: UserData.correspondentlastname,
      correspondentemail: UserData.correspondentemail,
      correspondentcontact: UserData.correspondentcontact,
      syllabus: UserData.syllabus,


      website: UserData.website,
      subscription: UserData.subscription,
      links: links,
    }).then(alert("submitted successsfully"));

    setUserData({
      name: "",
      atlschool: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      inchargefirstname: "",
      inchargelastname: "",
      inchargeemail: "",
      inchargenumber: "",
      principalname: "",
      principalemail: "",
      principalnumber: "",
      sameasprincipal: "",
      correspondentfirstname: "",
      correspondentlastname: "",
      correspondentemail: "",
      correspondentcontact: "",
      syllabus: [],
      website: "",
      subscription: "",
    });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <img src={Image} alt="unknow error" />

        {/* <h1>School Form</h1> */}
        {/* <hr /> */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={UserData.name}
            onChange={postUserData}
          />
        </div>

        <div >
          <label className="atlschool"> Is Atl School</label>
          <input
            className="checkbox"
            type="checkbox"
            name="atlschool"
            value={UserData.atlschool}
            onChange={ch}
          />
        </div>
        <br />
        <h3>
          <b>School Address</b>{" "}
        </h3>
        <br />
        <div>
          <label htmlFor="address"> Address Line </label>
          <input
            type="text"
            id="address"
            name="address"
            value={UserData.address}
            onChange={postUserData}
          />
        </div>
        <div>
          <label htmlFor="city">City/District</label>
          <input
            type="text"
            id="city"
            name="city"
            value={UserData.city}
            onChange={postUserData}
          />
        </div>

        <div>
          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            value={UserData.state}
            onChange={postUserData}
          >
            <option>Select a state</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>
          </select>
        </div>

        <br />

        <div>
          <label htmlFor="pincode">pincode</label>
          <input
            type="text"
            name="pincode"
            value={UserData.pincode}
            onChange={postUserData}
          />
        </div>

        <br />
        <h3>
          {" "}
          <b>Incharge Details</b>{" "}
        </h3>
        <br />
        <div>
          <label htmlFor="inchargename">First Name</label>
          <input
            type="text"
            id="inchargename"
            name="inchargefirstname"
            value={UserData.inchargefirstname}
            onChange={postUserData}
          />

          <label htmlFor="inchargename">Last Name</label>
          <input
            type="text"
            id="inchargename"
            name="inchargelastname"
            value={UserData.inchargelastname}
            onChange={postUserData}
          />
        </div>

        <div>
          <label htmlFor="inchargeemail"> Email</label>
          <input
            type="email"
            id="inchargeemail"
            name="inchargeemail"
            value={UserData.inchargeemail}
            onChange={postUserData}
          />
        </div>

        <div>
          <label htmlFor="inchargenumber">Whats App Contact</label>
          <input
            type="text"
            id="inchargenumber"
            name="inchargenumber"
            value={UserData.inchargenumber}
            onChange={postUserData}
          />
        </div>
        <br />
        <h3>
          {" "}
          <b>Principal Details</b>{" "}
        </h3>
        <br />

        <div>
          <label htmlFor="principalname"> Name</label>
          <input
            type="text"
            id="principalname"
            name="principalname"
            value={UserData.principalname}
            onChange={postUserData}
          />
        </div>

        <div>
          <label htmlFor="principalemail"> Email</label>
          <input
            type="email"
            id="principalemail"
            name="principalemail"
            value={UserData.principalemail}
            onChange={postUserData}
          />
        </div>
        <div>
          <label htmlFor="principalnumber"> Whastapp Contact</label>
          <input
            type="text"
            id="principalnumber"
            name="principalnumber"
            value={UserData.principalnumber}
            onChange={postUserData}
          />
        </div>

        <div>
          <label className="sameasprincipal"> Same as pirncipal</label>
          <input
            className="checkbox"
            type="checkbox"
          
            name="sameasprincipal"
            value={UserData.sameasprincipal}
            onChange={ch}
          />
        </div>
        <br />
        <h3>
          {" "}
          <b>Correspondent Details</b>
        </h3>
        <br />
        <div>
          <label for="correspondentfirstname">First Name:</label>
          <input
            type="text"
            name="correspondentfirstname"
            value={UserData.correspondentfirstname}
            onChange={postUserData}
          />
        </div>
        <div>
          <label htmlFor="correspondentlastname">Last Name:</label>
          <input
            type="text"
            id="correspondentlastname"
            name="correspondentlastname"
            value={UserData.correspondentlastname}
            onChange={postUserData}
          />
        </div>

        <div>
          <label for="correspondentemail">Email:</label>
          <input
            type="email"
            id="email"
            name="correspondentemail"
            value={UserData.correspondentemail}
            onChange={postUserData}
          />
        </div>

        <div>
          <label for="correspondentcontact">WhatsApp Contact:</label>
          <input
            type="tel"
            id="whatsapp-contact"
            name="correspondentcontact"
            value={UserData.correspondentcontact}
            onChange={postUserData}
          />
        </div>
        <br />
        <div className="syllanbus">
          <label >syllabus:</label>
          <input
            className="checkbox"
            type="checkbox"
            id="cbse"
            name="syllabus"
            value="CBSE"
            onChange={ch}
          />
          <label for="cbse">CBSE</label>
          <input
            className="checkbox"
            type="checkbox"
            id="state"
            name="syllabus"
            value="State"
            onChange={ch}
          />
          <label for="state">State</label>
          <input
            className="checkbox"
            type="checkbox"
            id="icse"
            name="syllabus"
            value="ICSE"
            onChange={ch}
          />
          <label for="icse">ICSE</label>
          <input
            className="checkbox"
            type="checkbox"
            id="igcse"
            name="syllabus"
            value="IGCSE"
            onChange={ch}
          />
          <label for="igcse">IGCSE</label>
          <input
            className="checkbox"
            type="checkbox"
            id="ib"
            name="syllabus"
            value="IB"
            onChange={ch}
          />
          <label for="ib">IB</label>
        </div>
        <br />
        <div>
          <label for="website-url">Website URL:</label>
          <input
            type="url"
            id="website-url"
            name="website"
            value={UserData.website}
            onChange={postUserData}
          />
        </div>

        <div>
          <label className="subscription">Paid Subscription:</label>
          <input
            className="checkbox"
            type="checkbox"
            
            name="subscription"
            onChange={postUserData}
          />
        </div>

        <div>
          <label htmlFor="links">Social Media Links</label>
          {links.map((link, index) => (
            <span key={index}>
              <input
                type="text"
                name="link"
                value={link}
                onChange={(event) => handleLinkChange(event, index)}
              />
            </span>
          ))}
          <button type="button" className="add" onClick={addLink}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button type="button" className="delete" onClick={removeLink}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>

        <div>
          <input className="submit1" type="Submit" id="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Schoolform;
