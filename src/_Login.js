/**
 * Componente boton para iniciar sesion
 */

class Authorizador extends React.Component {
  constructor(props) {
    super(props);
    this.handleIni = this.handleIni.bind(this);
  }
  handleIni() {
    ReactDOM.render(
      <LogForm login="true" />,
      document.getElementById("loginCtn")
    );
    $("#navbarSupportedContent").removeClass("show");
  }
  render() {
    return (
      <a onClick={this.handleIni} id="btnIni">
        <strong>Iniciar sesión</strong>
      </a>
    );
  }
}
/**
 * Fin componente boton para iniciar sesion
 */

/*Componente formularios Login/Signup */
class LogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }
  componentDidMount() {
    console.log("Montado");
    $("#User").focus();
    $("#DvSignIn").click(function(e) {
      ReactDOM.render(
        <LogForm login="true" />,
        document.getElementById("loginCtn")
      );
    });
    $("#DvSignUp").click(function(e) {
      ReactDOM.render(
        <LogForm login="false" />,
        document.getElementById("loginCtn")
      );
    });
  }
  handleCancel() {
    $("#loginCtn").addClass("animated zoomOut");
    // Usage!
    sleep(500).then(() => {
      ReactDOM.render("", document.getElementById("loginCtn"));
    });
  }
  handleLogin() {
    console.log($("#User").val());
    console.log($("#Password").val());
    if (emptyt($("#User").val()) || emptyt($("#Password").val())) {
      this.setState({
        errL: true,
        errLM: "Inserta Usuario y Contraseña"
      });
    } else {
      const dat = {
        permit: "si",
        user: $("#User")
          .val()
          .trim()
          .toLowerCase(),
        pass: $("#Password")
          .val()
          .trim()
      };
      console.log(dat);
      const superClase = this;
      $.ajax({
        type: "POST",
        url: "phpModels/login.php",
        data: dat,
        beforeSend: function() {
          superClase.setState({
            loading: true
          });
        },
        success: function(response) {
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
              sleep(1000).then(() => {
                ReactDOM.render("", document.getElementById("loginCtn"));
              });
              ReactDOM.render(
                <Admin
                  nombre={response.nombre}
                  id={response.id}
                  foto={response.foto}
                />,
                document.getElementById("dropUser")
              );
              ReactDOM.render(
                <UserBtn auth="true" url={response.foto} />,
                document.getElementById("btnNav")
              );
              isAdmin = true;
              idUsuario = response.id;
              isLogged = true;
              location.reload();
            } else {
              $("#loginCtn").addClass("animated zoomOut");
              // Limpiamos el contenedor de login despues de que la animacion termina
              //La duracion es de un segundo
              sleep(1000).then(() => {
                ReactDOM.render("", document.getElementById("loginCtn"));
              });
              ReactDOM.render(
                <User nombre={response.nombre} id={this.id} />,
                document.getElementById("dropUser")
              );
              ReactDOM.render(
                <UserBtn auth="true" url={response.foto} />,
                document.getElementById("btnNav")
              );
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

  handleRegister() {
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
        if (
          $("#PassReg")
            .val()
            .charAt(cont) == " "
        )
          espacios = true;
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
          const apes = $("#Apells")
            .val()
            .split(" ");
          const dat = {
            permit: "SI",
            nombre: $("#Name").val(),
            ap: apes[0],
            am: apes[1],
            mail: $("#Mail")
              .val()
              .toLowerCase(),
            pass: $("#PassReg").val()
          };
          $.ajax({
            type: "POST",
            url: "phpModels/newUser.php",
            data: dat,
            success: function(response) {
              console.log(response);
              if (response.status === "OK") {
                $("#loginCtn").addClass("animated zoomOut");
                // Limpiamos el contenedor de login despues de que la animacion termina
                //La duracion es de un segundo
                sleep(1000).then(() => {
                  ReactDOM.render("", document.getElementById("loginCtn"));
                });
                ReactDOM.render(
                  <User nombre={response.nombre} id={response.id} />,
                  document.getElementById("dropUser")
                );
                ReactDOM.render(
                  <UserBtn auth="true" url={response.foto} />,
                  document.getElementById("btnNav")
                );
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
  componentWillUnmount() {
    $("#loginCtn").removeClass("animated zoomOut");
  }
  render() {
    console.log("Renderizando");

    return (
      <div className="container  rounded d-flex justify-content-center align-items-center  mt-3 animated  fadeIn">
        <div className="form  m-1 rounded">
          <div className="container border border-dark rounded">
            <div className="row ">
              <div
                className={
                  this.props.login == "true"
                    ? "col-6 text-center opcionLogin activo"
                    : "col-6 text-center opcionLogin desactivo"
                }
                id="DvSignIn"
              >
                <h5>Iniciar sesión</h5>
              </div>
              <div
                className={
                  this.props.login == "true"
                    ? "col-6 text-center opcionLogin desactivo"
                    : "col-6 text-center opcionLogin activo"
                }
                id="DvSignUp"
              >
                <h5>Registrarse</h5>
              </div>
            </div>
            <div className="row  mb-2" id="formLogCtn">
              {this.props.login == "true" ? (
                <div className="col">
                  <div className="row">
                    <div className="col-12 mt-2 mb-2">
                      <h3 className="text-center ">Ingresa tus datos</h3>
                    </div>
                    <div className="input-group col-12  mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="my-addon">
                          <img
                            src="media/svg/user.svg"
                            className="imgSF"
                            alt=""
                          />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        id="User"
                        placeholder="Usuario o Email"
                        aria-label="Recipient's "
                        aria-describedby="my-addon"
                      />
                    </div>
                    <div className="input-group col-12 ">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="my-addon">
                          <img
                            src="media/svg/candado.svg"
                            className="imgSF"
                            alt=""
                          />
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="password"
                        id="Password"
                        placeholder="Contraseña"
                        aria-label="Recipient's "
                        aria-describedby="my-addon"
                      />
                    </div>
                    <div className="col-12 errForm mb-3">
                      {this.state.errL && (
                        <span>
                          <strong>{this.state.errLM}</strong>
                        </span>
                      )}
                    </div>
                    <div className="col-6 ">
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        {this.state.loading ? (
                          <Button
                            variant="contained"
                            color="primary"
                            className="d-flex justify-content-center align-items-center"
                            disabled
                          >
                            <strong>
                              <span className="text-dark">Cargando...</span>
                            </strong>
                            <div
                              className="spinner-grow text-primary "
                              role="status"
                            />
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            className="d-flex justify-content-center align-items-center"
                            onClick={this.handleLogin}
                          >
                            Iniciar
                          </Button>
                        )}
                      </Grid>
                    </div>
                    <div className="col-6 ">
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        {this.state.loading ? (
                          <ButtonDanger variant="contained" disabled>
                            Cancelar
                          </ButtonDanger>
                        ) : (
                          <ButtonDanger
                            variant="contained"
                            onClick={this.handleCancel}
                          >
                            Cancelar
                          </ButtonDanger>
                        )}
                      </Grid>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="text-center ">Crea tu cuenta</h3>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <img
                        src="media/svg/laptop.svg"
                        className="imgTF"
                        alt=""
                      />
                    </div>
                    <div className="input-group col-12 ">
                      <div className="input-group-prepend spacePreF">
                        <span
                          className="input-group-text bg-danger"
                          id="my-addon"
                        >
                          {" "}
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        id="Name"
                        placeholder="Nombre"
                        aria-label="Recipient's "
                        aria-describedby="my-addon"
                      />
                    </div>
                    <div className="col-12 errForm mb-3">
                      {this.state.errN && (
                        <span>
                          <strong>{this.state.errNM}</strong>
                        </span>
                      )}
                    </div>
                    <div className="input-group col-12  ">
                      <div className="input-group-prepend spacePreF">
                        <span
                          className="input-group-text bg-danger"
                          id="my-addon"
                        >
                          {" "}
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="text"
                        id="Apells"
                        placeholder="Apellidos"
                        aria-label="Recipient's "
                        aria-describedby="my-addon"
                      />
                    </div>
                    <div className="col-12 errForm mb-3">
                      {this.state.errAP && (
                        <span>
                          <strong>{this.state.errAPM}</strong>
                        </span>
                      )}
                    </div>
                    <div className="input-group col-12  ">
                      <div className="input-group-prepend spacePreF">
                        <span
                          className="input-group-text bg-danger"
                          id="my-addon"
                        >
                          {" "}
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="email"
                        id="Mail"
                        placeholder="Email"
                        aria-label="Recipient's "
                        aria-describedby="my-addon"
                      />
                    </div>
                    <div className="col-12 errForm mb-3">
                      {this.state.errMail && (
                        <span>
                          <strong>{this.state.errMailM}</strong>
                        </span>
                      )}
                    </div>
                    <div className="input-group col-12 ">
                      <div className="input-group-prepend spacePreF">
                        <span
                          className="input-group-text bg-danger"
                          id="my-addon"
                        >
                          {" "}
                        </span>
                      </div>
                      <input
                        className="form-control"
                        type="password"
                        id="PassReg"
                        placeholder="Contraseña"
                        aria-label="Recipient's "
                        aria-describedby="my-addon"
                      />
                    </div>
                    <div className="col-12 errForm mb-3">
                      {this.state.errPass && (
                        <span>
                          <strong>{this.state.errPassM}</strong>
                        </span>
                      )}
                    </div>
                    <div className="col-6 ">
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        {this.state.loading ? (
                          <Button
                            variant="contained"
                            color="primary"
                            className="d-flex justify-content-center align-items-center"
                            disabled
                          >
                            <strong>
                              <span className="text-dark">Cargando...</span>
                            </strong>
                            <div
                              className="spinner-grow text-primary "
                              role="status"
                            />
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            className="d-flex justify-content-center align-items-center"
                            onClick={this.handleRegister}
                          >
                            Iniciar
                          </Button>
                        )}
                      </Grid>
                    </div>
                    <div className="col-6 ">
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        {this.state.loading ? (
                          <ButtonDanger variant="contained" disabled>
                            Cancelar
                          </ButtonDanger>
                        ) : (
                          <ButtonDanger
                            variant="contained"
                            onClick={this.handleCancel}
                          >
                            Cancelar
                          </ButtonDanger>
                        )}
                      </Grid>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/*Fin componente formularios Login/Signup */
