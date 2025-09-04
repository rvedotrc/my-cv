import { languages, variants } from "@/axes";
import Link from "next/link";
import styles from "./page.module.css";

export default function Switcher() {
  return (
    <div className={styles.switcher}>
      <ul>
        {variants.map((k) => (
          <li key={k}>
            {languages.map((l) => [
              <Link
                key={l}
                href={`/${l}/${k}`}
                style={{ marginInlineEnd: "1em" }}
              >
                {l}
              </Link>,
            ])}
            {k}
          </li>
        ))}
      </ul>
    </div>
  );
}
