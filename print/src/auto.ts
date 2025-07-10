import puppeteer, { type Browser } from "puppeteer";
import * as fs from "node:fs";

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

export const printToPdfs = async (): Promise<void> => {
  const browser = await puppeteer.launch({
    browser: "firefox",
    headless: true,
    dumpio: false,
  });

  try {
    await Promise.all(
      ["java", "ruby-and-typescript"]
        .map((variant) =>
          ["en-gb", "da-dk"].map((language) =>
            savePageToPDF(
              browser,
              `http://localhost:3001/${language}/${variant}`,
              `var/cv.${variant}.${language}.pdf`,
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
