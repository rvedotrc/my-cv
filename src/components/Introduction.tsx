import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function Introduction() {
  const { cvData, language } = useContext(myContext);

  return (
    <div className="introduction">
      <div className="introPanel">
        {language === "en" && (
          <>
            <p>
              I am a dedicated software engineer specialising in back-end
              development with full-stack proficiency. Over 20+ years, I have
              continually expanded my expertise across multiple languages and
              technologies, evolving with the industry to ensure I’m always
              prepared for new challenges.
            </p>
            <p>
              I excel at system design that improves security, scalability,
              reliability, and extensibility, always striving to deliver
              high-quality results. Through promoting standards, automation, and
              consistency, I contribute to resilient systems and operational
              excellence. I inspire engineering teams to work towards a clear
              vision, and I thrive on fostering collaboration and empowering
              others to grow.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
