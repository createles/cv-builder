import "../../styles/print-preview.css"
import Header from "./Header";
import ExperienceBlock from "./ExperienceBlock";

function PrintPreview({fullName, title, email, contactNumber, location, link, experienceList, currentExp}) {
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
          <ExperienceBlock 
            key={experienceEntry.id}
            experienceEntry={experienceEntry}/>
        ))
      : null }
      </div>
    </div>
  )
}

export default PrintPreview;