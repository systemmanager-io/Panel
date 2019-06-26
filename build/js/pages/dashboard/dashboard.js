"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _InfoBox = _interopRequireDefault(require("../../components/InfoBox"));

var _CardDeck = _interopRequireDefault(require("reactstrap/es/CardDeck"));

var _index = require("@fortawesome/react-fontawesome/index");

var _index2 = require("@fortawesome/free-solid-svg-icons/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// import Toast from "../../components/Toast";
var Dashboard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h2", null, "Dashboard"), React.createElement("hr", null), React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-md-3"
      }, React.createElement(_reactstrap.Card, {
        inverse: true,
        color: "success"
      }, React.createElement("div", {
        className: "row no-gutters"
      }, React.createElement("div", {
        className: "col-md-3 col-lg-3 col-sm-3 col-3"
      }, React.createElement(_reactstrap.CardBody, null, React.createElement(_index.FontAwesomeIcon, {
        className: "infobox-icon",
        icon: _index2.faServer
      }))), React.createElement("div", {
        className: "col-md-9 col-lg-9 col-sm-9 col-9"
      }, React.createElement(_reactstrap.CardBody, null, React.createElement("h4", null, "Server status"), React.createElement("h5", null, "All Systems Operational"))))), React.createElement("br", null)), React.createElement("div", {
        className: "col-md-3"
      }, React.createElement(_reactstrap.Card, {
        inverse: true,
        color: "success"
      }, React.createElement("div", {
        className: "row no-gutters"
      }, React.createElement("div", {
        className: "col-md-3"
      }, React.createElement(_reactstrap.CardBody, null, React.createElement(_index.FontAwesomeIcon, {
        icon: "desktop"
      }))), React.createElement("div", {
        className: "col-md-9"
      }, React.createElement(_reactstrap.CardBody, null, React.createElement("h4", null, "Server status"), React.createElement("h5", null, "1 Online | 1 Offline"))))), React.createElement("br", null)), React.createElement("div", {
        className: "col-md-3"
      }, React.createElement(_reactstrap.Card, {
        inverse: true,
        color: "success"
      }, React.createElement("div", {
        className: "row no-gutters"
      }, React.createElement("div", {
        className: "col-md-3"
      }, React.createElement(_reactstrap.CardBody, null, React.createElement(_index.FontAwesomeIcon, {
        icon: _index2.faDesktop
      }))), React.createElement("div", {
        className: "col-md-9"
      }, React.createElement(_reactstrap.CardBody, null, React.createElement("h4", null, "Server status"), React.createElement("h5", null, "1 Online | 1 Offline"))))), React.createElement("br", null)), React.createElement("div", {
        className: "col-md-3"
      }, React.createElement(_reactstrap.Card, {
        inverse: true,
        color: "success"
      }, React.createElement("div", {
        className: "row no-gutters"
      }, React.createElement("div", {
        className: "col-md-3"
      }, React.createElement(_reactstrap.CardBody, null, React.createElement(_index.FontAwesomeIcon, {
        icon: "desktop"
      }))), React.createElement("div", {
        className: "col-md-9"
      }, React.createElement(_reactstrap.CardBody, null, React.createElement("h4", null, "Server status"), React.createElement("h5", null, "1 Online | 1 Offline"))))), React.createElement("br", null)), React.createElement("div", {
        className: "col-md-8"
      }, React.createElement("div", {
        className: "card"
      }, React.createElement("div", {
        className: "card-header"
      }, "Example Component"), React.createElement("div", {
        className: "card-body"
      }, React.createElement(_reactstrap.Spinner, {
        size: "sm",
        color: "success",
        type: "grow"
      }), "Server Online!", React.createElement(_reactstrap.Spinner, {
        size: "sm",
        color: "danger",
        type: "grow"
      }), "Server Offline!", React.createElement(_reactstrap.Spinner, {
        size: "sm",
        color: "warning",
        type: "grow"
      }), "Server Pinging!")))));
    }
  }]);

  return Dashboard;
}(React.Component);

exports["default"] = Dashboard;