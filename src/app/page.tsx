/* eslint-disable @next/next/no-css-tags */
"use client";

import LanguageFlipper from "./languageFlipper";
import { useContext } from "react";
import { myContext } from "./context";
import BodyPanel from "@/components/BodyPanel";
import MyStyles from "./myStyles";

export default function Home() {
  return (
    <LanguageFlipper>
      <html lang={useContext(myContext).language}>
        <head>
          {/* <link rel="stylesheet" href={`/style.css?`}></link> */}
          <MyStyles />
        </head>
        <BodyPanel />
      </html>
    </LanguageFlipper>
  );
}
