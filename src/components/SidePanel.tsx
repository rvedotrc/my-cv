import ContactPanel from "./ContactPanel";
import EducationPanel from "./EducationPanel";
import Headshot from "./Headshot";
import Languages from "./Languages";
import ReferencesPanel from "./ReferencesPanel";
import SkillsPanel from "./SkillsPanel";

export default function SidePanel() {
  return (
    <div className="sidePanel">
      <Headshot />
      <ContactPanel />
      <EducationPanel />
      <Languages />
      <hr />
      <SkillsPanel />
      <hr />
      <ReferencesPanel />
    </div>
  );
}
