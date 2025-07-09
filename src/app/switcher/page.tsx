import Link from "next/link";

export default function Switcher() {
  return (
    <div className="switcher">
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
    </div>
  );
}
