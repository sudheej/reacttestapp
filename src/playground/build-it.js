
class VisibilityToggler extends React.Component {

    constructor(props) {
        super(props);
        this.triggerSwitch = this.triggerSwitch.bind(this);
        this.state = {
            visibility : true
        }
    }

    triggerSwitch() {
        this.setState( (prevState) => {
            return {
                visibility : !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
            <h1>Visibility tester page</h1>
            <button id="switcher" onClick={this.triggerSwitch}> {this.state.visibility ? "Hide":"show"}</button>
            {this.state.visibility && (
                <div>
                <h1>HEY JUDE !!</h1>
                </div>
        
               )}
        
            </div>
        )
    }

}

ReactDOM.render(<VisibilityToggler />,document.getElementById("app"));
