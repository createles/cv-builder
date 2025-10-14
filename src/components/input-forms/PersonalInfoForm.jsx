import InputWrapper from "./InputWrapper";
import InputItem from "./InputItem";

function PersonalInfoForm({personalInfo, onChange}) {
  return (
        <InputWrapper title="Personal Info" wrapId="personal">
          <InputItem
            label="Full name"
            type="text"
            name="fullName"
            value={personalInfo.fullName}
            onChange={onChange}
          ></InputItem>
          <InputItem
            label="Email"
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={onChange}
          ></InputItem>
          <InputItem
            label="Phone Number"
            type="tel"
            name="contactNumber"
            value={personalInfo.contactNumber}
            onChange={onChange}
          ></InputItem>
          <InputItem
            label="Location"
            type="text"
            name="location"
            value={personalInfo.location}
            onChange={onChange}
          ></InputItem>
        </InputWrapper>
  )
}

export default PersonalInfoForm;