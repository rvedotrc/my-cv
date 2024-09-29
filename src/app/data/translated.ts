import { ReactNode } from "react";
import { MyLanguage } from "../context";

export type TranslatedText =
  | {
      readonly [k in MyLanguage]: string;
    }
  | {
      readonly "*": string;
    };

export type TranslatedNode = {
  readonly [k in MyLanguage]: ReadonlyArray<ReactNode>;
};
