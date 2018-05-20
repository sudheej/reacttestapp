class IndecisionApp extends React.Component {

    render() {
        const title = "Iron man the great"
        const subtitle = "Jarvis the lovable assistant.."
        const listofOptions = ['firstone','secondone','third one','fourth one']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <IronmanImage />
                <Action />
                <AddButton />
                <Options listofOptions={listofOptions}/>

            </div>
        )
    }

}

{ /* Indecision app nests other react components */}
class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>    
            <h2>{this.props.subtitle}</h2>          
            </div>
        )
    }
}

class Action extends React.Component {

    handleAction() {
        alert('handle alert.. ')
    }
    render() {
        return (
            <div>
            <button onClick={this.handleAction}>Bring Sudheej alive</button>
            </div>
        )
    }
}

class AddButton extends React.Component {
    //What the constructor does it, it binds the method with the addAction method
    //This more efficient, bind is used for binding the method
    //If bind is not used then system would throw undefined 
    //Because the scope is unable to identify the this method 
    constructor(props) {
        super(props);
        this.addAction = this.addAction.bind(this);
    }
    
    addAction(e) {
        e.preventDefault()
        console.log(e.target.elements.getoption.value)
       
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addAction}>
                <input id="getoption"></input>
                <button>Submit Option</button>
                </form>
            </div>
        )
    }

}

class Options extends React.Component {

    constructor(props) {
            super(props);
            this.removeItem = this.removeItem.bind(this);
    }

    removeItem() {
        console.log(this.props.listofOptions)
    }
    render() {
        return (
            <div>
            <p>The options component goes here </p>
            <button onClick={this.removeItem} >Remove Item</button>
            <ol>
            {this.props.listofOptions.map( (item) => <Option key={item} optionText={item}/>)}
            </ol>
            </div>
        )
    }
}

class IronmanImage extends React.Component {
    render () {
        return (
            <div>
            <img height="130px" width="90px" src = '\assets\Epic_Iron_Man.png' align ='right'/>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.optionText}</li>
        )
    }

}


const template = (

   <IndecisionApp />

);

ReactDOM.render(template,document.getElementById('app'));