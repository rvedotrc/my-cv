export default function SkillsPanel() {
  return (
    <div className="skillsPanel">
      <h3>Languages & Frameworks</h3>
      <ul>
        <li>Java, Ruby, Python, bash, zsh</li>
        <li>TypeScript / JavaScript, React</li>
        <li>SQL: MySQL, Oracle, Postgres, MS SQL</li>
      </ul>
      <h3>Cloud & DevOps</h3>
      <ul>
        <li>
          AWS: EC2, S3, Lambda, SQS, SNS, RDS, IAM, VPC, KMS, CloudFormation,
          Route53, Glacier, SimpleDB, ACM
        </li>
        <li>Docker, Kubernetes</li>
        <li>Git, GitHub Actions, CI/CD pipelines</li>
        <li>Linux Networking, Sysadmin</li>
      </ul>
      <h3>Automation & Tools</h3>
      <ul>
        <li>Splunk, Datadog</li>
        <li>GraphQL, REST, TCP/IP, HTTP, DNS, other Internet Protocols</li>
        <li>Cryptography</li>
      </ul>
      <h3>Leadership & Collaboration</h3>
      <ul>
        <li>Technical team leadership</li>
        <li>Coaching and mentoring</li>
        <li>Process improvement, standardisation, automation</li>
      </ul>
    </div>
  );
}
