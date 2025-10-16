function AddButton({name, onChange, input}) {
  return (
    <button className={`add-btn ${input ? 'hidden' : ''}`} onClick={onChange}>{name}</button>
  )
}

export default AddButton;