import "./ExperiencePage.css"

export default function ExperiencePage() {
    return (
        <>
        <div className="container">
            <h1>Experience</h1>
            <p id="professional-intro">A full list of my professional experiences can be found on my
                <a href="https://www.linkedin.com/in/lucywbeck" target="_blank"> LinkedIn</a>.</p>

            <div class="job-item">
                <h2>Software Engineer Intern</h2>
                <p>Intuit - Mountain View, CA</p>
                <p>Jan 2022 - Jun 2022</p>
                    <ul>
                        <li>Built Slack Bot using Bolt for Python and stored Slack data in NoSQL database using Amazon DynamoDB and Boto3</li>
                        <li>Deployed Slack Bot to AWS Lambda and set up request URL for Slack events using API Gateway's HTTP endpoint</li>
                        <li>Protected access to Slack Bot using AWS Secrets Manager and monitored metric data through Amazon CloudWatch</li>
                        <li>Optimized documentation migration efficiency by 99% by creating Python script that automates JSON file creation</li>
                    </ul>
            </div>
            
            <div class="job-detals">
              <h3>Software Engineer Intern</h3>
              <p>Fidelity Investments - Durham, NC</p>
              <p>Jun 2021 - Aug 2021</p>
              <ul>
                <li>Utilized JavaScript, HTML, CSS, Salesforce LWC, Apex, & SOQL to create custom components for community platform</li>
                <li>Created API calls that query and filter data from Salesforce CRM and displayed data in the form of 6 interactive charts</li>
                <li>Performed JavaScript unit tests using Jest, integration tests, and end-to-end tests to deliver high-performing software</li>
                <li>Streamlined software development and CI/CD using Git, Bitbucket, Jenkins, Jira, and Agile/Scrum methodologies</li>
              </ul>
            </div>

            <div class="job-detals">
              <h3>Software Engineer Intern</h3>
              <p>Reworld Inc - Seattle, WA</p>
              <p>Feb 2021 - Mar 2021</p>
              <ul>
                <li>Created 3D multiplayer action shooter game in which players use Avocado Goop Guns to defend cows from enemy UFOs</li>
                <li>Formulated algorithms in Lua that simulate gravity, velocity, collisions, explosions, bombs, missiles, and gun mechanisms</li>
                <li>Built system manager to track 4 waves of UFOs, boss UFO, player health, powerups, leaderboard, and remaining cows</li>
                <li>Conducted quality assurance testing on mobile and PC versions to identify and remove errors before product launch</li>
              </ul>
            </div>
        </div>
        </>
    );
}