var appProperties = {
    title : "My awesome react",
    subtitle: "English or French"
}

let expressionFun = (location) => location;

let appHeader = (
    <div>
                <h1>{appProperties.title}</h1>
                <p>{appProperties.subtitle}</p>
                <p>{expressionFun("NewYork")}</p>
    </div>
);

let count = 0;

let addone = () => {
    count++
    renderPage()
}

let renderPage = () => {

    
let template2 = (

    <div>
    <h1>Count : {count}</h1>
    <button onClick={addone}>+1</button>
    </div>

);

ReactDOM.render(template2, appRoot);

}

var appRoot = document.getElementById('app');
renderPage()
