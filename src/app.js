var appProperties = {
    title : "My awesome react",
    subtitle: "English or French",
    options: []
}

let expressionFun = (location) => location;


let setOptions = (e) => {

    e.preventDefault();
  
    if (e.target.elements.option.value) {
        appProperties.options.push(e.target.elements.option.value)
        e.target.elements.option.value = "";
        renderPage()
    }

}

let removeAll = (e) => {
    e.preventDefault();
    appProperties.options = [];
    renderPage();
}

let makeDecision = () => {

    const randomNumber = Math.floor(Math.random() * appProperties.options.length)
    alert(appProperties.options[randomNumber])

}

let renderPage = () => {

    let appHeader = (
        <div>
        <button onClick={removeAll} name="removeall">Wipe out</button>
        <button onClick={makeDecision} disabled={appProperties.options.length == 0 ? true:false} name="makedecision">Make a Decision</button>
                    <h1>{appProperties.title}</h1>
                    <p>{appProperties.subtitle}</p>
                    <p>{expressionFun("NewYork")}</p>
                    <p>{appProperties.options.length}</p>
                    <ol>
                    {
                        appProperties.options.map( (itemsen) => <li key={itemsen}>{itemsen}</li>)
        
                    }
                    </ol>
            <form onSubmit={setOptions}>
            <input type="text" name="option"></input>
            <button>Enter the value</button>
           
            </form>

        </div>

    );
    


ReactDOM.render(appHeader, appRoot);

}

var appRoot = document.getElementById('app');
renderPage()
