import { useContext } from "react";
import { myContext, MyLanguage } from "./context";

export const Translate = ({
  text,
}: {
  text: { "*": string } | Record<MyLanguage, string>;
}) => {
  const c = useContext(myContext);

  if ("*" in text) {
    return <>{text["*"]}</>;
  } else {
    return <>{text[c.language]}</>;
  }
};
