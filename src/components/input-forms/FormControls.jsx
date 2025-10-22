import "../../styles/form-controls.css"

function FormControls({section, onAdd, onCancel, onSave, isVisible}) {
  return (
    <>
      <button className={`add-btn ${isVisible ? "hidden" : ""}`} onClick={onAdd}>Add {section}</button>
      <button className={`cancel-btn ${!isVisible ? "hidden" : ""}`} onClick={onCancel}>Cancel</button>
      <button className={`save-btn ${!isVisible ? "hidden" : ""}`} onClick={onSave}>Save</button>
    </>
  )
}

export default FormControls;