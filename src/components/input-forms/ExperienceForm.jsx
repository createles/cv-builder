import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"

function ExperienceForm({expEdit, children}) {
  return (
    <InputWrapper title="Experience" wrapId="experience">
      {expEdit && (
      <>
      <InputItem label="Company Name" type="text" name="companyName"></InputItem>
      <InputItem label="Position" type="text" name="position"></InputItem>
      <InputItem label="Start Date" type="date"></InputItem>
      <InputItem label="End Date" type="date"></InputItem>
      <InputItem label="Location" type="text"></InputItem>
      <InputItem label="Description" type="textarea"></InputItem>
      </>
      )}
      {children}
    </InputWrapper>
  )
}

export default ExperienceForm;