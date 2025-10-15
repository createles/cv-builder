import "../../styles/print-preview.css"
import Header from "./Header";

function PrintPreview({fullName, title, email, contactNumber, location, link}) {
  return (
    <div className="print-preview">
      <Header fullName={fullName} title={title} email={email} contactNumber={contactNumber} location={location} link={link}></Header>
    </div>
  )
}

export default PrintPreview;