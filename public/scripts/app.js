"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            var title = "Iron man the great";
            var subtitle = "Jarvis the lovable assistant..";
            var listofOptions = ['firstone', 'secondone', 'third one', 'fourth one'];
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(IronmanImage, null),
                React.createElement(Action, null),
                React.createElement(AddButton, null),
                React.createElement(Options, { listofOptions: listofOptions })
            );
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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
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
        key: "handleAction",
        value: function handleAction() {
            alert('handle alert.. ');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleAction },
                    "Bring Sudheej alive"
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
        key: "addAction",
        value: function addAction(e) {
            e.preventDefault();
            console.log(e.target.elements.getoption.value);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.addAction },
                    React.createElement("input", { id: "getoption" }),
                    React.createElement(
                        "button",
                        null,
                        "Submit Option"
                    )
                )
            );
        }
    }]);

    return AddButton;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this5 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this5.removeItem = _this5.removeItem.bind(_this5);
        return _this5;
    }

    _createClass(Options, [{
        key: "removeItem",
        value: function removeItem() {
            console.log(this.props.listofOptions);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "The options component goes here "
                ),
                React.createElement(
                    "button",
                    { onClick: this.removeItem },
                    "Remove Item"
                ),
                React.createElement(
                    "ol",
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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("img", { height: "130px", width: "90px", src: "\\assets\\Epic_Iron_Man.png", align: "right" })
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
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var template = React.createElement(IndecisionApp, null);

ReactDOM.render(template, document.getElementById('app'));
