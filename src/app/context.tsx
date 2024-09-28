import { createContext } from "react";
import { cvData, CVData } from "./cv";

export type MyLanguage = "da" | "en";

export type MyContext = {
  cvData: CVData;
  language: MyLanguage;
};

export const myContext = createContext<MyContext>({
  cvData,
  language: "en",
});
