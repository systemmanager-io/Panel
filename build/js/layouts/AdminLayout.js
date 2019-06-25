"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _reactstrap = require("reactstrap");

var _reactRouterDom = require("react-router-dom");

var _index = require("@fortawesome/react-fontawesome/index");

var _index2 = require("@fortawesome/free-solid-svg-icons/index");

var _faBars = require("@fortawesome/free-solid-svg-icons/faBars");

require("../../css/sidebar.scss");

var _DropdownItem = require("reactstrap/es/DropdownItem");

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

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

var AdminLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminLayout, _React$Component);

  function AdminLayout(props) {
    var _this;

    _classCallCheck(this, AdminLayout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminLayout).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      accountIsOpen: false,
      sidebarToggled: false,
      sidebarSettings: true
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function (toToggle) {
      return function () {
        switch (toToggle) {
          case 'account':
            _this.setState({
              accountIsOpen: !_this.state.accountIsOpen
            });

            break;

          case 'sidebar':
            _this.setState({
              sidebarToggled: !_this.state.sidebarToggled
            });

            break;

          case 'sidebarSettings':
            _this.setState({
              sidebarSettings: !_this.state.sidebarSettings
            });

            break;
        }
      };
    });

    return _this;
  }

  _createClass(AdminLayout, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "d-flex ".concat(this.state.sidebarToggled ? "toggled" : null),
        id: "wrapper"
      }, React.createElement("div", {
        className: "bg-light border-right",
        id: "sidebar-wrapper"
      }, React.createElement("div", {
        className: "sidebar-heading"
      }, "SystemManager"), React.createElement("div", {
        className: "list-group list-group-flush toggled"
      }, React.createElement(_reactRouterDom.Link, {
        to: "/dashboard",
        className: "list-group-item list-group-item-action bg-light"
      }, React.createElement(_index.FontAwesomeIcon, {
        icon: _index2.faDesktop
      }), " Dashboard"), React.createElement(_reactRouterDom.Link, {
        to: "/servers",
        className: "list-group-item list-group-item-action bg-light"
      }, React.createElement(_index.FontAwesomeIcon, {
        icon: _index2.faServer
      }), " Servers"), React.createElement(_reactRouterDom.Link, {
        to: "/log",
        className: "list-group-item list-group-item-action bg-light"
      }, React.createElement(_index.FontAwesomeIcon, {
        icon: _index2.faList
      }), " Log"), React.createElement(_reactstrap.Dropdown, {
        isOpen: this.state.sidebarSettings,
        toggle: this.toggle("sidebarSettings").bind(this)
      }, React.createElement(_reactstrap.DropdownToggle, {
        className: "list-group-item list-group-item-action bg-light"
      }, React.createElement(_index.FontAwesomeIcon, {
        icon: _index2.faCogs
      }), " Settings"), React.createElement(_reactstrap.DropdownMenu, null, React.createElement(_DropdownItem2["default"], {
        header: true
      }, "Settings"), React.createElement(_reactRouterDom.Link, {
        to: "/settings"
      }, React.createElement(_DropdownItem2["default"], null, "General")), React.createElement(_reactRouterDom.Link, {
        to: "/settings/servers"
      }, React.createElement(_DropdownItem2["default"], null, "Servers")), React.createElement(_reactRouterDom.Link, {
        to: "/settings/users"
      }, React.createElement(_DropdownItem2["default"], null, "Users")))))), React.createElement("div", {
        id: "page-content-wrapper"
      }, React.createElement("nav", {
        className: "navbar navbar-expand-lg bg-light border-bottom"
      }, React.createElement(_reactstrap.Button, {
        outline: true,
        color: "link",
        className: "navbar-hamburger",
        onClick: this.toggle("sidebar").bind(this),
        id: "menu-toggle"
      }, React.createElement(_index.FontAwesomeIcon, {
        icon: _faBars.faBars
      })), React.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, React.createElement(_reactstrap.Dropdown, {
        isOpen: this.state.accountIsOpen,
        toggle: this.toggle("account").bind(this)
      }, React.createElement(_reactstrap.DropdownToggle, null, React.createElement(_index.FontAwesomeIcon, {
        icon: _index2.faUser
      })), React.createElement(_reactstrap.DropdownMenu, {
        right: true
      }, React.createElement("div", {
        className: "profilecard"
      }, React.createElement(_reactstrap.CardBody, null, React.createElement(_reactstrap.Button, null, React.createElement(_index.FontAwesomeIcon, {
        icon: _index2.faUser
      }), " Profile")), React.createElement(_reactstrap.CardFooter, null, React.createElement(_reactstrap.Button, null, React.createElement(_index.FontAwesomeIcon, {
        icon: _index2.faLock
      }), " Lock"), React.createElement(_reactstrap.Button, {
        style: {
          textAlign: "right"
        }
      }, React.createElement(_index.FontAwesomeIcon, {
        icon: _index2.faSignOutAlt
      }), " Sign Out"))))))), React.createElement("div", {
        className: "container-fluid"
      }, React.createElement("br", null), this.props.children))));
    }
  }]);

  return AdminLayout;
}(React.Component);

exports["default"] = AdminLayout;