import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"

function SkillsForm({children}) {
  return (
    <InputWrapper title="Skills" wrapId="skills">
      {children}
    </InputWrapper>
  )
}

export default SkillsForm;