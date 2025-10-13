import "../../styles/input-wrapper.css"

function InputWrapper({children, title, wrapId}) {
    return (
        <div className="input-wrapper" id={wrapId}>
            <h2>{title}</h2>
            {children}
        </div>
    );
}

export default InputWrapper;