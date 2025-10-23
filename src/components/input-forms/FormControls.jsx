import "../../styles/form-controls.css"

function FormControls({section, onAdd, onCancel, isVisible}) {
  return (
    <>
      <button className={`add-btn ${isVisible ? "hidden" : ""}`} type="button" onClick={onAdd}>Add {section}</button>
      <button className={`cancel-btn ${!isVisible ? "hidden" : ""}`} type="button" onClick={onCancel}>Cancel</button>
      <button className={`save-btn ${!isVisible ? "hidden" : ""}`} type="submit">Save</button>
    </>
  )
}

export default FormControls;