import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css"
import Headshot from "../../assets/LUCY_BECK_HEADSHOT.jpeg"


export default function AboutPage() {
    return (
      <>
        <div className="about">
          <h1>About</h1>
          <div className="about-container">
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