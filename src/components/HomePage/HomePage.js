import "./HomePage.css"
import AboutPage from "../AboutPage/AboutPage";

export default function HomePage() {
    return (
      <>
        <div style={{ 
            backgroundImage: `linear-gradient(to top, rgba(42, 42, 42, 0.5) 5%, rgba(0,0,0, 0.80 ) 90%), url(https://upload.wikimedia.org/wikipedia/commons/4/4b/Business_laptop_and_notes.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100"
            }}>
            <div className="banner-contents">
                <h1>Lucy Beck</h1>
                <h2>Software Engineer and Content Creator</h2>
                <a className="download-resume-btn" href="resources/LUCY_BECK_RESUME.pdf" target="_blank">View Resume</a>  
            </div>
        </div>
        <AboutPage/>
      </>
    );
  }