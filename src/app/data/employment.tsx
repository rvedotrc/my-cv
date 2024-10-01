import { TranslatedNode, TranslatedText } from "./translated";

export type Employment = {
  readonly employerName: string;
  readonly jobTitle: string;
  readonly location: TranslatedText;
  readonly start: TranslatedText;
  readonly end: TranslatedText;
  readonly text: TranslatedNode;
};

export const employment: ReadonlyArray<Employment> = [
  {
    employerName: "Hedia",
    jobTitle: "Senior Software Engineer",
    location: {
      da: "København",
      en: "Copenhagen",
    },
    start: {
      da: "juni 2024",
      en: "June 2024",
    },
    end: {
      da: "juli 2024",
      en: "July 2024",
    },
    text: {
      da: [
        <>
          Jeg forbedrede produktkonsistensen ved at identificere
          uoverensstemmelser og at samarbejde med teamet for at løse dem.
        </>,
        <>
          Jeg forbedrede dokumentationen for at imødekomme lovkrav, og sikrede
          compliance og facilitere bedre forståelse på tværs af teamet.
        </>,
        <>
          Jeg automatiserede byggeprocesser ved at implementere nye værktøjer,
          der førte til en stigende effektivitet og en reduktion af manuelle
          fejl.
        </>,
        <>
          Jeg visualiserede systemarkitekturen innovativt og gav frisk indsigt,
          der hjalp teamet med at forstå platformen bedre.
        </>,
      ],
      en: [
        <>
          Enhanced product consistency by identifying discrepancies and
          collaborating with the team to resolve them.
        </>,
        <>
          Improved documentation to meet regulatory requirements, ensuring
          compliance and facilitating better understanding across the team.
        </>,
        <>
          Automated build processes by implementing new tooling, increasing
          efficiency and reducing manual errors.
        </>,
        <>
          Visualised system architecture innovatively, providing fresh insights
          that helped the team understand the platform better.
        </>,
      ],
    },
  },
  {
    employerName: "Zendesk",
    jobTitle: "Senior Software Engineer",
    location: {
      da: "København",
      en: "Copenhagen",
    },
    start: {
      da: "februar 2019",
      en: "February 2019",
    },
    end: {
      da: "mai 2024",
      en: "May 2024",
    },
    text: {
      da: [
        <>
          Jeg stod for Tech Lead til to ingeniørteams, og jeg forbedrede
          betydeligt teamets ydeevne og produktlevering på tværs af vores
          produkter.
        </>,
        <>
          Jeg løftede teampræstationer ved at coache og vejlede holdkammerater,
          og jeg drev vedtagelsen af bedste praksis.
        </>,
        <>
          Jeg kæmpede for skalerbarhed, pålidelighed og sikkerhed på tværs af
          hele platformen.
        </>,
        <>
          Jeg formede organisatoriske standarder og fostrede en kultur af
          operationel ekspertise og løbende forbedringer, hvilket øgede
          virkningen ud over mine egne hold.
        </>,
        <>
          Jeg fremmede inklusion, mangfoldighed, en sund og sikker kultur til
          gavn for organisationen.
        </>,
      ],
      en: [
        <>
          Acted as Tech Lead for two engineering teams, significantly improving
          team performance and product delivery across the product suite.
        </>,
        <>
          Elevated team performance by coaching and mentoring teammates, driving
          the adoption of best practices.
        </>,
        <>
          Championed scalability, reliability, and security across the entire
          platform.
        </>,
        <>
          Shaped organisational standards and fostered a culture of operational
          excellence and continuous improvement, extending impact beyond my own
          teams.
        </>,
        <>
          Promoted inclusion and diversity, fostering a healthy and safe culture
          for the benefit of the organisation.
        </>,
      ],
    },
  },
  {
    employerName: "BBC",
    jobTitle: "Principal Software Engineer",
    location: {
      da: "London",
      en: "London",
    },
    start: {
      da: "oktober 2007",
      en: "October 2007",
    },
    end: {
      da: "januar 2019",
      en: "January 2019",
    },
    text: {
      da: [
        <>
          Jeg ledede et ingeniørteam, der styrede BBCs online lyd og video
          indhold, herunder den berømte iPlayer-streamingtjeneste.
        </>,
        <>
          Jeg stod i spidsen for migreringen fra et stort on-premises system til
          cloud-baserede mikrotjenester, der markant forbedrede skalerbarheden
          og præstation.
        </>,
        <>
          Mit team leverede hidtil uset streamingadgang til London OL 2012, med
          kapacitet til et massivt landsdækkende publikum.
        </>,
        <>
          Under mit lederskab udvidede teamet platformen med nye funktioner,
          større kapacitet og forbedret modstandsdygtighed, der betød, at vi
          sagtens kunne bygge videre på projektets succes.
        </>,
      ],
      en: [
        <>
          Led an engineering team managing the BBC&apos;s online audio and video
          content, including the renowned iPlayer streaming service.
        </>,
        <>
          Spearheaded the migration from a large on-premises system to
          cloud-based microservices, significantly enhancing scalability and
          performance.
        </>,
        <>
          Delivered unprecedented streaming access for the London 2012 Olympic
          Games, supporting a massive nationwide audience.
        </>,
        <>
          Extended the platform with new features, greater capacity, and
          improved resilience, building on the project&apos;s success.
        </>,
      ],
    },
  },
  // {
  //     employerName: "Power Internet",
  //     jobTitle: "Programmer",
  //     location: {
  //         da: "Milton Keynes",
  //         en: "Milton Keynes",
  //     },
  //     start: {
  //         da: "december 2000",
  //         en: "December 2000",
  //     },
  //     end: {
  //         da: "september 2007",
  //         en: "September 2007",
  //     },
  //     text: [
  //         {
  //             da: "Lort.",
  //             en: "Stuff.",
  //         }
  //     ],
  // },
  // {
  //     employerName: "Radius Retail",
  //     jobTitle: "Developer",
  //     location: {
  //         da: "Milton Keynes",
  //         en: "Milton Keynes",
  //     },
  //     start: {
  //         da: "september 1998",
  //         en: "September 1998",
  //     },
  //     end: {
  //         da: "december 2000",
  //         en: "December 2000",
  //     },
  //     text: [
  //         {
  //             da: "Lort.",
  //             en: "Stuff.",
  //         }
  //     ],
  // },
  // {
  //     employerName: "CSC",
  //     jobTitle: "Junior Developer",
  //     location: {
  //         da: "Bedford",
  //         en: "Bedford",
  //     },
  //     start: {
  //         da: "july 1995",
  //         en: "July 1995",
  //     },
  //     end: {
  //         da: "september 1998",
  //         en: "September 1998",
  //     },
  //     text: [
  //         {
  //             da: "Lort.",
  //             en: "Stuff.",
  //         }
  //     ],
  // },
];
