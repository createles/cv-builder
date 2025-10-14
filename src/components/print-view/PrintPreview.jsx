import "../../styles/print-preview.css"

function PrintPreview({fullName}) {
  return (
    <div className="print-preview">
      <p>{fullName}</p>
    </div>
  )
}

export default PrintPreview;