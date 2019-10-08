var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inicio = function (_React$Component) {
  _inherits(Inicio, _React$Component);

  function Inicio(props) {
    _classCallCheck(this, Inicio);

    return _possibleConstructorReturn(this, (Inicio.__proto__ || Object.getPrototypeOf(Inicio)).call(this, props));
  }

  _createClass(Inicio, [{
    key: "handleInicio",
    value: function handleInicio() {
      location.reload();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $(".nav-link").bootstrapMaterialDesign();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "a",
        { id: "Inicio", className: "nav-link", href: "#", onClick: this.handleInicio },
        "Inicio ",
        React.createElement(
          "span",
          { className: "sr-only" },
          "(current)"
        )
      );
    }
  }]);

  return Inicio;
}(React.Component);

var BtnBundles = function (_React$Component2) {
  _inherits(BtnBundles, _React$Component2);

  function BtnBundles(props) {
    _classCallCheck(this, BtnBundles);

    var _this2 = _possibleConstructorReturn(this, (BtnBundles.__proto__ || Object.getPrototypeOf(BtnBundles)).call(this, props));

    _this2.handleBundle = _this2.handleBundle.bind(_this2);
    return _this2;
  }

  _createClass(BtnBundles, [{
    key: "handleBundle",
    value: function handleBundle() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      $(".nav-link").bootstrapMaterialDesign();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "a",
        { "class": "nav-link", href: "#" },
        "Bundles"
      );
    }
  }]);

  return BtnBundles;
}(React.Component);

//Utiliza _CategoriaMenu.js
//Utiliza _MarcaMenu.js