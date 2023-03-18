import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PortfolioPage.css"
import image0 from '../../assets/photo-editor.png'
import image1 from '../../assets/froggo.png'
import image15 from '../../assets/aha.png'
import image2 from '../../assets/challenge-with-friends.png'
import image3 from '../../assets/nuprojects.JPEG'
import image4 from '../../assets/squirrel.JPEG'

export default function PortfolioPage() {
    const navigate = useNavigate();

    const NavigateToPhotoEditor = () => {
        navigate("/photoeditor");
    }
    
    const NavigateToFroggo = () => {
        navigate("/froggo");
    }

    const NavigateToAha = () => {
        navigate("/aha");
    }

    const NavigateToCwf = () => {
        navigate("/cwf");
    }

    const NavigateToNUProjects = () => {
        navigate("/nuprojects");
    }

    const NavigateToSquirrel = () => {
        navigate("/squirrel");
    }

    return (
        <>
            <div id="portfolio" className="portfolio">
                <h1>Portfolio</h1>
                <div className="portfolio-container">
                    <Card bg="light">
                        <Card.Img variant="top" src={image4} alt="Squirrel" />
                        <Card.Body>
                            <Card.Title>Squirrel</Card.Title>
                            <Card.Text>
                            A mobile app that suggests new places to explore based on current location, availability, and interests.
                            </Card.Text>
                            <Button variant="primary" onClick={NavigateToSquirrel}>Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image3} alt="NUProjects" />
                        <Card.Body>
                            <Card.Title>NUProjects</Card.Title>
                            <Card.Text>
                            A mobile app for posting and applying to Northwestern University project teams.
                            </Card.Text>
                            <Button variant="primary" onClick={NavigateToNUProjects}>Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image2} alt="Challenge with Friends" />
                        <Card.Body>
                            <Card.Title>Challenge with Friends</Card.Title>
                            <Card.Text>
                            A mobile app in which players compete in completing the maximum number of challenges.
                            </Card.Text>
                            <Button variant="primary" onClick={NavigateToCwf}>Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image15} alt="Aliens Hate Avocados" />
                        <Card.Body>
                            <Card.Title>Aliens Hate Avocados</Card.Title>
                            <Card.Text>
                            A 3D action game in which players use Avocado Goop Guns to defend cows from enemy UFOs!                            </Card.Text>
                            <Button variant="primary" onClick={NavigateToAha}>Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image1}alt="Froggo" />
                        <Card.Body>
                            <Card.Title>Froggo</Card.Title>
                            <Card.Text>
                            A game in which players help frogs get to their homes by crossing busy roads and hazardous waters.
                            </Card.Text>
                            <Button variant="primary" onClick={NavigateToFroggo}>Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card bg="light">
                        <Card.Img variant="top" src={image0} alt="Photo Editor" />
                        <Card.Body>
                            <Card.Title>Photo Editor</Card.Title>
                            <Card.Text>
                            A photo editing app that supports photo enhancements, effects, and a variety of photo filters.
                            </Card.Text>
                            <Button variant="primary" onClick={NavigateToPhotoEditor}>Learn more</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}