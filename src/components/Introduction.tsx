import { myContext } from "@/app/context";
import { useContext } from "react";

export default function Introduction() {
  const {
    cvData: { introduction },
    language,
  } = useContext(myContext);

  return (
    <div className="introduction">
      <div className="introPanel">
        {introduction.introText[language].map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </div>
  );
}
