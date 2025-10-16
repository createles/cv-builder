import { useState } from 'react'
import './App.css'
import InputWrapper from './components/input-forms/InputWrapper'
import PrintPreview from './components/print-view/PrintPreview'
import PersonalInfoForm from './components/input-forms/PersonalInfoForm'
import ExperienceForm from './components/input-forms/ExperienceForm'
import EducationForm from './components/input-forms/EducationForm'
import SkillsForm from './components/input-forms/SkillForm'
import AddButton from './components/input-forms/AddButton'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    title: "",
    email: "",
    contactNumber: "",
    location: "",
    link: "",
  });

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // master list for experiences
  const [experienceList, setExperienceList] = useState([]);

  // temporary draft experience data
  const [currentExp, setCurrentExp] = useState([]);
  
  // state for opening experience form
  const [expInput, setExpInput] = useState(false);

  // click handler for opening form
  const handleAddClick = () => { 
    setExpInput(!expInput); // show form
    setCurrentExp({ // set temp data
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      startDate: "",
      endDate: "",
      companyLocation: "",
      description: "",
    })
  }

  const handleCancelClick = () => {
    setExpInput(!expInput); // hide form
    setCurrentExp(null); // clear temp data
  }

  const handleSaveClick = () => {
    setExperienceList([...experienceList, currentExp]); // add temp data to saved list
    setCurrentExp(null); // clear temp data
  }

  const handleExpFormChange = (event) => {
    const { name, value } = event.target;
    setCurrentExp((prevExp) => ({
      ...prevExp,
      [name]: value,
    }));
  };

  const handleExperienceListChange = (event) => {
    const { name, value } = event.target;
    setExperienceList((prevExp) => ({
      ...prevExp,
      [name]: value,
    }));
  };

  return (
    <div className="app-body">
      <div className="input-forms">
        <PersonalInfoForm personalInfo={personalInfo} onChange={handlePersonalInfoChange}></PersonalInfoForm>
        <ExperienceForm expInput={expInput} onChange={handleExpFormChange}>
          <AddButton name="Add experience" onChange={handleAddClick} input={expInput}></AddButton>
          <div className={`btn-wrap ${!expInput ? 'hidden' : ''}`}>
            <button className="cancel-btn" onClick={handleCancelClick}>Cancel</button>
            <button className="save-btn">Save</button>
          </div>
        </ExperienceForm>
        <EducationForm></EducationForm>
        <SkillsForm></SkillsForm>
      </div>
      <PrintPreview
        fullName={personalInfo.fullName}
        title={personalInfo.title}
        email={personalInfo.email}
        contactNumber={personalInfo.contactNumber}
        location={personalInfo.location}
        link={personalInfo.link}
        experienceList={experienceList}
        currentExp={currentExp}
      ></PrintPreview>
    </div>
  );
}

export default App
