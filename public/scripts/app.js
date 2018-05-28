'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.submissionForm = _this.submissionForm.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'submissionForm',
        value: function submissionForm(optionValue) {
            if (!optionValue) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(optionValue) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(optionValue)
                };
            });
        }

        //Render function

    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    ' Hello there '
                ),
                React.createElement(ApplicationForm, { handleAdd: this.submissionForm }),
                React.createElement(Options, { optionArray: this.state.options })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var ApplicationForm = function (_React$Component2) {
    _inherits(ApplicationForm, _React$Component2);

    function ApplicationForm(props) {
        _classCallCheck(this, ApplicationForm);

        var _this2 = _possibleConstructorReturn(this, (ApplicationForm.__proto__ || Object.getPrototypeOf(ApplicationForm)).call(this, props));

        _this2.addItemtoArray = _this2.addItemtoArray.bind(_this2);

        _this2.state = {
            error: undefined
        };

        return _this2;
    }

    _createClass(ApplicationForm, [{
        key: 'addItemtoArray',
        value: function addItemtoArray(e) {
            e.preventDefault();
            var option = e.target.elements.getvalue.value.trim();
            var error = this.props.handleAdd(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addItemtoArray },
                    React.createElement('input', { id: 'getvalue' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return ApplicationForm;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

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
                    'ol',
                    null,
                    this.props.optionArray.map(function (element) {
                        return React.createElement(Option, { key: element, item: element });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

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
                this.props.item
            );
        }
    }]);

    return Option;
}(React.Component);

var apptemplate = React.createElement(IndecisionApp, null);

ReactDOM.render(apptemplate, document.getElementById("app"));
