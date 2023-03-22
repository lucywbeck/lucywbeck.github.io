import Button from 'react-bootstrap/Button';
import "./Squirrel.css"

export default function Squirrel() {
    return (
        <>
            <div class="squirrel">
                <h1>Squirrel</h1>
                <div class="squirrel-container">
                    <div>
                    <p>On a team with seven other developers, I designed and implemented a mobile app for itinerary planning using HTML, CSS, JavaScript, React.js, Node.js, and Bootstrap. 
                        I utilized Firebase to host application on public server, store data in Realtime Database, and set up Google Authentication. 
                        I conducted multiple rounds of user testing on target audience using pre-test surveys, task scenarios, and post-test surveys.</p>
                    <p><Button style={{width: "100%"}} variant="primary" href="https://github.com/lucywbeck/squirrel" target="_blank">Github</Button></p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nPWsnvU-9Sc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
}