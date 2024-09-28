import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function WhoAmI() {
  const { cvData } = useContext(myContext);

  return (
    <div className="whoAmI">
      <h1 className="contactName">
        {cvData.contact.name}{" "}
        <span className="contactPronouns">
          <Translate text={cvData.contact.pronouns} />
        </span>
      </h1>

      <div className="contactTitle">
        Experienced Software Engineer and Technical Leader
      </div>
    </div>
  );
}
