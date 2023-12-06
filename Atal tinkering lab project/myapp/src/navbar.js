import React, { useState } from "react";
import "./navbar.css";
import Image from "./components/images/logo.png";
// import Image1 from "./components/images/modi-aim.png";
// import Image2 from "./components/images/aim-in-0.jpg";
// import Image3 from "./components/images/aim-in-2.jpg";
// import Image4 from "./components/images/aim-in-3.jpg";
// import Image5 from "./components/images/ATAL_Brochure_Banner_desktop.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  /*faHouse,*/ faRightFromBracket,
  // faSchool,faUser,faThumbsUp,faBuildingColumns
} from "@fortawesome/free-solid-svg-icons";
import Events from "./components/FORMS/events";
import Expform from "./components/FORMS/Expform";
import SchoolForm from "./components/FORMS/schoolform";
import StudentForm from "./components/FORMS/studentform";
import TeamForm from "./components/FORMS/teamform";
import MentorForm from "./components/FORMS/youngmentor";

import EventReport from "./components/REPORTS/eventreport";
import ExperimentReport from "./components/REPORTS/expreport";
import SchoolReport from "./components/REPORTS/schoolreport";
import StudentReport from "./components/REPORTS/studentreport";
import TeamReport from "./components/REPORTS/teamreport";
import MentorReport from "./components/REPORTS/youngmentorreport";

const Navbar = () => {
  const [openEventForm, setOpenEventForm] = useState(false);
  const [openExpForm, setOpenExpForm] = useState(false);
  const [openSchoolForm, setOpenSchoolForm] = useState(false);
  const [openStudentForm, setOpenStudentForm] = useState(false);
  const [openTeamForm, setOpenTeamForm] = useState(false);
  const [openMentorForm, setOpenMentorForm] = useState(false);
  const [openEventReport, setOpenEventReport] = useState(false);
  const [openExpReport, setOpenExpReport] = useState(false);
  const [openSchoolReport, setOpenSchoolReport] = useState(false);
  const [openStudentReport, setOpenStudentReport] = useState(false);
  const [openTeamReport, setOpenTeamReport] = useState(false);
  const [openMentorReport, setOpenMentorReport] = useState(false);

  // const [expanded, setExpanded] = useState(false);

  // const handleClick = () => {
  //   setExpanded(!expanded);
  // };

  const toggleEventForm = () => {
    setOpenEventForm(!openEventForm);
  };

  const toggleExpForm = () => {
    setOpenExpForm(!openExpForm);
  };

  const toggleSchoolForm = () => {
    setOpenSchoolForm(!openSchoolForm);
  };

  const toggleStudentForm = () => {
    setOpenStudentForm(!openStudentForm);
  };

  const toggleTeamForm = () => {
    setOpenTeamForm(!openTeamForm);
  };

  const toggleMentorForm = () => {
    setOpenMentorForm(!openMentorForm);
  };

  const toggleEventReport = () => {
    setOpenEventReport(!openEventReport);
  };

  const toggleExpReport = () => {
    setOpenExpReport(!openExpReport);
  };

  const toggleSchoolReport = () => {
    setOpenSchoolReport(!openSchoolReport);
  };

  const toggleStudentReport = () => {
    setOpenStudentReport(!openStudentReport);
  };

  const toggleTeamReport = () => {
    setOpenTeamReport(!openTeamReport);
  };

  const toggleMentorReport = () => {
    setOpenMentorReport(!openMentorReport);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Image} alt="Logo" />
          <a href="/navbar">HamaraLabs</a>
          {/* <p>HamaraLabs</p> */}
        </div>
        <ul>
          {/* <li>
            <a href="/navbar"><FontAwesomeIcon icon={faHouse} /></a>
          </li> */}
          {/* <li>
            <a href="/about">About</a>
          </li> */}
          <li>
            <a href="/">
               <FontAwesomeIcon icon={faRightFromBracket} />
            </a>
          </li>
        </ul>
      </nav>

      <div className="card">
        <button className="btn1">Forms</button>

        <div className="dropdown">
          <button className="dropdown-btn" onClick={toggleEventForm}>
            Event Form
          </button>
          {openEventForm && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Event Registration Form</h3>
                  <button className="dialog-btn" onClick={toggleEventForm}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <Events />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleExpForm}>
            Experiment Form
          </button>
          {openExpForm && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Experiment Form</h3>
                  <button className="dialog-btn" onClick={toggleExpForm}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <Expform />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleSchoolForm}>
            School Form
          </button>
          {openSchoolForm && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">School Form</h3>

                  <button className="dialog-btn" onClick={toggleSchoolForm}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <SchoolForm />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleStudentForm}>
            Student Form
          </button>
          {openStudentForm && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Student Form</h3>
                  <button className="dialog-btn" onClick={toggleStudentForm}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <StudentForm />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleTeamForm}>
            Team Form
          </button>
          {openTeamForm && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Team Form</h3>
                  <button className="dialog-btn" onClick={toggleTeamForm}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <TeamForm />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleMentorForm}>
            Mentor Form
          </button>
          {openMentorForm && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Mentor Form</h3>
                  <button className="dialog-btn" onClick={toggleMentorForm}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <MentorForm />
                </div>
              </div>
            </div>
          )}
        </div>

        <button className="btn1">Reports</button>

        <div className="dropdown">
          <button className="dropdown-btn" onClick={toggleEventReport}>
            Event Report
          </button>
          {openEventReport && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Event Report</h3>
                  <button className="dialog-btn" onClick={toggleEventReport}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <EventReport />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleExpReport}>
            Experiment Report
          </button>
          {openExpReport && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Experiment Report</h3>
                  <button className="dialog-btn" onClick={toggleExpReport}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <ExperimentReport />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleSchoolReport}>
            School Report
          </button>
          {openSchoolReport && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">School Report</h3>
                  <button className="dialog-btn" onClick={toggleSchoolReport}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <SchoolReport />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleStudentReport}>
            Student Report
          </button>
          {openStudentReport && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Student Report</h3>
                  <button className="dialog-btn" onClick={toggleStudentReport}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <StudentReport />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleTeamReport}>
            Team Report
          </button>
          {openTeamReport && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Team Report</h3>
                  <button className="dialog-btn" onClick={toggleTeamReport}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <TeamReport />
                </div>
              </div>
            </div>
          )}

          <button className="dropdown-btn" onClick={toggleMentorReport}>
            Mentor Report
          </button>
          {openMentorReport && (
            <div className="dialog-container">
              <div className="dialog">
                <div className="dialog-header">
                  <h3 className="dialog-title">Mentor Report</h3>
                  <button className="dialog-btn" onClick={toggleMentorReport}>
                    Close
                  </button>
                </div>
                <div className="dialog-content">
                  <MentorReport />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="slider">
        <div className="slider-image"></div>
        <div className="slider-image"></div>
      </div> */}
{/* 
      <section id="main">
        <div class="container">
          <div class="row">
            <div class="about">
              <h2>About AIM</h2>
              <p>
                Atal Innovation Mission (AIM) is Government of India’s flagship
                initiative to create and promote a culture of innovation and
                entrepreneurship across the length and breadth of our country.
                AIM’s objective is to develop new programmes and policies for
                fostering innovation in different sectors of the economy,
                provide platforms and collaboration opportunities for different
                stakeholders, and create an umbrella structure to oversee the
                innovation &amp; entrepreneurship ecosystem of the country.
              </p>
              <button className="expand" onClick={handleClick}>
                {expanded ? "Read Less" : "Read More"}
              </button>
              <img src={Image1} alt="unknown" />
            </div>
          </div>
          {/* <a href="overview.php" class="btn btn-primary">Read More about AIM</a> */}
          {/* <div className="readmore">
            {expanded && (
              <div>
                <p>
                  Over the last 4 years, AIM has launched the Atal Tinkering Lab
                  (ATL) program. ATL is a state-of-the-art space established in
                  a school with a goal to foster curiosity and innovation in
                  young minds, between grade 6th to 12th across the country
                  through 21st century tools and technologies such as Internet
                  of Things, 3D printing, rapid prototyping tools, robotics,
                  miniaturized electronics, do-it-yourself kits and many more.
                  The aim is to stimulate a problem-solving innovative mindset
                  within the children of the ATL and nearby communities. Till
                  date, AIM has selected 10,000 schools in 680+ districts of the
                  country for the establishment of ATLs. More than 7000 schools
                  are funded till now and over 2 million students have access to
                  ATLs.
                </p>
                <div className="aboutimg">
                  <img src={Image2} alt="Unkonwn" />
                  <img src={Image3} alt="Unkonwn" />
                  <img src={Image4} alt="Unkonwn" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section class="cards1">
        <div class="cards">
          <div class="cards-icon">
            <p>
              <FontAwesomeIcon icon={faSchool} />
            </p>
          </div>
          <div class="cards-content">
            <h2 class="cards-description">10,000</h2>
            <h2 class="cards-title">
              <a href="https://aim.gov.in/atl.php" target="blank">
                Atal Tinkering Labs (ATL)
              </a>
            </h2>
          </div>
        </div>

        <div class="cards">
          <div class="cards-icon">
            <p>
            <FontAwesomeIcon icon={faUser} /> 
            </p>
          </div>
          <div class="cards-content">
            <h2 class="cards-description">69</h2>
            <h2 class="cards-title">
              <a href="https://aim.gov.in/aic.php" target="blank">
              Atal Incubation Centres (AIC)
              </a>
            </h2>
          </div>
        </div>
        <div class="cards">
          <div class="cards-icon">
            <p>
            <FontAwesomeIcon icon={faBuildingColumns} />
            </p>
          </div>
          <div class="cards-content">
            <h2 class="cards-description">14</h2>
            <h2 class="cards-title">
              <a href="https://aim.gov.in/acic.php" target="blank">
              Atal Community Innovation Centres
              </a>
            </h2>
          </div>
        </div>
        <div class="cards">
          <div class="cards-icon">
            <p>
            <FontAwesomeIcon icon={faThumbsUp} />
            </p>
          </div>
          <div class="cards-content">
            <h2 class="cards-description">40+</h2>
            <h2 class="cards-title">
              <a href="https://aim.gov.in/overview.php" target="blank">
              Domestic & International Partnerships
              </a>
            </h2>
          </div>
        </div>
   */}
     
      {/* </section> */} 
    </>
  );
};

export default Navbar;
