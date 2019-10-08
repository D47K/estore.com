var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Componente boton para iniciar sesion
 */

var Authorizador = function (_React$Component) {
  _inherits(Authorizador, _React$Component);

  function Authorizador(props) {
    _classCallCheck(this, Authorizador);

    var _this = _possibleConstructorReturn(this, (Authorizador.__proto__ || Object.getPrototypeOf(Authorizador)).call(this, props));

    _this.handleIni = _this.handleIni.bind(_this);
    return _this;
  }

  _createClass(Authorizador, [{
    key: "handleIni",
    value: function handleIni() {
      ReactDOM.render(React.createElement(LogForm, { login: "true" }), document.getElementById("loginCtn"));
      $("#navbarSupportedContent").removeClass("show");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "a",
        { onClick: this.handleIni, id: "btnIni" },
        React.createElement(
          "strong",
          null,
          "Iniciar sesi\xF3n"
        )
      );
    }
  }]);

  return Authorizador;
}(React.Component);
/**
 * Fin componente boton para iniciar sesion
 */

/*Componente formularios Login/Signup */


var LogForm = function (_React$Component2) {
  _inherits(LogForm, _React$Component2);

  function LogForm(props) {
    _classCallCheck(this, LogForm);

    var _this2 = _possibleConstructorReturn(this, (LogForm.__proto__ || Object.getPrototypeOf(LogForm)).call(this, props));

    _this2.state = {
      errL: false,
      errLM: "",
      errN: false,
      errNM: "",
      errAP: false,
      errAPM: "",
      errMail: false,
      errMailM: "",
      errPass: false,
      errPassM: "",
      loading: false
    };
    _this2.componentDidMount = _this2.componentDidMount.bind(_this2);
    _this2.handleCancel = _this2.handleCancel.bind(_this2);
    _this2.handleLogin = _this2.handleLogin.bind(_this2);
    _this2.handleRegister = _this2.handleRegister.bind(_this2);
    _this2.componentWillUnmount = _this2.componentWillUnmount.bind(_this2);
    return _this2;
  }

  _createClass(LogForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Montado");
      $("#User").focus();
      $("#DvSignIn").click(function (e) {
        ReactDOM.render(React.createElement(LogForm, { login: "true" }), document.getElementById("loginCtn"));
      });
      $("#DvSignUp").click(function (e) {
        ReactDOM.render(React.createElement(LogForm, { login: "false" }), document.getElementById("loginCtn"));
      });
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      $("#loginCtn").addClass("animated zoomOut");
      // Usage!
      sleep(500).then(function () {
        ReactDOM.render("", document.getElementById("loginCtn"));
      });
    }
  }, {
    key: "handleLogin",
    value: function handleLogin() {
      console.log($("#User").val());
      console.log($("#Password").val());
      if (emptyt($("#User").val()) || emptyt($("#Password").val())) {
        this.setState({
          errL: true,
          errLM: "Inserta Usuario y Contraseña"
        });
      } else {
        var dat = {
          permit: "si",
          user: $("#User").val().trim().toLowerCase(),
          pass: $("#Password").val().trim()
        };
        console.log(dat);
        var superClase = this;
        $.ajax({
          type: "POST",
          url: "phpModels/login.php",
          data: dat,
          beforeSend: function beforeSend() {
            superClase.setState({
              loading: true
            });
          },
          success: function success(response) {
            console.log(response.status);
            if (response.status == "NoE") {
              superClase.setState({
                loading: false
              });
              superClase.setState({
                errL: true,
                errLM: "Datos no validos"
              });
            }
            if (response.status == "NoES") {
              superClase.setState({
                loading: false
              });
              superClase.setState({
                errL: true,
                errLM: "Contraseña incorrecta"
              });
            }
            if (response.status == "Error") {
              superClase.setState({
                loading: false
              });
              superClase.setState({
                errL: true,
                errLM: "Hubo un error"
              });
            }
            if (response.status == "OK") {
              if (response.rol == "administrador") {
                $("#loginCtn").addClass("animated zoomOut");
                // Limpiamos el contenedor de login despues de que la animacion termina
                //La duracion es de un segundo
                sleep(1000).then(function () {
                  ReactDOM.render("", document.getElementById("loginCtn"));
                });
                ReactDOM.render(React.createElement(Admin, {
                  nombre: response.nombre,
                  id: response.id,
                  foto: response.foto
                }), document.getElementById("dropUser"));
                ReactDOM.render(React.createElement(UserBtn, { auth: "true", url: response.foto }), document.getElementById("btnNav"));
                isAdmin = true;
                idUsuario = response.id;
                isLogged = true;
                location.reload();
              } else {
                $("#loginCtn").addClass("animated zoomOut");
                // Limpiamos el contenedor de login despues de que la animacion termina
                //La duracion es de un segundo
                sleep(1000).then(function () {
                  ReactDOM.render("", document.getElementById("loginCtn"));
                });
                ReactDOM.render(React.createElement(User, { nombre: response.nombre, id: this.id }), document.getElementById("dropUser"));
                ReactDOM.render(React.createElement(UserBtn, { auth: "true", url: response.foto }), document.getElementById("btnNav"));
                isAdmin = false;
                isLogged = true;
                idUsuario = response.id;
                location.reload();
              }
            }
          }
        });
      }
    }
  }, {
    key: "handleRegister",
    value: function handleRegister() {
      if (emptyt($("#Name").val())) {
        this.setState({
          errN: true,
          errNM: "Inserta tu nombre"
        });
      } else {
        this.setState({
          errN: false,
          errNM: ""
        });
      }
      if (emptyt($("#Apells").val())) {
        this.setState({
          errAP: true,
          errAPM: "Inserta tus apellidos"
        });
      } else {
        this.setState({
          errAP: false,
          errAPM: ""
        });
      }
      if (emptyt($("#Mail").val())) {
        this.setState({
          errMail: true,
          errMailM: "Se necesita un correo electronico"
        });
      } else {
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test($("#Mail").val())) {
          this.setState({
            errMail: true,
            errMailM: "Correo no válido"
          });
        } else {
          this.setState({
            errMail: false,
            errMailM: ""
          });
        }
      }

      if (emptyt($("#PassReg").val())) {
        this.setState({
          errPass: true,
          errPassM: "Necesitamos una contraseña"
        });
      } else {
        var espacios = false;
        var cont = 0;
        while (!espacios && cont < $("#PassReg").val().length) {
          if ($("#PassReg").val().charAt(cont) == " ") espacios = true;
          cont++;
        }
        if (espacios) {
          this.setState({
            errPass: true,
            errPassM: "Sin espacios en blanco"
          });
        } else {
          if ($("#PassReg").val().length < 8) {
            this.setState({
              errPass: true,
              errPassM: "Minimo 8 carácteres"
            });
          } else {
            this.setState({
              errPass: false,
              errPassM: ""
            });
            var apes = $("#Apells").val().split(" ");
            var dat = {
              permit: "SI",
              nombre: $("#Name").val(),
              ap: apes[0],
              am: apes[1],
              mail: $("#Mail").val().toLowerCase(),
              pass: $("#PassReg").val()
            };
            $.ajax({
              type: "POST",
              url: "phpModels/newUser.php",
              data: dat,
              success: function success(response) {
                console.log(response);
                if (response.status === "OK") {
                  $("#loginCtn").addClass("animated zoomOut");
                  // Limpiamos el contenedor de login despues de que la animacion termina
                  //La duracion es de un segundo
                  sleep(1000).then(function () {
                    ReactDOM.render("", document.getElementById("loginCtn"));
                  });
                  ReactDOM.render(React.createElement(User, { nombre: response.nombre, id: response.id }), document.getElementById("dropUser"));
                  ReactDOM.render(React.createElement(UserBtn, { auth: "true", url: response.foto }), document.getElementById("btnNav"));
                  isAdmin = false;
                  isLogged = true;
                  idUsuario = response.id;
                  location.reload();
                  CarritoComp.setState({
                    filled: false
                  });
                }
              }
            });
          }
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      $("#loginCtn").removeClass("animated zoomOut");
    }
  }, {
    key: "render",
    value: function render() {
      console.log("Renderizando");

      return React.createElement(
        "div",
        { className: "container  rounded d-flex justify-content-center align-items-center  mt-3 animated  fadeIn" },
        React.createElement(
          "div",
          { className: "form  m-1 rounded" },
          React.createElement(
            "div",
            { className: "container border border-dark rounded" },
            React.createElement(
              "div",
              { className: "row " },
              React.createElement(
                "div",
                {
                  className: this.props.login == "true" ? "col-6 text-center opcionLogin activo" : "col-6 text-center opcionLogin desactivo",
                  id: "DvSignIn"
                },
                React.createElement(
                  "h5",
                  null,
                  "Iniciar sesi\xF3n"
                )
              ),
              React.createElement(
                "div",
                {
                  className: this.props.login == "true" ? "col-6 text-center opcionLogin desactivo" : "col-6 text-center opcionLogin activo",
                  id: "DvSignUp"
                },
                React.createElement(
                  "h5",
                  null,
                  "Registrarse"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "row  mb-2", id: "formLogCtn" },
              this.props.login == "true" ? React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "col-12 mt-2 mb-2" },
                    React.createElement(
                      "h3",
                      { className: "text-center " },
                      "Ingresa tus datos"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group col-12  mb-3" },
                    React.createElement(
                      "div",
                      { className: "input-group-prepend" },
                      React.createElement(
                        "span",
                        { className: "input-group-text", id: "my-addon" },
                        React.createElement("img", {
                          src: "media/svg/user.svg",
                          className: "imgSF",
                          alt: ""
                        })
                      )
                    ),
                    React.createElement("input", {
                      className: "form-control",
                      type: "text",
                      id: "User",
                      placeholder: "Usuario o Email",
                      "aria-label": "Recipient's ",
                      "aria-describedby": "my-addon"
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group col-12 " },
                    React.createElement(
                      "div",
                      { className: "input-group-prepend" },
                      React.createElement(
                        "span",
                        { className: "input-group-text", id: "my-addon" },
                        React.createElement("img", {
                          src: "media/svg/candado.svg",
                          className: "imgSF",
                          alt: ""
                        })
                      )
                    ),
                    React.createElement("input", {
                      className: "form-control",
                      type: "password",
                      id: "Password",
                      placeholder: "Contrase\xF1a",
                      "aria-label": "Recipient's ",
                      "aria-describedby": "my-addon"
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "col-12 errForm mb-3" },
                    this.state.errL && React.createElement(
                      "span",
                      null,
                      React.createElement(
                        "strong",
                        null,
                        this.state.errLM
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-6 " },
                    React.createElement(
                      Grid,
                      {
                        container: true,
                        direction: "row",
                        justify: "center",
                        alignItems: "center"
                      },
                      this.state.loading ? React.createElement(
                        Button,
                        {
                          variant: "contained",
                          color: "primary",
                          className: "d-flex justify-content-center align-items-center",
                          disabled: true
                        },
                        React.createElement(
                          "strong",
                          null,
                          React.createElement(
                            "span",
                            { className: "text-dark" },
                            "Cargando..."
                          )
                        ),
                        React.createElement("div", {
                          className: "spinner-grow text-primary ",
                          role: "status"
                        })
                      ) : React.createElement(
                        Button,
                        {
                          variant: "contained",
                          color: "primary",
                          className: "d-flex justify-content-center align-items-center",
                          onClick: this.handleLogin
                        },
                        "Iniciar"
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-6 " },
                    React.createElement(
                      Grid,
                      {
                        container: true,
                        direction: "row",
                        justify: "center",
                        alignItems: "center"
                      },
                      this.state.loading ? React.createElement(
                        ButtonDanger,
                        { variant: "contained", disabled: true },
                        "Cancelar"
                      ) : React.createElement(
                        ButtonDanger,
                        {
                          variant: "contained",
                          onClick: this.handleCancel
                        },
                        "Cancelar"
                      )
                    )
                  )
                )
              ) : React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                  "div",
                  { className: "row" },
                  React.createElement(
                    "div",
                    { className: "col-12" },
                    React.createElement(
                      "h3",
                      { className: "text-center " },
                      "Crea tu cuenta"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-12 d-flex justify-content-center" },
                    React.createElement("img", {
                      src: "media/svg/laptop.svg",
                      className: "imgTF",
                      alt: ""
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group col-12 " },
                    React.createElement(
                      "div",
                      { className: "input-group-prepend spacePreF" },
                      React.createElement(
                        "span",
                        {
                          className: "input-group-text bg-danger",
                          id: "my-addon"
                        },
                        " "
                      )
                    ),
                    React.createElement("input", {
                      className: "form-control",
                      type: "text",
                      id: "Name",
                      placeholder: "Nombre",
                      "aria-label": "Recipient's ",
                      "aria-describedby": "my-addon"
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "col-12 errForm mb-3" },
                    this.state.errN && React.createElement(
                      "span",
                      null,
                      React.createElement(
                        "strong",
                        null,
                        this.state.errNM
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group col-12  " },
                    React.createElement(
                      "div",
                      { className: "input-group-prepend spacePreF" },
                      React.createElement(
                        "span",
                        {
                          className: "input-group-text bg-danger",
                          id: "my-addon"
                        },
                        " "
                      )
                    ),
                    React.createElement("input", {
                      className: "form-control",
                      type: "text",
                      id: "Apells",
                      placeholder: "Apellidos",
                      "aria-label": "Recipient's ",
                      "aria-describedby": "my-addon"
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "col-12 errForm mb-3" },
                    this.state.errAP && React.createElement(
                      "span",
                      null,
                      React.createElement(
                        "strong",
                        null,
                        this.state.errAPM
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group col-12  " },
                    React.createElement(
                      "div",
                      { className: "input-group-prepend spacePreF" },
                      React.createElement(
                        "span",
                        {
                          className: "input-group-text bg-danger",
                          id: "my-addon"
                        },
                        " "
                      )
                    ),
                    React.createElement("input", {
                      className: "form-control",
                      type: "email",
                      id: "Mail",
                      placeholder: "Email",
                      "aria-label": "Recipient's ",
                      "aria-describedby": "my-addon"
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "col-12 errForm mb-3" },
                    this.state.errMail && React.createElement(
                      "span",
                      null,
                      React.createElement(
                        "strong",
                        null,
                        this.state.errMailM
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "input-group col-12 " },
                    React.createElement(
                      "div",
                      { className: "input-group-prepend spacePreF" },
                      React.createElement(
                        "span",
                        {
                          className: "input-group-text bg-danger",
                          id: "my-addon"
                        },
                        " "
                      )
                    ),
                    React.createElement("input", {
                      className: "form-control",
                      type: "password",
                      id: "PassReg",
                      placeholder: "Contrase\xF1a",
                      "aria-label": "Recipient's ",
                      "aria-describedby": "my-addon"
                    })
                  ),
                  React.createElement(
                    "div",
                    { className: "col-12 errForm mb-3" },
                    this.state.errPass && React.createElement(
                      "span",
                      null,
                      React.createElement(
                        "strong",
                        null,
                        this.state.errPassM
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-6 " },
                    React.createElement(
                      Grid,
                      {
                        container: true,
                        direction: "row",
                        justify: "center",
                        alignItems: "center"
                      },
                      this.state.loading ? React.createElement(
                        Button,
                        {
                          variant: "contained",
                          color: "primary",
                          className: "d-flex justify-content-center align-items-center",
                          disabled: true
                        },
                        React.createElement(
                          "strong",
                          null,
                          React.createElement(
                            "span",
                            { className: "text-dark" },
                            "Cargando..."
                          )
                        ),
                        React.createElement("div", {
                          className: "spinner-grow text-primary ",
                          role: "status"
                        })
                      ) : React.createElement(
                        Button,
                        {
                          variant: "contained",
                          color: "primary",
                          className: "d-flex justify-content-center align-items-center",
                          onClick: this.handleRegister
                        },
                        "Iniciar"
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "col-6 " },
                    React.createElement(
                      Grid,
                      {
                        container: true,
                        direction: "row",
                        justify: "center",
                        alignItems: "center"
                      },
                      this.state.loading ? React.createElement(
                        ButtonDanger,
                        { variant: "contained", disabled: true },
                        "Cancelar"
                      ) : React.createElement(
                        ButtonDanger,
                        {
                          variant: "contained",
                          onClick: this.handleCancel
                        },
                        "Cancelar"
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

  return LogForm;
}(React.Component);
/*Fin componente formularios Login/Signup */