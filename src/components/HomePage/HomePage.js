import Button from 'react-bootstrap/Button';
import "./HomePage.css"
import Resume from "../../assets/LUCY_BECK_RESUME.pdf"
import AboutPage from "../AboutPage/AboutPage";
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import PortfolioPage from '../PortfolioPage/PortfolioPage';

export default function HomePage() {
    const myStyle = { 
      backgroundImage: `linear-gradient(to top, rgba(42, 42, 42, 0.5) 5%, rgba(0,0,0, 0.80 ) 90%), url(https://upload.wikimedia.org/wikipedia/commons/4/4b/Business_laptop_and_notes.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "auto",
      }

    return (
      <>
        <div className="home" style={myStyle}>
            <h1>Lucy Beck</h1>
            <h2>Software Engineer and Content Creator</h2>
            <Button className="resume-button" variant="outline-light" href={Resume} target="_blank">View Resume</Button>{' '}
        </div>
        <AboutPage/>
        <ExperiencePage/>
        <PortfolioPage/>
      </>
    );
  }