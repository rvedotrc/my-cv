import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function WhoAmI() {
    const { cvData } = useContext(myContext);

    return (
        <div className="whoAmI">
            <h1 className="contactName">{cvData.contact.name}</h1>
            <div className="contactPronouns"><Translate text={cvData.contact.pronouns} /></div>
        </div>
    );
}