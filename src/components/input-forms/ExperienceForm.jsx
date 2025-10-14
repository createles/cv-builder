import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"
import AddButton from "./AddButton"

function ExperienceForm() {
  return (
    <InputWrapper title="Experience" wrapId="experience">
      <AddButton name="Add experience"></AddButton>
    </InputWrapper>
  )
}

export default ExperienceForm;