class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>Welcome to IronMan Portal</h1>           
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

const template = (

    <div>
    <Header />
    <Action />
    </div>

);

ReactDOM.render(template,document.getElementById('app'));