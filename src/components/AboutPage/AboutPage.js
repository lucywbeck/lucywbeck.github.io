import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css"
import Headshot from "../../assets/LUCY_BECK_HEADSHOT.jpeg"


export default function AboutPage() {
    return (
      <>
        <div>
          <h1>About</h1>
          <div className="container1">
            <div className="container2-1">
                <Image
                    className="headshot"
                    src={Headshot}
                    roundedCircle
                    height={"300rem"}
                    width={"300rem"}
                />
                <p>Hello, my name is Lucy Beck, and I'm a junior studying computer science at Northwestern University. I'm also an incoming Software Engineer Intern at Dropbox. I grew up in the suburbs of Chicago, and I'm currently living in Evanston, IL. In my free time, I enjoy weight lifting and creating Youtube vidoes.</p>
            </div>
            <div className="container2-2">
                <ul>
                    <li>Languages: Python, Java, C, C++, HTML, CSS, JavaScript, TypeScript, SQL, Lua, Racket, Apex (Saleforce.com), SOQL</li>
                    <li>Frameworks: React.js, Node.js, Express.js, Next.js, Bootstrap, Flask, Unittest, Salesforce Lightning Web & Aura Components</li>
                    <li>Technologies: Amazon Web Services (AWS), Firebase, Heroku, Amazon DynamoDB, MongoDB, Docker, Git, Github, Jira</li>
                    <li>Awards & Honors: Intuit Spotlight Award, Cornell AppDev Hack Challenge Winner, Cornell Dean’s List, Northwestern Dean’s List</li>
                </ul>
            </div>
          </div>
        </div>
      </>
    );
  }