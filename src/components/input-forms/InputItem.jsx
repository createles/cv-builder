import '../../styles/input-item.css'

function InputItem({label, type}) {
    return (
        <div className="input-item">
            <label className="item-label" for={label} > {label} </label>
            <input type={type} name={label} id={label} />
        </div>
    )
}

export default InputItem;