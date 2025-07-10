import Link from "next/link";
import MyStyles from "./myStyles";
import { languages, variants } from "@/axes";

export default function Page() {
  return (
    <html>
      <head>
        <title>Rachel Evans — CV</title>
        <MyStyles />
      </head>
      <body>
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
      </body>
    </html>
  );
}
