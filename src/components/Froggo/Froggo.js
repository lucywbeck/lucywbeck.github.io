import "./Froggo.css"

export default function Froggo() {
    return (
        <>
            <div class="froggo">
                <h1>Froggo</h1>
                <div class="froggo-container">
                    <p>Froggo is an interactive game similar to Crossy Road. It includes <b>seven unique levels</b> that I designed and implemented myself.
                        Froggo supports <b>JSON files</b>, <b>audio</b>, <b>2D&nbsp;graphics with hitboxes</b>,
                        and <b>scheduled events</b>. I also utilized <b>property decorators</b>, <b>generators</b>, and
                        <b>coroutines</b> to create model classes that support 2D animation. All code is written
                        in <b>Python</b> and follows the <b>model-view-controller</b> design pattern. 
                        Froggo features moving cars and logs, turtles dunking under water, powerups in the form of flies, and more.</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nXNhfDKytr4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                </div>
            </div>
        </>
    );
}