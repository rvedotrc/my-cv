import { languages, variants } from "@/axes";
import Link from "next/link";
import styles from "./page.module.css";

export default function Switcher() {
  return (
    <div className="switcher">
      <ul>
        {variants.map((k) => (
          <li key={k}>
            {languages.map((lang) => (
              <Link
                className={styles.language}
                key={lang}
                href={`/${lang}/${k}`}
              >
                {lang}
              </Link>
            ))}
            {" — "}
            {k}
          </li>
        ))}
      </ul>
    </div>
  );
}
