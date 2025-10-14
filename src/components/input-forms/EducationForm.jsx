import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"
import AddButton from "./AddButton"

function EducationForm() {
  return (
    <InputWrapper title="Education" wrapId="education">
      <AddButton name="Add education"></AddButton>
    </InputWrapper>
  )
}

export default EducationForm;