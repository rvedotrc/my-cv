import { contact } from "./contact";
import { education } from "./education";
import { employment } from "./employment";
import { introduction } from "./introduction";
import { languages } from "./languages";

export type CVData = typeof cvData;

export const cvData = {
  introduction,
  contact,
  employment,
  languages,
  education,
};
