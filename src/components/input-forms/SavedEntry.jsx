import '../../styles/saved-entry.css';

function SavedEntry({entry, onEdit, onDelete, entryTitle}) {
  return (
    <div className="saved-entry">
      <p id={`saved-entry-${entryTitle.split(" ").join("-")}`}>{entryTitle}</p>
      <button className="edit-entry" onClick={() => onEdit(entry.id)}>edit</button>
      <button className="delete-entry" onClick={() => onDelete(entry.id)}>delete</button>
    </div>
  )
}

export default SavedEntry;