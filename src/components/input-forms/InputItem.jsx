import '../../styles/input-item.css'

function InputItem({label, type, name, value, onChange}) {
    return (
        <div className="input-item">
            <label className="item-label" htmlFor={name+"-input"} > {label} </label>
            {type === "textarea" ?
            <textarea id={name+"-input"} name={name} value={value} onChange={onChange}></textarea> :
            <input type={type} name={name} id={name+"-input"} value={value} onChange={onChange} />}
        </div>
    )
}

export default InputItem;