import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"

function ExperienceForm({expInput, onChange, children}) {
  return (
    <InputWrapper title="Experience" wrapId="experience">
      {expInput && (
      <>
      <InputItem label="Company Name" type="text" name="companyName" onChange={onChange}></InputItem>
      <InputItem label="Position" type="text" name="position" onChange={onChange}></InputItem>
      <InputItem label="Start Date" type="month" name="startDate" onChange={onChange}></InputItem>
      <InputItem label="End Date" type="month" name="endDate" onChange={onChange}></InputItem>
      <InputItem label="Location" type="text" name="companyLocation" onChange={onChange}></InputItem>
      <InputItem label="Description" type="textarea" name="description" onChange={onChange}></InputItem>
      </>
      )}
      {children}
    </InputWrapper>
  )
}

export default ExperienceForm;