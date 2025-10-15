import '../../styles/input-item.css'

function InputItem({label, type, name, value, onChange}) {
    return (
        <div className="input-item">
            <label className="item-label" htmlFor={name} > {label} </label>
            {type === "textarea" ? <textarea id={name}></textarea> : <input type={type} name={name} id={label} value={value} onChange={onChange} />}
        </div>
    )
}

export default InputItem;