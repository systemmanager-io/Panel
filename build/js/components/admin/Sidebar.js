"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("@fortawesome/react-fontawesome/index");

var _reactRouterDom = require("react-router-dom");

var _index2 = require("@fortawesome/free-solid-svg-icons/index");

var _reactstrap = require("reactstrap");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      tooltipOpen: false
    });

    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Sidebar, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "bg-light border-right"
      }, _react["default"].createElement("div", {
        className: "sidebar-heading"
      }, _react["default"].createElement("a", {
        id: "systemmanagerVersionHover"
      }, "SystemManager")), _react["default"].createElement(_reactstrap.Tooltip, {
        placement: "right",
        isOpen: this.state.tooltipOpen,
        target: "systemmanagerVersionHover",
        toggle: this.toggle
      }, "v0.1"), _react["default"].createElement("div", {
        className: "list-group list-group-flush"
      }, _react["default"].createElement(_reactRouterDom.Link, {
        to: "/dashboard",
        className: "list-group-item list-group-item-action bg-light"
      }, _react["default"].createElement(_index.FontAwesomeIcon, {
        icon: _index2.faDesktop
      }), " Dashboard"), _react["default"].createElement(_reactRouterDom.Link, {
        to: "/servers",
        className: "list-group-item list-group-item-action bg-light"
      }, _react["default"].createElement(_index.FontAwesomeIcon, {
        icon: _index2.faServer
      }), " Servers"), _react["default"].createElement(_reactRouterDom.Link, {
        to: "/log",
        className: "list-group-item list-group-item-action bg-light"
      }, _react["default"].createElement(_index.FontAwesomeIcon, {
        icon: _index2.faList
      }), " Log"), _react["default"].createElement(_reactRouterDom.Link, {
        to: "/settings",
        className: "list-group list-group-item list-group-item-action bg-light"
      }, _react["default"].createElement(_index.FontAwesomeIcon, {
        icon: _index2.faCogs
      }), " Settings"), _react["default"].createElement(_reactRouterDom.Link, {
        to: "/settings/servers",
        className: "list-group-item list-group-item-action bg-light"
      }, "Servfers")));
    }
  }]);

  return Sidebar;
}(_react["default"].Component);

var _default = Sidebar;
exports["default"] = _default;