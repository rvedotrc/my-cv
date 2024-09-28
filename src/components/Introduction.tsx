import { myContext } from "@/app/context";
import { Translate } from "@/app/Translate";
import { useContext } from "react";

export default function Introduction() {
    const { cvData } = useContext(myContext);

    return (
        <div className="introduction">
            <h2 className="contactSubtitle"><Translate text={cvData.contact.subtitle} /></h2>
            <div className="introPanel">
                {cvData.intro.map((t, i) => 
                    <p key={i}><Translate text={t}/></p>
                )}

<p>
              I am an experienced senior engineer, historically with a focus on
              back-end work, but with the ability to cover the full stack as
              needed. My strongest languages are TypeScript / JavaScript, React,
              Java, Ruby, and bash / zsh. I have also worked in Python, Perl,
              and C.
            </p>

            <p>
              I enjoy understanding systems inside out, and then continually
              working to improve them, for example in terms of security,
              scalability, reliability, or extensibility. I enjoy designing
              systems and proposing the architecture, working with the team to
              see it become a reality, whilst ensuring work is delivered to a
              high quality.
            </p>

            <p>
              I am especially strong at: coaching, presenting, technical team
              leadership, and helping find and strengthen the weak points in
              standards, plans, and so forth. I promote consistency and
              standards, which then enables greater automation.
            </p>

            <p>
              I am familiar with: automation, AWS (especially IAM / SQS / SNS /
              S3 / Lambda / EC2), GitHub actions, Docker, REST, and cryptography
              fundamentals.
            </p>

            <p>
              I have 10+ years experience with: Git, GitHub, agile (scrum /
              kanban), AWS (CloudFormation, EC2, VPC, S3, SQS, SNS, IAM, KMS,
              Lambda, RDS, SimpleDB, Route53, Glacier, ACM), SQL (MySQL /
              MariaDB, Oracle, MS SQL Server, Postgres, Ingres), HTML, CSS,
              Linux networking / sysadmin, TCP/IP, HTTP, DNS, and other Internet
              protocols.
            </p>

            <p>
              I have 5+ years experience with: Docker, GitHub actions,
              Kubernetes, React, Splunk, and Datadog.
            </p>
            </div>
        </div>
    );
}