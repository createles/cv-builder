import { useState } from 'react'
import './App.css'
import InputWrapper from './components/input-forms/InputWrapper'
import PrintPreview from './components/print-view/PrintPreview'
import PersonalInfoForm from './components/input-forms/PersonalInfoForm'
import ExperienceForm from './components/input-forms/ExperienceForm'
import EducationForm from './components/input-forms/EducationForm'
import SkillsForm from './components/input-forms/SkillForm'
import AddButton from './components/input-forms/AddButton'
import SavedEntry from './components/input-forms/SavedEntry'

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
  const [currentSkills, setCurrentSkills] = useState(null);   /* temporary draft educ data */
  const [skillsInput, setSkillsInput] = useState(false);   /* state for opening education form */

  const formConfig = {
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
    },
  };

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
        <ExperienceForm
          formData={currentExp}
          expInput={expInput}
          onChange={(event) => handleFormChange(event, setCurrentExp)}
        >
          {experienceList.length > 0 && (
            <div className={`exp-entries ${expInput ? "hidden" : ""}`}>
              {experienceList.map((entry) => (
                <SavedEntry
                  key={entry.id}
                  entry={entry}
                  onEdit={handleEntryEdit}
                  onDelete={handleEntryDelete}
                ></SavedEntry>
              ))}
            </div>
          )}
          <AddButton
            name="Add experience"
            onClick={() => handleAddClick("exp")}
            input={expInput}
          ></AddButton>
          <div className={`btn-wrap ${!expInput ? "hidden" : ""}`}>
            <button className="cancel-btn" onClick={() => handleCancelClick("exp")}>
              Cancel
            </button>
            <button className="save-btn" onClick={() => handleSaveClick("exp")}>
              Save
            </button>
          </div>
        </ExperienceForm>
        <EducationForm
          formData={currentEduc}
          educInput={educInput}
          onChange={(event) => handleFormChange(event, setCurrentEduc)}
        >
          <AddButton
            name="Add education"
            onClick={() => handleAddClick("educ")}
            input={educInput}
          ></AddButton>
          <div className={`btn-wrap ${!educInput ? "hidden" : ""}`}>
            <button className="cancel-btn" onClick={() => handleCancelClick("educ")}>
              Cancel
            </button>
            <button className="save-btn" onClick={() => handleSaveClick("educ")}>
              Save
            </button>
          </div>
        </EducationForm>
        <SkillsForm>
          <AddButton
            name="Add skills"
            onClick={() => handleAddClick("skills")}
            input={skillsInput}
          ></AddButton>
        </SkillsForm>
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
