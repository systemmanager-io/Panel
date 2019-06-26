"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _LoginLayout = _interopRequireDefault(require("../../layouts/LoginLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      passwordForm: false,
      waitingForToken: false,
      username: undefined,
      password: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "style", {});

    _defineProperty(_assertThisInitialized(_this), "setFormState", function (evt) {
      _this.setState(_defineProperty({}, evt.target.name, evt.target.value));
    });

    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_LoginLayout["default"], null, _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "container"
      }, _react["default"].createElement("div", {
        className: "row justify-content-center"
      }, _react["default"].createElement("div", {
        className: "",
        style: {
          width: "400px",
          top: "50%"
        }
      }, _react["default"].createElement(_reactstrap.Card, null, _react["default"].createElement(_reactstrap.CardBody, null, _react["default"].createElement("h2", {
        className: ""
      }, "SystemManager"), _react["default"].createElement("div", null, _react["default"].createElement("br", null), _react["default"].createElement(_reactstrap.InputGroup, {
        id: "usernameInput"
      }, _react["default"].createElement(_reactstrap.Input, {
        onChange: this.setFormState,
        name: "username",
        placeholder: "Username"
      })), _react["default"].createElement("br", null), _react["default"].createElement(_reactstrap.InputGroup, {
        id: "passwordInput"
      }, _react["default"].createElement(_reactstrap.Input, {
        type: "password",
        onChange: this.setFormState,
        name: "password",
        placeholder: "Password"
      })), _react["default"].createElement("br", null), _react["default"].createElement(_reactstrap.Button, {
        onClick: this.submitLogin.bind(this),
        color: "primary",
        style: {
          width: "100%"
        }
      }, _react["default"].createElement(_reactstrap.Spinner, {
        hidden: !this.state.waitingForToken,
        size: "sm"
      }), " ", _react["default"].createElement("a", {
        hidden: this.state.waitingForToken
      }, "Login"))))))))));
    }
  }, {
    key: "passwordForm",
    value: function passwordForm() {
      this.setState({
        passwordForm: true
      });
    }
  }, {
    key: "submitLogin",
    value: function submitLogin() {
      var _this2 = this;

      this.setState({
        waitingForToken: true
      });
      var bodyData = [];
      bodyData['email'] = this.state.username;
      bodyData['password'] = this.state.password;
      fetch(process.env.MIX_APP_URL + "/api/auth/login", {
        mode: "cors",
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.username,
          password: this.state.password
        })
      })["catch"](function (error) {
        return console.error(error);
      }).then(function (res) {
        return res.json().then(function (res) {
          if (res.error === "invalid_credentials" || res.error === "could_not_create_token") {
            console.log("test"); // this.setState({waitingForToken: false});
            // this.setState({passwordForm: false});

            _this2.setState({
              statusForToken: "danger"
            });
          } else if (res.token !== undefined) {
            console.log(res.token);

            _this2.setState({
              statusForToken: "success"
            });

            _this2.props.history.push('/dashboard');
          }
        });
      });
    }
  }]);

  return Login;
}(_react.Component);

exports["default"] = Login;