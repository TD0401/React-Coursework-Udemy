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

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };

        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            /* this.setState(() => {
                 return {
                     options:[]
                 }
             });*/

            //alternate way is instead of returning use => () which means implicit return
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomnNum = Math.floor(Math.random() * this.state.options.length);
            var selected = this.state.options[randomnNum];
            console.log(selected);
        }
    }, {
        key: 'handleAddOptions',
        value: function handleAddOptions(option) {
            if (!option) {
                return 'Enter valid values to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This item is already present';
            }

            /*this.setState((prevState) => {
                return {
                    options: prevState.options.concat(option)
                }
            });   */
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var subTitle = "This is a subtitle ";

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOptions, {
                    handleAddOptions: this.handleAddOptions
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []

    //converted class based component to stateless functional compnents
};var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'p',
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision App"

    /*class Header extends React.Component{
        render(){
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subTitle}</p>
                </div>
            );
        }
    }*/

    //converted class based components to stateless components
};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.handlePick },
            'What should I do?'
        )
    );
};

/*class Action extends React.Component{
    render(){
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
            </div>
        );
    }
}*/

//converted class based components to stateless components
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Here are your options  ',
            React.createElement(
                'button',
                { onClick: props.handleDeleteOptions },
                'Remove all'
            )
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

/*class Options extends React.Component{
    render(){
        // can use bind function as well but expensive
        //<p>Here are your options  <button onClick={this.handleRemoveAll.bind(this)}>Remove all</button></p>
        return (
            <div>
                <p>Here are your options  <button onClick={this.props.handleDeleteOptions}>Remove all</button></p>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>) 
                }
            </div>
        );
    }
}*/

//converted class based components to stateless components
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'Remove'
        )
    );
};

/*class Option extends React.Component{
    render(){
        return <p>{this.props.optionText}</p>;
    }
}*/

//not changed to stateless functional component because state is maintained here

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var optionText = e.target.elements.option.value.trim();
            var error = this.props.handleAddOptions(optionText);
            console.log(status);
            e.target.elements.option.value = '';
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
                    { onSubmit: this.handleSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

//Stateless Functional Component
//note this.props.name wont work because this is functional and not class based
//advantage - faster because no class, to be used when no need to manage state
var User = function User(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Name: ',
            props.name,
            ' '
        ),
        React.createElement(
            'p',
            null,
            'Age: '
        )
    );
};
//ReactDOM.render(<User name="Trina" />, document.getElementById('app'));
