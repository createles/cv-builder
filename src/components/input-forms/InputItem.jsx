import '../../styles/input-item.css'

function InputItem({label, type, name, value, onChange, required}) {
    return (
        <div className="input-item">
            <label className="item-label" htmlFor={name+"-input"} > {label} </label>
            {type === "textarea" ?
            <textarea id={name+"-input"} name={name} value={value} onChange={onChange} required={required}></textarea> :
            <input type={type} name={name} id={name+"-input"} value={value} onChange={onChange} required={required} />}
        </div>
    )
}

export default InputItem;