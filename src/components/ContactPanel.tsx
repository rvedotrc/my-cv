import Envelope from "./icons/envelope";
import GeoAlt from "./icons/geo-alt";
import Github from "./icons/github";
import InlineSvg from "./icons/inlineSvg";
import Linkedin from "./icons/linkedin";
import Telephone from "./icons/telephone";
import { useContext } from "react";
import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";

export default function ContactPanel () {
  const { cvData } = useContext(myContext);

  return (
    <div className="contactPanel">
      <div>
        <div title="phone"><InlineSvg><Telephone /></InlineSvg></div>
        <div>
          <a href={`tel:${cvData.contact.telephone.intl}`}>
            {cvData.contact.telephone.display}
          </a>
        </div>
      </div>
      <div>
        <div title="email"><InlineSvg><Envelope /></InlineSvg></div>
        <div>
          <a href={`mailto:${cvData.contact.email}`}>
            {cvData.contact.email}
          </a>
        </div>
      </div>
      <div>
        <div title="location"><InlineSvg><GeoAlt /></InlineSvg></div>
        <div><Translate text={cvData.contact.location} /></div>
      </div>
      <div>
        <div title="LinkedIn"><InlineSvg><Linkedin /></InlineSvg></div>
        <div>
          <a href={cvData.contact.linkedin.url}>
            {cvData.contact.linkedin.display}
          </a>
        </div>
      </div>
      <div>
        <div title="GitHub"><InlineSvg><Github /></InlineSvg></div>
        <div>
          <a href={`https://github.com/${cvData.contact.github.login}`}>
            {cvData.contact.github.login}
          </a>
        </div>
      </div>
    </div>
  );
};
