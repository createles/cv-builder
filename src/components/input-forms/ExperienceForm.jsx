import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"

function ExperienceForm({expEdit, children}) {
  return (
    <InputWrapper title="Experience" wrapId="experience">
      {expEdit && (
      <>
      <InputItem label="Company Name" type="text" name="companyName"></InputItem>
      <InputItem label="Position" type="text" name="position"></InputItem>
      <InputItem label="Start Date" type="date" name="startDate"></InputItem>
      <InputItem label="End Date" type="date" name="endDate"></InputItem>
      <InputItem label="Location" type="text" name="companyLocation"></InputItem>
      <InputItem label="Description" type="textarea" name="description"></InputItem>
      </>
      )}
      {children}
    </InputWrapper>
  )
}

export default ExperienceForm;