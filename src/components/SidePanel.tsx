import ContactPanel from "./ContactPanel";
import EducationPanel from "./EducationPanel";
import Headshot from "./Headshot";
import HumanLanguages from "./HumanLanguages";
import ReferencesPanel from "./ReferencesPanel";
import SkillsPanel from "./SkillsPanel";

export default function SidePanel () {
    return (
        <div className="sidePanel">
            <Headshot/>
            <ContactPanel/>
            <EducationPanel/>
            <HumanLanguages/>
            <hr/>
            <SkillsPanel/>
            <hr/>
            <ReferencesPanel/>
        </div>
    );
}