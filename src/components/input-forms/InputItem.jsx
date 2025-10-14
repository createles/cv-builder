import '../../styles/input-item.css'

function InputItem({label, type, value, onChange}) {
    return (
        <div className="input-item">
            <label className="item-label" for={label} > {label} </label>
            <input type={type} name={label} id={label} value={value} onChange={onChange} />
        </div>
    )
}

export default InputItem;