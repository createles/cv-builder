import { useState, useMemo } from 'react'
import './App.css'
import InputWrapper from './components/input-forms/InputWrapper'
import PrintPreview from './components/print-view/PrintPreview'
import DataForm from './components/input-forms/DataForm'
import FormControls from './components/input-forms/FormControls'
import PersonalInfoForm from './components/input-forms/PersonalInfoForm'
import ExperienceForm from './components/input-forms/ExperienceForm'
import EducationForm from './components/input-forms/EducationForm'
import SkillsForm from './components/input-forms/SkillForm'
import AddButton from './components/input-forms/AddButton'
import SavedEntry from './components/input-forms/SavedEntry'



// Configurations for each form per section
const experienceFields = [
  { label: "Company / Organization / Project", type: "text", name: "companyName"},
  { label: "Position", type: "text", name: "position" },
  { label: "Start Date", type: "month", name: "startDate" },
  { label: "End Date", type: "month", name: "endDate" },
  { label: "Location", type: "text", name: "companyLocation" },
  { label: "Description", type: "textarea", name: "description" },
];

const educationFields = [
  { label: "Institution / School Name", type: "text", name: "institution" },
  { label: "Major / Field of Study", type: "text", name: "field" },
  { label: "Start Date", type: "month", name: "startDate" },
  { label: "End Date", type: "month", name: "endDate" },
  { label: "Relevant Coursework", type: "textarea", name: "courseWork" },
];

const skillsFields = [
  { label: "Discipline", type: "text", name: "discipline"},
  { label: "Subdiscipline", type: "text", name: "subdiscipline"},
  { label: "Description", type: "textarea", name: "description"},
]

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    title: "",
    email: "",
    contactNumber: "",
    location: "",
    link: "",
  });

  // master list for experiences
  const [experienceList, setExperienceList] = useState([]);
  const [currentExp, setCurrentExp] = useState(null);  // temporary draft experience data
  const [expInput, setExpInput] = useState(false);   // state for opening experience form

    /* master list for education entries */
  const [educList, setEducList] = useState([]);
  const [currentEduc, setCurrentEduc] = useState(null);   /* temporary draft educ data */
  const [educInput, setEducInput] = useState(false);   /* state for opening education form */

  /* master list for education entries */
  const [skillsList, setSkillsList] = useState([]);
  const [currentSkills, setCurrentSkills] = useState(null);   /* temporary draft skills data */
  const [skillsInput, setSkillsInput] = useState(false);   /* state for opening skills form */

  const formConfig = useMemo(() => ({
    pInfo: {
      list: personalInfo,
      setList: setPersonalInfo,
    },
    exp: {
      list: experienceList,
      setList: setExperienceList,
      currentItem: currentExp,
      setCurrentItem: setCurrentExp,
      setInput: setExpInput,
      getNewItem: () => ({
        id: crypto.randomUUID(),
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        companyLocation: "",
        description: "",
      }),
    },
    educ: {
      list: educList,
      setList: setEducList,
      currentItem: currentEduc,
      setCurrentItem: setCurrentEduc,
      setInput: setEducInput,
      getNewItem: () => ({
        id: crypto.randomUUID(),
        institution: "",
        field: "",
        startDate: "",
        endDate: "",
        courseWork: "",
      })
    },
    skills: {
      list: skillsList,
      setList: setSkillsList,
      currentItem: currentSkills,
      setCurrentItem: setCurrentSkills,
      setInput: setSkillsInput,
      getNewItem: () => ({
        id: crypto.randomUUID(),
        discipline: "",
        subdiscipline: "",
        description: "",
      })
    },
  }), [
    // dependency array
    personalInfo, setPersonalInfo,
    experienceList, setExperienceList, currentExp, setCurrentExp, setExpInput,
    educList, setEducList, currentEduc, setCurrentEduc, setEducInput,
    skillsList, setSkillsList, currentSkills, setCurrentSkills, setSkillsInput
    ]
  );

  // click handler for opening form
  const handleAddClick = (formCategory) => {
    const { setInput, setCurrentItem, getNewItem} =
      formConfig[formCategory];

    setInput((prevInput) => !prevInput); // show form        
    setCurrentItem(getNewItem); // set form to blanks
  };

  const handleCancelClick = (formCategory) => {
    const { setInput, setCurrentItem } =
      formConfig[formCategory];

    setInput((prevInput) => !prevInput)
    setCurrentItem(null);
  };

  const handleSaveClick = (formCategory) => {
    const { list, setList, currentItem, setCurrentItem, setInput } =
      formConfig[formCategory];

    const editExisting = list.some(
      (entry) => entry.id === currentExp.id
    );

    if (editExisting) {
      setList((prevList) =>
        prevList.map((entry) =>
          entry.id === currentItem.id ? currentItem : entry
        )
      ); 
    } else {
      setList((prevList) => [...prevList, currentItem]); // add temp data to saved list
    }
    
    setCurrentItem(null); // clear temp data
    setInput((prevInput) => !prevInput);
  };

  // Change handler for form inputs
  const handleFormChange = (event, stateSetter) => {
    const { name, value } = event.target;

    stateSetter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleEntryEdit = (idToEdit) => {
    const entryToEdit = experienceList.find((entry) => entry.id === idToEdit);

    console.log(entryToEdit);

    if (entryToEdit) {
      setCurrentExp(entryToEdit);
      setExpInput(!expInput);
    }
  };

  const handleEntryDelete = (idToDelete) => {
    setExperienceList((prevList) =>
      prevList.filter((entry) => entry.id !== idToDelete)
    );
  };

  return (
    <div className="app-body">
      <div className="input-forms">
        <PersonalInfoForm
          personalInfo={personalInfo}
          onChange={(event) => handleFormChange(event, setPersonalInfo)}
        ></PersonalInfoForm>
        <DataForm
          title="Experience"
          wrapId="experience-form"
          isVisible={expInput}
          formData={currentExp}
          onChange={(event) => handleFormChange(event, setCurrentExp)}
          fields={experienceFields}
        >
          <FormControls
              section="experience"
              onAdd={() => handleAddClick("exp")}
              onSave={() => handleSaveClick("exp")}
              onCancel={() => handleCancelClick("exp")}
              isVisible={expInput}
          />
        </DataForm>
        <DataForm
          title="Education"
          wrapId="education-form"
          isVisible={educInput}
          formData={currentEduc}
          onChange={(event) => handleFormChange(event, setCurrentEduc)}
          fields={educationFields}
        >
          <FormControls
              section="education"
              onAdd={() => handleAddClick("educ")}
              onSave={() => handleSaveClick("educ")}
              onCancel={() => handleCancelClick("educ")}
              isVisible={educInput}
          />
        </DataForm>
        <DataForm
          title="Skills"
          wrapId="skills-form"
          isVisible={skillsInput}
          formData={currentSkills}
          onChange={(event) => handleFormChange(event, setCurrentSkills)}
          fields={skillsFields}
        >
          <FormControls
              section="skills"
              onAdd={() => handleAddClick("skills")}
              onSave={() => handleSaveClick("skills")}
              onCancel={() => handleCancelClick("skills")}
              isVisible={skillsInput}
          />
        </DataForm>
      </div>
      <PrintPreview
        personalInfo={personalInfo}
        experienceList={experienceList}
        currentExp={currentExp}
        educList={educList}
        currentEduc={currentEduc}
        skillsList={skillsList}
        currentSkills={currentSkills}
      ></PrintPreview>
    </div>
  );
}

export default App
