'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.deleteallitems = _this.deleteallitems.bind(_this);
        _this.randomPickOne = _this.randomPickOne.bind(_this);
        _this.state = {
            listofOptions: ['firstone', 'secondone', 'third one', 'fourth one']
        };

        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'render',
        value: function render() {
            var title = "Iron man the great";
            var subtitle = "Jarvis the lovable assistant..";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(IronmanImage, null),
                React.createElement(Action, { hasItemsin: this.state.listofOptions.length > 0 ? false : true, pickerFunction: this.randomPickOne }),
                React.createElement(AddButton, null),
                React.createElement(Options, { listofOptions: this.state.listofOptions, removeitems: this.deleteallitems })
            );
        }
    }, {
        key: 'deleteallitems',
        value: function deleteallitems() {

            this.setState(function () {
                return {
                    listofOptions: []
                };
            });
        }
    }, {
        key: 'randomPickOne',
        value: function randomPickOne() {
            var randomNum = Math.floor(Math.random() * this.state.listofOptions.length);
            var option = this.state.listofOptions[randomNum];
            alert(option);
        }
    }]);

    return IndecisionApp;
}(React.Component);

{/* Indecision app nests other react components */}

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.pickerFunction, disabled: this.props.hasItemsin },
                    'Bring Sudheej alive'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var AddButton = function (_React$Component4) {
    _inherits(AddButton, _React$Component4);

    //What the constructor does it, it binds the method with the addAction method
    //This more efficient, bind is used for binding the method
    //If bind is not used then system would throw undefined 
    //Because the scope is unable to identify the this method 
    function AddButton(props) {
        _classCallCheck(this, AddButton);

        var _this4 = _possibleConstructorReturn(this, (AddButton.__proto__ || Object.getPrototypeOf(AddButton)).call(this, props));

        _this4.addAction = _this4.addAction.bind(_this4);
        return _this4;
    }

    _createClass(AddButton, [{
        key: 'addAction',
        value: function addAction(e) {
            e.preventDefault();
            console.log(e.target.elements.getoption.value);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.addAction },
                    React.createElement('input', { id: 'getoption' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit Option'
                    )
                )
            );
        }
    }]);

    return AddButton;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'The options component goes here '
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.removeitems },
                    'Remove Item'
                ),
                React.createElement(
                    'ol',
                    null,
                    this.props.listofOptions.map(function (item) {
                        return React.createElement(Option, { key: item, optionText: item });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var IronmanImage = function (_React$Component6) {
    _inherits(IronmanImage, _React$Component6);

    function IronmanImage() {
        _classCallCheck(this, IronmanImage);

        return _possibleConstructorReturn(this, (IronmanImage.__proto__ || Object.getPrototypeOf(IronmanImage)).apply(this, arguments));
    }

    _createClass(IronmanImage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement('img', { height: '130px', width: '90px', src: '\\assets\\Epic_Iron_Man.png', align: 'right' })
            );
        }
    }]);

    return IronmanImage;
}(React.Component);

var Option = function (_React$Component7) {
    _inherits(Option, _React$Component7);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var template = React.createElement(IndecisionApp, null);

ReactDOM.render(template, document.getElementById('app'));
