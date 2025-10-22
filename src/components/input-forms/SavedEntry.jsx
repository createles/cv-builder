import '../../styles/saved-entry.css';

function SavedEntry({entry, onEdit, onDelete}) {
  return (
    <div className="saved-entry">
      <p id={`saved-entry-${entry.title.split(" ").join("-")}`}>{entry.title}</p>
      <button className="edit-entry" onClick={() => onEdit(entry.id)}>edit</button>
      <button className="delete-entry" onClick={() => onDelete(entry.id)}>delete</button>
    </div>
  )
}

export default SavedEntry;