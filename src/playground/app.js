/*

Key points to note here

1. To communicate between the parent and the child, one way communication is possible with the help of the below
this.props.yourparaentprop
2. If the reverse communication has to happen, a method needs to be available on the parent which has to be passed on in the render function

Example (psedocode)
Parent {
    addnumbers()

//The render function should be able to come in handy where a reference of add numbers has to be passed
    render (
        <mychildcomponent addnumbers={this.addnumbers()}>
    )
}

What the above code does ? it takes the reference and pass is on to the child component

In the child component this method addnumbers in the parent can be called using the reference this.props.addnumbers

This complets the revers communication between child --> parent

Passing on Data between child and parent
-----------------------------------------

Similar to the previous instance, there would be a function in the parent which accepts argument, and this has to be manupulated.
Considering that a function already avialble in child which does stuff like, trimming user input in texct box etc.
The value which we need to pass to the parent can be passed as a parameter

Example

this.props.addnumbers(option);

In order for this to work, the child components constructor function has to have the reference of this context, this is very important.
In the above example it will look like below

constructor(props) {
    super(props)
    this.addnumbers = this.addnumbers.bind(this);
}

What this does is it transferes the option to add number and there a set state function like below can be used to add the values

this.setState( (prevstate) => {
    return {
        numbers: prevstate + option // option we received as an argument
    }
})

Passing down an error message from parent to child
---------------------------------------------------
1. Lets say we add the below validation in the parent module

addOption(number) {
    if(!number) {
        return 'Error the number you passed is undefined'
    }
   
    //VERY IMPORTANT : Notice that we do not explictly return with an else statement
     --- If the number is not valid we do not exlse it,. this would mean addoption implictly returns undefined
     This means if undefined is returned we are good else we are bad.
     This logic we are going to use to capture the error message
     
    this.setState( (prevstate) => {
    return {
        numbers: prevstate + option // option we received as an argument
    }
    })

}
 --- Now what happens in the child component when you return an error message
 -- Assign the return value to a variable

 constructor () {
     this.state = {
         error: undefined
     }
 }

 const actionAdd = this.props.addOption(number);
 this.setState( () => {
     error = this.actionAdd
 });

       In the render page of child 

       render (
           {this.state.error && '<p>There is an error message</p>'}
       )



*/


class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.deleteallitems = this.deleteallitems.bind(this);
        this.randomPickOne = this.randomPickOne.bind(this);
        this.state = {
            listofOptions : ['firstone','secondone','third one','fourth one']
        }
       
    }

    render() {
        const title = "Iron man the great"
        const subtitle = "Jarvis the lovable assistant.."
        
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <IronmanImage />
                <Action hasItemsin={this.state.listofOptions.length > 0 ? false: true} pickerFunction={this.randomPickOne}/>
                <AddButton />
                <Options listofOptions={this.state.listofOptions} removeitems={this.deleteallitems}/>

            </div>
        )
    }

    deleteallitems() {

        this.setState( () => {
            return {
                listofOptions : []
            }
        });

    }

    randomPickOne() {
        const randomNum = Math.floor(Math.random() * this.state.listofOptions.length);
        const option = this.state.listofOptions[randomNum];
        alert(option);
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
            <button onClick={this.props.pickerFunction} disabled={this.props.hasItemsin}>Bring Sudheej alive</button>
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

    render() {
        return (
            <div>
            <p>The options component goes here </p>
            <button onClick={this.props.removeitems} >Remove Item</button>
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