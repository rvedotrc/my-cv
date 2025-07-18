const css = `@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

body {
  max-width: min(40em, calc(100vw - 4em));
  margin-inline: auto;
  margin-block-start: 2em;
  font-family: "Lato", sans-serif;
}

h1, h2, h3, h4 {
  margin-block: 0;
}

h1,h2,h3,h4,p,section, ul, ol, li, footer {
  // border: 1px dotted black;
  // background: rgba(0, 0, 0, 4%);
  // padding: 1px;
}

.code {
  font-family: "Lucida Console", "Courier New", monospace;
  font-weight: bold;
}

// @media screen {
//   header, footer, thead, tfoot {
//     display: none;
//   }
// }

section {
  margin-block-end: 2em;
}



/* Section-specific */

.header {
  // background-color: #ffe0ff;
  display: flex;
  flex-direction: row;

  > * {
    margin: 0;
  }

  h1 {
    font-size: 350%;
  }

  > *:last-child {
    margin-left: auto;
    margin-block: auto;
  }

  ol li {
    text-align: right;
    list-style: none;
  }
}

.pitch {
  .pitchText {
    background: linear-gradient(to bottom, transparent 8lh, red 8lh, red);
  }
}

.skills {
  ul {
    margin-block: 1em;
  }

  > ul {
    list-style: none;
    padding-left: 0;
  }

  > ul ul {
    list-style: "⋆  ";
  }
}

.employment {
  ol {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 2.7em;
  }

  h3 {
    margin-block-end: 0.5em;
  }

  h4 {
    font-weight: bold;
    font-style: italic;
    font-size: 100%;
    margin-block-start: 0.5em;
  }
}

.further-details {
  ul {
    padding-left: 0;
  }

  li {
    display: flex;
  }

  li > span:first-child {
    width: 14em;
  }
}

@media print {
  @page {
    margin: 5em 3em;
  }
}

.wip {
  border-left: 3px double black;
  padding-left: 2em;
}

.skillWord {
  font-weight: bold;
}

footer, div.myFooter {
  x-background: pink !important;
  width: 100%;
  text-align: center;
  font-size: smaller;
}

.switcher {
  display: block;
  border: 3px double black;
  position: fixed;
  top: 1em;
  left: 1em;
  padding-inline-end: 2em;
}

@media print {
  .header {
    margin-block-start: 3em;
  }

  .switcher {
    display: none;
  }
}

`;

export default function MyStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
