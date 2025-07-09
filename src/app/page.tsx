import Link from "next/link";
import MyStyles from "./myStyles";

export default function Page() {
  return (
    <html>
      <head>
        <title>Rachel Evans — CV</title>
        <MyStyles />
      </head>
      <body>
        <ul>
          {["java", "ruby-and-typescript"].map((k) => (
            <li key={k}>
              <Link href={`/en-gb/${k}`}>en-gb</Link>
              {" | "}
              <Link href={`/da-dk/${k}`}>da-dk</Link>
              {" — "}
              {k}
            </li>
          ))}
        </ul>
      </body>
    </html>
  );
}
