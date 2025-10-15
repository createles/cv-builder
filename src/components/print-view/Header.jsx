import { MdEmail, MdPhone, MdLocationOn, MdLink } from "react-icons/md";

function Header({ fullName, title, email, contactNumber, location, link }) {
  return (
    <>
      <div className="name-job">
        <p className="fullName">{fullName}</p>
        <p className="job-title">{title}</p>
      </div>
      <div className="contact-info">
        <p className="email">
          {email !== "" && <MdEmail id="email-icon" />}
          {email}
        </p>
        <p className="contact-number">
          {contactNumber !== "" && <MdPhone id="phone-icon" />}
          {contactNumber}
        </p>
        <p className="location">
          {location !== "" && <MdLocationOn id="location-icon" />}
          {location}
        </p>
        <p className="personal-link">
          {link !== "" && <MdLink id="link-icon"></MdLink>}
          {link}
        </p>
      </div>
    </>
  );
}

export default Header;
