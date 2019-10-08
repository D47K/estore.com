var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CuentaAdmin = function (_React$Component) {
  _inherits(CuentaAdmin, _React$Component);

  function CuentaAdmin(props) {
    _classCallCheck(this, CuentaAdmin);

    var _this = _possibleConstructorReturn(this, (CuentaAdmin.__proto__ || Object.getPrototypeOf(CuentaAdmin)).call(this, props));

    _this.handlePerfil = _this.handlePerfil.bind(_this);
    _this.handleAdministradores = _this.handleAdministradores.bind(_this);
    _this.handleCategorias = _this.handleCategorias.bind(_this);
    _this.handleMarcas = _this.handleMarcas.bind(_this);
    _this.handlePedidosAtendidos = _this.handlePedidosAtendidos.bind(_this);
    _this.handleProductos = _this.handleProductos.bind(_this);
    _this.handleProveedores = _this.handleProveedores.bind(_this);
    _this.handleSucursales = _this.handleSucursales.bind(_this);
    _this.handleMarcas = _this.handleMarcas.bind(_this);
    _this.handleCategorias = _this.handleCategorias.bind(_this);
    _this.state = {
      updated: false
    };
    return _this;
  }

  _createClass(CuentaAdmin, [{
    key: "handleGuardar",
    value: function handleGuardar() {}
  }, {
    key: "handlePerfil",
    value: function handlePerfil() {
      ReactDOM.render(React.createElement(PerfilAdmin, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionPerfil").addClass("selected");
    }
  }, {
    key: "handleAdministradores",
    value: function handleAdministradores() {
      ReactDOM.render(React.createElement(AdminContainer, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionAdmins").addClass("selected");
    }
  }, {
    key: "handleVentas",
    value: function handleVentas() {
      ReactDOM.render(React.createElement(Ventas, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionVentas").addClass("selected");
    }
  }, {
    key: "handlePedidosAtendidos",
    value: function handlePedidosAtendidos() {
      ReactDOM.render(React.createElement(PedidosAtendidos, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionPedidosAtt").addClass("selected");
    }
  }, {
    key: "handlePedidosCola",
    value: function handlePedidosCola() {
      ReactDOM.render(React.createElement(PedidosEnCola, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionPedidosCola").addClass("selected");
    }
  }, {
    key: "handleProductos",
    value: function handleProductos() {
      ReactDOM.render(React.createElement(ProductosOption, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionProductos").addClass("selected");
    }
  }, {
    key: "handleProveedores",
    value: function handleProveedores() {
      ReactDOM.render(React.createElement(Proveedores, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionProveedor").addClass("selected");
    }
  }, {
    key: "handleSucursales",
    value: function handleSucursales() {
      ReactDOM.render(React.createElement(Sucursales, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionSucursal").addClass("selected");
    }
  }, {
    key: "handleMarcas",
    value: function handleMarcas() {
      ReactDOM.render(React.createElement(MarcasAdmin, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionMarcas").addClass("selected");
    }
  }, {
    key: "handleCategorias",
    value: function handleCategorias() {
      ReactDOM.render(React.createElement(CategoriasAdmin, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionCategorias").addClass("selected");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row bg-white m-md-3 rounded shadow-box p-md-3" },
        React.createElement(
          "div",
          { className: "col-12 col-md-3 options-account " },
          React.createElement(
            "div",
            { className: "container m-0 p-0 scroll-content" },
            React.createElement(
              "div",
              {
                className: "row option-account selected",
                id: "optionPerfil",
                onClick: this.handlePerfil
              },
              React.createElement(
                "div",
                { className: "col " },
                "Perfil"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionAdmins",
                onClick: this.handleAdministradores
              },
              React.createElement(
                "div",
                { className: "col " },
                "Administradores"
              )
            ),
            React.createElement(
              "div",
              { className: "row option-account", id: "optionVentas" },
              React.createElement(
                "div",
                { className: "col " },
                "Ventas"
              )
            ),
            React.createElement(
              "div",
              { className: "row option-account", id: "optionPedidosAtt" },
              React.createElement(
                "div",
                { className: "col " },
                "Pedidos atendidos"
              )
            ),
            React.createElement(
              "div",
              { className: "row option-account", id: "optionPedidosCola" },
              React.createElement(
                "div",
                { className: "col " },
                "Pedidos en cola"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionProductos",
                onClick: this.handleProductos
              },
              React.createElement(
                "div",
                { className: "col " },
                "Productos"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionProveedor",
                onClick: this.handleProveedores
              },
              React.createElement(
                "div",
                { className: "col " },
                "Proveedores"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionSucursal",
                onClick: this.handleSucursales
              },
              React.createElement(
                "div",
                { className: "col " },
                "Sucursales"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionMarcas",
                onClick: this.handleMarcas
              },
              React.createElement(
                "div",
                { className: "col " },
                "Marcas"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionCategorias",
                onClick: this.handleCategorias
              },
              React.createElement(
                "div",
                { className: "col " },
                "Categorias"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-12 col-md-9", id: "PanelAcc" },
          React.createElement(PerfilAdmin, { id: this.props.id })
        )
      );
    }
  }]);

  return CuentaAdmin;
}(React.Component);

var PerfilAdmin = function (_React$Component2) {
  _inherits(PerfilAdmin, _React$Component2);

  function PerfilAdmin(props) {
    _classCallCheck(this, PerfilAdmin);

    var _this2 = _possibleConstructorReturn(this, (PerfilAdmin.__proto__ || Object.getPrototypeOf(PerfilAdmin)).call(this, props));

    _this2.state = {
      filled: false,
      id: "",
      nombre: "",
      apps: "",
      user: "",
      tel: "",
      foto: "",
      mail: "",
      pass: "",
      repass: "",
      updated: false,
      err: false,
      errFile: false,
      errMsgFile: "",
      staticUser: ""
    };
    Perfil = _this2;
    _this2.componentDidMount = _this2.componentDidMount.bind(_this2);
    _this2.componentDidUpdate = _this2.componentDidUpdate.bind(_this2);
    _this2.handleModificarVals = _this2.handleModificarVals.bind(_this2);
    _this2.handleGuardar = _this2.handleGuardar.bind(_this2);
    return _this2;
  }

  _createClass(PerfilAdmin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $(".tipo-numero").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
      });
      $(".container").bootstrapMaterialDesign();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var ctx = this;
      $(".tipo-numero").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
      });
      $(".container").bootstrapMaterialDesign();
      $("#btnChangeF").click(function () {
        $("#foto").trigger("click");
      });
      $("#foto").change(function (e) {
        var data = new FormData(document.getElementById("FormPerfil"));
        data.append("tip", "admin");
        data.append("permit", "SI");
        data.append("id", Perfil.state.id);
        data.append("user", Perfil.state.user);
        jQuery.ajax({
          url: "phpModels/setPhoto.php",
          data: data,
          cache: false,
          contentType: false,
          processData: false,
          type: "POST",
          success: function success(data) {
            console.log(data);
            if (data.status == "InvalidFile") {
              ctx.setState({
                errFile: true,
                errMsgFile: "Archivo invalido"
              });
              return;
            }
            if (data.status == "ExcededSize") {
              ctx.setState({
                errFile: true,
                errMsgFile: "Tamaño soportado 2MB"
              });
              return;
            }
            if (data.status == "Error" || data.status == "NoI") {
              ctx.setState({
                errFile: true,
                errMsgFile: "Hubo un error intente de nuevo"
              });
              return;
            }
            if (data.status == "empty" || data.status == "OK") {
              location.reload();
            }
          }
        });
      });
    }
  }, {
    key: "handleModificarVals",
    value: function handleModificarVals(e) {
      console.log(e.target.name);

      switch (e.target.name) {
        case "name":
          this.setState({
            nombre: e.target.value
          });
          break;
        case "apps":
          this.setState({
            apps: e.target.value
          });
          break;
        case "user":
          this.setState({
            user: e.target.value
          });
          break;
        case "tel":
          console.log("Telefono");

          this.setState({
            tel: e.target.value
          });
          break;
        case "mail":
          this.setState({
            mail: e.target.value
          });
          break;
        case "pass":
          this.setState({
            pass: e.target.value
          });
          break;
        case "repass":
          this.setState({
            repass: e.target.value
          });
          break;
        default:
          break;
      }
    }
  }, {
    key: "handleGuardar",
    value: function handleGuardar() {
      var nombre = this.state.nombre;
      var apps = this.state.apps;
      var mail = this.state.mail;
      var pass = this.state.pass;
      var repass = this.state.repass;
      var user = this.state.user;
      var isError = false;
      var ctx = this;
      if (emptyt(nombre)) {
        this.setState({
          err: true
        });
        isError = true;
      }
      if (emptyt(apps)) {
        this.setState({
          err: true
        });
        isError = true;
      }
      if (emptyt(mail)) {
        this.setState({
          err: true
        });
        isError = true;
      }
      if (!emptyt(pass) || !emptyt(repass)) {
        if (!(pass === repass)) {
          isError = "true";
          toastr.error("Las contraseñas no coinciden");
        } else {
          if (pass.length < 8) {
            isError = "true";
            toastr.error("Minimo 8 caracteres para la contraseña");
          }
        }
      }

      if (!empty(user) && user != this.state.staticUser) {
        var _dat = {
          permit: "SI",
          user: user
        };
        $.ajax({
          type: "POST",
          url: "phpModels/veryfyUser.php",
          data: _dat,
          success: function success(response) {
            if (response.status === "Exist") {
              isError = "true";
              toastr.error("Usuario ya existe");
            }
            if (!isError) {
              var _dat2 = {
                permit: "SI",
                nombre: _ctx.state.nombre,
                ap: _ctx.state.apps.split(" ")[0],
                am: _ctx.state.apps.split(" ")[1],
                mail: _ctx.state.mail.toLowerCase(),
                pass: _ctx.state.pass,
                tel: $("#telef").val(),
                id: _ctx.props.id,
                user: _ctx.state.user.toLowerCase()
              };
              var _ctx = this;
              $.ajax({
                type: "POST",
                url: "phpModels/setAdmin.php",
                data: _dat2,
                success: function success(response) {
                  if (response.status === "success") {
                    toastr.options = {
                      positionClass: "toast-bottom-center"
                    };
                    toastr.success("Datos modificados");
                  } else {
                    toastr.error("Email existente");
                  }
                }
              });
            } else {
              toastr.options = {
                positionClass: "toast-bottom-center"
              };
              toastr.error("Error", "Nombre,Apellidos y Email necesarios");
            }
          }
        });
      } else {
        if (!isError) {
          var _dat3 = {
            permit: "SI",
            nombre: this.state.nombre,
            ap: this.state.apps.split(" ")[0],
            am: this.state.apps.split(" ")[1],
            mail: this.state.mail.toLowerCase(),
            pass: this.state.pass,
            tel: $("#telef").val(),
            id: this.props.id,
            user: this.state.user.toLowerCase()
          };
          var _ctx2 = this;
          $.ajax({
            type: "POST",
            url: "phpModels/setAdmin.php",
            data: _dat3,
            success: function success(response) {
              console.log(response);

              if (response.status === "success") {
                toastr.options = {
                  positionClass: "toast-bottom-center"
                };
                toastr.success("Datos modificados");
              } else {
                toastr.error("Email existente");
              }
            }
          });
        } else {
          toastr.options = {
            positionClass: "toast-bottom-center"
          };
          toastr.error("Error", "Nombre,Apellidos y Email necesarios");
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        dat = {
          permit: "SI",
          id: this.props.id
        };
        var ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/getProfileAdmin.php",
          data: dat,
          success: function success(response) {
            console.log(response);

            if (response.status == "OK") {
              ctx.setState({
                filled: true,
                id: response.id,
                nombre: response.nombre,
                apps: response.apellidop + " " + response.apellidom,
                user: response.user,
                tel: response.tel,
                foto: response.foto,
                mail: response.mail,
                ver: response.ver,
                mod: response.mod,
                staticUser: response.user
              });
            }
          }
        });
      }
      return React.createElement(
        "div",
        { id: "ContenedorPerfil", className: "container" },
        this.state.filled ? React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col-12 d-flex justify-content-center" },
              React.createElement("img", {
                src: this.state.foto,
                className: "img-perfil-user rounded-circle img-fluid",
                id: "fotos",
                alt: ""
              })
            ),
            React.createElement(
              "div",
              { className: "col-12 d-flex justify-content-center" },
              React.createElement(
                "strong",
                null,
                React.createElement(
                  "span",
                  { className: "text-center", id: "btnChangeF" },
                  "Cambiar foto"
                )
              )
            ),
            this.state.errFile && React.createElement(
              "div",
              { className: "col-12 d-flex justify-content-center" },
              React.createElement(
                "small",
                { className: "form-text text-danger" },
                this.state.errMsgFile
              )
            ),
            React.createElement(
              "div",
              { className: "col-12 text-center" },
              React.createElement(
                "h4",
                null,
                this.state.nombre,
                " ",
                this.state.apps
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "form",
              {
                className: "form-inline col",
                enctype: "multipart/form-data",
                id: "FormPerfil"
              },
              React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                  "div",
                  { className: "row d-none" },
                  React.createElement("input", { type: "file", className: "", name: "userF", id: "foto" })
                ),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "form-group col-12 col-md-6 " },
                    React.createElement(
                      "label",
                      { className: "bmd-label-floating" },
                      "Nombre*"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control  w-100",
                      value: this.state.nombre,
                      name: "name",
                      onChange: this.handleModificarVals
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "form-group col-12 col-md-6" },
                    React.createElement(
                      "label",
                      { className: "bmd-label-floating" },
                      "Apellidos*"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control  w-100",
                      value: this.state.apps,
                      name: "apps",
                      onChange: this.handleModificarVals
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "form-group col-12 col-md-6 " },
                    React.createElement(
                      "label",
                      { className: "bmd-label-floating" },
                      "Usuario"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control w-100",
                      value: this.state.user,
                      name: "user",
                      onChange: this.handleModificarVals
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "form-group col-12 col-md-6" },
                    React.createElement(
                      "label",
                      { className: "bmd-label-floating" },
                      "Email*"
                    ),
                    React.createElement("input", {
                      type: "email",
                      className: "form-control  w-100",
                      value: this.state.mail,
                      name: "mail",
                      onChange: this.handleModificarVals
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "form-group col-12 col-md-6 " },
                    React.createElement(
                      "label",
                      { className: "bmd-label-floating" },
                      "Contrase\xF1a"
                    ),
                    React.createElement("input", {
                      type: "password",
                      className: "form-control w-100",
                      value: this.state.pass,
                      name: "pass",
                      onChange: this.handleModificarVals
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "form-group col-12 col-md-6" },
                    React.createElement(
                      "label",
                      { className: "bmd-label-floating" },
                      "Nueva contrase\xF1a"
                    ),
                    React.createElement("input", {
                      type: "password",
                      className: "form-control  w-100",
                      value: this.state.repass,
                      name: "repass",
                      onChange: this.handleModificarVals
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "form-group col-12 col-md-6 " },
                    React.createElement(
                      "label",
                      { className: "bmd-label-floating tipo-numero" },
                      "Telefono"
                    ),
                    React.createElement("input", {
                      type: "text",
                      className: "form-control w-100 tipo-numero",
                      value: this.state.tel,
                      name: "tel",
                      id: "telef",
                      maxlength: "10",
                      onChange: this.handleModificarVals
                    })
                  )
                ),
                React.createElement(
                  "div",
                  { className: "row mt-4" },
                  React.createElement(
                    "span",
                    { className: "text-info" },
                    "Tienes el permiso de ",
                    this.state.ver == "true" && "ver",
                    this.state.mod == "true" && " y modificar",
                    " "
                  )
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row mt-3" },
            React.createElement(
              "div",
              { className: "col" },
              React.createElement(
                "span",
                { className: "form-group bmd-form-group" },
                React.createElement(
                  "button",
                  {
                    type: "submit",
                    className: "btn btn-warning ",
                    onClick: this.handleGuardar
                  },
                  "Guardar"
                )
              )
            )
          )
        ) : React.createElement(
          "h4",
          null,
          "Cargando..."
        )
      );
    }
  }]);

  return PerfilAdmin;
}(React.Component);

var Administradores = function (_React$Component3) {
  _inherits(Administradores, _React$Component3);

  function Administradores(props) {
    _classCallCheck(this, Administradores);

    return _possibleConstructorReturn(this, (Administradores.__proto__ || Object.getPrototypeOf(Administradores)).call(this, props));
  }

  _createClass(Administradores, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h4",
        null,
        "Categorias"
      );
    }
  }]);

  return Administradores;
}(React.Component);

var Ventas = function (_React$Component4) {
  _inherits(Ventas, _React$Component4);

  function Ventas(props) {
    _classCallCheck(this, Ventas);

    return _possibleConstructorReturn(this, (Ventas.__proto__ || Object.getPrototypeOf(Ventas)).call(this, props));
  }

  _createClass(Ventas, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h4",
        null,
        "Categorias"
      );
    }
  }]);

  return Ventas;
}(React.Component);

var PedidosAtendidos = function (_React$Component5) {
  _inherits(PedidosAtendidos, _React$Component5);

  function PedidosAtendidos(props) {
    _classCallCheck(this, PedidosAtendidos);

    return _possibleConstructorReturn(this, (PedidosAtendidos.__proto__ || Object.getPrototypeOf(PedidosAtendidos)).call(this, props));
  }

  _createClass(PedidosAtendidos, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h4",
        null,
        "Categorias"
      );
    }
  }]);

  return PedidosAtendidos;
}(React.Component);

var PedidosEnCola = function (_React$Component6) {
  _inherits(PedidosEnCola, _React$Component6);

  function PedidosEnCola(props) {
    _classCallCheck(this, PedidosEnCola);

    return _possibleConstructorReturn(this, (PedidosEnCola.__proto__ || Object.getPrototypeOf(PedidosEnCola)).call(this, props));
  }

  _createClass(PedidosEnCola, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h4",
        null,
        "Categorias"
      );
    }
  }]);

  return PedidosEnCola;
}(React.Component);

var ProductosActuales = function (_React$Component7) {
  _inherits(ProductosActuales, _React$Component7);

  function ProductosActuales(props) {
    _classCallCheck(this, ProductosActuales);

    return _possibleConstructorReturn(this, (ProductosActuales.__proto__ || Object.getPrototypeOf(ProductosActuales)).call(this, props));
  }

  _createClass(ProductosActuales, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h4",
        null,
        "Categorias"
      );
    }
  }]);

  return ProductosActuales;
}(React.Component);

var idProv = null;
var ProvComp = null;

var Proveedores = function (_React$Component8) {
  _inherits(Proveedores, _React$Component8);

  function Proveedores(props) {
    _classCallCheck(this, Proveedores);

    var _this8 = _possibleConstructorReturn(this, (Proveedores.__proto__ || Object.getPrototypeOf(Proveedores)).call(this, props));

    _this8.state = {
      filled: false,
      provers: []
    };
    ProvComp = _this8;
    _this8.handleGuardar = _this8.handleGuardar.bind(_this8);
    return _this8;
  }

  _createClass(Proveedores, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      AccionesModalPrP1();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccionesModalPrP2();
    }
  }, {
    key: "handleGuardar",
    value: function handleGuardar() {
      var ctx = this;
      var nombre = $("#name").val();
      var app = $("#appes").val().split(" ")[0];
      var apm = $("#appes").val().split(" ")[1];
      var org = $("#org").val();
      if (emptyt(nombre) || emptyt(app) || emptyt(apm) || emptyt(org)) {
        toastr.error("Llena todos los campos");
      } else if (idProv == 0) {
        var _dat4 = {
          permit: "SI",
          nom: nombre,
          ap: app,
          am: apm,
          og: org
        };
        $.ajax({
          type: "POST",
          url: "phpModels/newProveed.php",
          data: _dat4,
          success: function success(response) {
            if (response.status == "OK") {
              toastr.success("Guardado");
              ctx.setState({
                filled: false
              });
              $("#btnClose").trigger("click");
            }
          }
        });
      } else {
        var _dat5 = {
          permit: "SI",
          id: idProv,
          nom: nombre,
          ap: app,
          am: apm,
          og: org
        };
        $.ajax({
          type: "POST",
          url: "phpModels/setProveer.php",
          data: _dat5,
          success: function success(response) {
            if (response.status == "OK") {
              toastr.warning("Actualizado");
              ctx.setState({
                filled: false
              });
              $("#btnClose").trigger("click");
            }
          }
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var ctx = this;
        var _dat6 = {
          permit: "Si"
        };
        var provs = [];
        $.ajax({
          type: "POST",
          url: "phpModels/getProveedores",
          data: _dat6,
          success: function success(response) {
            console.log(response);

            var tam = Object.keys(response).length;
            console.log(tam);

            for (var i = 0; i < tam; i++) {
              var prov = {
                id: response[i]["id"],
                nombre: response[i]["nombre"],
                app: response[i]["app"],
                apm: response[i]["apm"],
                org: response[i]["org"]
              };
              provs.push(prov);
            }
            console.log(provs);

            ctx.setState({
              provers: provs,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            id: "btnAddDir",
            className: "rounded-circle border border d-flex justify-content-center align-items-center",
            type: "button",
            "data-toggle": "modal",
            "data-target": "#ModProv",
            "data-id": "0",
            onClick: this.handleNuevo
          },
          "A\xF1adir"
        ),
        React.createElement(
          "div",
          { className: "container pt-5 pr-5" },
          this.state.filled ? this.state.provers.map(function (prov) {
            return React.createElement(ProvEspecif, { datos: prov });
          }) : React.createElement(
            "h4",
            { className: "text-center" },
            "No hay proveedores"
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col" },
              React.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "ModProv",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "exampleModalLabel",
                  "aria-hidden": "true"
                },
                React.createElement(
                  "div",
                  { className: "modal-dialog", role: "document" },
                  React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                      "div",
                      { className: "modal-header" },
                      React.createElement("h5", { className: "modal-title", id: "title" }),
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        },
                        React.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xD7"
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body container p-0 m-0" },
                      React.createElement(
                        "div",
                        { className: "row  scroll-content" },
                        React.createElement(
                          "div",
                          { className: "col" },
                          React.createElement(
                            "form",
                            {
                              className: "container",
                              enctype: "multipart/form-data",
                              id: "dataP"
                            },
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Nombre"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "name"
                                })
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Apellidos"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "appes"
                                })
                              )
                            ),
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "form-group col-12 " },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Organizacion"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "org"
                                })
                              )
                            )
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-footer" },
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-danger",
                          id: "btnClose",
                          "data-dismiss": "modal"
                        },
                        "Cancelar"
                      ),
                      React.createElement(
                        "button",
                        {
                          id: "saveDir",
                          className: "btn btn-primary btn-raised",
                          onClick: this.handleGuardar
                        },
                        "Guardar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Proveedores;
}(React.Component);

var ProvEspecif = function (_React$Component9) {
  _inherits(ProvEspecif, _React$Component9);

  function ProvEspecif(props) {
    _classCallCheck(this, ProvEspecif);

    var _this9 = _possibleConstructorReturn(this, (ProvEspecif.__proto__ || Object.getPrototypeOf(ProvEspecif)).call(this, props));

    _this9.handleEliminar = _this9.handleEliminar.bind(_this9);
    return _this9;
  }

  _createClass(ProvEspecif, [{
    key: "handleEliminar",
    value: function handleEliminar() {
      var dat = {
        permit: "SI",
        id: this.props.datos.id
      };
      $.ajax({
        type: "POST",
        url: "phpModels/delProv.php",
        data: dat,
        success: function success(response) {
          console.log(response);
          if (response.status == "OK") {
            toastr.info("Proveedor eliminado");
            ProvComp.setState({
              filled: false
            });
          } else {
            toastr.error("Error", "Intenta de nuevo");
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row m-1 shadow-sm" },
        React.createElement(
          "div",
          { className: "col" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row container-dir rounded border p-3 m-2" },
              React.createElement(
                "div",
                { className: "col-12 romper-texto" },
                React.createElement(
                  "p",
                  null,
                  "Nombre: ",
                  this.props.datos.nombre,
                  React.createElement("br", null),
                  "Apellidos: ",
                  this.props.datos.app + " " + this.props.datos.apm,
                  React.createElement("br", null),
                  "Organizacion: ",
                  this.props.datos.org
                )
              ),
              React.createElement(
                "div",
                { className: "col-12" },
                React.createElement(
                  "div",
                  { className: "container" },
                  React.createElement(
                    "div",
                    { className: "row mt-2" },
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "a",
                        {
                          href: "#",
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#ModProv",
                          "data-id": this.props.datos.id
                        },
                        "Modificar"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "button",
                        {
                          className: "btn btn-danger",
                          onClick: this.handleEliminar
                        },
                        "Eliminar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ProvEspecif;
}(React.Component);

var idSucurs = null;
var SucurComp = null;

var Sucursales = function (_React$Component10) {
  _inherits(Sucursales, _React$Component10);

  function Sucursales(props) {
    _classCallCheck(this, Sucursales);

    var _this10 = _possibleConstructorReturn(this, (Sucursales.__proto__ || Object.getPrototypeOf(Sucursales)).call(this, props));

    _this10.state = {
      filled: false,
      provers: []
    };
    SucurComp = _this10;
    _this10.handleGuardar = _this10.handleGuardar.bind(_this10);
    return _this10;
  }

  _createClass(Sucursales, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      AccionesModalSrP1();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccionesModalSrP2();
    }
  }, {
    key: "handleGuardar",
    value: function handleGuardar() {
      var ctx = this;
      var nombre = $("#name").val();
      var calle = $("#calle").val();
      var estado = $("#estado").val();
      var muni = $("#muni").val();
      if (emptyt(nombre) || emptyt(calle) || emptyt(estado) || emptyt(muni)) {
        toastr.error("Llena todos los campos");
      } else if (idSucurs == 0) {
        var _dat7 = {
          permit: "SI",
          nom: nombre,
          call: calle,
          estad: estado,
          mun: muni
        };
        $.ajax({
          type: "POST",
          url: "phpModels/newSucur.php",
          data: _dat7,
          success: function success(response) {
            if (response.status == "OK") {
              toastr.success("Guardado");
              ctx.setState({
                filled: false
              });
              $("#btnClose").trigger("click");
            }
          }
        });
      } else {
        var _dat8 = {
          permit: "SI",
          id: idSucurs,
          nom: nombre,
          call: calle,
          estad: estado,
          mun: muni
        };
        $.ajax({
          type: "POST",
          url: "phpModels/setSucur.php",
          data: _dat8,
          success: function success(response) {
            if (response.status == "OK") {
              toastr.warning("Actualizado");
              ctx.setState({
                filled: false
              });
              $("#btnClose").trigger("click");
            }
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var ctx = this;
        var _dat9 = {
          permit: "Si"
        };
        var provs = [];
        $.ajax({
          type: "POST",
          url: "phpModels/getSucursales.php",
          data: _dat9,
          success: function success(response) {
            console.log(response);

            var tam = Object.keys(response).length;
            console.log(tam);

            for (var i = 0; i < tam; i++) {
              var prov = {
                id: response[i]["id"],
                nombre: response[i]["nombre"],
                app: response[i]["calle"],
                apm: response[i]["municipio"],
                org: response[i]["estado"]
              };
              provs.push(prov);
            }
            ctx.setState({
              provers: provs,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            id: "btnAddDir",
            className: "rounded-circle border border d-flex justify-content-center align-items-center",
            type: "button",
            "data-toggle": "modal",
            "data-target": "#ModSucur",
            "data-id": "0",
            onClick: this.handleNuevo
          },
          "A\xF1adir"
        ),
        React.createElement(
          "div",
          { className: "container pt-5 pr-5" },
          this.state.filled ? this.state.provers.map(function (prov) {
            return React.createElement(SucurEspecif, { datos: prov });
          }) : React.createElement(
            "h4",
            { className: "text-center" },
            "No hay sucursales"
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col" },
              React.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "ModSucur",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "exampleModalLabel",
                  "aria-hidden": "true"
                },
                React.createElement(
                  "div",
                  { className: "modal-dialog", role: "document" },
                  React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                      "div",
                      { className: "modal-header" },
                      React.createElement("h5", { className: "modal-title", id: "title" }),
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        },
                        React.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xD7"
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body container p-0 m-0" },
                      React.createElement(
                        "div",
                        { className: "row  scroll-content" },
                        React.createElement(
                          "div",
                          { className: "col" },
                          React.createElement(
                            "form",
                            {
                              className: "container",
                              enctype: "multipart/form-data",
                              id: "dataP"
                            },
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Nombre"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "name"
                                })
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Calle"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "calle"
                                })
                              )
                            ),
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Municipio"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "muni"
                                })
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Estado"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "estado"
                                })
                              )
                            )
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-footer" },
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-danger",
                          id: "btnClose",
                          "data-dismiss": "modal"
                        },
                        "Cancelar"
                      ),
                      React.createElement(
                        "button",
                        {
                          id: "saveDir",
                          className: "btn btn-primary btn-raised",
                          onClick: this.handleGuardar
                        },
                        "Guardar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Sucursales;
}(React.Component);

var SucurEspecif = function (_React$Component11) {
  _inherits(SucurEspecif, _React$Component11);

  function SucurEspecif(props) {
    _classCallCheck(this, SucurEspecif);

    var _this11 = _possibleConstructorReturn(this, (SucurEspecif.__proto__ || Object.getPrototypeOf(SucurEspecif)).call(this, props));

    _this11.handleEliminar = _this11.handleEliminar.bind(_this11);
    return _this11;
  }

  _createClass(SucurEspecif, [{
    key: "handleEliminar",
    value: function handleEliminar() {
      var dat = {
        permit: "SI",
        id: this.props.datos.id
      };
      $.ajax({
        type: "POST",
        url: "phpModels/delSucur.php",
        data: dat,
        success: function success(response) {
          console.log(response);
          if (response.status == "OK") {
            toastr.info("Sucursal eliminada");
            SucurComp.setState({
              filled: false
            });
          } else {
            toastr.error("Error", "Intenta de nuevo");
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row m-1 shadow-sm" },
        React.createElement(
          "div",
          { className: "col" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row container-dir rounded border p-3 m-2" },
              React.createElement(
                "div",
                { className: "col-12 romper-texto" },
                React.createElement(
                  "p",
                  null,
                  "Nombre: ",
                  this.props.datos.nombre,
                  React.createElement("br", null),
                  "Calle: ",
                  this.props.datos.app,
                  React.createElement("br", null),
                  "Municipio: ",
                  this.props.datos.apm,
                  React.createElement("br", null),
                  "Estado: ",
                  this.props.datos.org
                )
              ),
              React.createElement(
                "div",
                { className: "col-12" },
                React.createElement(
                  "div",
                  { className: "container" },
                  React.createElement(
                    "div",
                    { className: "row mt-2" },
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "a",
                        {
                          href: "#",
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#ModSucur",
                          "data-id": this.props.datos.id
                        },
                        "Modificar"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "button",
                        {
                          className: "btn btn-danger",
                          onClick: this.handleEliminar
                        },
                        "Eliminar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return SucurEspecif;
}(React.Component);

var idMar = null;
var MarcaComp = null;

var MarcasAdmin = function (_React$Component12) {
  _inherits(MarcasAdmin, _React$Component12);

  function MarcasAdmin(props) {
    _classCallCheck(this, MarcasAdmin);

    var _this12 = _possibleConstructorReturn(this, (MarcasAdmin.__proto__ || Object.getPrototypeOf(MarcasAdmin)).call(this, props));

    _this12.state = {
      filled: false,
      provers: []
    };
    MarcaComp = _this12;
    _this12.handleGuardar = _this12.handleGuardar.bind(_this12);
    return _this12;
  }

  _createClass(MarcasAdmin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      AccionesModalMrP1();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccionesModalMrP2();
    }
  }, {
    key: "handleGuardar",
    value: function handleGuardar() {
      var ctx = this;
      var nombre = $("#name").val();
      if (emptyt(nombre)) {
        toastr.error("Da un nombre ");
      } else if (idMar == 0) {
        var _dat10 = {
          permit: "SI",
          nom: nombre
        };
        $.ajax({
          type: "POST",
          url: "phpModels/newMarca.php",
          data: _dat10,
          success: function success(response) {
            if (response.status == "OK") {
              toastr.success("Guardado");
              ctx.setState({
                filled: false
              });
              $("#btnClose").trigger("click");
            }
          }
        });
      } else {
        var _dat11 = {
          permit: "SI",
          id: idMar,
          nom: nombre
        };
        $.ajax({
          type: "POST",
          url: "phpModels/setMarca.php",
          data: _dat11,
          success: function success(response) {
            if (response.status == "OK") {
              toastr.warning("Actualizado");
              ctx.setState({
                filled: false
              });
              $("#btnClose").trigger("click");
            }
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var ctx = this;
        var _dat12 = {
          permit: "Si"
        };
        var provs = [];
        $.ajax({
          type: "POST",
          url: "phpModels/getMarcas.php",
          data: _dat12,
          success: function success(response) {
            console.log(response);

            var tam = Object.keys(response).length;
            console.log(tam);

            for (var i = 0; i < tam; i++) {
              var prov = {
                id: response[i]["id"],
                nombre: response[i]["nombre"]
              };
              provs.push(prov);
            }
            ctx.setState({
              provers: provs,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            id: "btnAddDir",
            className: "rounded-circle border border d-flex justify-content-center align-items-center",
            type: "button",
            "data-toggle": "modal",
            "data-target": "#ModMarca",
            "data-id": "0",
            onClick: this.handleNuevo
          },
          "A\xF1adir"
        ),
        React.createElement(
          "div",
          { className: "container pt-5 pr-5" },
          this.state.filled ? this.state.provers.map(function (prov) {
            return React.createElement(MarcaEspecif, { datos: prov });
          }) : React.createElement(
            "h4",
            { className: "text-center" },
            "No hay marcas"
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col" },
              React.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "ModMarca",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "exampleModalLabel",
                  "aria-hidden": "true"
                },
                React.createElement(
                  "div",
                  { className: "modal-dialog", role: "document" },
                  React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                      "div",
                      { className: "modal-header" },
                      React.createElement("h5", { className: "modal-title", id: "title" }),
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        },
                        React.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xD7"
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body container p-0 m-0" },
                      React.createElement(
                        "div",
                        { className: "row  scroll-content" },
                        React.createElement(
                          "div",
                          { className: "col" },
                          React.createElement(
                            "form",
                            {
                              className: "container",
                              enctype: "multipart/form-data",
                              id: "dataP"
                            },
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "form-group col-12 " },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Nombre"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "name"
                                })
                              )
                            )
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-footer" },
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-danger",
                          id: "btnClose",
                          "data-dismiss": "modal"
                        },
                        "Cancelar"
                      ),
                      React.createElement(
                        "button",
                        {
                          id: "saveDir",
                          className: "btn btn-primary btn-raised",
                          onClick: this.handleGuardar
                        },
                        "Guardar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MarcasAdmin;
}(React.Component);

var MarcaEspecif = function (_React$Component13) {
  _inherits(MarcaEspecif, _React$Component13);

  function MarcaEspecif(props) {
    _classCallCheck(this, MarcaEspecif);

    var _this13 = _possibleConstructorReturn(this, (MarcaEspecif.__proto__ || Object.getPrototypeOf(MarcaEspecif)).call(this, props));

    _this13.handleEliminar = _this13.handleEliminar.bind(_this13);
    return _this13;
  }

  _createClass(MarcaEspecif, [{
    key: "handleEliminar",
    value: function handleEliminar() {
      var dat = {
        permit: "SI",
        id: this.props.datos.id
      };
      $.ajax({
        type: "POST",
        url: "phpModels/delMarca.php",
        data: dat,
        success: function success(response) {
          console.log(response);
          if (response.status == "OK") {
            toastr.info("MArca eliminada");
            MarcaComp.setState({
              filled: false
            });
          } else {
            toastr.error("Error", "Intenta de nuevo");
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row m-1 shadow-sm" },
        React.createElement(
          "div",
          { className: "col" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row container-dir rounded border p-3 m-2" },
              React.createElement(
                "div",
                { className: "col-12 romper-texto" },
                React.createElement(
                  "p",
                  null,
                  "Nombre: ",
                  this.props.datos.nombre,
                  React.createElement("br", null)
                )
              ),
              React.createElement(
                "div",
                { className: "col-12" },
                React.createElement(
                  "div",
                  { className: "container" },
                  React.createElement(
                    "div",
                    { className: "row mt-2" },
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "a",
                        {
                          href: "#",
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#ModMarca",
                          "data-id": this.props.datos.id
                        },
                        "Modificar"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "button",
                        {
                          className: "btn btn-danger",
                          onClick: this.handleEliminar
                        },
                        "Eliminar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MarcaEspecif;
}(React.Component);

var idCateg = null;
var CategComp = null;

var CategoriasAdmin = function (_React$Component14) {
  _inherits(CategoriasAdmin, _React$Component14);

  function CategoriasAdmin(props) {
    _classCallCheck(this, CategoriasAdmin);

    var _this14 = _possibleConstructorReturn(this, (CategoriasAdmin.__proto__ || Object.getPrototypeOf(CategoriasAdmin)).call(this, props));

    _this14.state = {
      filled: false,
      provers: []
    };
    CategComp = _this14;
    _this14.handleGuardar = _this14.handleGuardar.bind(_this14);
    return _this14;
  }

  _createClass(CategoriasAdmin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      AccionesModalCrP1();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccionesModalCrP2();
    }
  }, {
    key: "handleGuardar",
    value: function handleGuardar() {
      var ctx = this;
      var nombre = $("#name").val();
      if (emptyt(nombre)) {
        toastr.error("Da un nombre ");
      } else if (idCateg == 0) {
        var _dat13 = {
          permit: "SI",
          nom: nombre
        };
        $.ajax({
          type: "POST",
          url: "phpModels/newCate.php",
          data: _dat13,
          success: function success(response) {
            if (response.status == "OK") {
              toastr.success("Guardado");
              ctx.setState({
                filled: false
              });
              $("#btnClose").trigger("click");
            }
          }
        });
      } else {
        var _dat14 = {
          permit: "SI",
          id: idCateg,
          nom: nombre
        };
        $.ajax({
          type: "POST",
          url: "phpModels/setCate.php",
          data: _dat14,
          success: function success(response) {
            if (response.status == "OK") {
              toastr.warning("Actualizado");
              ctx.setState({
                filled: false
              });
              $("#btnClose").trigger("click");
            }
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var ctx = this;
        var _dat15 = {
          permit: "Si"
        };
        var provs = [];
        $.ajax({
          type: "POST",
          url: "phpModels/getCategorias.php",
          data: _dat15,
          success: function success(response) {
            console.log(response);

            var tam = Object.keys(response).length;
            console.log(tam);

            for (var i = 0; i < tam; i++) {
              var prov = {
                id: response[i]["id"],
                nombre: response[i]["nombre"]
              };
              provs.push(prov);
            }
            ctx.setState({
              provers: provs,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            id: "btnAddDir",
            className: "rounded-circle border border d-flex justify-content-center align-items-center",
            type: "button",
            "data-toggle": "modal",
            "data-target": "#ModCate",
            "data-id": "0",
            onClick: this.handleNuevo
          },
          "A\xF1adir"
        ),
        React.createElement(
          "div",
          { className: "container pt-5 pr-5" },
          this.state.filled ? this.state.provers.map(function (prov) {
            return React.createElement(CategoriaEspecif, { datos: prov });
          }) : React.createElement(
            "h4",
            { className: "text-center" },
            "No hay marcas"
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col" },
              React.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "ModCate",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "exampleModalLabel",
                  "aria-hidden": "true"
                },
                React.createElement(
                  "div",
                  { className: "modal-dialog", role: "document" },
                  React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                      "div",
                      { className: "modal-header" },
                      React.createElement("h5", { className: "modal-title", id: "title" }),
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        },
                        React.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xD7"
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body container p-0 m-0" },
                      React.createElement(
                        "div",
                        { className: "row  scroll-content" },
                        React.createElement(
                          "div",
                          { className: "col" },
                          React.createElement(
                            "form",
                            {
                              className: "container",
                              enctype: "multipart/form-data",
                              id: "dataP"
                            },
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "form-group col-12 " },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Nombre"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "name"
                                })
                              )
                            )
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-footer" },
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-danger",
                          id: "btnClose",
                          "data-dismiss": "modal"
                        },
                        "Cancelar"
                      ),
                      React.createElement(
                        "button",
                        {
                          id: "saveDir",
                          className: "btn btn-primary btn-raised",
                          onClick: this.handleGuardar
                        },
                        "Guardar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CategoriasAdmin;
}(React.Component);

var CategoriaEspecif = function (_React$Component15) {
  _inherits(CategoriaEspecif, _React$Component15);

  function CategoriaEspecif(props) {
    _classCallCheck(this, CategoriaEspecif);

    var _this15 = _possibleConstructorReturn(this, (CategoriaEspecif.__proto__ || Object.getPrototypeOf(CategoriaEspecif)).call(this, props));

    _this15.handleEliminar = _this15.handleEliminar.bind(_this15);
    return _this15;
  }

  _createClass(CategoriaEspecif, [{
    key: "handleEliminar",
    value: function handleEliminar() {
      var dat = {
        permit: "SI",
        id: this.props.datos.id
      };
      $.ajax({
        type: "POST",
        url: "phpModels/delCate.php",
        data: dat,
        success: function success(response) {
          console.log(response);
          if (response.status == "OK") {
            toastr.info("Categoria eliminada");
            CategComp.setState({
              filled: false
            });
          } else {
            toastr.error("Error", "Intenta de nuevo");
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row m-1 shadow-sm" },
        React.createElement(
          "div",
          { className: "col" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row container-dir rounded border p-3 m-2" },
              React.createElement(
                "div",
                { className: "col-12 romper-texto" },
                React.createElement(
                  "p",
                  null,
                  "Nombre: ",
                  this.props.datos.nombre,
                  React.createElement("br", null)
                )
              ),
              React.createElement(
                "div",
                { className: "col-12" },
                React.createElement(
                  "div",
                  { className: "container" },
                  React.createElement(
                    "div",
                    { className: "row mt-2" },
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "a",
                        {
                          href: "#",
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#ModCate",
                          "data-id": this.props.datos.id
                        },
                        "Modificar"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "button",
                        {
                          className: "btn btn-danger",
                          onClick: this.handleEliminar
                        },
                        "Eliminar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CategoriaEspecif;
}(React.Component);

function AccionesModalCrP1() {
  //AccionesDirs(this);
  $("#ModCate").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idCateg = button.data("id");
    var modal = $("#ModCate");
    $(".container").bootstrapMaterialDesign();
    if (idCateg == 0) {
      modal.find(".modal-title").text("Nueva categoria");

      modal.find("#name").val("");
    }
  });
}

function AccionesModalCrP2() {
  $("#ModCate").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idCateg = button.data("id");
    modal = $("#ModCate");
    $(".container").bootstrapMaterialDesign();
    if (idCateg > 0) {
      modal.find(".modal-title").text("Modificar marca");
      var _dat16 = {
        permit: "Si",
        id: idCateg
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getCate.php",
        data: _dat16,
        success: function success(response) {
          console.log(response);
          modal.find("#name").val(response[0].nombre);
          $("#name").focus();
        }
      });
    }
  });
}

function AccionesModalMrP1() {
  //AccionesDirs(this);
  $("#ModMarca").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idMar = button.data("id");
    var modal = $("#ModMarca");
    $(".container").bootstrapMaterialDesign();
    if (idMar == 0) {
      modal.find(".modal-title").text("Nueva marca");

      modal.find("#name").val("");
    }
  });
}

function AccionesModalMrP2() {
  $("#ModMarca").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idMar = button.data("id");
    modal = $("#ModMarca");
    $(".container").bootstrapMaterialDesign();
    if (idMar > 0) {
      modal.find(".modal-title").text("Modificar marca");
      var _dat17 = {
        permit: "Si",
        id: idMar
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getMarc.php",
        data: _dat17,
        success: function success(response) {
          console.log(response);
          modal.find("#name").val(response[0].nombre);
          $("#name").focus();
        }
      });
    }
  });
}

function AccionesModalSrP1() {
  //AccionesDirs(this);
  $("#ModSucur").on("show.bs.modal", function (event) {
    $(".tipo-precio").on("input", function () {
      this.value = this.value.replace(/[^0-9.]/g, "");
    });
    var button = $(event.relatedTarget); // Button that triggered the modal
    idSucurs = button.data("id");
    modal = $("#ModSucur");
    $(".container").bootstrapMaterialDesign();
    if (idSucurs == 0) {
      modal.find(".modal-title").text("Nueva sucursal");
      var modal = $("#ModSucur");
      modal.find("#name").val("");
      modal.find("#calle").val("");
      modal.find("#muni").val("");
      modal.find("#estado").val("");
    }
  });
}

function AccionesModalSrP2() {
  $("#ModSucur").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idSucurs = button.data("id");
    modal = $("#ModSucur");
    $(".container").bootstrapMaterialDesign();
    if (idSucurs > 0) {
      var _dat18 = {
        permit: "Si",
        id: idSucurs
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getSucur.php",
        data: _dat18,
        success: function success(response) {
          console.log(response);
          modal.find("#name").val(response[0].nombre);
          modal.find("#calle").val(response[0].calle);
          modal.find("#muni").val(response[0].muni);
          modal.find("#estado").val(response[0].estado);
          $("#name").focus();
        }
      });
    }
  });
}

function AccionesModalPrP1() {
  //AccionesDirs(this);
  $("#ModProv").on("show.bs.modal", function (event) {
    $(".tipo-precio").on("input", function () {
      this.value = this.value.replace(/[^0-9.]/g, "");
    });
    var button = $(event.relatedTarget); // Button that triggered the modal
    idProv = button.data("id");
    modal = $("#ModProv");
    $(".container").bootstrapMaterialDesign();
    if (idProv == 0) {
      modal.find(".modal-title").text("Nuevo proveedor");
      var modal = $("#ModProv");
      modal.find("#name").val("");
      modal.find("#appes").val("");
      modal.find("#org").val("");
    }
  });
}

function AccionesModalPrP2() {
  $("#ModProv").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idProv = button.data("id");
    modal = $("#ModProv");
    $(".container").bootstrapMaterialDesign();
    if (idProv > 0) {
      var _dat19 = {
        permit: "Si",
        id: idProv
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getProveer.php",
        data: _dat19,
        success: function success(response) {
          console.log(response);
          modal.find("#name").val(response[0].nombre);
          modal.find("#appes").val(response[0].app + " " + response[0].apm);
          modal.find("#org").val(response[0].org);
          $("#name").focus();
        }
      });
    }
  });
}