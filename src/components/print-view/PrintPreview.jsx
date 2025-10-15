import "../../styles/print-preview.css"
import Header from "./Header";
import ExperienceBlock from "./ExperienceSection";

function PrintPreview({fullName, title, email, contactNumber, location, link, sampleList}) {
  return (
    <div className="print-preview">
      <Header fullName={fullName} title={title} email={email} contactNumber={contactNumber} location={location} link={link}></Header>
      <div className="experience-section">
        <h2>Experience</h2>
        {sampleList.map(experienceEntry => (
          <ExperienceBlock experienceEntry={experienceEntry}></ExperienceBlock>
        ))}
      </div>
    </div>
  )
}

export default PrintPreview;