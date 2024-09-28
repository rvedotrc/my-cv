import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

const star1 = "★";
const star2 = " ";

export default function HumanLanguages () {
    const { cvData } = useContext(myContext);

    return (
        <ol className="humanLanguages">
            {cvData.skills.human_languages.map((l, i) => (
                <li key={i}>
                    <div className="languageName"><Translate text={l.name}/></div>
                    <div className="languageStars" title={`${l.starsOfFive} out of 5`}>
                        {star1.repeat(l.starsOfFive)}
                        {star2.repeat(5 - l.starsOfFive)}
                    </div>
                    <div className="languageNote"><Translate text={l.note}/></div>                    
                </li>
            ))}
        </ol>
    );
}