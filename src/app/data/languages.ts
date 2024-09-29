import { TranslatedText } from "./translated";

export type Language = {
  readonly name: TranslatedText;
  readonly starsOfFive: 1 | 2 | 3 | 4 | 5;
  readonly note: TranslatedText;
};

export const languages: ReadonlyArray<Language> = [
  {
    name: {
      da: "engelsk",
      en: "English",
    },
    starsOfFive: 5,
    note: {
      da: "modersmål",
      en: "native",
    },
  },
  {
    name: {
      da: "dansk",
      en: "Danish",
    },
    starsOfFive: 4,
    note: { "*": "CEFR C1" },
  },
];
