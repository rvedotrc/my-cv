import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";
import { FaStar } from "react-icons/fa6";

export default function Languages() {
  const {
    cvData: { languages },
  } = useContext(myContext);

  return (
    <ol className="languages">
      {languages.map((l, i) => (
        <li key={i}>
          <div className="languageName">
            <Translate text={l.name} />
          </div>
          <div className="languageStars" title={`${l.starsOfFive}/5`}>
            {[1, 2, 3, 4, 5].map((i) =>
              i <= l.starsOfFive ? <FaStar key={i} /> : "",
            )}
          </div>
          <div className="languageNote">
            <Translate text={l.note} />
          </div>
        </li>
      ))}
    </ol>
  );
}
