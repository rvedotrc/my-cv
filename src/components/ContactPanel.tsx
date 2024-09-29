import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { useContext } from "react";
import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";

export default function ContactPanel() {
  const { cvData } = useContext(myContext);

  return (
    <div className="contactPanel">
      <div>
        <div title="phone">
          <FaPhoneAlt />
        </div>
        <div>
          <a href={`tel:${cvData.contact.telephone.intl}`}>
            {cvData.contact.telephone.display}
          </a>
        </div>
      </div>
      <div>
        <div title="email">
          <FaEnvelope />
        </div>
        <div>
          <a href={`mailto:${cvData.contact.email}`}>{cvData.contact.email}</a>
        </div>
      </div>
      <div>
        <div title="location">
          <FaLocationDot />
        </div>
        <div>
          <a href={cvData.contact.location.url}>
            <Translate text={cvData.contact.location.display} />
          </a>
        </div>
      </div>
      <div>
        <div title="LinkedIn">
          <FaLinkedin />
        </div>
        <div>
          <a href={cvData.contact.linkedin.url}>
            {cvData.contact.linkedin.display}
          </a>
        </div>
      </div>
      <div>
        <div title="GitHub">
          <FaGithub />
        </div>
        <div>
          <a href={cvData.contact.github.url}>
            {cvData.contact.github.display}
          </a>
        </div>
      </div>
    </div>
  );
}
