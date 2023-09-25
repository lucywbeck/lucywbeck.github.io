import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css"
import Headshot from "../../assets/LUCY_BECK_HEADSHOT.jpeg"


export default function AboutPage() {
    return (
      <>
        <div id="about" className="about">
          <h1>About</h1>
          <div className="about-container">
            <div className="container2-1">
                <Image
                    className="headshot"
                    src={Headshot}
                    roundedCircle
                    height={"300rem"}
                    width={"300rem"}
                    alt="Lucy Beck"
                />
                <p>Hello, my name is Lucy Beck. I am a Senior studying Computer Science at Northwestern University. I have past experience working as a Software Engineer Intern at Dropbox, Intuit, Fidelity Investments, and Reworld Inc. I grew up in the suburbs of Chicago, and I'm currently living in Evanston, IL. In my free time, I enjoy hanging out with friends, going to the gym, and creating Youtube videos.</p>
            </div>

            <div className="container2-2">

              <Card bg="light">
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Languages</Card.Title>
                    <Card.Text>
                    Python, Java, C, C++, HTML, CSS, JavaScript, TypeScript, SQL, Lua, Racket, Apex (Saleforce.com), SOQL
                    </Card.Text>
                </Card.Body>
              </Card>

              <Card bg="light">
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Frameworks</Card.Title>
                    <Card.Text>
                    React.js, Node.js, Express.js, Next.js, Bootstrap, Flask, Unittest, Salesforce Lightning Web & Aura Components                    </Card.Text>
                </Card.Body>
              </Card>

              <Card bg="light">
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}>Technologies</Card.Title>
                    <Card.Text>
                    Amazon Web Services (AWS), Firebase, Heroku, Amazon DynamoDB, MongoDB, Docker, Git, Github, Jira                    </Card.Text>
                </Card.Body>
              </Card>
            
            </div>
          </div>
        </div>
      </>
    );
  }