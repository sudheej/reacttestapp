class Counter extends React.Component {

    constructor(props) {
            super(props);
            this.onhandleAdd = this.onhandleAdd.bind(this);
            this.onhandleSub = this.onhandleSub.bind(this);
            this.onhandleReset = this.onhandleReset.bind(this);
            this.state = {
                count: 0
            };
    }

    onhandleAdd() {
            this.setState( (prevState) => {
                    return {
                       count: prevState.count + 1
                    }
            });
    }

    onhandleSub() {
        this.setState( (prevState) => {
            return {
                count : prevState.count - 1
        }
        });
    }

    onhandleReset() {
        this.setState( (prevState) => {
            return {
                count: 0
            }
        });
    }

    render() {
        
        return (
            <div>
            <h1>Count : {this.state.count} </h1>
            <button onClick={this.onhandleAdd}>+1</button>
            <button onClick={this.onhandleSub}>-1</button>
            <button onClick={this.onhandleReset}>reset</button>
            </div>
        )
       
    }

}

ReactDOM.render(<Counter />,document.getElementById('app'));