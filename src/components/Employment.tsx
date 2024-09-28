import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function Employment() {
  const { cvData, language } = useContext(myContext);

  return (
    <div className="employment">
      <ol className="employmentList">
        {cvData.employment.map((e, i) => (
          <li key={i}>
            <div className="employmentHeading">
              <span className="employmentJobTitle">{e.jobTitle}</span>
              {", "}
              <span className="employmentEmployerName">{e.employerName}</span>
            </div>
            <div className="employmentInfo">
              <div className="employmentLocation">
                <Translate text={e.location} />
              </div>
              ;&nbsp;
              <div className="employmentStart">
                <Translate text={e.start} />
              </div>
              &nbsp;–&nbsp;
              <div className="employmentEnd">
                <Translate text={e.end} />
              </div>
            </div>
            <div className="employmentText">
              <ul>
                {e.text[language].map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
