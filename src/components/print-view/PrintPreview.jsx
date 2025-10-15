import "../../styles/print-preview.css"
import Header from "./Header";
import ExperienceSection from "./ExperienceSection";

function PrintPreview({fullName, title, email, contactNumber, location, link, sampleList}) {
  return (
    <div className="print-preview">
      <Header fullName={fullName} title={title} email={email} contactNumber={contactNumber} location={location} link={link}></Header>
      <ExperienceSection sampleList={sampleList}></ExperienceSection>
    </div>
  )
}

export default PrintPreview;