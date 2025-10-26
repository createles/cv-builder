import '../../styles/input-item.css'

function InputItem({label, type, name, value, onChange, required}) {
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && type !== 'textarea' ) {
            event.preventDefault();

            const form = event.target.form;
            if (!form) return;

            const focusables = Array.from(
            form.querySelectorAll('input, textarea, select, button:not([disabled])')
            );

            const currentIndex = focusables.indexOf(event.target);

            const nextIndex = currentIndex + 1;

            if (nextIndex < focusables.length) {
            focusables[nextIndex].focus();
            } else {
                const saveButton = form.querySelector('.save-btn')
                if (saveButton) {
                    saveButton.focus();
                }
            }
        };
    }

    return (
        <div className="input-item">
            <label className="item-label" htmlFor={name+"-input"} > {label} </label>
            {type === "textarea" ?
            <div className="text-area-box"> <textarea id={name+"-input"} name={name} value={value} onChange={onChange} required={required} onKeyDown={handleKeyDown}></textarea>
            <p> (pressing enter creates new entry) </p>
            </div> :
            <input type={type} name={name} id={name+"-input"} value={value} onChange={onChange} required={required} onKeyDown={handleKeyDown}/>}
        </div>
    )
}

export default InputItem;