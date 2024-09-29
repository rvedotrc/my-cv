import { useContext } from "react";
import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";

export default function EducationPanel() {
  const {
    cvData: { education },
  } = useContext(myContext);

  return (
    <div className="educationPanel">
      {education.map((e, i) => (
        <div key={i}>
          <div>
            <Translate text={e.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
