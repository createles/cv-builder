import {MdEmail, MdPhone, MdLocationOn} from "react-icons/md";

function Header({fullName, title, email, contactNumber, location}) {
  return (
    <>
      <p className="fullName">{fullName}</p>
      <p className="job-title">{title}</p>
      <p className="email">
        {email !== '' && <MdEmail id="email-icon"/>}
        {email}
      </p>
      <p className="contact-number">
        {contactNumber !== '' && <MdPhone id="phone-icon"/>}
        {contactNumber}
      </p>
      <p className="location">
        {location !== '' && <MdLocationOn id="location-icon"/>}
        {location}
      </p>
    </>
  )
}

export default Header;