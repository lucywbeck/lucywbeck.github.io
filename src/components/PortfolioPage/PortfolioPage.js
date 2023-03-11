import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./PortfolioPage.css"
import image1 from '../../assets/challenge-with-friends.png'
import image2 from '../../assets/froggo.png'
import image3 from '../../assets/nuprojects.JPEG'

export default function PortfolioPage() {
    return (
        <>
            <div className="portfolio">
                <h1>Portfolio</h1>
                <div className="portfolio-container">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>NUProjects</Card.Title>
                            <Card.Text>
                            A mobile app for posting and applying to Northwestern University project teams.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Challenge with Friends</Card.Title>
                            <Card.Text>
                            A mobile app in which players compete in completing the maximum number of challenges.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>Froggo</Card.Title>
                            <Card.Text>
                            A game in which players help frogs get to their homes by crossing busy roads and hazardous waters.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}