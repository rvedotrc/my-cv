import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function Employment() {
  const { cvData, language } = useContext(myContext);

  return (
    <div className="employment">
      <h2>Employment</h2>

      Hedia:

      <p>
                This med-tech startup aimed to improve the lives of people with
                diabetes; when I arrived, they had just recently deployed their
                proof-of-concept new medical data platform. The system consisted
                of TypeScript microservices, and as part of on-boarding and
                understanding the system I promoted consistency, observability,
                and reliability, so as to ready the product for launch.
              </p>

      Zendesk:

      <p>
                Zendesk provides SaaS products for customer support, sales, and
                other customer communications. I was the tech lead for one of
                the 8 engineering teams in Copenhagen, working primarily with
                Ruby, TypeScript, MySQL (via AWS RDS), Kubernetes, and GitHub
                actions; our APIs were mostly GraphQL (internal) and REST
                (external).
              </p>
              <p>
                I coached and guided my teammates and other colleagues, raising
                the performance of the team, and driving the adoption of best
                practices; I championed scalability, reliability, and security
                across our entire platform. I also extended this beyond my own
                team, shaping organizational standards and fostering a culture
                of operational excellence and continuous improvement. I also
                consistently fostered inclusion and diversity, and drove
                improvements beyond just the technical.
              </p>

BBC:

<p>
                I led one of the three teams that handled all of the BBC's
                online audio and video, including iPlayer, their world-leading
                Radio / TV streaming service. I was instrumental in the effort
                to ditch our large on-prem Perl monolith, and replace it with
                designed-for-AWS microservices written in Java.
              </p>
              <p>
                A key milestone was reached when we provided unprecedented
                streaming access for the London 2012 Olympic Games. The whole
                project was highly successful; we then built on that success as
                we extended the platform with new features, greater capacity,
                and improved resilience.
              </p>




      <ol className="employmentList">
        {cvData.employment.map((e, i) => (
          <li key={i}>
            <div className="employmentHeading">
              <span className="employmentJobTitle">{e.jobTitle}</span>
              {", "}
              <span className="employmentEmployerName">{e.employerName}</span>
            </div>
            <div className="employmentInfo">
              <div className="employmentLocation">
                <Translate text={e.location} />
              </div>
              ;&nbsp;
              <div className="employmentStart">
                <Translate text={e.start} />
              </div>
              &nbsp;–&nbsp;
              <div className="employmentEnd">
                <Translate text={e.end} />
              </div>
            </div>
            <div className="employmentText">
              {e.text[language].map((t, j) => (
                <p key={j}>{t}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <p className="employmentMore">
        <Translate text={cvData.employmentMore} />
      </p>
    </div>
  );
}
