var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Componente a actualiza

var CuentaUser = function (_React$Component) {
  _inherits(CuentaUser, _React$Component);

  function CuentaUser(props) {
    _classCallCheck(this, CuentaUser);

    var _this = _possibleConstructorReturn(this, (CuentaUser.__proto__ || Object.getPrototypeOf(CuentaUser)).call(this, props));

    _this.handlePerfil = _this.handlePerfil.bind(_this);
    _this.handleDirecciones = _this.handleDirecciones.bind(_this);
    _this.handleCompras = _this.handleCompras.bind(_this);
    _this.handleGuardar = _this.handleGuardar.bind(_this);
    _this.state = {
      updated: false
    };
    return _this;
  }

  _createClass(CuentaUser, [{
    key: "handleGuardar",
    value: function handleGuardar() {}
  }, {
    key: "handlePerfil",
    value: function handlePerfil() {
      ReactDOM.render(React.createElement(PerfilUser, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionPerfil").addClass("selected");
    }
  }, {
    key: "handleDirecciones",
    value: function handleDirecciones() {
      ReactDOM.render(React.createElement(DireccionesUser, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionDirs").addClass("selected");
    }
  }, {
    key: "handleCompras",
    value: function handleCompras() {}
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
            { className: "container m-0 p-0" },
            React.createElement(
              "div",
              {
                className: "row option-account selected",
                id: "optionPerfil",
                type: "button",
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
                type: "button",
                id: "optionDirs",
                onClick: this.handleDirecciones
              },
              React.createElement(
                "div",
                { className: "col" },
                "Direcciones"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                type: "button",
                onClick: this.handleCompras,
                id: "optionCompras"
              },
              React.createElement(
                "div",
                { className: "col" },
                "Compras"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-12 col-md-9", id: "PanelAcc" },
          React.createElement(PerfilUser, { id: this.props.id })
        )
      );
    }
  }]);

  return CuentaUser;
}(React.Component);

var PerfilUser = function (_React$Component2) {
  _inherits(PerfilUser, _React$Component2);

  function PerfilUser(props) {
    _classCallCheck(this, PerfilUser);

    var _this2 = _possibleConstructorReturn(this, (PerfilUser.__proto__ || Object.getPrototypeOf(PerfilUser)).call(this, props));

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
      err: false
    };
    Perfil = _this2;
    _this2.componentDidMount = _this2.componentDidMount.bind(_this2);
    _this2.componentDidUpdate = _this2.componentDidUpdate.bind(_this2);
    _this2.handleModificarVals = _this2.handleModificarVals.bind(_this2);
    _this2.handleGuardar = _this2.handleGuardar.bind(_this2);
    return _this2;
  }

  _createClass(PerfilUser, [{
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
      $(".tipo-numero").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
      });
      $(".container").bootstrapMaterialDesign();
      $("#btnChangeF").click(function () {
        $("#foto").trigger("click");
      });

      $("#foto").on("change", function () {
        alert("ddd");
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
      console.log(this.state);
    }
  }, {
    key: "handleGuardar",
    value: function handleGuardar() {
      var nombre = this.state.nombre;
      var apps = this.state.apps;
      var mail = this.state.mail;

      var isError = false;

      if (emptyt(nombre)) {
        this.setState({
          err: true
        });
        isError = true;
      } else {
        isError: false;
      }
      if (emptyt(apps)) {
        this.setState({
          err: true
        });
        isError = true;
      } else {
        isError = false;
      }
      if (emptyt(mail)) {
        this.setState({
          err: true
        });
        isError = true;
      } else {
        isError = false;
      }

      if (!isError) {
        var _dat = {
          permit: "SI",
          nombre: this.state.nombre,
          ap: this.state.apps.split(" ")[0],
          am: this.state.apps.split(" ")[1],
          mail: this.state.mail,
          pass: this.state.pass,
          tel: $("#telef").val(),
          id: this.props.id,
          user: this.state.user
        };
        var ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/setUser.php",
          data: _dat,
          success: function success(response) {
            console.log(response);
          }
        });
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
          url: "phpModels/getProfileUser.php",
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
                mail: response.mail
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
                className: "img-perfil-user",
                id: "fotos",
                alt: ""
              })
            ),
            React.createElement(
              "div",
              { className: "col-12 d-flex justify-content-center" },
              React.createElement(
                "a",
                { href: "#", className: "text-center", id: "btnChangeF" },
                "Cambiar foto"
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
              ),
              this.state.err && React.createElement(
                "small",
                { className: "form-text text-danger" },
                "Nombre,Apellidos y Email necesarios"
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

  return PerfilUser;
}(React.Component);

var idDir = null;
var modal = null;

var DireccionesUser = function (_React$Component3) {
  _inherits(DireccionesUser, _React$Component3);

  function DireccionesUser(props) {
    _classCallCheck(this, DireccionesUser);

    var _this3 = _possibleConstructorReturn(this, (DireccionesUser.__proto__ || Object.getPrototypeOf(DireccionesUser)).call(this, props));

    _this3.state = {
      filled: false,
      data: null,
      errAps: false,
      errCalle: false,
      errCalles1: false,
      errCalles2: false,
      errCp: false,
      errEstad: false,
      errMun: false,
      errName: false,
      errRefer: false,
      errTel: false,
      errCol: false,
      errorSave: false,
      success: false,
      multicp: false,
      multicpdata: null,
      updated: false
    };
    console.log(props);
    _this3.componentDidUpdate = _this3.componentDidUpdate.bind(_this3);
    _this3.componentDidMount = _this3.componentDidMount.bind(_this3);
    _this3.handleBuscarCP = _this3.handleBuscarCP.bind(_this3);
    _this3.handleAbrirModalNuevo = _this3.handleAbrirModalNuevo.bind(_this3);
    _this3.handleGuardar = _this3.handleGuardar.bind(_this3);
    Direcciones = _this3;
    return _this3;
  }

  _createClass(DireccionesUser, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccionesModal();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccionesModal();
    }
  }, {
    key: "handleGuardar",
    value: function handleGuardar() {
      var ctx = this;
      if (idDir == 0) {
        var isThereError = false;
        var name = $("#name").val();
        var app = $("#apps").val().split(" ")[0];
        var apm = $("#apps").val().split(" ")[1];
        var cp = $("#CP").val();
        var estado = $("#estado").val();
        var municipio = $("#municipio").val();
        var callep = $("#callep").val();
        var numI = "";
        if (!emptyt($("#numI").val())) {
          numI = $("#numI").val();
        } else {
          numI = "S/N";
        }
        var numE = "";
        if (!emptyt($("#numE").val())) {
          numE = $("#numE").val();
        } else {
          numE = "S/N";
        }
        var calles1 = $("#calles1").val();
        var calles2 = $("#calles2").val();
        var telf = $("#tel").val();
        var referes = $("#refer").val();
        var col = $("#colonia").val();
        if (emptyt(name)) {
          isThereError = true;
          ctx.setState({
            errName: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(app) || emptyt(apm)) {
          isThereError = true;
          ctx.setState({
            errAps: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(cp)) {
          isThereError = true;
          ctx.setState({
            errCp: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(estado)) {
          isThereError = true;
          ctx.setState({
            errEstad: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(municipio)) {
          isThereError = true;
          ctx.setState({
            errMun: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(col)) {
          isThereError = true;
          ctx.setState({
            errCol: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(callep)) {
          isThereError = true;
          ctx.setState({
            errCalle: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(calles1)) {
          isThereError = true;
          ctx.setState({
            errCalles1: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(calles2)) {
          isThereError = true;
          ctx.setState({
            errCalles2: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(telf)) {
          isThereError = true;
          ctx.setState({
            errTel: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(referes)) {
          isThereError = true;
          ctx.setState({
            errRefer: true
          });
        } else {
          isThereError = false;
        }
        var ids = ctx.props.id;
        if (!isThereError) {
          var _dat2 = {
            permit: "SI",
            nombre: name,
            ap: app,
            am: apm,
            calle: callep,
            numi: numI,
            nume: numE,
            municipio: municipio,
            estado: estado,
            cp: cp,
            calles1: calles1,
            calles2: calles2,
            refer: referes,
            id: ids,
            tel: telf,
            colonia: col
          };
          console.log("Datoooooos");

          console.log(_dat2);
          $.ajax({
            type: "POST",
            url: "phpModels/newDir.php",
            data: _dat2,
            error: function error(response) {
              console.log("Errror");

              console.log(reponse);
            },
            success: function success(response) {
              console.log(response);
              if (response.status == "Error" || response.status == "empty" || response.status == "NoI") {
                ctx.setState({
                  err: true
                });
              }
              if (response.status == "success") {
                ctx.setState({
                  success: true
                });
                sleep(1000).then($("#btnClose").trigger("click"));
                if (Direcciones != null) {
                  var valor = Direcciones.state.updated;
                  Direcciones.setState({
                    updated: !valor
                  });
                }
              }
            }
          });
        }
      } else {
        var isThereError = false;
        var _name = $("#name").val();
        var _app = $("#apps").val().split(" ")[0];
        var _apm = $("#apps").val().split(" ")[1];
        var _cp = $("#CP").val();
        var _estado = $("#estado").val();
        var _municipio = $("#municipio").val();
        var _callep = $("#callep").val();
        var numI = "";
        if (!emptyt($("#numI").val())) {
          numI = $("#numI").val();
        } else {
          numI = "S/N";
        }
        var numE = "";
        if (!emptyt($("#numE").val())) {
          numE = $("#numE").val();
        } else {
          numE = "S/N";
        }
        var _calles = $("#calles1").val();
        var _calles2 = $("#calles2").val();
        var _telf = $("#tel").val();
        var _referes = $("#refer").val();
        var _col = $("#colonia").val();

        if (emptyt(_name)) {
          isThereError = true;
          ctx.setState({
            errName: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_app) || emptyt(_apm)) {
          isThereError = true;
          ctx.setState({
            errAps: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_cp)) {
          isThereError = true;
          ctx.setState({
            errCp: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_estado)) {
          isThereError = true;
          ctx.setState({
            errEstad: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_municipio)) {
          isThereError = true;
          ctx.setState({
            errMun: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_col)) {
          isThereError = true;
          ctx.setState({
            errCol: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_callep)) {
          isThereError = true;
          ctx.setState({
            errCalle: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_calles)) {
          isThereError = true;
          ctx.setState({
            errCalles1: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_calles2)) {
          isThereError = true;
          ctx.setState({
            errCalles2: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_telf)) {
          isThereError = true;
          ctx.setState({
            errTel: true
          });
        } else {
          isThereError = false;
        }
        if (emptyt(_referes)) {
          isThereError = true;
          ctx.setState({
            errRefer: true
          });
        } else {
          isThereError = false;
        }
        if (!isThereError) {
          var _dat3 = {
            permit: "SI",
            nombre: _name,
            ap: _app,
            am: _apm,
            calle: _callep,
            numi: numI,
            nume: numE,
            municipio: _municipio,
            estado: _estado,
            cp: _cp,
            calles1: _calles,
            calles2: _calles2,
            refer: _referes,
            id: idDir,
            tel: _telf,
            colonia: _col
          };
          console.log(_dat3);

          $.ajax({
            type: "POST",
            url: "phpModels/setDir.php",
            data: _dat3,
            success: function success(response) {
              console.log("res");
              console.log(response);
              if (response.status == "Error" || response.status == "empty" || response.status == "NoI") {
                ctx.setState({
                  err: true
                });
              }
              if (response.status = "success") {
                ctx.setState({
                  success: true
                });
                $("#btnClose").trigger("click");
              }
            }
          });
        }
      }
      if (Direcciones != null) {
        var valor = Direcciones.state.updated;

        console.log("Actualizar :" + valor);
        Direcciones.setState({
          updated: valor,
          filled: false
        });
      }
    }
  }, {
    key: "handleAbrirModalNuevo",
    value: function handleAbrirModalNuevo() {}
  }, {
    key: "handleBuscarCP",
    value: function handleBuscarCP() {
      var codigo = $("#CP").val();
      if (emptyt(codigo)) {
        this.setState({
          errCp: true
        });
      } else {
        if (codigo.length > 5) {
          this.setState({
            errCp: true
          });
        } else {
          if (codigo.length < 5) {
            var tam = codigo.length;
            var faltan = 5 - tam;
            for (var index = 0; index < faltan; index++) {
              codigo = "0" + codigo;
            }
            $("#CP").val(codigo);
            console.log("Nuevo CP " + codigo + " faltaban:" + faltan);
          }
          $.ajax({
            type: "GET",
            url: "https://api-codigos-postales.herokuapp.com/v2/codigo_postal/" + codigo,
            data: "",
            success: function success(response) {
              if (response["municipio"] != "") {
                $("#municipio").val(response["municipio"]);
                $("#estado").val(response["estado"]);
                $("#colonia").val(response["colonias"][0]);
                $("#CP").focus();
              }
            }
          });
          this.setState({
            errCp: false
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var _dat4 = {
          permit: "SI",
          id: this.props.id
        };
        var dirs = [];
        var ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/getDirs.php",
          data: _dat4,
          success: function success(response) {
            if (response.status == "Error") {
              return;
            }
            if (response.status == "NoE") {
              return;
            }
            if (response.status == "NoH") {
              return;
            }

            var tam = Object.keys(response).length;

            for (var index = 0; index < tam; index++) {
              dirs.push(response[index]);
            }

            ctx.setState({
              filled: true,
              data: dirs
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
            "data-target": "#ModDir",
            "data-id": "0",
            onClick: this.handleAbrirModalNuevo
          },
          "A\xF1adir"
        ),
        React.createElement(
          "div",
          { className: "container pt-5 pr-5" },
          this.state.filled ? this.state.data.map(function (prod) {
            return React.createElement(Dir, { datos: prod });
          }) : React.createElement(
            "h4",
            { className: "text-center" },
            "No tienes direcciones"
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
                  id: "ModDir",
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
                            { className: "container" },
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
                                }),
                                this.state.errName && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
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
                                  id: "apps"
                                }),
                                this.state.errAps && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
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
                                  "Codigo postal"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100 tipo-numero",
                                  id: "CP"
                                }),
                                this.state.errCp && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Error"
                                )
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6 d-flex align-items-end" },
                                React.createElement(
                                  "a",
                                  {
                                    className: "btn btn-primary btn-raised p-md-1 m-md-0",
                                    id: "btnBuscarCP",
                                    onClick: this.handleBuscarCP
                                  },
                                  "Buscar"
                                ),
                                React.createElement(
                                  "a",
                                  {
                                    className: "btn btn-info p-md-1 m-md-0",
                                    href: "https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx",
                                    target: "_blank"
                                  },
                                  "Consultar"
                                )
                              )
                            ),
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement("div", { className: "col-12" })
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
                                  "Estado"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "estado"
                                }),
                                this.state.errEstad && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
                              ),
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
                                  id: "municipio"
                                }),
                                this.state.errMun && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
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
                                  "Colonia"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100 ",
                                  id: "colonia"
                                }),
                                this.state.errTel && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
                              )
                            ),
                            React.createElement(
                              "div",
                              { className: "row mb-2" },
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
                                  id: "callep"
                                }),
                                this.state.errCalle && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-6 col-md-3" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Num. Interior"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100 ",
                                  id: "numI"
                                })
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-6 col-md-3" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Num. Exterior"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100 ",
                                  id: "numE"
                                })
                              )
                            ),
                            React.createElement(
                              "div",
                              { className: "row " },
                              React.createElement(
                                "div",
                                { className: "col-12 mb-0" },
                                React.createElement(
                                  "h6",
                                  null,
                                  "Entre calles"
                                )
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6 mt-0" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Calle 1"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "calles1"
                                }),
                                this.state.errCalles1 && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Calle 2"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "calles2"
                                }),
                                this.state.errCalles2 && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
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
                                  "Telefono"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100 tipo-numero",
                                  id: "tel"
                                }),
                                this.state.errTel && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
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
                                  "Referencias"
                                ),
                                React.createElement("textarea", {
                                  className: "form-control",
                                  name: "",
                                  id: "refer",
                                  cols: "30",
                                  rows: "3"
                                }),
                                this.state.errRefer && React.createElement(
                                  "small",
                                  { className: "form-text text-danger" },
                                  "Campo necesario"
                                )
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
                      ),
                      this.state.errorSave && React.createElement(
                        "small",
                        { className: "form-text text-danger" },
                        "Hubo un error intenta de nuevo"
                      ),
                      this.state.success && React.createElement(
                        "small",
                        { className: "form-text text-success" },
                        "Datos guardados"
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

  return DireccionesUser;
}(React.Component);

var Dir = function (_React$Component4) {
  _inherits(Dir, _React$Component4);

  function Dir(props) {
    _classCallCheck(this, Dir);

    var _this4 = _possibleConstructorReturn(this, (Dir.__proto__ || Object.getPrototypeOf(Dir)).call(this, props));

    _this4.state = {
      err: false,
      success: false
    };
    return _this4;
  }

  _createClass(Dir, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row m-1" },
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
                { className: "col-12" },
                React.createElement(
                  "h6",
                  null,
                  this.props.datos.nombre
                )
              ),
              React.createElement(
                "div",
                { className: "col-12 romper-texto" },
                React.createElement(
                  "address",
                  null,
                  this.props.datos.calle,
                  React.createElement("br", null),
                  this.props.datos.numeroI + " " + this.props.datos.numeroE,
                  React.createElement("br", null),
                  this.props.datos.codigo,
                  React.createElement("br", null),
                  this.props.datos.municipio,
                  ",",
                  this.props.datos.estado,
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
                          "data-target": "#ModDir",
                          "data-id": this.props.datos.id
                        },
                        "Modificar"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "a",
                        { href: "#" },
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

  return Dir;
}(React.Component);

var Account = function (_React$Component5) {
  _inherits(Account, _React$Component5);

  function Account(props) {
    _classCallCheck(this, Account);

    var _this5 = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));

    _this5.state = {
      updated: false
    };
    Cuentas = _this5;
    return _this5;
  }

  _createClass(Account, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        isLogged ? isAdmin ? "" : React.createElement(CuentaUser, { id: idUsuario }) : React.createElement(
          "h4",
          { className: "text-center" },
          "Necesitas iniciar sesi\xF3n"
        )
      );
    }
  }]);

  return Account;
}(React.Component);

function validarFormulario() {}

function AccionesModal() {
  //AccionesDirs(this);

  $("#ModDir").on("show.bs.modal", function (event) {
    $(".container").bootstrapMaterialDesign();
    $(".tipo-numero").on("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
    var button = $(event.relatedTarget); // Button that triggered the modal
    idDir = button.data("id");
    modal = $("#ModDir");
    if (idDir == 0) {
      modal.find(".modal-title").text("Nueva direccion");
    } else {
      modal.find(".modal-title").text("Modificar direccion");
      var _dat5 = {
        permit: "SI",
        id: idDir
      };
      console.log("Primer envio");

      $.ajax({
        type: "POST",
        url: "phpModels/getDirEspecifico.php",
        data: _dat5,
        success: function success(response) {
          console.log("DirEs");
          console.log(response);
          if (response.status) {
            if (response.status == "Error") {
              return;
            }
            if (response.status == "NoE") {
              return;
            }
            if (response.status == "NoH") {
              return;
            }
          }
          var modal = $("#ModDir");
          modal.find(".modal-title").text("Modificar direccion");
          modal.find("#name").val(response[0]["nombre"]);
          modal.find("#apps").val(response[0]["app"] + " " + response[0]["apm"]);
          modal.find("#CP").val(response[0]["codigo"]);
          modal.find("#estado").val(response[0]["estado"]);
          modal.find("#municipio").val(response[0]["municipio"]);
          modal.find("#callep").val(response[0]["calle"]);
          modal.find("#numI").val(response[0]["numeroI"]);
          modal.find("#numE").val(response[0]["numeroE"]);
          modal.find("#calles1").val(response[0]["entcalle1"]);
          modal.find("#calles2").val(response[0]["entcalle2"]);
          modal.find("#tel").val(response[0]["tel"]);
          modal.find("#refer").val(response[0]["refer"]);
          modal.find("#colonia").val(response[0]["colonia"]);
          $("#name").focus();
        }
      });
    }
  });
}