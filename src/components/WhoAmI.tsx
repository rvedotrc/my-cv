import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function WhoAmI() {
  const {
    cvData: { introduction },
  } = useContext(myContext);

  return (
    <div className="whoAmI">
      <h1 className="contactName">
        {introduction.name}{" "}
        <span className="contactPronouns">
          <Translate text={introduction.pronouns} />
        </span>
      </h1>

      <div className="contactTitle">
        <Translate text={introduction.headline} />
      </div>
    </div>
  );
}
