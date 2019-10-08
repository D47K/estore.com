var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Componente opciones de usuario normal
 */
var User = function (_React$Component) {
  _inherits(User, _React$Component);

  function User(props) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props));

    _this.handleClose = _this.handleClose.bind(_this);
    _this.handlePerfil = _this.handlePerfil.bind(_this);
    return _this;
  }

  _createClass(User, [{
    key: "handleClose",
    value: function handleClose() {
      /**
       * ReactDOM.render(<Authorizador />, document.getElementById("dropUser"));
      ReactDOM.render(
        <UserBtn auth="false" />,
        document.getElementById("btnNav")
      );
       */
      location.reload();
      $.get("phpModels/logout.php", "", function (data, textStatus, jqXHR) {
        var isAdmin = false;
        var isLogged = false;
        var idUsuario = null;
        location.reload();
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $(window).on("scroll", function () {
        $(".dropdown-menu").removeClass("show");
      });
    }
  }, {
    key: "handlePerfil",
    value: function handlePerfil() {
      dat = {
        permit: "SI",
        id: this.props.id
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getProfileUser.php",
        data: dat,
        success: function success(response) {
          console.log("Datos");

          console.log(response);

          if (response.status == "OK") {
            datos = {
              nombre: response.nombre,
              app: response.apellidop,
              apm: response.apellidom,
              user: response.user,
              tel: response.tel,
              foto: response.foto,
              mail: response.mail
            };
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "dropdown" },
        React.createElement(
          "span",
          {
            href: "#",
            className: "dropdown-toggler",
            id: "dropBtn",
            "data-toggle": "dropdown"
          },
          React.createElement(
            "div",
            { className: "imgP  d-none d-md-block" },
            React.createElement("img", {
              className: "photoP border rounded-circle m-0",
              src: this.props.foto
            })
          ),
          React.createElement(
            "span",
            { className: "d-block d-md-none mb-0" },
            "Cuenta"
          )
        ),
        React.createElement(
          "div",
          {
            className: "dropdown-menu dropm",
            id: "dropMenu",
            "aria-labelledby": "navbarDropdown"
          },
          React.createElement(
            HashRouter,
            null,
            React.createElement(
              "h6",
              { className: "dropdown-header" },
              this.props.nombre
            ),
            React.createElement(
              NavLink,
              { to: "/cuenta", className: "dropdown-item" },
              "Cuenta"
            ),
            React.createElement(
              NavLink,
              { to: "/carrito", className: "dropdown-item", href: "#" },
              "Carrito"
            ),
            React.createElement("hr", null),
            React.createElement(
              "a",
              { className: "dropdown-item", href: "#", onClick: this.handleClose },
              "Cerrar sesi\xF3n"
            )
          )
        )
      );
    }
  }]);

  return User;
}(React.Component);

var Admin = function (_React$Component2) {
  _inherits(Admin, _React$Component2);

  function Admin(props) {
    _classCallCheck(this, Admin);

    var _this2 = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));

    _this2.handleClose = _this2.handleClose.bind(_this2);
    _this2.handleAdmins = _this2.handleAdmins.bind(_this2);
    return _this2;
  }

  _createClass(Admin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $(window).on("scroll", function () {
        $(".dropdown-menu").removeClass("show");
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      /**
       *   ReactDOM.render(<Authorizador />, document.getElementById("dropUser"));
      ReactDOM.render(
        <UserBtn auth="false" />,
        document.getElementById("btnNav")
      );
       */
      $.get("phpModels/logout.php", "", function (data, textStatus, jqXHR) {
        var isAdmin = false;
        var isLogged = false;
        var idUsuario = null;
        location.reload();
      });
    }
  }, {
    key: "handleAdmins",
    value: function handleAdmins() {
      var dat = {
        permit: "SI"
      };

      var ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getAdmins.php",
        data: dat,
        success: function success(response) {
          if (response.status == "NoE") {
            return;
          }
          if (response.status == "Error") {
            return;
          }

          ReactDOM.render(React.createElement(AdminContainer, { datos: response, id: ctx.props.id }), document.getElementById("AdminCards"));
          ReactDOM.render("", document.getElementById("prodContainer"));
          ReactDOM.render("", document.getElementById("Perfil"));
          ReactDOM.render("", document.getElementById("ProdCaro"));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        HashRouter,
        null,
        React.createElement(
          "div",
          { className: "dropdown" },
          React.createElement(
            "span",
            {
              href: "#",
              className: "dropdown-toggler",
              id: "dropBtn",
              "data-toggle": "dropdown"
            },
            React.createElement(
              "div",
              { className: "imgP  d-none d-md-block" },
              React.createElement("img", {
                className: "photoP border rounded-circle m-0",
                src: this.props.foto
              })
            ),
            React.createElement(
              "span",
              { className: "d-block d-md-none mb-0" },
              "Cuenta"
            )
          ),
          React.createElement(
            "div",
            {
              className: "dropdown-menu dropm",
              id: "dropMenu",
              "aria-labelledby": "navbarDropdown"
            },
            React.createElement(
              "h6",
              { className: "dropdown-header" },
              this.props.nombre
            ),
            React.createElement(
              NavLink,
              { to: "/cuenta", className: "dropdown-item", href: "#" },
              "Cuenta"
            ),
            React.createElement(
              NavLink,
              { to: "/carrito", className: "dropdown-item", href: "#" },
              "Carrito"
            ),
            React.createElement("hr", null),
            React.createElement(
              "a",
              { className: "dropdown-item", href: "#", onClick: this.handleClose },
              "Cerrar sesi\xF3n"
            )
          )
        )
      );
    }
  }]);

  return Admin;
}(React.Component);

var Perfil = function (_React$Component3) {
  _inherits(Perfil, _React$Component3);

  function Perfil(props) {
    _classCallCheck(this, Perfil);

    var _this3 = _possibleConstructorReturn(this, (Perfil.__proto__ || Object.getPrototypeOf(Perfil)).call(this, props));

    _this3.handleSave = _this3.handleSave.bind(_this3);
    return _this3;
  }

  _createClass(Perfil, [{
    key: "handleSave",
    value: function handleSave() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { classNameName: "col-12" },
        React.createElement(
          "div",
          { className: "row d-flex justify-content-center align-items-center" },
          React.createElement(
            "h4",
            null,
            this.props.data.nombre,
            " "
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-12 col-md-7 offset-md-5" },
            React.createElement(
              "form",
              null,
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "exampleInputEmail1" },
                  "Usuario"
                ),
                React.createElement("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "Nuevo usuario"
                }),
                React.createElement(
                  "small",
                  { id: "emailHelp", className: "form-text text-muted" },
                  this.props.data.user
                )
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "exampleInputEmail1" },
                  "Nombre"
                ),
                React.createElement("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "Nuevo nombre"
                }),
                React.createElement(
                  "small",
                  { id: "emailHelp", className: "form-text text-muted" },
                  this.props.data.nombre
                )
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "exampleInputEmail1" },
                  "Apellido Paterno"
                ),
                React.createElement("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "Nuevo Apellido Paterno"
                }),
                React.createElement(
                  "small",
                  { id: "emailHelp", className: "form-text text-muted" },
                  this.props.data.app
                )
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "exampleInputEmail1" },
                  "Apellido Materno"
                ),
                React.createElement("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "Nuevo Apellido Materno"
                }),
                React.createElement(
                  "small",
                  { id: "emailHelp", className: "form-text text-muted" },
                  this.props.data.apm
                )
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "exampleInputPassword1" },
                  "Contrase\xF1a"
                ),
                React.createElement("input", {
                  type: "password",
                  className: "form-control",
                  placeholder: "Nueva contrase\xF1a"
                })
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "exampleInputPassword1" },
                  "Confirmar contrase\xF1a"
                ),
                React.createElement("input", {
                  type: "password",
                  className: "form-control",
                  placeholder: "Confirme contrase\xF1a"
                })
              ),
              React.createElement(
                "div",
                { className: "form-group" },
                React.createElement(
                  "label",
                  { "for": "my-input" },
                  "Foto de perfil"
                ),
                React.createElement("input", {
                  id: "my-input",
                  className: "form-control-file",
                  type: "file",
                  name: ""
                })
              )
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col-12" },
                React.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: this.handleSave,
                    className: "btn btn-primary"
                  },
                  "Guardar"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Perfil;
}(React.Component);

/**
 * Componente boton imagen usuario
 */


var UserBtn = function (_React$Component4) {
  _inherits(UserBtn, _React$Component4);

  function UserBtn(props) {
    _classCallCheck(this, UserBtn);

    return _possibleConstructorReturn(this, (UserBtn.__proto__ || Object.getPrototypeOf(UserBtn)).call(this, props));
  }

  _createClass(UserBtn, [{
    key: "render",
    value: function render() {
      console.log(this.props.auth);

      return this.props.auth == "true" ? React.createElement(
        "button",
        {
          className: "navbar-toggler",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        },
        React.createElement("img", {
          "class": "photoP border rounded-circle m-0",
          src: this.props.url,
          alt: "Foto"
        })
      ) : React.createElement(
        "button",
        {
          "class": "navbar-toggler  ",
          id: "btnD",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        },
        React.createElement("span", { "class": "linHor" }),
        React.createElement("span", { "class": "linHor" }),
        React.createElement("span", { "class": "linHor" })
      );
    }
  }]);

  return UserBtn;
}(React.Component);
/**
 * Fin componente boton imagen usuario
 */