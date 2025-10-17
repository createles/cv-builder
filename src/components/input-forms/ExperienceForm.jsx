import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"

function ExperienceForm({formData, expInput, onChange, children}) {
  return (
    <InputWrapper title="Experience" wrapId="experience">
      {expInput && (
      <>
      <InputItem label="Company / Organization / Project" type="text" name="companyName" onChange={onChange} value={formData.companyName}></InputItem>
      <InputItem label="Position" type="text" name="position" onChange={onChange} value={formData.position}></InputItem>
      <InputItem label="Start Date" type="month" name="startDate" onChange={onChange} value={formData.startDate}></InputItem>
      <InputItem label="End Date" type="month" name="endDate" onChange={onChange} value={formData.endDate}></InputItem>
      <InputItem label="Location" type="text" name="companyLocation" onChange={onChange} value={formData.companyLocation}></InputItem>
      <InputItem label="Description" type="textarea" name="description" onChange={onChange} value={formData.description}></InputItem>
      </>
      )}
      {children}
    </InputWrapper>
  )
}

export default ExperienceForm;