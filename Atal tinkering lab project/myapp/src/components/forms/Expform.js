import React, { useState } from "react";
// import "./Expform.css";
import db from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";

const Form = () => {
 
  const [UserData, setUserData] = useState({
    id:'',
    name:'',
    intro:'',
  });

  const postUserData = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  
  const [Goals, setGoals] = useState([""]);

  const goalhandleChange = (event, index) => {

    let updatedGoals = [...Goals];
    updatedGoals[index] = event.target.value;
    setGoals(updatedGoals);
  };

  const addgoal = (Event) => {
    Event.preventDefault();
    setGoals([...Goals, ""]);
  };

  const deletegoal=(index)=>{
    const deletegoal=[...Goals]
    deletegoal.splice(index,1)
    setGoals(deletegoal)
  }

  const [materials, setmaterials] = useState([""]);
  const materialhandleChange = (event, index) => {
    let updatedmaterial = [...materials];
    updatedmaterial[index] = event.target.value;
    setmaterials(updatedmaterial);
  };

  const addmaterial = (Event) => {
    Event.preventDefault();
    setmaterials([...materials, ""]);
  };

  const deletematerial=(index)=>{
    const deletematerial=[...materials]
    deletematerial.splice(index,1)
    setmaterials(deletematerial)
  }

  const [instructions, setinstructions] = useState([""]);

  const instructionhandleChange = (event, index) => {

    let updatedinstruction = [...instructions];
    updatedinstruction[index] = event.target.value;
    setinstructions(updatedinstruction);
  };

  const addinstruction = (Event) => {
    Event.preventDefault();
  
    setinstructions([...instructions, ""]);
  };

  const deleteinstruction=(index)=>{
    const deleteinstruction=[...instructions]
    deleteinstruction.splice(index,1)
    setinstructions(deleteinstruction)
  }
  const [tips, settips] = useState([""]);

  const tiphandleChange = (event, index) => {

    let updatedtips = [...tips];
    updatedtips[index] = event.target.value;
    settips(updatedtips);
  };

  const addtip = (Event) => {
    Event.preventDefault();
  
    settips([...tips, ""]);
  };

  const deletetip=(index)=>{
    const deletetip=[...tips]
    deletetip.splice(index,1)
    settips(deletetip)
  }

  const [assessment, setassessment] = useState([""]);

  const assessmenthandleChange = (event, index) => {

    let updatedassessment = [...assessment];
    updatedassessment[index] = event.target.value;
    setassessment(updatedassessment);
  };

  const addassessment = (Event) => {
    Event.preventDefault();
  
    setassessment([...assessment, ""]);
  };

  const deleteassessment=(index)=>{
    const deleteassessment=[...assessment]
    deleteassessment.splice(index,1)
    setassessment(deleteassessment)
  }
  const [extensions, setextensions] = useState([""]);

  const extensionshandleChange = (event, index) => {

    let updatedextensions = [...extensions];
    updatedextensions[index] = event.target.value;
    setextensions(updatedextensions);
  };

  const addextensions = (Event) => {
    Event.preventDefault();
  
    setextensions([...extensions, ""]);
  };

  const deleteextensions=(index)=>{
    const deleteextensions=[...extensions]
    deleteextensions.splice(index,1)
    setextensions(deleteextensions)
  }


  const [Resources, setResources] = useState([""]);

  const ResourceshandleChange = (event, index) => {

    let updatedResources = [...Resources];
    updatedResources[index] = event.target.value;
    setResources(updatedResources);
  };

  const addResources = (Event) => {
    Event.preventDefault();
  
    setResources([...Resources, ""]);
  };

  const deleteResources=(index)=>{
    const deleteResources=[...Resources]
    deleteResources.splice(index,1)
    setResources(deleteResources)
  }



  


  const data=collection(db,"experimentdata")
  const handlesubmit=async(e)=>{
    e.preventDefault();
    addDoc(data,{
      id:UserData.id,
      name:UserData.name,
      intro:UserData.intro,
      Goals:Goals,
      materials:materials,
      instructions:instructions,
      tips:tips,
      assessment:assessment,
      extensions:extensions,
      Resources:Resources

    }).then(alert("submitted successsfully"))

    setUserData({
      id:"",
      name:"",
      intro:"",
    
    })

    setGoals([{ Goals: "" }]);
    setmaterials([{ materials: "" }]);
    setinstructions([{instructions : "" }]);
    settips([{ tips: "" }]);
    setassessment([{ assessment: "" }]);
    setextensions([{ extensions: "" }]);
    setResources([{ Resources: "" }]);

    }

  return (
    <div>
      <form  onSubmit={handlesubmit}>
        <div >
          <div className="first">
            {/* <h1 > TINKERING ACTIVITY </h1> */}
          </div>

          <div>
            <label htmlfor="id"> TA ID</label>
            <input id="id" type="text" name="id" value={UserData.id} onChange={postUserData}/>
          </div>
          <div>
            <label htmlfor="name"> TA NAME</label>
            <input name="name" id="feild2" type="text" value={UserData.name} onChange={postUserData}/>
          </div>

          <div>
            <label htmlfor="intro"> INTRODUCTION</label>
            <input id="intro" type="text" name="intro" value={UserData.intro} onChange={postUserData}
            />
          </div>

          <div>
            <label>GOALS</label>
          {Goals.map((goal,index)=>(
            <span key={index}>
            <input id="Goals" type="text" name="Goals" value={goal.Goals} onChange={(event)=>goalhandleChange(event,index)}/>
            </span>
          ))}
            <button className="add"  type="button"  onClick={addgoal}><FontAwesomeIcon icon={faPlus} /></button>
            <button className="delete"  type="button" onClick={deletegoal}><FontAwesomeIcon icon={faMinus} /></button>
          </div>

          <div>
            <label htmlfor="materials"> MATERIALS</label>
           {materials.map((material,index)=>(
            <span key={index}>
              <input id="materials" type="text" name="materials" value={material.materials} onChange={(event)=>materialhandleChange(event,index)} />
            </span>
           ))}
            <button className="add"  type="button"  onClick={addmaterial}><FontAwesomeIcon icon={faPlus} /></button>
            <button className="delete"  type="button" onClick={deletematerial}><FontAwesomeIcon icon={faMinus} /></button>
          </div>

          <div>
            <label htmlfor="instructions"> INSTRUCTIONS </label>
          { instructions.map((instruction,index)=>(
            <span key={index}> 
            <input type="text" id="instrucitons" name="instrucitons" value={instruction.instructions} onChange={(event)=>instructionhandleChange(event,index)}  />
            </span>

          ))}

            <button className="add"  type="button"  onClick={addinstruction}><FontAwesomeIcon icon={faPlus} /></button>
            <button className="delete"  type="button" onClick={deleteinstruction}><FontAwesomeIcon icon={faMinus} /></button>
          </div>

          <div >
            <label htmlfor="tips"> TIPS </label>
            { tips.map((tip,index)=>(
            <span key={index}> 
            <input type="text" id="tips" name="tips" value={tip.tips} onChange={(event)=>tiphandleChange(event,index)}  />
            </span>
            ))}
            <button className="add"  type="button"  onClick={addtip}><FontAwesomeIcon icon={faPlus} /></button>
            <button className="delete"  type="button" onClick={deletetip}><FontAwesomeIcon icon={faMinus} /></button>
          </div>

          <div>
            <label htmlfor="assessment"> ASSESSMENT</label>
            { assessment.map((assessments,index)=>(
            <span key={index}> 
            <input type="text" id="assessment" name="assessment" value={assessments.assessment} onChange={(event)=>assessmenthandleChange(event,index)}  />
            </span>
            ))}
            <button className="add"  type="button"  onClick={addassessment}><FontAwesomeIcon icon={faPlus} /></button>
            <button className="delete"  type="button" onClick={deleteassessment}><FontAwesomeIcon icon={faMinus} /></button>
          </div>
          <div >
            <label htmlfor="extensions"> EXTENSIONS</label>
            { extensions.map((extension,index)=>(
            <span key={index}> 
            <input type="text" id="extensions" name="extensions" value={extension.extensions} onChange={(event)=>extensionshandleChange(event,index)}  />
            </span>
            ))}
            <button className="add"  type="button"  onClick={addextensions}><FontAwesomeIcon icon={faPlus} /></button>
            <button className="delete"  type="button" onClick={deleteextensions}><FontAwesomeIcon icon={faMinus} /></button>
          </div>

          <div >
            <label htmlfor="Resources"> RESOURCES</label>
            { Resources.map((resource,index)=>(
            <span key={index}> 
            <input type="text" id="Resources" name="Resources" value={resource.Resources} onChange={(event)=>ResourceshandleChange(event,index)}  />
            </span>
            ))}
            <button className="add"  type="button"  onClick={addResources}><FontAwesomeIcon icon={faPlus} /></button>
            <button className="delete"  type="button" onClick={deleteResources}><FontAwesomeIcon icon={faMinus} /></button>
          </div>
             <input className="submit1" type="submit" id="submit" value="Submit" />
              <input className="submit1" type="reset" id="reset1 " value="Reset"/>
        </div>
      </form>
    </div>
  );
};

export default Form;