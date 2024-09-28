"use client";

import { MyContext, myContext, MyLanguage } from "./context";
import { useContext, useEffect, useMemo, useState } from "react";

export default function LanguageFlipper({ children }: { children: React.ReactNode }) {
  const incomingContext = useContext(myContext);
  const [language, setLanguage] = useState<MyLanguage>(incomingContext.language);

  // useEffect(
  //   () => {
  //     const timer = setInterval(() => {
  //       setLanguage(
  //         (old) => old === "da" ? "en" : "da",
  //       );
  //     }, 2000);
  //     return () => clearInterval(timer);
  //   },
  //   [],
  // );

  const handler = useMemo(
    () => function(this: HTMLElement, e: KeyboardEvent) {
        console.log({ e, setLanguage });

        if (!e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
          if (e.key === "e") setLanguage("en");
          if (e.key === "d") setLanguage("da");
        }
    },
    [setLanguage],
  );

  useEffect(
    () => {
      document.body.addEventListener("keydown", handler);
      return () => document.body.removeEventListener("keydown", handler);
    },
    [handler],
  );

  const outgoingContext: MyContext = {
    ...incomingContext,
    language,
  };

  return (
    <myContext.Provider value={outgoingContext}>
      {children}
    </myContext.Provider>
  );
}
