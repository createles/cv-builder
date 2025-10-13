import InputItem from "./InputItem";

function PersonalInfo() {
    return (
        <div className="personal-info">
            <InputItem label="Full name" type="text"></InputItem>
            <InputItem label="Email" type="email"></InputItem>
            <InputItem label="Phone Number" type="tel"></InputItem>
        </div>
    );
}

export default PersonalInfo;