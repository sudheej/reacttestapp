
let visibilityFlag = false;

let disappear = () => {
visibilityFlag = !visibilityFlag
renderPage();
}


let renderPage = () => {

let canvastemplate = (
    <div>
    <p>visibility tester page</p>
    <button id="switcher" onClick={disappear}> {visibilityFlag? "Hide":"show"}</button>
    {visibilityFlag && (
        <div>
        <h1>Hey Jude</h1>
        </div>

       )}
    </div>
)

ReactDOM.render(canvastemplate,appRoot)
}


var appRoot = document.getElementById('app');
renderPage();
