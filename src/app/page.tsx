import Switcher from "./switcher/page";

import CVStyles from "./CVStyles/page.module.css";

export default function Page() {
  return (
    <div className={CVStyles.cv}>
      <Switcher />
    </div>
  );
}
