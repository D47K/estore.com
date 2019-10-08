var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {BrowserRouter,NavLink} from 'react-router-dom';
var _ReactRouterDOM = ReactRouterDOM,
    BrowserRouter = _ReactRouterDOM.BrowserRouter,
    HashRouter = _ReactRouterDOM.HashRouter,
    NavLink = _ReactRouterDOM.NavLink,
    Route = _ReactRouterDOM.Route,
    Router = _ReactRouterDOM.Router,
    Switch = _ReactRouterDOM.Switch;

// Component

var ProductShortInfo = function (_React$Component) {
  _inherits(ProductShortInfo, _React$Component);

  function ProductShortInfo() {
    _classCallCheck(this, ProductShortInfo);

    return _possibleConstructorReturn(this, (ProductShortInfo.__proto__ || Object.getPrototypeOf(ProductShortInfo)).apply(this, arguments));
  }

  _createClass(ProductShortInfo, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "product" },
        React.createElement(
          "h3",
          null,
          "Andress"
        ),
        React.createElement(
          "p",
          null,
          "Price: $900"
        )
      );
    }
  }]);

  return ProductShortInfo;
}(React.Component);

// Component


var ProductFeature = function (_React$Component2) {
  _inherits(ProductFeature, _React$Component2);

  function ProductFeature(props) {
    _classCallCheck(this, ProductFeature);

    var _this2 = _possibleConstructorReturn(this, (ProductFeature.__proto__ || Object.getPrototypeOf(ProductFeature)).call(this, props));

    console.log(props);
    return _this2;
  }

  _createClass(ProductFeature, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h3",
        null,
        "Some Features of Samsung Galaxy S9!",
        this.props.match.params.id
      );
    }
  }]);

  return ProductFeature;
}(React.Component);

// Component


var ProductImages = function (_React$Component3) {
  _inherits(ProductImages, _React$Component3);

  function ProductImages() {
    _classCallCheck(this, ProductImages);

    return _possibleConstructorReturn(this, (ProductImages.__proto__ || Object.getPrototypeOf(ProductImages)).apply(this, arguments));
  }

  _createClass(ProductImages, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h3",
        null,
        "Some Images of Samsung Galaxy S9"
      );
    }
  }]);

  return ProductImages;
}(React.Component);

// Component


var ProductComments = function (_React$Component4) {
  _inherits(ProductComments, _React$Component4);

  function ProductComments() {
    _classCallCheck(this, ProductComments);

    return _possibleConstructorReturn(this, (ProductComments.__proto__ || Object.getPrototypeOf(ProductComments)).apply(this, arguments));
  }

  _createClass(ProductComments, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h3",
        null,
        "Some Customer Comments"
      );
    }
  }]);

  return ProductComments;
}(React.Component);

var URLactual = window.location;

//console.log(URLactual);

var Product = function (_React$Component5) {
  _inherits(Product, _React$Component5);

  function Product() {
    _classCallCheck(this, Product);

    return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
  }

  _createClass(Product, [{
    key: "render",
    value: function render() {
      return React.createElement(
        Router,
        null,
        React.createElement(
          "div",
          null,
          React.createElement(ProductShortInfo, null),
          React.createElement(
            "div",
            { className: "product-nav" },
            React.createElement(
              NavLink,
              { to: "/", activeClassName: "selected" },
              "Feature"
            ),
            React.createElement(
              NavLink,
              { to: "/images", activeClassName: "selected" },
              "Images"
            ),
            React.createElement(
              NavLink,
              { to: "/comments", activeClassName: "selected" },
              "Comments"
            )
          ),
          React.createElement(
            "div",
            { className: "route-place" },
            React.createElement(
              Switch,
              null,
              React.createElement(Route, { path: "/:id", component: ProductFeature })
            )
          )
        )
      );
    }
  }]);

  return Product;
}(React.Component);
/**
 *    <Route exact path="/images" exact component={ProductImages} />
              <Route path="/comments" exact component={ProductComments} />
 */
//


var App = function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(Product, null);
    }
  }]);

  return App;
}(React.Component);

// Render


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));