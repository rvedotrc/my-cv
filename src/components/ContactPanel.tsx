import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { useContext } from "react";
import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";

export default function ContactPanel() {
  const {
    cvData: { contact },
  } = useContext(myContext);

  return (
    <div className="contactPanel">
      <div>
        <div title="phone">
          <FaPhoneAlt />
        </div>
        <div>
          <a href={`tel:${contact.telephone.intl}`}>
            {contact.telephone.display}
          </a>
        </div>
      </div>
      <div>
        <div title="email">
          <FaEnvelope />
        </div>
        <div>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
      <div>
        <div title="location">
          <FaLocationDot />
        </div>
        <div>
          <a href={contact.location.url}>
            <Translate text={contact.location.display} />
          </a>
        </div>
      </div>
      <div>
        <div title="LinkedIn">
          <FaLinkedin />
        </div>
        <div>
          <a href={contact.linkedin.url}>{contact.linkedin.display}</a>
        </div>
      </div>
      <div>
        <div title="GitHub">
          <FaGithub />
        </div>
        <div>
          <a href={contact.github.url}>{contact.github.display}</a>
        </div>
      </div>
    </div>
  );
}
