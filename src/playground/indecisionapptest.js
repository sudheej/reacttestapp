class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        
        this.submissionForm = this.submissionForm.bind(this);

        this.state = {
            options: []
        }
    }

    submissionForm(optionValue) {
        if (!optionValue) {
            return 'Enter valid value to add item';
          } else if (this.state.options.indexOf(optionValue) > -1) {
            return 'This option already exists';
          }

            this.setState( (prevState) => {
                return {
                    options: prevState.options.concat(optionValue)
                }
            })
    }

    //Render function

    render() {
        return (
            <div>
            <h1> Hello there </h1>
            <ApplicationForm handleAdd={this.submissionForm}/>
            <Options optionArray={this.state.options}/>
            </div>
        )
      
    }

    


}



class ApplicationForm extends React.Component {

constructor(props) {
    super(props)
    this.addItemtoArray = this.addItemtoArray.bind(this)

    this.state = {
        error: undefined
    };

}

addItemtoArray(e) {
    e.preventDefault()
    const option = e.target.elements.getvalue.value.trim();
    const error = this.props.handleAdd(option);

        this.setState ( () => {
            return { error };
        })
   
    
}
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>} 
                <form onSubmit={this.addItemtoArray}> 
                <input id="getvalue"></input>
                <button>Submit</button>
                </form> 
            </div>
        )
    }
}

class Options extends React.Component {

    render() {
        return(
            <div>
                <ol>
                    {this.props.optionArray.map ( (element) => <Option key={element} item={element} /> ) }
                </ol>
            </div>
        )
    }
}


class Option extends React.Component {

    render() {
        return(
            <li>{this.props.item}</li>
        )
    }
}


const apptemplate = (
    <IndecisionApp />
);

ReactDOM.render(apptemplate,document.getElementById("app"));