import Stripe from "./Stripe";
import MainPanel from "./MainPanel";
import SidePanel from "./SidePanel";

export default function BodyPanel() {
  return (
    <body>
      <div className="bodyPanel">
        <Stripe />
        <SidePanel />
        <MainPanel />
      </div>
    </body>
  );
}
