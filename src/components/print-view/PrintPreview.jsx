import "../../styles/print-preview.css"
import Header from "./Header";
import DataBlock from "./DataBlock";

function PrintPreview({fullName, title, email, contactNumber, location, link, experienceList, currentExp, educList, currentEduc, skillsList, currentSkills}) {
  let displayList = currentExp
    ? experienceList.map(entry => entry.id === currentExp.id ? currentExp : entry)
    : [...experienceList];

  const isAddingNew = currentExp && !experienceList.some(entry => entry.id === currentExp.id)

  if (isAddingNew) {
    displayList.push(currentExp)
  }
  
  return (
    <div className="print-preview">
      <Header fullName={fullName} title={title} email={email} contactNumber={contactNumber} location={location} link={link}></Header>
      <div className="experience-section">
        <h2>Experience</h2>
        {displayList.length > 0 ? displayList.map(experienceEntry => (
          <DataBlock 
            key={experienceEntry.id}
            experienceEntry={experienceEntry}/>
        ))
      : null }
        <h2>Education</h2>
        <h2>Skills</h2>
      </div>
    </div>
  )
}

export default PrintPreview;