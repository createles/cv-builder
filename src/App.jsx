import { useState } from 'react'
import './App.css'
import InputWrapper from './components/input-forms/InputWrapper'
import PrintPreview from './components/print-view/PrintPreview'
import PersonalInfoForm from './components/input-forms/PersonalInfoForm'
import ExperienceForm from './components/input-forms/ExperienceForm'
import EducationForm from './components/input-forms/EducationForm'
import SkillsForm from './components/input-forms/SkillForm'

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

  return (
    <div className="app-body">
      <div className="input-forms">
        <PersonalInfoForm personalInfo={personalInfo} onChange={handlePersonalInfoChange}></PersonalInfoForm>
        <ExperienceForm></ExperienceForm>
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

export default App
