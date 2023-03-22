import Button from 'react-bootstrap/Button';
import "./PhotoEditor.css"

export default function PhotoEditor() {
    return (
        <>
            <div class="photoeditor">
                <h1>Photo Editor</h1>
                <div class="photoeditor-container">
                    <div>
                    <p>A modern photo editing app that supports adjustments to brightness, contrast,
                        warmth, saturation, and a variety of <b>photo filters</b> such as Vignette, Black and White, Invert, Solarise, and Pixelize. 
                        Using <b>Python</b>, I designed the filters by using <b>mathematical algorithms</b> to manipulate pixel data in the form of RGB and HSV values.
                        I&nbsp;also&nbsp;implemented an <b>edit history</b> that tracks up to 50&nbsp;modifications, allowing the user to
                        undo and reset edits to an image.</p>
                    <p><Button style={{width: "100%"}} variant="primary" href="https://github.com/lucywbeck/challenge-with-friends" target="_blank">Github</Button></p>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ldtnl8cwK2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
            </div>
        </>
    );
}