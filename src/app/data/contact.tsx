import { TranslatedText } from "./translated";

export type Contact = {
  readonly telephone: {
    readonly intl: string;
    readonly display: string;
  };
  readonly email: string;
  readonly linkedin: {
    readonly url: string;
    readonly display: string;
  };
  readonly github: {
    readonly url: string;
    readonly display: string;
  };
  readonly location: {
    readonly url: string;
    readonly display: TranslatedText;
  };
  readonly references: TranslatedText;
};

export const contact: Contact = {
  telephone: {
    intl: "+4571513486",
    display: "71 51 34 86",
  },
  email: "rachel@rachelevans.org",
  linkedin: {
    url: "https://www.linkedin.com/in/rvedotrc/",
    display: "/in/rvedotrc",
  },
  github: {
    url: "https://github.com/rvedotrc",
    display: "@rvedotrc",
  },
  location: {
    url: "https://youtu.be/O6jOTZD6rg4?si=Au9A4Pzwy8f5NEFa&t=60",
    display: {
    da: "København",
    en: "Copenhagen",
    },
  },
  references: {
    da: "Referencer oplyses på opfordring",
    en: "References available on request",
  },
};
