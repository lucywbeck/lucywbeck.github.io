import Button from 'react-bootstrap/Button';
import "./NUProjects.css"

export default function NUProjects() {
    return (
        <>
            <div class="nuprojects">
                <h1>NUProjects</h1>
                <div class="nuprojects-container">
                    <div>
                    <p>I designed and implemented mobile app for posting jobs using HTML, CSS, JavaScript, React.js, Node.js, and Bootstrap. 
                        I utilized Firebase to host application on public server, store data in Realtime Database, and set up Google Authentication. 
                        I conducted multiple rounds of user testing on target audience using pre-test surveys, task scenarios, and post-test surveys</p>
                    <p><Button style={{width: "100%"}} variant="primary" href="https://github.com/lucywbeck/nuprojects" target="_blank">Github</Button></p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NFmdF5MMGJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
}