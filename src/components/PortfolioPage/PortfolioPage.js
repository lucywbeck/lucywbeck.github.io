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
    return (
        <>
            <div className="portfolio">
                <h1>Portfolio</h1>
                <div className="portfolio-container">
                    <Card>
                        <Card.Img variant="top" src={image4} />
                        <Card.Body>
                            <Card.Title>Squirrel</Card.Title>
                            <Card.Text>
                            A mobile app that suggests new places to explore based on current location, availability, and interests.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>NUProjects</Card.Title>
                            <Card.Text>
                            A mobile app for posting and applying to Northwestern University project teams.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>Challenge with Friends</Card.Title>
                            <Card.Text>
                            A mobile app in which players compete in completing the maximum number of challenges.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={image15} />
                        <Card.Body>
                            <Card.Title>Aliens Hate Avocados</Card.Title>
                            <Card.Text>
                            A 3D action game in which players use Avocado Goop Guns to defend cows from enemy UFOs!                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Froggo</Card.Title>
                            <Card.Text>
                            A game in which players help frogs get to their homes by crossing busy roads and hazardous waters.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={image0} />
                        <Card.Body>
                            <Card.Title>Photo Editor</Card.Title>
                            <Card.Text>
                            A photo editing app that supports photo enhancements, effects, and a variety of photo filters.
                            </Card.Text>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}