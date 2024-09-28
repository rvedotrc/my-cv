import WhoAmI from "./WhoAmI";
import Introduction from "./Introduction";
import Employment from "./Employment";

export default function MainPanel () {
  return (
    <div className="mainPanel">
      <WhoAmI/>
      <Introduction/>
      <Employment/>      
    </div>
  );
};
