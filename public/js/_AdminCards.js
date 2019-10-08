var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

idAdmin = 0;
AdminContainerCtx = null;

var AdminContainer = function (_React$Component) {
  _inherits(AdminContainer, _React$Component);

  function AdminContainer(props) {
    _classCallCheck(this, AdminContainer);

    var _this = _possibleConstructorReturn(this, (AdminContainer.__proto__ || Object.getPrototypeOf(AdminContainer)).call(this, props));

    _this.state = {
      admins: null,
      filed: false,
      static: ""
    };
    AdminContainerCtx = _this;
    _this.handleGuardar = _this.handleGuardar.bind(_this);
    return _this;
  }

  _createClass(AdminContainer, [{
    key: "handleGuardar",
    value: function handleGuardar() {
      console.log(this.state);

      toastr.options = {
        positionClass: "toast-bottom-left"
      };
      var isError = false;
      var nombre = $("#nombre").val();
      var appes = $("#appes").val();
      var usuario = $("#usuario").val();
      var email = $("#email").val();
      var pass = $("#pass").val();
      var repass = $("#repass").val();
      var tel = $("#telef").val();
      var mod = $("#PerMod").prop("checked");
      var sucr = $("#SucurSel").val();
      console.log("Modi");
      console.log(mod);

      if (emptyt(nombre)) {
        isError = "true";
        toastr.error("Nombre necesario");
      }
      if (emptyt(appes)) {
        isError = "true";
        toastr.error("Apellidos necesarios");
      }
      if (emptyt(email)) {
        isError = "true";
        toastr.error("E-Mail necesario");
      }
      url = "";
      if (idAdmin == 0) {
        if (emptyt(pass) || emptyt(repass)) {
          isError = "true";
          toastr.error("Se necesita una contraseña");
        } else {
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
        url = "newAdmin.php";
      } else {
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
        url = "setModfAdmin.php";
      }
      if (!emptyt(usuario) && usuario != this.state.static) {
        var dat = {
          permit: "SI",
          user: usuario
        };
        $.ajax({
          type: "POST",
          url: "phpModels/veryfyUser.php",
          data: dat,
          success: function success(response) {
            if (response.status === "Exist") {
              isError = "true";
              toastr.error("Usuario ya existe");
            }
            if (!isError) {
              var _dat = {
                permit: "SI",
                nombre: nombre,
                ap: appes.split(" ")[0],
                am: appes.split(" ")[1],
                mail: email,
                pass: pass,
                tel: tel,
                id: idAdmin,
                user: usuario,
                mod: mod,
                tienda: sucr
              };
              console.log("Datos enviados");
              console.log(_dat);

              var ctx = this;
              $.ajax({
                type: "POST",
                url: "phpModels/" + url,
                data: _dat,
                success: function success(response) {
                  if (response.status === "success") {
                    toastr.success("Datos guardados");
                    $("btnClose").trigger("click");
                  }
                }
              });
            } else {
              toastr.warning("No se guardo nada");
            }
          }
        });
      } else {
        if (!isError) {
          var _dat2 = {
            permit: "SI",
            nombre: nombre,
            ap: appes.split(" ")[0],
            am: appes.split(" ")[1],
            mail: email,
            pass: pass,
            tel: tel,
            id: idAdmin,
            user: usuario,
            mod: mod,
            tienda: sucr
          };
          console.log("Datos enviados");
          console.log(_dat2);

          var ctx = this;
          $.ajax({
            type: "POST",
            url: "phpModels/" + url,
            data: _dat2,
            success: function success(response) {
              if (response.status === "success") {
                toastr.success("Datos guardados");
                $("btnClose").trigger("click");
              }
            }
          });
        } else {
          toastr.warning("No se guardo nada");
        }
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      //  VerificadorLogin();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccionModalAdmin();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccionModalAdmin();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.state.filled) {
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

            var tam = Object.keys(response).length;
            var admin = [];
            for (var index = 0; index < tam; index++) {
              admin.push(response[index]);
            }
            ctx.setState({
              admins: admin,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        { className: "col  bg-white shadow-box mt-3 mb-5" },
        isAdmin ? React.createElement(
          "div",
          { className: "d-flex justify-content-center algn-items-center flex-wrap" },
          this.state.filled ? this.state.admins.map(function (admin) {
            return React.createElement(AdminCard, {
              foto: admin.foto,
              name: admin.nombre,
              app: admin.apellidop,
              apm: admin.apellidom,
              mod: admin.mod,
              ver: admin.ver,
              id: admin.id,
              idA: _this2.props.id,
              idSuc: admin.tienda
            });
          }) : React.createElement(
            "h3",
            null,
            "No hay admins"
          ),
          React.createElement(
            "div",
            {
              "class": "card-user border rounded bg-light d-flex justify-content-center algn-items-center ",
              id: "newAdmin"
            },
            React.createElement(
              "div",
              { "class": "p-auto m-auto d-flex justify-content-center algn-items-center flex-wrap  " },
              React.createElement(
                "a",
                {
                  href: "#",
                  type: "button",
                  "data-toggle": "modal",
                  "data-target": "#ModAdmin",
                  "data-id": "0"
                },
                "Agregar nuevo"
              ),
              React.createElement("img", {
                "class": "img-log-plus ",
                src: "media/svg/contacto.svg",
                alt: ""
              })
            )
          ),
          React.createElement(
            "div",
            { id: "modal" },
            React.createElement(
              "div",
              {
                className: "modal fade",
                id: "ModAdmin",
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
                      null,
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
                                  name: "name",
                                  id: "nombre"
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
                                  name: "apps",
                                  id: "appes"
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
                                  name: "user",
                                  id: "usuario"
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
                                  name: "mail",
                                  id: "email"
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
                                  name: "pass",
                                  id: "pass",
                                  minlenght: "8"
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
                                  name: "repass",
                                  id: "repass",
                                  minlenght: "8"
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
                                  name: "tel",
                                  id: "telef",
                                  maxlength: "10"
                                })
                              )
                            ),
                            React.createElement("div", { className: "row", id: "Sucursal" }),
                            React.createElement(
                              "div",
                              { className: "row mt-4 d-flex justify-content-center" },
                              React.createElement(
                                "span",
                                { className: "text-warning " },
                                "Permisos"
                              ),
                              React.createElement(
                                "div",
                                { "class": "form-check col-12" },
                                React.createElement("input", {
                                  "class": "form-check-input",
                                  type: "checkbox",
                                  value: "",
                                  id: "PerVer",
                                  disabled: true
                                }),
                                React.createElement(
                                  "label",
                                  { "class": "form-check-label", "for": "PerVer" },
                                  "Ver"
                                )
                              ),
                              React.createElement(
                                "div",
                                { "class": "form-check col-12" },
                                React.createElement("input", {
                                  "class": "form-check-input",
                                  type: "checkbox",
                                  value: "",
                                  id: "PerMod"
                                }),
                                React.createElement(
                                  "label",
                                  { "class": "form-check-label", "for": "PerMod" },
                                  "Modificar"
                                )
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
        ) : React.createElement(
          "h3",
          { className: "m-5 p-5" },
          "No has iniciado como administrador"
        )
      );
    }
  }]);

  return AdminContainer;
}(React.Component);

var AdminCard = function (_React$Component2) {
  _inherits(AdminCard, _React$Component2);

  function AdminCard(props) {
    _classCallCheck(this, AdminCard);

    var _this3 = _possibleConstructorReturn(this, (AdminCard.__proto__ || Object.getPrototypeOf(AdminCard)).call(this, props));

    _this3.handleEliminar = _this3.handleEliminar.bind(_this3);
    return _this3;
  }

  _createClass(AdminCard, [{
    key: "handleEliminar",
    value: function handleEliminar() {
      var dat = {
        permit: "SI",
        id: this.props.id
      };
      $.ajax({
        type: "POST",
        url: "phpModels/deleteAdmin.php",
        data: dat,
        success: function success(response) {
          if (response.status === "success") {
            toastr.options = {
              positionClass: "toast-bottom-left"
            };
            toastr.success("Administrador eliminado");
            AdminContainerCtx.setState({
              filled: false
            });
          } else {
            toastr.options = {
              positionClass: "toast-bottom-left"
            };
            toastr.error("Hubo un error, intenta de nuevo");
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "card-user border rounded bg-light shadow-box" },
        React.createElement(
          "div",
          { className: "img-user d-flex justify-content-center algn-items-center h-50 p-3" },
          React.createElement("img", {
            src: this.props.foto,
            className: "rounded-circle  img-perfil-user",
            alt: ""
          })
        ),
        React.createElement(
          "div",
          { className: "details-user container h-50 " },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "h6",
              { className: "col-12 text-center" },
              this.props.name + " " + this.props.app + " " + this.props.apm,
              this.props.id == this.props.idA && "(Tu)"
            )
          ),
          React.createElement(
            "div",
            { className: "row mb-0 pb-0" },
            React.createElement(
              "p",
              { className: "col-12 mb-0 pb-0" },
              "Permisos:",
              React.createElement(
                "ul",
                null,
                this.props.ver == "true" ? React.createElement(
                  "li",
                  null,
                  "Ver"
                ) : "",
                this.props.mod == "true" ? React.createElement(
                  "li",
                  null,
                  "Modificar"
                ) : ""
              )
            )
          ),
          React.createElement(
            "div",
            { className: "row mt-0 pt-0" },
            React.createElement(
              "p",
              { className: "col-12 mt-0 pt-0" },
              "ID sucursal:",
              this.props.idSuc
            )
          ),
          React.createElement(
            "div",
            { className: "row" },
            this.props.id == this.props.idA ? React.createElement(
              "span",
              { className: "text-info" },
              "Si quieres modificar tus datos ve a tu perfil"
            ) : React.createElement(
              "div",
              null,
              React.createElement(
                "button",
                {
                  className: "btn btn-primary btn-raised col-12 col-md-6",
                  "data-toggle": "modal",
                  "data-target": "#ModAdmin",
                  "data-id": this.props.id
                },
                "Editar"
              ),
              React.createElement(
                "button",
                {
                  className: "btn btn-danger col-12 col-md-6",
                  onClick: this.handleEliminar
                },
                "Eliminar"
              )
            )
          )
        )
      );
    }
  }]);

  return AdminCard;
}(React.Component);

var OptionSucursales = function (_React$Component3) {
  _inherits(OptionSucursales, _React$Component3);

  function OptionSucursales(props) {
    _classCallCheck(this, OptionSucursales);

    var _this4 = _possibleConstructorReturn(this, (OptionSucursales.__proto__ || Object.getPrototypeOf(OptionSucursales)).call(this, props));

    _this4.state = {
      filled: false,
      sucurs: null
    };
    return _this4;
  }

  _createClass(OptionSucursales, [{
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var dat = {
          permit: "SI"
        };
        var ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/getSucursales.php",
          data: dat,
          success: function success(response) {
            console.log(response);

            if (response.status == "NoE") {
              return;
            }
            if (response.status == "Error") {
              return;
            }

            var tam = Object.keys(response).length;
            var sucur = [];
            for (var index = 0; index < tam; index++) {
              sucur.push(response[index]);
            }
            ctx.setState({
              sucurs: sucur,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        { className: "form-group col-12 col-md-6" },
        React.createElement(
          "label",
          { className: "", "for": "inlineFormCustomSelectPref" },
          "Sucursal"
        ),
        React.createElement(
          "select",
          { className: "custom-select ", id: "SucurSel" },
          this.state.filled ? this.state.sucurs.map(function (sucur) {
            return React.createElement(
              "option",
              { value: sucur.id, selected: true },
              sucur.nombre
            );
          }) : React.createElement(
            "option",
            { value: "0", selected: true },
            "Sin sucursales"
          )
        )
      );
    }
  }]);

  return OptionSucursales;
}(React.Component);

function AccionModalAdmin() {
  $("#ModAdmin").on("show.bs.modal", function (event) {
    $(".container").bootstrapMaterialDesign();
    $("#PerVer").prop("checked", "true");
    $(".tipo-numero").on("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
    var button = $(event.relatedTarget); // Button that triggered the modal
    idAdmin = button.data("id");
    modal = $("#ModAdmin");
    if (idAdmin == 0) {
      modal.find(".modal-title").text("Nuevo administrador");
      ReactDOM.render(React.createElement(OptionSucursales, null), document.getElementById("Sucursal"));
      modal.find("#nombre").val("");
      modal.find("#appes").val("");
      modal.find("#usuario").val("");
      modal.find("#email").val("");
      modal.find("#telef").val("");
    } else {
      ReactDOM.render("", document.getElementById("Sucursal"));
      modal.find(".modal-title").text("Modificar administrador");
      var dat = {
        permit: "SI",
        id: idAdmin
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getAdmin.php",
        data: dat,
        success: function success(response) {
          console.log(response);

          if (response.status) {
            if (response.status == "Error") {
              toastr.options = {
                positionClass: "toast-bottom-center"
              };
              toastr.error("Error", "Verifica tu conexión a internet");
              return;
            }
            if (response.status == "NoE") {
              toastr.options = {
                positionClass: "toast-bottom-center"
              };
              toastr.error("Error", "Usuario no existe");
              return;
            }
          } else {
            return;
          }
          var modal = $("#ModAdmin");
          modal.find("#nombre").val(response.nombre);
          modal.find("#appes").val(response.apellidop + " " + response.apellidom);
          modal.find("#usuario").val(response.user);
          modal.find("#email").val(response.mail);
          modal.find("#telef").val(response.tel);
          AdminContainerCtx.setState({
            static: response.user
          });
          console.log(AdminContainerCtx.state);

          modal.find("#nombre").focus();
          if (response.mod) {
            $("#PerMod").prop("checked", true);
          }
        }
      });
    }
  });
}