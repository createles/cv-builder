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

  const [expEdit, setExpEdit] = useState(false);

  const handleExpEditChange = () => {
    setExpEdit(!expEdit);
  }

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

  const sampleList = [{
    id: 9393123,
    companyName: "Wayne Enterprises",
    position: "CEO", 
    startData: "10/12/2020",
    endDate: "10/13/2025",
    location: "Gotham City",
    description: "My Company",
  },{
    id: 42342423,
    companyName: "Arkham Asylum",
    position: "Patient", 
    startData: "06/25/2005",
    endDate: "06/26/2006",
    location: "Gotham",
    description: "Patient",
  }]

  return (
    <div className="app-body">
      <div className="input-forms">
        <PersonalInfoForm personalInfo={personalInfo} onChange={handlePersonalInfoChange}></PersonalInfoForm>
        <ExperienceForm expEdit={expEdit}>
          <AddButton name="Add experience" onChange={handleExpEditChange}></AddButton>
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
        sampleList={sampleList}
      ></PrintPreview>
    </div>
  );
}

// CONTINUE: AddButton triggering setExpInputs

export default App
