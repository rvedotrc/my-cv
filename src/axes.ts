import { glob } from "node:fs/promises";

type Combo = {
  readonly variant: string;
  readonly language: string;
};

export const scanAxes = async () => {
  const combinations: Combo[] = [];

  for await (const name of glob(`src/app/*/*/page.tsx`)) {
    const parts = name.split("/");
    combinations.push({ variant: parts[3], language: parts[2] });
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
