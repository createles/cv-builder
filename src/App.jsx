import { useState, useMemo } from 'react'
import './App.css'
import { useLocalStorage } from './hooks/useLocalStorage'
import PrintPreview from './components/print-view/PrintPreview'
import DataForm from './components/input-forms/DataForm'
import SavedEntry from './components/input-forms/SavedEntry'
import FormControls from './components/input-forms/FormControls'
import PersonalInfoForm from './components/input-forms/PersonalInfoForm'
import { samplePersonalInfo, sampleExperienceList, sampleEducList, sampleSkillsList } from './sample-data'


// Configurations for each form per section
const experienceFields = [
  { label: "Company / Organization / Project", type: "text", name: "companyName", required: true },
  { label: "Position", type: "text", name: "position", required: true  },
  { label: "Start Date", type: "month", name: "startDate" },
  { label: "End Date", type: "month", name: "endDate" },
  { label: "Location", type: "text", name: "companyLocation" },
  { label: "Description", type: "textarea", name: "description" },
];

const educationFields = [
  { label: "Institution / School Name", type: "text", name: "institution", required: true  },
  { label: "Major / Field of Study", type: "text", name: "field", required: true  },
  { label: "Start Date", type: "month", name: "startDate" },
  { label: "End Date", type: "month", name: "endDate" },
  { label: "Location", type: "text", name: "educLocation"},
  { label: "Relevant Coursework", type: "textarea", name: "courseWork" },
];

const skillsFields = [
  { label: "Discipline", type: "text", name: "discipline", required: true },
  { label: "Subdiscipline", type: "text", name: "subdiscipline"},
  { label: "Description", type: "textarea", name: "description"},
]

function App() {
  const [personalInfo, setPersonalInfo] = useLocalStorage("personalInfo", {
    fullName: "",
    title: "",
    email: "",
    contactNumber: "",
    location: "",
    link: "",
  });

  // master list for experiences
  const [experienceList, setExperienceList] = useLocalStorage("experienceList", []);
  const [currentExp, setCurrentExp] = useState(null);  // temporary draft experience data
  const [expInput, setExpInput] = useState(false);   // state for opening experience form

    /* master list for education entries */
  const [educList, setEducList] = useLocalStorage("educList", []);
  const [currentEduc, setCurrentEduc] = useState(null);   /* temporary draft educ data */
  const [educInput, setEducInput] = useState(false);   /* state for opening education form */

  /* master list for education entries */
  const [skillsList, setSkillsList] = useLocalStorage("skillsList", []);
  const [currentSkills, setCurrentSkills] = useState(null);   /* temporary draft skills data */
  const [skillsInput, setSkillsInput] = useState(false);   /* state for opening skills form */

  const handleClearResume = () => {
    localStorage.clear();
    window.location.reload();
  }

  const handleLoadSample = () => {
    // load resume sample data
    setPersonalInfo(samplePersonalInfo);
    setExperienceList(sampleExperienceList);
    setEducList(sampleEducList);
    setSkillsList(sampleSkillsList);

    // close all form inputs
    setCurrentExp(null);
    setExpInput(false);
    setCurrentEduc(null);
    setEducInput(false);
    setCurrentSkills(null);
    setSkillsInput(false);
  }

  const handlePrint = () => {
    window.print();
  };

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
        location: "",
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

    setInput(false)
    setCurrentItem(null);
  };

  const handleFormSubmit= (event, formCategory) => {
    event.preventDefault();

    handleSaveClick(formCategory);
  };

  const handleSaveClick = (formCategory) => {
    const { list, setList, currentItem, setCurrentItem, setInput } =
      formConfig[formCategory];

    // if (!currentItem) {
    //   console.error("Save clicked, but no data available to save.")
    //   return;
    // }

    const editExisting = list.some(
      (entry) => entry.id === currentItem.id
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

  const handleEntryEdit = (idToEdit, formCategory) => {
    const { list, setCurrentItem, setInput } = formConfig[formCategory];

    const entryToEdit = list.find((entry) => entry.id === idToEdit);
    if (entryToEdit) {
      setCurrentItem(entryToEdit);
      setInput((prevInput) => !prevInput);
    }
  };

  const handleEntryDelete = (idToDelete, formCategory) => {
    const { setList } = formConfig[formCategory];

    setList((prevList) =>
      prevList.filter((entry) => entry.id !== idToDelete)
    );
  };

  return (
    <div className="app-body">
      <div className="input-forms">
        <button className="clear-btn" onClick={handleClearResume}>clear resume</button>
        <button className="load-sample-btn" onClick={handleLoadSample}>load sample</button>
        <button className="print-btn" onClick={handlePrint}>print</button>
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
          onSubmit={(event) => handleFormSubmit(event, "exp")}
        >
          {experienceList.length > 0 && !expInput ? experienceList.map(entry => (
            <SavedEntry
              key={entry.id}
              entry={entry}
              entryTitle={entry.companyName}
              onEdit={() => handleEntryEdit(entry.id, "exp")}
              onDelete={() => handleEntryDelete(entry.id, "exp")}
            />
          )) : null }
          <FormControls
              section="experience"
              onAdd={() => handleAddClick("exp")}
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
          onSubmit={(event) => handleFormSubmit(event, "educ")}
        >
          {educList.length > 0 && !educInput ? educList.map(entry => (          
            <SavedEntry
              key={entry.id}
              entry={entry}
              entryTitle={entry.institution}
              onEdit={() => handleEntryEdit(entry.id, "educ")}
              onDelete={() => handleEntryDelete(entry.id, "educ")}
          />
          )) : null }
          <FormControls
              section="education"
              onAdd={() => handleAddClick("educ")}
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
          onSubmit={(event) => handleFormSubmit(event, "skills")}
        >
          {skillsList.length > 0 && !skillsInput ? skillsList.map(entry => (          
            <SavedEntry
              key={entry.id}
              entry={entry}
              entryTitle={entry.discipline}
              onEdit={() => handleEntryEdit(entry.id, "skills")}
              onDelete={() => handleEntryDelete(entry.id, "skills")}
          />
          )) : null }
          <FormControls
              section="skills"
              onAdd={() => handleAddClick("skills")}
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
