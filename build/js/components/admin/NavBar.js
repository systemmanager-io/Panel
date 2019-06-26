"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _DropdownToggle = _interopRequireDefault(require("reactstrap/es/DropdownToggle"));

var _index = require("@fortawesome/react-fontawesome/index");

var _faBars = require("@fortawesome/free-solid-svg-icons/faBars");

var _index2 = require("@fortawesome/free-solid-svg-icons/index");

var _CardBody = _interopRequireDefault(require("reactstrap/es/CardBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NavBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    var _this;

    _classCallCheck(this, NavBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavBar).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      accountIsOpen: false
    };
    return _this;
  }

  _createClass(NavBar, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        accountIsOpen: !this.state.accountIsOpen // navbar collapse

      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("nav", {
        className: "navbar navbar-expand-lg bg-light border-bottom"
      }, _react["default"].createElement(_reactstrap.Button, {
        outline: true,
        color: "link",
        className: "navbar-hamburger",
        id: "menu-toggle"
      }, _react["default"].createElement(_index.FontAwesomeIcon, {
        icon: _faBars.faBars
      })), _react["default"].createElement("ul", {
        className: "navbar-nav ml-auto"
      }, _react["default"].createElement(_reactstrap.Dropdown, {
        isOpen: this.state.accountIsOpen,
        toggle: this.toggle
      }, _react["default"].createElement(_DropdownToggle["default"], null, _react["default"].createElement(_index.FontAwesomeIcon, {
        icon: _index2.faUser
      })), _react["default"].createElement(_reactstrap.DropdownMenu, {
        right: true
      }, _react["default"].createElement("div", {
        className: "profilecard"
      }, _react["default"].createElement(_CardBody["default"], null, _react["default"].createElement(_reactstrap.Button, null, _react["default"].createElement(_index.FontAwesomeIcon, {
        icon: _index2.faUser
      }), " Profile")), _react["default"].createElement(_reactstrap.CardFooter, null, _react["default"].createElement(_reactstrap.Button, null, _react["default"].createElement(_index.FontAwesomeIcon, {
        icon: _index2.faLock
      }), " Lock"), _react["default"].createElement(_reactstrap.Button, {
        style: {
          textAlign: "right"
        }
      }, _react["default"].createElement(_index.FontAwesomeIcon, {
        icon: _index2.faSignOutAlt
      }), " Sign Out")))))));
    }
  }]);

  return NavBar;
}(_react["default"].Component);

var _default = NavBar;
exports["default"] = _default;