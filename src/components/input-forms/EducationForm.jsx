import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"

function EducationForm({children}) {
  return (
    <InputWrapper title="Education" wrapId="education">
      {children}
    </InputWrapper>
  )
}

export default EducationForm;