'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('visibility-toggle-state.js is running');

var Visibility = function (_React$Component) {
  _inherits(Visibility, _React$Component);

  function Visibility() {
    _classCallCheck(this, Visibility);

    return _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).apply(this, arguments));
  }

  _createClass(Visibility, [{
    key: 'render',
    value: function render() {
      var title = 'Toggle Visibility';
      var details = 'Here are some details!';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title }),
        React.createElement(Details, { details: details })
      );
    }
  }]);

  return Visibility;
}(React.Component);

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
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Details = function (_React$Component3) {
  _inherits(Details, _React$Component3);

  function Details(props) {
    _classCallCheck(this, Details);

    var _this3 = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this, props));

    _this3.toggleVisible = _this3.toggleVisible.bind(_this3);
    _this3.state = {
      visible: false
    };
    return _this3;
  }

  _createClass(Details, [{
    key: 'toggleVisible',
    value: function toggleVisible() {
      this.setState(function (prevState) {
        return { visible: !prevState.visible };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.toggleVisible },
          this.state.visible ? 'Hide Details' : 'Show Details'
        ),
        this.state.visible && React.createElement(
          'p',
          null,
          this.props.details
        )
      );
    }
  }]);

  return Details;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById("app"));
