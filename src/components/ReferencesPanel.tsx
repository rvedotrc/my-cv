import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function ReferencesPanel() {
  const {
    cvData: { contact },
  } = useContext(myContext);

  return (
    <div className="referencesPanel">
      <p>
        <Translate text={contact.references} />
      </p>
    </div>
  );
}
