import "../../styles/print-preview.css"
import Header from "./Header";

function PrintPreview({fullName, email, contactNumber, location}) {
  return (
    <div className="print-preview">
      <Header fullName={fullName} email={email} contactNumber={contactNumber} location={location}></Header>
    </div>
  )
}

export default PrintPreview;