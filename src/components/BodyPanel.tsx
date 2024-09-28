import MainPanel from "./MainPanel"
import SidePanel from "./SidePanel";

export default function BodyPanel () {    
    return (
        <body>
            <div className="bodyPanel">
                <SidePanel/>
                <MainPanel/>
            </div>
      </body>
    );
}