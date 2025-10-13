import "../../styles/input-wrapper.css"

function InputWrapper({children}) {
    return (
        <div className="input-wrapper">
            Wrapper for Inputs
            {children}
        </div>
    );
}

export default InputWrapper;