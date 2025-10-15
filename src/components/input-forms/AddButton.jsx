function AddButton({name, onChange}) {
  return (
    <button className="addBtn" onClick={onChange}>{name}</button>
  )
}

export default AddButton;