import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"
import AddButton from "./AddButton"

function SkillsForm() {
  return (
    <InputWrapper title="Skills" wrapId="skills">
      <AddButton name="Add skills"></AddButton>
    </InputWrapper>
  )
}

export default SkillsForm;