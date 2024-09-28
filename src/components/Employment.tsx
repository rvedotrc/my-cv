import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function Employment() {
    const { cvData } = useContext(myContext);

    return (
        <div className="employment">
            <h2>Employment</h2>
            <ol className="employmentList">
                {cvData.employment.map((e, i) => (
                    <li key={i}>
                        <div className="employmentJobTitle">{e.jobTitle}</div>
                        <div className="employmentEmployerName">{e.employerName}</div>
                        <div className="employmentInfo">
                            <div className="employmentLocation"><Translate text={e.location}/></div>
                            ;&nbsp;
                            <div className="employmentStart"><Translate text={e.start}/></div>
                            &nbsp;–&nbsp;
                            <div className="employmentEnd"><Translate text={e.end}/></div>
                        </div>
                        <div className="employmentText">
                            {e.text.map((t, j) => (
                                <p key={j}>
                                    <Translate text={t}/>
                                </p>    
                            ))}
                        </div>
                    </li>
                ))}
            </ol>
            <p className="employmentMore"><Translate text={cvData.employmentMore}/></p>
        </div>
    );
}