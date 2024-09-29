import { TranslatedText } from "./translated";

export type Education = {
    readonly name: TranslatedText;
};

export const education: ReadonlyArray<Education> = [
    {
      name: {
        da: "BSc Matematik, 1994\nSouthampton University, UK",
        en: "BSc Mathematics, 1994\nSouthampton University, UK",
      },
    },
  ];