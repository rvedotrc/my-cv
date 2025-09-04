import { glob, stat } from "node:fs/promises";

type Combo = {
  readonly variant: string;
  readonly language: string;
};

export const scanAxes = async () => {
  const combinations: Combo[] = [];

  for await (const name of glob(`src/app/*/*/page.tsx`)) {
    const parts = name.split("/");
    combinations.push({ variant: parts[2], language: parts[3] });
  }

  const variants = Array.from(
    new Set(combinations.map((c) => c.variant)),
  ).sort() as readonly string[];

  const languages = Array.from(
    new Set(combinations.map((c) => c.language)),
  ).sort() as readonly string[];

  return {
    variants,
    languages,
    comboExists: (combo: Combo) =>
      combinations.find(
        (candidate) =>
          candidate.variant === combo.variant &&
          candidate.language === combo.language,
      ) !== undefined,
  } as const;
};

// const appDir = "./src/app";

export const languages = ["en-gb", "da-dk"] as const;
export const variants = [
  "java",
  "ruby-and-typescript",
  "media",
  "typescript-and-react",
] as const;

export const comboExists = async (opts: {
  variant: (typeof variants)[number];
  language: (typeof languages)[number];
}) =>
  stat(`src/app/${opts.language}/${opts.variant}/page.tsx`).then(
    () => true,
    () => false,
  );
