import Link from "next/link";
import styles from "./page.module.css";
import { scanAxes } from "@/axes";

export default async function Switcher() {
  const scan = await scanAxes();

  return (
    <ul className={styles.switcher}>
      {scan.languages.map(async (l) => (
        <li key={l}>
          {scan.variants.map((k) =>
            scan.comboExists({ variant: k, language: l }) ? (
              <Link
                key={k}
                href={`/${k}/${l}`}
                className={styles.language}
                style={{ marginInlineEnd: "1em" }}
              >
                {k}
              </Link>
            ) : (
              <span key={k} style={{ marginInlineEnd: "1em", opacity: 0.3 }}>
                {k}
              </span>
            ),
          )}
          {l}
        </li>
      ))}
    </ul>
  );
}
