export type CVData = typeof cvData;

export const cvData = {
  contact: {
    name: "Rachel V. Evans",
    pronouns: {
      da: "hun / hende / hendes",
      en: "she / her / hers",
    },
    subtitle: {
      da: "Absolut ikke tre egern i en regnfrakke",
      en: "Definitely not three squirrels in a raincoat",
    },
    telephone: {
      intl: "+4571513486",
      display: "71 51 34 86",
    },
    email: "rachel@rachelevans.org",
    linkedin: {
      url: "https://www.linkedin.com/in/rvedotrc/",
      display: "rvedotrc",
    },
    github: {
      login: "rvedotrc",
    },
    location: {
      da: "København",
      en: "Copenhagen",
    },
    locationUrl: "https://youtu.be/O6jOTZD6rg4?si=Au9A4Pzwy8f5NEFa&t=60",
  },
  intro: [
    {
      da: "Ansæt mig!",
      en: "Hire me!",
    },
  ],
  skills: {
    human_languages: [
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
    ],
  },
  employment: [
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
        da: ["hva?"],
        en: [
          "This med-tech startup aimed to improve the lives of people with\n                diabetes; when I arrived, they had just recently deployed their\n                proof-of-concept new medical data platform. The system consisted\n                of TypeScript microservices, and as part of on-boarding and\n                understanding the system I promoted consistency, observability,\n                and reliability, so as to ready the product for launch.",
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
        da: ["hva?"],
        en: [
          "Zendesk provides SaaS products for customer support, sales, and\n                other customer communications. I was the tech lead for one of\n                the 8 engineering teams in Copenhagen, working primarily with\n                Ruby, TypeScript, MySQL (via AWS RDS), Kubernetes, and GitHub\n                actions; our APIs were mostly GraphQL (internal) and REST\n                (external).",
          "I coached and guided my teammates and other colleagues, raising\n                the performance of the team, and driving the adoption of best\n                practices; I championed scalability, reliability, and security\n                across our entire platform. I also extended this beyond my own\n                team, shaping organizational standards and fostering a culture\n                of operational excellence and continuous improvement. I also\n                consistently fostered inclusion and diversity, and drove\n                improvements beyond just the technical.",
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
        da: ["hva?"],
        en: [
          "I led one of the three teams that handled all of the BBC's\n                online audio and video, including iPlayer, their world-leading\n                Radio / TV streaming service. I was instrumental in the effort\n                to ditch our large on-prem Perl monolith, and replace it with\n                designed-for-AWS microservices written in Java.",
          " A key milestone was reached when we provided unprecedented\n                streaming access for the London 2012 Olympic Games. The whole\n                project was highly successful; we then built on that success as\n                we extended the platform with new features, greater capacity,\n                and improved resilience.",
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
  ],
  employmentMore: {
    da: "Samt tre flere stillinger, der dækker perioden 1995 — 2007, udeladt for kortheds skyld",
    en: "Plus three more jobs covering 1995 – 2007, omitted for brevity",
  },
  education: [
    {
      name: {
        da: "BSc Matematik, 1994\nSouthampton University, UK",
        en: "BSc Mathematics, 1994\nSouthampton University, UK",
      },
    },
  ],
  references: {
    da: "Referencer oplyses på opfordring",
    en: "References available on request",
  },
};
