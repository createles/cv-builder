import InputWrapper from "./InputWrapper"
import InputItem from "./InputItem"

function ExperienceForm({experienceList, onChange}) {
  return (
    <InputWrapper title="Experience" wrapId="experience">
      <InputItem label="Company Name" type="text" name="companyName" value={experienceList.companyName} onChange= ></InputItem>
      <InputItem label= type="text" name="companyName" value= onChange= ></InputItem>
      <InputItem label= type="text" name="position" value= onChange= ></InputItem>
      <InputItem label= type="date" name= value= onChange= ></InputItem>
      <InputItem label= type="date" name= value= onChange= ></InputItem>
      <label className="item-label" htmlFor="description">Description</label>
      <textarea className="description-text" value= ></textarea>
    </InputWrapper>
  )
}

export default ExperienceForm;