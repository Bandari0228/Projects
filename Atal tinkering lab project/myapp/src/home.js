import React, { useState } from "react";
import "./home.css";
import db from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import Logo from "./components/images/logo.png";
// import ChatBot from "react-simple-chatbot";
// import { Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faRupeeSign,
  faSignInAlt,
  faClock,
  faClipboard,
  faRobot,
  faCalendarDays,
  faGlobeAmericas,
  // faMessage
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Homepage = () => {
  const [UserData, setUserData] = useState({
    Name: "",
    Email: "",
    Message: ""
  });

  const postUserData = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  const data = collection(db, "Contact us");
  const handlesubmit = async (e) => {
    e.preventDefault();
    addDoc(data, {
      Name: UserData.Name,
      Email: UserData.Email,
      Message: UserData.Message,
    })
      .then(() => {
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    setUserData({
      Name: "",
      Email: "",
      Message: ""
    });
  };
// const steps = [
    //   {
  //     id: "Greet",
  //     message: "Hello, Welcome to our website",
  //     trigger: "waiting_1",
  //   },
  //   {
  //     id: "waiting_1",
  //     user: true,
  //     trigger: "askname",
  //   },
  //   {
    //     id: "askname",
    //     message: "hello! Please enter your name!",
    //     trigger: "waiting_2",
    //   },
    //   {
      //     id: "waiting_2",
      //     user: true,
      //     trigger: "name",
  //   },
  //   {
  //     id: "name",
  //     message: "Hi {previousValue}",
  //     trigger: "askemail",
  //   },
  //   {
  //     id: "askemail",
  //     message: "Please enter your email",
  //     trigger: "waiting_4",
  //   },
  //   {
    //     id: "waiting_4",
    //     user: true,
    //     trigger: "waiting_5",
  //   },
  //   {
  //     id: "waiting_5",
  //     message: "Please type your issue",
  //     trigger: "waiting_6",
  //   },
  //   {
    //     id: "waiting_6",
    //     user: true,
    //     trigger: "waiting_7",
    //   },
    //   {
      //     id: "waiting_7",
      //     message: "Thank you for your response. We will solve the issue within 24 hours.",
  //     end: true,
  //   }
  // ];
  
  // const [isChatbotOpen, setIsChatbotOpen] = React.useState(false);

  // const toggleChatbot = () => {
  //   setIsChatbotOpen((prevState) => !prevState);
  // };

  return (
    <>
      <div className="background-image">
        <nav className="homenavbar">
          <div className="homenavbar-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </a>
            </li>
            <li>
              <a href="#Buy">
                <FontAwesomeIcon icon={faRupeeSign} /> Buy
              </a>
            </li>
            <li>
              <a href="./login">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </a>
            </li>
          </ul>
        </nav>
        <div className="hometitle">

            <h1>DIGITAL ATL INCHARGE</h1>
            <div className="homepagehr">
              {/* <hr /> */}
            </div>
            <h5>A product to automate the work of ATL In-Charges and Mentors.</h5>
        </div>
      </div>
      <div className="quote">
        <p>"Creativity is seeing the same thing but thinking differently."</p>
        <p>- A. P. J. Abdul Kalam</p>
      </div>

      <div className="features">
        <h1>FEATURES OF THE PRODUCT</h1>
        <h3>
          <FontAwesomeIcon icon={faClock} /> TIME SAVER
        </h3>
        <p>
          Saves a lot of time for the ATL In-Charges and mentors by automating
          most of their work. It requires less human interaction.
        </p>

        <h3>
          <FontAwesomeIcon icon={faClipboard} /> FORMS
        </h3>
        <p>
          There are many forms which help to collect data of students from
          mentors and In-Charges. This data is used for generating reports.
        </p>

        <h3>
          <FontAwesomeIcon icon={faRobot} /> AUTOMATIC REPORT GENERATION
        </h3>
        <p>
          Manually writing reports is a problem in the present time. It is
          solved by automatic report generation in the product.
        </p>

        <h3>
          <FontAwesomeIcon icon={faCalendarDays} /> 24 x 7 AVAILABILITY
        </h3>
        <p>
          After the lab is closed, if the ATL In-Charge requires a report
          suddenly, it becomes an issue for them. But with the product's 24x7
          availability, it is no longer a problem.
        </p>

        <h3>
          <FontAwesomeIcon icon={faGlobeAmericas} /> ONLINE
        </h3>
        <p>
          The product can be accessed from any device with a valid internet
          connection at any time and any place. This eliminates the risk of
          losing reports on paper.
        </p>
      </div>
      <form onSubmit={handlesubmit}>
        <div className="homecontact-form">
          <h1>Contact Us</h1>
          <br />
          <div className="homecontact-form">
            <div>
              <input
                type="text"
                id="name"
                name="Name"
                placeholder="Name"
                value={UserData.Name}
                onChange={postUserData}
              />
              <input
                type="email"
                id="email"
                value={UserData.Email}
                name="Email"
                placeholder="Email"
                onChange={postUserData}
              />
              <textarea
                placeholder="Message"
                id="message"
                name="Message"
                value={UserData.Message}

                onChange={postUserData}
              ></textarea>
              <input type="submit" id="submit1" value="Submit" />
              <br />
            </div>
          </div>
        </div>
      </form>

      <div className="social-icons">
        <span className="icon">
          <a href="/"><FontAwesomeIcon icon={faFacebookSquare} size="3x" /></a>
        </span>
        <span className="icon">
           <a href="/"><FontAwesomeIcon icon={faTwitterSquare} size="3x" /></a>
        </span>
        <span className="icon">
         <a href="/"><FontAwesomeIcon icon={faYoutubeSquare} size="3x" /></a>
        </span>
        <span className="icon">
        <a href="/"> <FontAwesomeIcon icon={faInstagramSquare} size="3x" /></a>
        </span>
        <span className="icon">
        <a href="/"><FontAwesomeIcon icon={faDiscord} size="3x" /></a>
        </span>
      </div>

      <div className="last">
        <p id="first">
          Digital ATL In-Charge... A product to digitize the work of ATL
          In-Charge.
        </p>
        <p id="second">
          Terms & Conditions | Privacy Policy | Cancellation and Refund Policy |
          Customer Support
        </p>
        <p id="third">© 2023 ATAL Tinkering</p>
      </div>
      {/* <div className="chat-icon" onClick={toggleChatbot}>
        <button>
        <FontAwesomeIcon icon={faMessage} /> Chat 
        </button>
      </div>
      {isChatbotOpen && (
        <Segment className="chatbot" floated="right">
          <ChatBot steps={steps} />
        </Segment>
      )} */}
    </>
  );
};

export default Homepage;
