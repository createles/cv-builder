import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"

function EducationForm({formData, educInput, onChange, children}) {
  return (
    <InputWrapper title="Education" wrapId="education">
      {educInput && (
        <>
          <InputItem label="Institution / School Name" type="text" name="institution" onChange={onChange} value={formData.institution}></InputItem>
          <InputItem label="Major / Field of Study" type="text" name="field" onChange={onChange} value={formData.field}></InputItem>
          <InputItem label="Start Date" type="month" name="startDate" onChange={onChange} value={formData.startDate}></InputItem>
          <InputItem label="End Date" type="month" name="endDate" onChange={onChange} value={formData.endDate}></InputItem>
          <InputItem label="Relevant Coursework" type="textarea" name="courseWork" onChange={onChange} value={formData.courseWork}></InputItem>
        </>
      )}
      {children}
    </InputWrapper>
  )
}

export default EducationForm;