const css = `@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

body {
  margin: 1em;
  background-color: #fff;
  color: #000;
  font-family: "Lato", sans-serif;
}

@media print {
  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    print-color-adjust: exact;
  }
}

div {
  /* border: 1px solid rgba(255, 0, 0, 0.03); */
}

.bodyPanel {
  display: flex;
  flex-direction: row;
  width: 8.3in;
  height: 11.7in;
  overflow: hidden;
  margin-block: 1em;
  box-shadow:
    0 14px 28px hsla(0deg 0% 0% / 25%),
    0 10px 10px hsla(0deg 0% 0% / 22%);
  position: relative;
}

.bodyPanel .stripe {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: stretch;
}

.bodyPanel .stripe > div {
  height: 100%;
}

.bodyPanel .stripe > div:nth-child(3n) {
  background: hsl(214, 63%, 40%);
}

.bodyPanel .stripe > div:nth-child(3n + 1) {
  background: hsl(214, 63%, 30%);
}

.bodyPanel .stripe > div:nth-child(3n + 2) {
  background: hsl(214, 63%, 50%);
}

.bodyPanel .stripe > div:nth-child(4n + 1) {
  flex-grow: 3;
}

.bodyPanel .stripe > div:nth-child(4n + 2) {
  flex-grow: 6;
}

.bodyPanel .stripe > div:nth-child(4n + 3) {
  flex-grow: 4;
}

.bodyPanel .stripe > div:nth-child(4n) {
  flex-grow: 5;
}

.bodyPanel .stripe:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 25%;
  background-color: black;
  opacity: 0.25;
}

@media print {
  .bodyPanel {
    width: 100vw;
    height: 100vh;
    margin: 0;
    box-shadow: none;
  }
}

.sidePanel {
  background-color: hsl(214, 63%, 20%);
  color: hsl(0, 0%, 95%);
  margin-top: 8px;
  padding: 1.2em;
  width: 200px;
  background-image: url("https://www.transparenttextures.com/patterns/swirl.png");
  background-position: top right;
}

.headshot {
  /* border: 0.5em solid #444; */
  display: "inline-block";
  width: 200px;
  height: 200px;
  /* margin: 1em; */
  margin-bottom: 1em;
}

.headshot img {
  border-radius: 4px;
  box-sizing: border-box;
  border: 4px solid hsl(214, 63%, 40%);
}

.mainPanel {
  padding: 1em;
  margin-top: 8px;
  color: hsl(0, 0%, 10%);
  background-color: hsl(0, 0%, 98%);
  width: calc(100% - 200px);
  background-image: url("https://www.transparenttextures.com/patterns/swirl.png");
  background-position: top left;
}

.sidePanel a,
.sidePanel a:visited {
  color: inherit;
  text-decoration: none;
}

.sidePanel a:hover,
.sidePanel a:focus {
  text-decoration: underline;
}

.sidePanel hr {
  border: 0;
  border-top: 1px solid hsl(0, 0%, 95%);
  margin-block: 1.5em;
}

body {
  font-size: 10pt;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 250%;
  line-height: 1.5;
}

h2 {
  font-size: 150%;
  margin-top: 1.5em;
}

.contactPronouns {
  font-size: 40%;
}

.contactPronouns:before {
  content: "(";
}

.contactPronouns:after {
  content: ")";
}

.contactTitle {
  font-weight: bold;
  font-size: 1.25em;
}

.contactSubtitle {
  margin-top: 2em;
  font-weight: bold;
  /* font-size: 1.2em; */
}

.contactPanel {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
}

.contactPanel > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1.7em;
  position: relative;
  left: -0.4em;
}

.contactPanel > div > div:first-child {
  position: relative;
  top: 0.2em;
  width: 2em;
  text-align: center;
}

.educationPanel {
  margin-top: 1em;
  margin-bottom: 1em;
}

.educationPanel > div {
  white-space: pre;
}

.languages {
  list-style: none;
  margin: inherit;
  margin-block: 1em;
  padding: 0;
}

.languages li {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.languages li .languageName {
  width: 4em;
}

.languages li .languageName::after {
  content: ":";
}

.languages li .languageStars {
  position: relative;
  top: 0.1em;
  width: 5.5em;
}

.languages li .languageNote:before {
  content: "(";
}

.languages li .languageNote:after {
  content: ")";
}

.skillsPanel h3 {
  margin-block-start: 1.25em;
  margin-block-end: 0.5em;
}

.skillsPanel ul {
  margin-block: 0;
  padding-inline-start: 1em;
}

.skillsPanel ul li {
  margin-block-end: 0.5em;
}

.employmentList {
  list-style: none;
  padding: 0;
  margin-block: 1em 0;
}

.employmentList > li {
  margin-bottom: 0.8em;
}

.employmentHeading {
  font-weight: bold;
  font-size: 175%;
  line-height: 1.5;
}

.employmentInfo {
  display: flex;
  flex-direction: row;
  font-weight: bold;
  font-size: 1.15em;
}

.employmentUnpaidVolunteer {
  font-style: italic;
  font-weight: lighter;
  padding-inline-start: 2em;
}

.employmentText ul {
  list-style-type: disc;
  padding-inline-start: 1em;
  margin-block-start: 0.5em;
}

.employmentText ul li {
  padding-block-start: 0.5em;
}

.introPanel p,
.employmentText ul li {
  line-height: 1.35;
}
`;

export default function MyStyles() {
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
