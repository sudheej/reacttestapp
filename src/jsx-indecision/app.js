class IndecisionApp extends React.Component {

    render() {
        const title = "Iron Man the great"
        const subtitle = "Jarvis the lovable assistant.."
        const listofOptions = ['firstone','secondone']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />

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
    render() {
        return (
            <div>
            <button>Bring Iron man alive</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
            <p>The options component goes here </p>
            {this.props.listofOptions.map( (item) => <Option key={item} optionText={item}/>)}
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>{this.props.optionText}</p>
        )
    }

}


const template = (

   <IndecisionApp />

);

ReactDOM.render(template,document.getElementById('app'));