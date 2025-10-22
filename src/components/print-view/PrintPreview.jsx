import "../../styles/print-preview.css"
import Header from "./Header";
import DataBlock from "./DataBlock";

function PrintPreview({personalInfo, experienceList, currentExp, educList, currentEduc, skillsList, currentSkills}) {
  
  function createDisplayList(list, currentItem) {
    let displayList = currentItem
    ? list.map(entry => (entry.id === currentItem.id) ? currentItem : entry)
    : [...list];


    const isAddingNew = currentItem && !list.some(entry => entry.id === currentItem.id);

    if (isAddingNew) {
      displayList.push(currentItem);
    }

    return displayList;
  }

  const expDisplayList = createDisplayList(experienceList, currentExp);
  const educDisplayList = createDisplayList(educList, currentEduc);
  const skillsDisplayList = createDisplayList(skillsList, currentSkills);

  // Date formatting helper 
  const formatDates = (entry) => {
    if(!entry.startDate) return null;
    const formattedStart = entry.startDate.replace('-', '/');
    const formattedEnd = entry.endDate ? entry.endDate.replace('-', '/') : 'present';
    return `${formattedStart} - ${formattedEnd}`;
  };

  return (
    <div className="print-preview">
      <Header fullName={personalInfo.fullName} title={personalInfo.title} email={personalInfo.email} contactNumber={personalInfo.contactNumber} location={personalInfo.location} link={personalInfo.link}></Header>
      
      {/* {Experience Preview} */}
      {expDisplayList.length > 0 && (
        <div className="experience-section">
          <h2>Experience</h2>
          {expDisplayList.map(entry => (
            <DataBlock 
              key={entry.id}
              title={entry.companyName}
              subtitle={entry.position}
              dates={formatDates(entry)}
              location={entry.companyLocation}
              descriptionList={(entry.description || '').split("\n").filter(Boolean)}
            />
        ))}
        </div>
      )}

      {/* {Education Preview} */}
      {educDisplayList.length > 0 && (
        <div className="education-section">
          <h2>Education</h2>
          {educDisplayList.map(entry => (
            <DataBlock
            key={entry.id}
            title={entry.institution}
            subtitle={entry.field}
            dates={formatDates(entry)}
            location={null}
            descriptionList={(entry.courseWork || '').split("\n").filter(Boolean)}
            />
        ))}
        </div>
      )}

      {skillsDisplayList.length > 0 && (
        <div className="skills-section">
          <h2>Skills</h2>
          {skillsDisplayList.map(entry => (
            <DataBlock
            key={entry.id}
            title={entry.discipline}
            subtitle={entry.subdiscipline}
            dates={null}
            location={null}
            descriptionList={(entry.specs || '').split("\n").filter(Boolean)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default PrintPreview;