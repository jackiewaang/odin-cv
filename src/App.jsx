import Nav from "./Nav"
import Forms from "./Forms"
import Display from "./Display"
import { useState, useEffect } from "react"
import exampleData from "./exampleData"

function App() {

  const [sectionID, setSectionID] = useState(0);
  const [personal, setPersonal] = useState(exampleData.personalInfo);
  const [education, setEducation] = useState(exampleData.educations);
  const [experience, setExperience] = useState(exampleData.experiences);

  useEffect(() => {
    console.log(sectionID);
  }, [sectionID])

  const handleSection = (id) => {
    setSectionID(id);
  }

  const handleChange = (value, section, key) => {
    switch(section){
      case 0:
        setPersonal(prevPersonal => ({
          ...prevPersonal,
          [key]: value
        }))
        break;
      default:
        console.log("error");
    }
  }

  const addEducation = (section) => {
    if(section === 1){
      setEducation(prevEducation => [
        ...prevEducation,
        {
          id:prevEducation.length,
          school:"",
          degree:"",
          location:"",
          date:"",
        }
      ])
    } else if(section === 2){
      setExperience(prevExperience => [
        ...prevExperience,
        {
          id:prevExperience.length,
          company: "",
          position: "",
          location: "",
          date: "",
        }
      ])
    }
  }

  const handleArrays = (value, section, id, key) => {
    switch(section){
      case 1:
        setEducation(prevEducation => {
          if(prevEducation[id]){ // if index is there
            return prevEducation.map((edu, idx) =>
              idx === id ? {...edu, [key]: value } : edu
            )
          } else{
            const newEducation = [...prevEducation];
            newEducation[id] = {id:id, [key]: value};
            return newEducation;
          }
        })
      break;
      case 2:
        setExperience(prevExperience => {
          if(prevExperience[id]){
            return prevExperience.map((exp, idx) => 
              idx === id ? {...exp, [key]:value} : exp
            )
          } else{
            const newExperience = [...prevExperience];
            newExperience[id] = {id:id, [key]: value};
            return newExperience;
          }
        })
      break;
      default:
        return "some error";
    }
  }
  // make different handlers for education and experience
  return (
    <div className="h-screen bg-slate-800 grid grid-cols-12 gap-4">
      <Nav activeSection={sectionID} onBtnClick={handleSection}/>
      <Forms activeSection={sectionID} onOtherChange={handleArrays} onInfoChange={handleChange} sectionZero={personal} sectionOne={education} sectionTwo={experience} onAddEducation={addEducation}/> 
      <Display sectionZero={personal} sectionOne={education} sectionTwo={experience} />
    </div>
  )
}

export default App
