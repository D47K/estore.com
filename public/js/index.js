var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ReactRouterDOM = ReactRouterDOM,
    HashRouter = _ReactRouterDOM.HashRouter,
    NavLink = _ReactRouterDOM.NavLink,
    Route = _ReactRouterDOM.Route,
    Switch = _ReactRouterDOM.Switch,
    BrowserRouter = _ReactRouterDOM.BrowserRouter;

var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this.componentDidMount = _this.componentDidMount.bind(_this);
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Componente Cargado");
      console.log(this.props);
      var altura = $("nav").offset().top;
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > altura) {
          $("nav").addClass("fixed-top");
          $("nav").addClass("animated fadeInDown");
        } else {
          $("nav").removeClass("fixed-top");
          $("nav").removeClass("animated fadeInDown");
        }
      });
      VerificadorLogin();
      $("body").bootstrapMaterialDesign();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        HashRouter,
        null,
        React.createElement(
          "header",
          null,
          React.createElement("div", { className: "botron container-fluid ", id: "Botron" }),
          React.createElement(
            "nav",
            { className: "navbar navbar-expand-md  myNav " },
            React.createElement(
              "a",
              { className: "navbar-brand", href: "#" },
              "eStore"
            ),
            React.createElement(
              "div",
              { id: "btnNav" },
              React.createElement(
                "button",
                {
                  className: "navbar-toggler  ",
                  id: "btnD",
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#navbarSupportedContent",
                  "aria-controls": "navbarSupportedContent",
                  "aria-expanded": "false",
                  "aria-label": "Toggle navigation"
                },
                React.createElement("span", { className: "linHor" }),
                React.createElement("span", { className: "linHor" }),
                React.createElement("span", { className: "linHor" })
              )
            ),
            React.createElement(
              "div",
              {
                className: "collapse navbar-collapse ",
                id: "navbarSupportedContent"
              },
              React.createElement(
                "ul",
                { className: "navbar-nav mr-auto" },
                React.createElement(
                  "li",
                  { className: "nav-item active ", id: "btnInicio" },
                  React.createElement(Inicio, null)
                ),
                React.createElement(
                  "li",
                  { className: "nav-item ", id: "lkCategoria" },
                  React.createElement(Categorias, null)
                ),
                React.createElement(
                  "li",
                  { className: "nav-item ", id: "lkMarca" },
                  React.createElement(Marcas, null)
                )
              ),
              React.createElement("div", { id: "dropUser" })
            )
          )
        ),
        React.createElement(
          "main",
          null,
          React.createElement("section", { id: "loginCtn" }),
          React.createElement(
            "section",
            null,
            React.createElement(Carrito, null)
          ),
          React.createElement(
            "section",
            { "class": "container pt-0 mt-5  ", id: "Cprincipa" },
            React.createElement(
              Switch,
              null,
              React.createElement(Route, { path: "/", exact: true, component: Carousels }),
              React.createElement(Route, {
                path: "/marca/:idm/compra/producto/:id",
                component: Producto
              }),
              React.createElement(Route, {
                path: "/categoria/:idm/compra/producto/:id",
                component: Producto
              }),
              React.createElement(Route, { path: "/marca/:id", component: Marca }),
              React.createElement(Route, { path: "/categoria/:id", component: Categoria }),
              React.createElement(Route, { path: "/carrito", exact: true, component: CarroCompra }),
              React.createElement(Route, { path: "/administracion/admins", component: AdminContainer }),
              React.createElement(Route, { path: "/cuenta", exact: true, component: Account }),
              React.createElement(Route, { component: PageNotFound })
            )
          )
        ),
        React.createElement(
          "footer",
          { className: "footer" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-5  col-sm-5 col-md-3" },
                React.createElement(
                  "h5",
                  null,
                  "Desarrolladores"
                ),
                React.createElement(
                  "ul",
                  { className: "list-unstyled" },
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "span",
                      { className: "link" },
                      "Andres Hilario Vidal"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "span",
                      { className: "link" },
                      "Adan Martinez Cruz"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "span",
                      { className: "link" },
                      "Carlos Rey"
                    )
                  ),
                  React.createElement(
                    "li",
                    null,
                    React.createElement(
                      "span",
                      { className: "link" },
                      "Blanca Esther Hernandez Martinez"
                    )
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "col-7 col-sm-6  col-md-4" },
                React.createElement(
                  "h5",
                  null,
                  "Tienda f\xEDsica"
                ),
                React.createElement(
                  "address",
                  null,
                  "121, Clear Water Bay Road",
                  React.createElement("br", null),
                  "Clear Water Bay, Kowloon",
                  React.createElement("br", null),
                  "HONG KONG",
                  React.createElement("br", null),
                  "Tel.: +852 1234 5678",
                  React.createElement("br", null),
                  "Fax: +852 8765 4321",
                  React.createElement("br", null),
                  "Email:",
                  " ",
                  React.createElement(
                    "a",
                    { href: "mailto:confusion@food.net" },
                    "confusion@food.net"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "col-12 col-sm-12 col-md-4 align-self-center" },
                React.createElement(
                  "div",
                  { className: "text-center" },
                  React.createElement(
                    "a",
                    { href: "http://www.facebook.com/profile.php?id=" },
                    "Facebook"
                  ),
                  React.createElement(
                    "a",
                    { href: "http://twitter.com/" },
                    "Twitter"
                  ),
                  React.createElement(
                    "a",
                    { href: "mailto:" },
                    "Correo electr\xF3nico"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "row justify-content-center" },
              React.createElement(
                "div",
                { className: "col-auto " },
                React.createElement(
                  "p",
                  null,
                  "\xA9 Copyright 2018 Ristorante Con Fusion"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Index;
}(React.Component);