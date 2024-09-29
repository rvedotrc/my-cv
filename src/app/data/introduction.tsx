import { TranslatedNode, TranslatedText } from "./translated";

export type Introduction = {
  readonly name: string;
  readonly pronouns: TranslatedText;
  readonly headline: TranslatedText;
  readonly introText: TranslatedNode;
};

export const introduction: Introduction = {
  name: "Rachel V. Evans",
  pronouns: {
    da: "hun / hende / hendes",
    en: "she / her / hers",
  },
  headline: {
    da: "Erfaren Software Ingeniør og Teknisk Leder",
    en: "Experienced Software Engineer and Technical Leader",
  },
  introText: {
    da: [
      <>
        Jeg er en dedikeret softwareingeniør med speciale i back-end udvikling
        med full-stack færdighed. I mere end 20 år har jeg løbende udvidet min
        ekspertise på tværs af flere sprog og teknologier, mens jeg udvikler mig
        sammen med branchen for at sikre, at jeg altid er forberedt på nye
        udfordringer.
      </>,
      <>
        Jeg udmærker mig ved systemdesign, der forbedrer sikkerhed,
        skalerbarhed, pålidelighed og udvidelsesmuligheder, samt med, at jeg
        altid stræber efter at levere resultater til en høj kvalitet. Ved at
        fremme standarder, automatisering og konsistens bidrager jeg til robuste
        systemer og operational excellence. Jeg inspirerer ingeniørteams til at
        arbejde hen imod en klar vision, og jeg trives med at fremme samarbejde
        og at give andre mulighed for at vokse.
      </>,
    ],
    en: [
      <>
        I am a dedicated software engineer specialising in back-end development
        with full-stack proficiency. Over 20+ years, I have continually expanded
        my expertise across multiple languages and technologies, evolving with
        the industry to ensure I’m always prepared for new challenges.
      </>,
      <>
        I excel at system design that improves security, scalability,
        reliability, and extensibility, always striving to deliver high-quality
        results. Through promoting standards, automation, and consistency, I
        contribute to resilient systems and operational excellence. I inspire
        engineering teams to work towards a clear vision, and I thrive on
        fostering collaboration and empowering others to grow.
      </>,
    ],
  },
};
