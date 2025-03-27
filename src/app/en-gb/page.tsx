/* eslint-disable @next/next/no-css-tags */
"use client";

import type { PropsWithChildren } from "react";
import MyStyles from "../myStyles";

const Sk = (props: PropsWithChildren) => (
  <span className="skillWord">{props.children}</span>
);

const F = (props: { p: number; before?: number; after?: number }) => (
  <>
    <div
      style={{
        // backgroundColor: "red",
        height: `${props.before ?? 0}px`,
      }}
    />
    <footer>page {props.p} of 5 — Rachel Evans</footer>
    <div
      style={{
        // backgroundColor: "green",
        height: `${props.after ?? 0}px`,
      }}
    />
  </>
);

export default function Home() {
  return (
    <html>
      <head>
        <title>Rachel Evans — CV</title>
        <MyStyles />
      </head>

      <body>
        <section className="header">
          <h1>Rachel Evans</h1>

          <ol className="code">
            <li>+45 71 51 34 86</li>
            <li>rachel@rachelevans.org</li>
            <li>she/her/hers</li>
          </ol>
        </section>

        <section className="pitch">
          <h2>Experienced Software Engineer and Technical Leader</h2>

          <div className="pitchText">
            <p>
              I am a dedicated software engineer specialising in back-end
              development with full-stack proficiency. For 8 years while at the
              BBC, Java was my team's primary language for production code, as
              we designed and built the BBC's online audio/video processing and
              publication platform from scratch.
            </p>
            <p>
              I love producing quality, secure, maintainable code, and taking
              ownership all the way from conception to production to eventual
              decommissioning. As well as learning from others, I love mentoring
              those around me, using my experience to build up the whole team.
            </p>
          </div>
        </section>

        <section className="skills">
          <h2>Skills</h2>

          <ul>
            <li>
              <h3>Languages, Frameworks, and Infrastructure</h3>
              <ul>
                <li>Java, Ruby, Ruby on Rails, bash, zsh, C, Python</li>
                <li>TypeScript / JavaScript, Node, React, Webpack</li>
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
                <li>Docker, Kubernetes</li>
                <li>Git, GitHub Actions, CI/CD pipelines, Jenkins</li>
                <li>Linux Networking, Sysadmin</li>
              </ul>
            </li>

            <li>
              <h3>Automation & Tools</h3>
              <ul>
                <li>Splunk, Datadog, Sentry, Wiz, Terraform</li>
                <li>
                  GraphQL, REST, TCP/IP, HTTP, DNS, more Internet Protocols
                </li>
                <li>Cryptography</li>
              </ul>
            </li>

            <li>
              <h3>Leadership & Collaboration</h3>
              <ul>
                <li>Technical team leadership</li>
                <li>Architecture, design, and refinement</li>
                <li>Coaching and mentoring</li>
                <li>Process improvement, standardisation, automation</li>
              </ul>
            </li>
          </ul>
        </section>

        <F p={1} before={50} after={150} />

        <section className="employment">
          <h2>Employment history</h2>

          <ol>
            <li>
              <h3>Volunteer Teacher / Mentor, Hack Your Future</h3>
              <h4>Copenhagen, Denmark; August 2024 – present</h4>
              <p>
                Hack Your Future offers a coding “bootcamp”-style course to
                refugees, immigrants, and others disadvantaged in the job
                market.
                {/* I first encountered the project via my work at Zendesk
                (who partner with Hack Your Future) in 2019; after I left
                Zendesk, I re-engaged with HYF directly. */}
              </p>
              <p>
                {/* Since then  */}I have been active in identifying things
                which add friction to the volunteer experience, communicating
                those issues, then proposing and (where possible) implementing
                solutions.
                {/* For example, there are more than 100 repositories in
                their GitHub organisation, yet very little information on what
                many of the repositories are (e.g. strategy documents, public
                web site, curriculum, teaching materials, students’ projects,
                …), so I proposed a combination of archiving and adding “topic”
                labels to help. Or, as another example, it would be helpful it
                were easier to identify who does what in the organisation, so
                it’s easier to identify sources of help. */}
              </p>
              <p>
                I am active in the mentor group, and participate in discussions
                and workshops around how to develop the curriculum.
              </p>
              <p>
                I have also led some classes (e.g. teaching Git), and sometimes
                turn up to the weekly meetings purely to hang out and socialise,
                and provide guidance where requested.
              </p>
            </li>

            <li>
              <h3>Senior Software Engineer, Hedia</h3>
              <h4>Copenhagen, Denmark; June 2024 – August 2024</h4>
              <p>
                <Sk>The stack</Sk>: full stack in TypeScript using a PostgreSQL
                database, deployed to Scalingo using GitHub Actions. REST via
                OpenAPI schema.
              </p>
              <p>
                Even during the on-boarding process I identified inconsistencies
                and inaccurate information in the picture of the system with
                which I was being presented. I was thus able to query these
                points, and in several cases teach the team something that they
                were not aware of about their own system. We then rectified
                those points, thus increasing documentation accuracy, decreasing
                costs, and reducing friction.
              </p>
              <p>
                I contributed several improvements to the build & deployment
                chain: for example, the ability to target a specific library
                when upgrading dependencies, thereby reducing the size and risk
                of changes. I also provided individual contributions to the
                TypeScript codebase, including security improvements.
              </p>
            </li>

            <li>
              <h3>Senior Software Engineer, Zendesk</h3>
              <h4>Copenhagen, Denmark; February 2019 – May 2024</h4>

              <p>
                <Sk>The stack</Sk>: predominantly a large Ruby on Rails monolith
                using a MySQL data store and Kafka for messaging; deployed using
                GitHub Actions and Spinnaker to a series of Kubernetes clusters
                in AWS. Additionally, various microservices in Ruby on Rails or
                TypeScript, and front end components in React.
              </p>

              <F p={2} before={63} after={150} />

              <p>
                Zendesk makes customer relationship management software (which
                is also called “Zendesk”). The company has offices and
                engineering teams around the world, with more than 1500
                engineers. The Copenhagen office mostly looks after one product
                within the Zendesk suite, “Guide”, with 8 teams. I was tech lead
                for one of those teams.
              </p>

              <p>
                As tech lead, I was responsible for ensuring that my team’s work
                was compliant with relevant requirements and guidelines, and I
                acted as an enabling gateway (where required) between my team
                and the wider Zendesk engineering community. I took an active
                role in technical developments in that community, contributing
                ideas, questions, and comments on technical documents;
                identifying edge cases and ambiguous areas specifications, and
                helping to make them more robust and comprehensive.
              </p>

              <p>
                I collaborated with people in many locations and time zones,
                especially San Francisco, Melbourne, and the Philippines. As an
                individual contributor, I worked mostly in Ruby, Typescript, SQL
                (MySQL variant), Kubernetes, Docker, Google Cloud and AWS. I
                took a special interest in improving our product security and
                stability. By identifying problem-gaps, and proposing and
                implementing solutions, I helped the Zendesk engineering
                community to make clearer decisions, simplify the product, and
                save time.
              </p>

              {/* <div className="wip">
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
                Principal Software Engineer, British Broadcasting Corporation
              </h3>
              <h4>London, United Kingdom; October 2007 – January 2019</h4>

              <h5>Team lead / tech lead, Media Services team (2009-2018)</h5>

              <p>
                Media Services’ mission was to handle all of the BBC’s online
                audio and video. Most notably, this means the BBC’s live and
                catch-up TV streaming service “iPlayer”, as well as iPlayer
                Radio.
              </p>
              <p>
                Around 2011–2013, Media Services underwent a major
                transformation: our product went from being an unmaintainable,
                unreliable, on-site database-driven Perl monolith, to a
                smoothly-functioning scalable collection of{" "}
                <Sk>message-driven microservices</Sk> written in <Sk>Java</Sk>{" "}
                and hosted in <Sk>AWS</Sk>. As part of this, we re-learned how
                create and deliver software, adopting a continuous delivery
                approach.
              </p>
              <p>
                Along the route, we pioneered the use of the cloud for a major
                BBC service, delivered BBC iPlayer content onto a delivery
                partner’s platform, and provided unprecedented live and
                on-demand online video for the London 2012 Olympic Games.
              </p>

              <p>
                Throughout this time, Media Services was composed of three agile
                teams, one of which was led by me. My work included people
                management, scrum leadership, technical leadership, and
                day-to-day team guidance; coaching and mentoring my individual
                team members; working with our lead architect to arrive at a
                robust design; communicating the vision to the team; planning
                and refining; and as much as possible, also being an individual
                code contributor.
              </p>

              <F p={3} before={31} after={150} />

              <h5>Other work</h5>

              <p>
                At various times, I was also my department’s development
                environment sysadmin; I worked on the “/programmes” project,
                publishing one page for each BBC programme using a standard,
                automated publishing pipeline based on <Sk>Ruby on Rails</Sk>{" "}
                and <Sk>Perl</Sk>; and I coached a scrum team for 3 months,
                acting as a “guest” principal engineer, helping start the team
                in the right direction, improving scrum efficiency. Crucially, I
                provided guidance to the team’s other principal engineer, who
                would carry on after I had left.
              </p>

              <p>
                I delivered many effective and engaging <Sk>presentations</Sk>,
                in various contexts and to various audiences: anything from 5
                minutes to 50, 5 people to 200; internal to my team, or my
                department, or all of BBC engineering, or external / public. I
                was asked to speak at BBC open days, tech summits, recruitment
                days, and more.
              </p>
            </li>

            <li>
              <h3>Programmer, Power Internet</h3>
              <h4>
                Milton Keynes, United Kingdom; December 2000 – September 2007
              </h4>
              <p>
                Power Internet was an established Internet service provider, and
                also provided bare metal server hosting and bespoke web site
                development. The code was almost always in <Sk>Perl</Sk> with{" "}
                <Sk>MySQL</Sk>.
              </p>

              <p>
                I pioneered the creation and use of well-built, well-tested
                reusable library code between projects, thus improving code
                security, speed of development, and portability of programmer
                skills between projects. I also promoted product security via
                improved validation, careful encoding, and so forth.
              </p>

              <p>
                Because this was an ISP, while here I learned much more about
                protocols: the IP stack, SMTP, IMAP, RADIUS, DNS, HTTP, SSH, and
                many more. A colleague and I redesigned and rebuilt all of our
                core application services (DNS, web, mail, etc) for high
                availability and ease of operation.
              </p>

              <p>
                I single-handedly created a support ticketing system, adopted by
                our customer support team; and then went on to create a series
                of sources-of-truth for various internal data sets. Circa 2005,
                the company launched their flagship B2B product, providing
                businesses with high-availability high-speed WANs. I responsible
                for all of the software behind the product, including web-based
                management and administration, and real-time network monitoring
                and connection control.
              </p>
            </li>

            <F p={4} before={136} after={150} />

            <li>
              <h3>Developer, Radius Retail</h3>
              <h4>
                Milton Keynes, United Kingdom; September 1998 – December 2000
              </h4>
              <p>Creating software for use by retailers.</p>
              <p>
                Working in <Sk>C, SQL, and Perl</Sk>. All software had to work
                equally with various database / OS combinbations:{" "}
                <Sk>Informix</Sk> (on *nix), <Sk>Oracle</Sk> (both on *nix and
                Windows), <Sk>MS SQL Server</Sk> (on Windows). A major part of
                my work was on the back end, writing batch processing in C/SQL,
                and then later on software to ingest data from the original
                product, into a data warehouse.
              </p>
            </li>

            <li>
              <h3>Junior Developer, Computer Sciences Corporation</h3>
              <h4>Bedford, United Kingdom; July 1995 – September 1998</h4>
              <p>
                CSC (these days known as DXC Technology) was a large US-based
                multinational consulting and services company. At their location
                in Bedford, they handled their contract with Autoglass, an
                automotive glass repair and replacement provider. At CSC I used{" "}
                <Sk>VMS/DCL, V‑Test, SQL</Sk> (initially an <Sk>Ingres</Sk>{" "}
                database, later also <Sk>Informix and Oracle 7</Sk>), and{" "}
                <Sk>C with embedded SQL</Sk>. I became the site expert in using
                V-Test for load testing, and in batch processing across multiple
                databases. I learned about SQL performance and database
                administration for both Ingres and Oracle, and also started to
                use unix and learn the shell.
              </p>
            </li>

            <li>
              <h3>Returns Handler, Watford Electronics</h3>
              <h4>Luton, United Kingdom; July 1994 – July 1995</h4>
              <p>
                Watford Electronics was a retailer, principally of PC software
                and hardware. My role was to handle items returned by customers,
                checking the items for failure and sending the items to the
                manufacturer or warehouse as appropriate.
              </p>
            </li>
          </ol>
        </section>

        <section className="further-details">
          <h2>Further details</h2>

          <ul>
            <li>
              <span>LinkedIn:</span>
              <span>https://www.linkedin.com/in/rvedotrc/</span>
            </li>
            <li>
              <span>GitHub:</span>
              <span className="code">@rvedotrc</span>
            </li>
            <li>
              <span>Residence:</span>
              <span>Copenhagen, Denmark</span>
            </li>
            <li>
              <span>Right to work in Denmark:</span>
              <span>yes</span>
            </li>
            <li>
              <span>Nationality:</span>
              <span>United Kingdom</span>
            </li>
            <li>
              <span>Languages:</span>
              <span>
                English: native;
                <br />
                Danish: fluent (CEFR C1)
              </span>
            </li>
          </ul>

          <p>References available on request</p>
        </section>

        <F p={5} before={52} after={10} />

        <script
          dangerouslySetInnerHTML={{
            __html: `

            const pageHeight = 1108;
            const offsetFromBottom = 60;

            const poll = (tweak) => {


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
      </body>
    </html>
  );
}
