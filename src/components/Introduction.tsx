import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function Introduction() {
    const { cvData } = useContext(myContext);

    return (
        <div className="introduction">
            <h2 className="contactSubtitle"><Translate text={cvData.contact.subtitle} /></h2>
            <div className="introPanel">
                {cvData.intro.map((t, i) => 
                    <p key={i}><Translate text={t}/></p>
                )}
            </div>
        </div>
    );
}