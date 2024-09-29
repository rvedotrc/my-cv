import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";
import { FaStar } from "react-icons/fa6";

export default function HumanLanguages() {
  const { cvData } = useContext(myContext);

  return (
    <ol className="humanLanguages">
      {cvData.skills.human_languages.map((l, i) => (
        <li key={i}>
          <div className="languageName">
            <Translate text={l.name} />
          </div>
          <div className="languageStars" title={`${l.starsOfFive} out of 5`}>
            {[1, 2, 3, 4, 5].map((i) => (i <= l.starsOfFive ? <FaStar/> : ""))}
          </div>
          <div className="languageNote">
            <Translate text={l.note} />
          </div>
        </li>
      ))}
    </ol>
  );
}
