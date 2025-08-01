import puppeteer, { type Browser } from "puppeteer";
import * as fs from "node:fs";
import { execFileSync } from "node:child_process";
import { variants, languages } from "../axes";

const savePageToPDF = async (
  browser: Browser,
  url: string,
  pdfFile: string,
) => {
  const page = await browser.newPage();

  try {
    await page.goto(url);

    await page.addStyleTag({
      content: "@page { size: A4 portrait; margin: 0; }",
    });

    const stream = await page.createPDFStream({
      format: "A4",
      displayHeaderFooter: false,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      preferCSSPageSize: true,
    });

    const reader = stream.getReader();
    let buffer: Uint8Array = Buffer.of();

    while (true) {
      const v = await reader.read();
      if (v.value) buffer = Buffer.concat([buffer, v.value]);
      if (v.done) break;
    }

    await fs.promises.writeFile(pdfFile, buffer);
    console.log(`Created ${pdfFile}`);
  } finally {
    page.close();
  }
};

const getVersion = async (): Promise<string> => {
  const head = execFileSync("git", ["rev-parse", "HEAD"], {
    encoding: "utf-8",
  }).trim();

  const isClean = execFileSync("git", ["status"], {
    encoding: "utf-8",
  }).includes("nothing to commit, working tree clean");

  return `${head}${isClean ? "" : "-dirty"}`;
};

export const printToPdfs = async (): Promise<void> => {
  const browser = await puppeteer.launch({
    browser: "firefox",
    headless: true,
    dumpio: false,
  });

  const version = await getVersion();

  try {
    await Promise.all(
      variants
        .map((variant) =>
          languages.map((language) =>
            savePageToPDF(
              browser,
              `http://localhost:3001/${language}/${variant}`,
              `var/pdf/cv.${version}.${language}.${variant}.pdf`,
            ),
          ),
        )
        .flat(),
    );
  } finally {
    await browser.close();
  }
};

printToPdfs();
