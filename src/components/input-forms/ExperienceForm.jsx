import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"

function ExperienceForm({expInput, children}) {
  return (
    <InputWrapper title="Experience" wrapId="experience">
      {expInput && (
      <>
      <InputItem label="Company Name" type="text" name="companyName"></InputItem>
      <InputItem label="Position" type="text" name="position"></InputItem>
      <InputItem label="Start Date" type="date" name="startDate"></InputItem>
      <InputItem label="End Date" type="date" name="endDate"></InputItem>
      <InputItem label="Location" type="text" name="companyLocation"></InputItem>
      <InputItem label="Description" type="textarea" name="description"></InputItem>
      <button>cancel</button>
      <button>save</button>
      </>
      )}
      {children}
    </InputWrapper>
  )
}

export default ExperienceForm;