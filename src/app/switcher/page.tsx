import Link from "next/link";
import styles from "./page.module.css";
import { scanAxes } from "@/axes";

export default async function Switcher() {
  const scan = await scanAxes();

  return (
    <ul className={styles.switcher}>
      {scan.variants.map((variant) => (
        <li key={variant}>
          {scan.languages.map(async (language) =>
            scan.comboExists({ variant, language }) ?
              <Link
                key={language}
                href={`/${language}/${variant}`}
                className={styles.language}
                style={{ marginInlineEnd: "0.5em" }}
              >
                {language}
              </Link>
            : <span
                key={language}
                style={{ marginInlineEnd: "0.5em", opacity: 0.3 }}
              >
                {language}
              </span>
          )}
          {variant}
        </li>
      ))}
    </ul>
  );
}
