"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _CardDeck = _interopRequireDefault(require("reactstrap/es/CardDeck"));

var _index = require("@fortawesome/react-fontawesome/index");

var _index2 = require("@fortawesome/free-solid-svg-icons/index");

var _faTimesCircle = require("@fortawesome/free-solid-svg-icons/faTimesCircle");

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

var Overview =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Overview, _React$Component);

  function Overview() {
    _classCallCheck(this, Overview);

    return _possibleConstructorReturn(this, _getPrototypeOf(Overview).apply(this, arguments));
  }

  _createClass(Overview, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("h2", null, "Servers"), React.createElement("hr", null), React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-md-12"
      }, React.createElement(_reactstrap.Card, null, React.createElement(_reactstrap.Table, {
        responsive: true,
        hover: true
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
        style: {
          width: "25px"
        }
      }, "#"), React.createElement("th", {
        style: {
          width: "25px"
        }
      }), React.createElement("th", {
        style: {
          minWidth: "200px"
        }
      }, "Name"), React.createElement("th", {
        style: {
          minWidth: "100px"
        }
      }, "IP"), React.createElement("th", {
        style: {
          minWidth: "100px"
        }
      }, "Description"), React.createElement("th", {
        style: {
          minWidth: "100px"
        }
      }, "System Message"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("th", {
        scope: "row"
      }, "1"), React.createElement("th", null, React.createElement(_index.FontAwesomeIcon, {
        className: "serverstatus warning",
        icon: _index2.faExclamationTriangle
      })), React.createElement("td", null, "NL-AMS1-01"), React.createElement("td", null, "xxx.xxx.xxx.xxx"), React.createElement("td", null, "Instance with Warning"), React.createElement("td", null)), React.createElement("tr", null, React.createElement("th", {
        scope: "row"
      }, "1"), React.createElement("th", null, React.createElement(_index.FontAwesomeIcon, {
        className: "serverstatus danger",
        icon: _index2.faExclamationTriangle
      })), React.createElement("td", null, "NL-AMS1-02"), React.createElement("td", null, "xxx.xxx.xxx.xxx"), React.createElement("td", null, "Instance with Critical error"), React.createElement("td", null, "SMART Error")), React.createElement("tr", null, React.createElement("th", {
        scope: "row"
      }, "12"), React.createElement("th", null, React.createElement(_index.FontAwesomeIcon, {
        className: "serverstatus online",
        icon: _index2.faCheckCircle
      })), React.createElement("td", null, "NL-AMS1-03"), React.createElement("td", null, "xxx.xxx.xxx.xxx"), React.createElement("td", null, "Online Instance"), React.createElement("td", null)), React.createElement("tr", null, React.createElement("th", {
        scope: "row"
      }, "12"), React.createElement("th", null, React.createElement(_index.FontAwesomeIcon, {
        className: "serverstatus info",
        icon: _index2.faClock
      })), React.createElement("td", null, "NL-AMS1-04"), React.createElement("td", null, "xxx.xxx.xxx.xxx"), React.createElement("td", null, "Pinging Instance"), React.createElement("td", null)), React.createElement("tr", null, React.createElement("th", {
        scope: "row"
      }, "1"), React.createElement("th", null, React.createElement(_index.FontAwesomeIcon, {
        className: "serverstatus offline",
        icon: _faTimesCircle.faTimesCircle
      })), React.createElement("td", null, "NL-AMS1-05"), React.createElement("td", null, "xxx.xxx.xxx.xxx"), React.createElement("td", null, "Offline Instance"), React.createElement("td", null))))))));
    }
  }]);

  return Overview;
}(React.Component);

exports["default"] = Overview;