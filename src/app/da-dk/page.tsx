/* eslint-disable @next/next/no-css-tags */

import type { PropsWithChildren, ReactNode } from "react";
import CVStyles from "../CVStyles/page.module.css";
import Switcher from "../switcher/page";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

const Sk = (props: PropsWithChildren) => (
  <span className={CVStyles.skillWord}>{props.children}</span>
);

const F = (props: { p: number; before?: number; after?: number }) => (
  <>
    <div
      className={CVStyles.pagePositionGuide}
      style={{
        borderTop: "1px solid red",
        left: "0",
        right: "0",
        height: "1em",
        position: "absolute",
        top: `${props.p * 1108 - 100.5}px`,
      }}
    />
    <div
      style={{
        // backgroundColor: "red",
        height: `${props.before ?? 0}px`,
      }}
    />
    <footer>side {props.p} af 5 — Rachel Evans</footer>
    <div
      style={{
        // backgroundColor: "green",
        height: `${props.after ?? 0}px`,
      }}
    />
  </>
);

export const metadata: Metadata = {
  title: "CV — Rachel Evans",
};

export default function Home({
  pitchTitle,
  pitchText,
}: {
  pitchTitle: ReactNode;
  pitchText: ReactNode;
}) {
  if (!pitchText || !pitchTitle) return redirect("/");

  return (
    <div lang="da-dk" className={CVStyles.cv}>
      <Switcher />

      <section className={CVStyles.header}>
        <h1>Rachel Evans</h1>

        <ol className={CVStyles.code}>
          <li>+45 71 51 34 86</li>
          <li>rachel@rachelevans.org</li>
          <li>hun/hende/hendes</li>
        </ol>
      </section>

      <section className={CVStyles.pitch}>
        <h2>{pitchTitle}</h2>

        <div className={CVStyles.pitchText}>{pitchText}</div>
      </section>

      <section className={CVStyles.skills}>
        <h2>Færdigheder</h2>

        <ul>
          <li>
            <h3>Sprog, Frameworks, og Infrastruktur</h3>
            <ul>
              <li>Java, Ruby, Ruby on Rails, bash, zsh, C, Python</li>
              <li>TypeScript / JavaScript, Node, React, Webpack, Angular</li>
              <li>HTML, CSS</li>
              <li>SQL: MySQL, Oracle, Postgres, MS SQL</li>
              <li>Redis, memcached, Kafka, ActiveMQ</li>
            </ul>
          </li>

          <li>
            <h3>Cloud & DevOps</h3>
            <ul>
              <li>
                AWS: EC2, S3, Lambda, SQS, SNS, RDS, IAM, VPC, KMS,
                CloudFormation, Route53, Glacier, DynamoDB, SimpleDB, ACM
              </li>
              <li>Docker, Kubernetes, Azure, GCP (Google)</li>
              <li>Git, GitHub Actions, CI/CD pipelines, Jenkins</li>
              <li>Linux Networking, Sysadmin</li>
            </ul>
          </li>

          <li>
            <h3>Automatisering & Værktøj</h3>
            <ul>
              <li>Splunk, Datadog, Sentry, Wiz, Terraform</li>
              <li>
                GraphQL, REST, TCP/IP, HTTP, DNS, flere Internet Protokoller
              </li>
              <li>Cryptography</li>
            </ul>
          </li>

          <li>
            <h3>Lederskab & Samarbejde</h3>
            <ul>
              <li>Teknisk team lederskab</li>
              <li>Arkitektur, design, og refinement</li>
              <li>Vejledning og rådgivning</li>
              <li>Processforbedring, standardisation, automatisering</li>
            </ul>
          </li>
        </ul>
      </section>

      <F p={1} before={50} after={110} />

      <section className={CVStyles.employment}>
        <h2>Ansættelseshistorie</h2>

        <ol>
          <li>
            <h3>Frivillig Mentor, Hack Your Future</h3>
            <h4>København, Danmark; august 2024 – nu</h4>
            <p>
              Hack Your Future tilbyder et program kurser med formålet at træne
              flygtninger, indvandrer, og andre udsatte i det danske
              arbejdsmarked med færdighederne til at få et tech job.
            </p>
            <p>
              Jeg arbejder med den aktive gruppe mentorer, og sammen danner vi
              programmet og skaber træningsmaterialerne, og til sidst underviser
              vi praktikanterne. Jeg er og aktiv i at identificere ting som
              tilføjer friktion til den frivilliges oplevelse, såsom manglende
              eller uklar dokumentations, eller "cruft", der skulle fjernes
              eller arkiveres.
            </p>
            <p>
              Jeg har også ledet nogle klasser (f.eks. undervisning i Git), og
              nogle gange møder jeg op om søndagen for at og socialisere og at
              give vejledning, hvor det ønskes.
            </p>
          </li>

          <li>
            <h3>(Ulønnet) Senior Software Ingeniør, Estatetool</h3>
            <h4>København, Danmark; juni 2025 — juni 2025</h4>
            <p>
              Estatetools kodebase danner én stor <Sk>Java / Spring Boot</Sk>{" "}
              monolit, men med næsten ingen automatiserede tests. Jeg lavede
              nogle grundlæggende automatiserede tests til deres kernefunktioner
              med at bruge
              <Sk>Playwright</Sk>
              browser automatisering. Testerne kunne køres med produkten
              indstillet enten til dansk eller til engelsk.
            </p>
          </li>

          <li>
            <h3>Senior Software Ingeniør, Hedia</h3>
            <h4>København, Danmark; juni 2024 – august 2024</h4>
            <p>
              <Sk>The stack</Sk>: full stack i TypeScript med en PostgreSQL
              database, deployet til Scalingo ved hjælp af GitHub Actions. REST
              via OpenAPI skema.
            </p>
            <p>
              Selv under onboarding-processen identificerede jeg
              uoverensstemmelser og unøjagtige oplysninger i billedet af
              systemet, som jeg blev præsenteret for. Jeg var således i stand
              til at forespørge disse point, og i flere tilfælde lære holdet
              noget, som de ikke kendte til deres eget system. Så rettede vi op
              disse punkter, hvilket øgede dokumentationsnøjagtigheden og
              reducerede omkostninger og friktion.
            </p>
            <p>
              Jeg bidrog med adskillige forbedringer til CI-kæden, fx med
              muligheden for at målrette et specifikt library ved opgradering af
              afhængigheder, hvorved størrelsen og risikoen reduceres af
              ændringer. Jeg bidrog også individuelt til TypeScript-kodebase,
              inklusive sikkerhedsforbedringer.
            </p>
          </li>

          <F p={2} before={92} after={110} />

          <li>
            <h3>Senior Software Ingeniør, Zendesk</h3>
            <h4>København, Danmark; februar 2019 – maj 2024</h4>

            <p>
              <Sk>The stack</Sk>: overvejende en stor Ruby on Rails monolit, der
              bruger et MySQL-datalager og Kafka til messaging; deployet vha
              GitHub Actions og Spinnaker til en række Kubernetes clusters i
              AWS. Derudover diverse mikrotjenester i Ruby on Rails eller
              TypeScript, og frontend-komponenter i React.
            </p>

            <p>
              Zendesk laver software til styring af kunderelationer (som kaldes
              også "Zendesk"). Virksomheden har kontorer og ingeniørteams rundt
              om i verden med flere end 1500 ingeniører. Københavnskontoret
              tager sig for det meste af ét produkt inden for Zendesk-pakken,
              nemlig "Guide", med 8 hold. Jeg var teknisk leder for ét af disse
              hold.
            </p>

            <p>
              Som tech lead var jeg ansvarlig for at sikre, at mit teams arbejde
              var i overensstemmelse med relevante standarder og retningslinjer,
              og jeg fungerede som en muliggørende gateway (hvor påkrævet)
              mellem mit team og det bredere Zendesk-ingeniørsamfund. Jeg tog en
              aktiv rolle i den tekniske udvikling i dette samfund ved at
              bidrage ideer, spørgsmål og kommentarer til tekniske dokumenter.
              Jeg var også god til at identificere kanttilfælde og tvetydige
              områdespecifikationer, og dermed til at gøre dem mere robuste og
              omfattende.
            </p>

            <p>
              Jeg samarbejdede med kollegaer fra mange steder og tidszoner rundt
              omkring i verden, især San Francisco, Melbourne og Filippinerne.
              Som en individuel bidragyder arbejdede jeg mest i Ruby,
              Typescript, SQL (MySQL-variant), Kubernetes, Docker, Google Cloud
              og AWS. Jeg havde en særlig interesse i at forbedre vores
              produktsikkerhed og stabilitet. Ved at identificere problemhuller
              og så foreslå og implementere løsninger, hjalp jeg
              Zendesk-ingeniørsamfundet til at træffe klarere beslutninger,
              forenkle produktet og til at spare tid.
            </p>

            {/* <div className={CVStyles.wip}>
                <p>
                  While at Zendesk I worked in three different teams (at
                  different times), ranging from 3 people to 16. In each case we
                  had responsibility for a similar area of the product, working
                  alongside the other Copenhagen-based teams. In all three teams
                  I was a senior engineer; in the second and third teams I was
                  also tech lead, despite not being promoted to a staff
                  engineer.
                </p>
                <p>Tech lead</p>
                <p>
                  As a tech lead, I acted to significantly improve team
                  performance and product delivery across the product suite. I
                  did this via active engagement in the product feature
                  pipeline, collaborating with the product owner and other
                  stakeholders, as well as in planning and refinement sessions.
                  I promoted the idea of making the plans available to the team
                  for preview at an earlier phase, so we had the opportunity to
                  understand what was coming, and to perform reasonableness
                  checks, for example relating to the availability or otherwise
                  of data.
                </p>
                <p>
                  In collaboration with the other tech leads in the area, and
                  with our group tech lead, I proposed designs, and helped
                  review others’ designs, especially relating to architectural
                  changes, helping to ensure that the work being done both
                  within the group and within my team adhered to sound design
                  and architectural principles, and was coherent with the wider
                  product landscape.
                </p>
                <p>Participation in the engineering community</p>
                <p>
                  wide IC: Championed scalability, reliability, and security
                  across the entire platform.
                </p>
                <p>
                  wide IC: Shaped organisational standards and fostered a
                  culture of operational excellence and continuous improvement,
                  extending impact beyond my own teams.
                </p>
                <p>Senior engineer</p>
                <p>
                  Senior: Elevated team performance by coaching and mentoring
                  teammates, and by driving the adoption of best practices.
                </p>
                <p></p>
                <p>
                  IC: Ownership of code. Get to know it, refactor it, love it.
                  Strip out dead patterns, generally bring it out of the
                  darkness and into a place where we can truly own it.
                </p>
                <p>
                  IC: campaigned for stronger validation within the core
                  codebase, where most of the (often hostile) user input is
                  dealt with. Campaigned for (ideally) zero 500 errors — crashes
                  are not normal, and are noise.
                </p>
                <p>
                  IC: improved clarity of code ownership by linting the (very
                  large) CODEOWNERS file, stripping out dead entries, and making
                  sure that every single file in the repo is either owned, or
                  explicitly in an “unowned files” list.
                </p>
                <p>
                  IC: improved automation and tooling of the pipeline by
                  requiring all PRs to have a risk label (4 value enum), and
                  using those labels to show the risk associated with deploying
                  any particular tag.
                </p>
                <p></p>
                <p>Culture</p>
                <p>
                  I always worked to promote inclusion and diversity, fostering
                  a healthy and safe culture for the benefit of the
                  organisation. This might take the form of promoting
                  accessibility in training material; in calling out use of
                  slurs or other problematic language and providing an
                  appropriate corrective nudge; in pointing out training
                  material which made unsafe assumptions (for example, assuming
                  that everyone has children) and suggesting alternatives, and
                  so on.
                </p>
                <p>—---</p>
                <p>
                  Observability via Datadog and Rollbar, later Sentry.
                  Inter-service communcation via REST and GraphQL APIs. Slack
                  bots & automation. Redis. custom github actions.
                </p>
              </div> */}
          </li>

          <li>
            <h3>
              Principal Software Ingeniør, British Broadcasting Corporation
            </h3>
            <h4>London, Storbritannien; oktober 2007 – januar 2019</h4>

            <h5>Teamleder / tech lead, Media Services team (2009-2018)</h5>

            <p>
              Media Services' mission var at håndtere alle BBCs online lyd og
              video. Mest bemærkelsesværdigt betød dette BBCs live og catch-up
              tv-streamingtjeneste "iPlayer", samt iPlayer Radio.
            </p>
            <p>
              Omkring 2011-2013 gennemgik Medietjenester en større
              transformation: vores produkt gik fra at være en uvedligeholdelig,
              upålidelig, on-site database-drevet Perl monolit, til en
              velfungerende skalerbar samling af{" "}
              <Sk>meddelelsesdrevne mikrotjenester</Sk> lavet i <Sk>Java</Sk> og
              hostet i <Sk>AWS</Sk>. Som en del af dette forændring lærte vi
              igen hvordan man skaber og leverer software ved at indføre
              kontinuerlig levering.
            </p>
            <p>
              Langs ruten var vi pionerer i brugen af skyen til en major
              BBC-tjeneste; vi leverede BBC iPlayer-indhold til en partners
              platform; og vi leverede hidtil uset live og on-demand online
              video til London 2012 Olympiske Lege.
            </p>

            <F p={3} before={58} after={110} />

            <p>
              I al denne tid var Media Services sammensat af tre agile hold,
              hvoraf det ene blev ledet af mig. Mit arbejde omfattede mennesker
              ledelse, scrum-ledelse, teknisk ledelse og dag-til-dag
              teamvejledning; og at coache og at vejlede mine individuelle
              teammedlemmer. Jeg samarbejdede med vores hovedarkitekt for at nå
              frem til et robust design. Jeg kommunikerede så visionen til
              teamet, og deltog i planlægning og raffinering; og så vidt muligt
              også at være en individ kode bidragyder.
            </p>

            <p>
              Jeg leverede mange effektive og engagerende{" "}
              <Sk>præsentationer</Sk>, i forskellige sammenhænge og til
              forskellige målgrupper: alt fra 5 minutter til 50, 5 personer til
              200; internt i mit team, eller min afdeling, eller hele BBC
              engineering, eller eksternt / offentligt. Jeg blev bedt om at tale
              ved BBCs åbne dage, tech-topmøder, rekruttering dage osv.
            </p>

            <p>
              I mine sidste måneder hos BBC trænede jeg et scrum-hold,
              fungerende som en "gæst" hovedingeniør. I denne rolle kunne jeg
              hjælpe med at starte holdet i den rigtige retning. Sådan
              forbedrede jeg teamets scrum-effektiviteten. Jeg gav vejledning
              til holdets anden hovedingeniør, som ville fortsætte efter jeg
              havde taget min afsked.
            </p>
          </li>

          <li>
            <h3>Frivillig Open Source Bidragyder, MusicBrainz</h3>
            <h4>Online; i min fritid, 2001 — 2006</h4>
            <p>
              MusicBrainz har formålet at være en omfattende og åben database
              til musik. Grundlagt oprindeligt som reaktion til begrænsningerne,
              der blev placeret på den tidligere Compact Disc Database (CDDB),
              projektet voksede til at omfange et bredt udvalg musik-relateret
              data.
            </p>
            <p>
              I fem år gav jeg min fritid intensivt til dette projekt. Jeg var
              den førende (og tit den eneste) vedligeholder til både webserveren
              (<Sk>Perl, Apache, mod_perl, PostgreSQL</Sk>) og databasen og
              diverse infrastruktur (mail, overvågning, sikkerhed, osv). Jeg var
              langt den meste aktive bidrayger i flere år da jeg forbedrede
              datakonsistens, performance, sikkerhed, skalbarhed, og jeg
              udviklede mange nye features.
            </p>
          </li>

          <li>
            <h3>Programmør, Power Internet</h3>
            <h4>
              Milton Keynes, Storbritannien; december 2000 – september 2007
            </h4>
            <p>
              Power Internet var en internetudbyder, der også leverede "bare
              metal" server hosting og skræddersyet websted udvikling. Min rolle
              var oprindeligt at udvikle netop disse hjemmesider, men den
              voksede sig hurtigt til at fokusere i stedet på udviklingsmetoder,
              vedligeholdelse af servererne, der kørte vores kernefunktioner
              (mail, hosting, DNS, authentication osv) samt at skabe og
              vedligeholde flere afgørende interne tjenester. Koden var næsten
              altid med <Sk>Perl</Sk> med <Sk>MySQL</Sk>.
            </p>

            <p>
              Jeg lærte også om diverse Internet protokoller såsom IP / ICMP /
              UDP / TCP, SMTP, IMAP, RADIUS, HTTP, SSH mm.
            </p>
          </li>

          <F p={4} before={32.5} after={110} />

          <li>
            <h3>Udvikler, Radius Retail</h3>
            <h4>
              Milton Keynes, Storbritannien; september 1998 – december 2000
            </h4>
            <p>Lavede software til brug for detailhandlere.</p>
            <p>
              Jeg arbejdede i <Sk>C, SQL, og Perl</Sk>. Alle software måtte
              fungere lige, på tværs af diverse database / OS kombinationer:{" "}
              <Sk>Informix</Sk> (på *nix), <Sk>Oracle</Sk> (både på *nix og
              Windows), <Sk>MS SQL Server</Sk> (på Windows). En stor del af mit
              arbejde var back-end, at skrive batchbehandling i C/SQL, og så
              senere på software til at indtage data fra hovedproduktet ind i et
              datavarehus.
            </p>
          </li>

          <li>
            <h3>Udvikler, Computer Sciences Corporation</h3>
            <h4>Bedford, Storbritannien; juli 1995 – september 1998</h4>
            <p>
              CSC (i dag kendt som DXC Technology) var en stor amerikansk
              multinational konsulents- og servicevirksomhed. Hos deres branch i
              Bedford håndterede de deres kontrakt med Autoglass, en udbyder af
              reparation og udskiftning af bilglas. På CSC brugte jeg{" "}
              <Sk>VMS/DCL, V‑Test, SQL</Sk> (i første omgang en <Sk>Ingres</Sk>{" "}
              database, senere også <Sk>Informix og Oracle 7</Sk>), og{" "}
              <Sk>C med embedded SQL</Sk>. Jeg blev site ekspert i at bruge
              V-Test til belastningstest, og i batchbehandling på tværs af flere
              databaser. Jeg lærte om SQL-ydelse og databaseadministration for
              både Ingres og Oracle, og begyndte også at bruge unix og lære "the
              shell".
            </p>
          </li>

          <li>
            <h3>Returns Handler, Watford Electronics</h3>
            <h4>Luton, Storbritannien; juli 1994 – juli 1995</h4>
            <p>
              Watford Electronics var en forhandler, primært af PC-software og
              hardware. Min rolle var at håndtere varer returneret af kunder,
              kontrollere varerne for fejl og sende varerne til producent eller
              lager efter behov.
            </p>
          </li>
        </ol>
      </section>

      <section className={CVStyles.furtherDetails}>
        <h2>Diverse detaljer</h2>

        <ul>
          <li>
            <span>LinkedIn:</span>
            <span>https://www.linkedin.com/in/rvedotrc/</span>
          </li>
          <li>
            <span>GitHub:</span>
            <span className={CVStyles.code}>@rvedotrc &amp; @blaahaj</span>
          </li>
          <li>
            <span>Bopæl:</span>
            <span>København, Danmark</span>
          </li>
          <li>
            <span>Arbejdstilladelse i Danmark:</span>
            <span>ja</span>
          </li>
          <li>
            <span>Nationalitet:</span>
            <span>Storbritannien</span>
          </li>
          <li>
            <span>Sprog:</span>
            <span>
              Engelsk: modersmål;
              <br />
              Dansk: flydende (CEFR C1)
            </span>
          </li>
        </ul>

        <p>Referencer oplyses gerne på opfordring</p>
      </section>

      <F p={5} before={72.5} after={0} />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const pageHeight = 1108;
            const offsetFromBottom = 60;

            const poll = (tweak) => {
              console.log(window.location.pathname);

              [...document.getElementsByTagName("footer")].forEach((f, i) => {
                const actualBottom = f.offsetTop + f.offsetHeight;
                const desiredBottom = ((i + 1) * pageHeight) - offsetFromBottom;

                const paddingNeeded = desiredBottom - actualBottom;
                console.log({ i, f, actualBottom, desiredBottom, paddingNeeded });
              });
            };

            poll(true);
          `,
        }}
      />
    </div>
  );
}
