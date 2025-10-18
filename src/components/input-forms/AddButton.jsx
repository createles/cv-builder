function AddButton({name, onClick, input}) {
  return (
    <button className={`add-btn ${input ? 'hidden' : ''}`} onClick={onClick}>{name}</button>
  )
}

export default AddButton;