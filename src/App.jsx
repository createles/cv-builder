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
    email: "",
    contactNumber: "",
    location: "",
  });

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const [experienceList, setExperienceList] = useState([]);

  const [experienceData, setExperienceData] = useState([{
    id: crypto.randomUUID(),
    companyName: "",
    position: "", 
    startData: "",
    endDate: "",
    location: "",
    description: "",
  }]);

  const handleExperienceListChange = (event) => {
    const { name, value } = event.target;
    setExperienceList((prevExp) => ({
      ...prevExp,
      [name]: value,
    }));
  };

  const [expInputs, setExpInputs] = useState(false);

  return (
    <div className="app-body">
      <div className="input-forms">
        <PersonalInfoForm personalInfo={personalInfo} onChange={handlePersonalInfoChange}></PersonalInfoForm>
        <ExperienceForm experienceList={experienceList} onChange={handleExperienceListChange}>
          <AddButton name="Add experience"></AddButton> 
        </ExperienceForm>
        <EducationForm></EducationForm>
        <SkillsForm></SkillsForm>
      </div>
      <PrintPreview
        fullName={personalInfo.fullName}
        email={personalInfo.email}
        contactNumber={personalInfo.contactNumber}
        location={personalInfo.location}
      ></PrintPreview>
    </div>
  );
}

// CONTINUE: AddButton triggering setExpInputs

export default App
