//Componente a actualiza

class CuentaUser extends React.Component {
  constructor(props) {
    super(props);
    this.handlePerfil = this.handlePerfil.bind(this);
    this.handleDirecciones = this.handleDirecciones.bind(this);
    this.handleCompras = this.handleCompras.bind(this);
    this.handleGuardar = this.handleGuardar.bind(this);
    this.state = {
      updated: false
    };
  }
  handleGuardar() {}
  handlePerfil() {
    ReactDOM.render(
      <PerfilUser id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionPerfil").addClass("selected");
  }
  handleDirecciones() {
    ReactDOM.render(
      <DireccionesUser id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionDirs").addClass("selected");
  }
  handleCompras() {
    ReactDOM.render(
      <CompraContainer id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionCompras").addClass("selected");
  }
  componentDidMount() {}
  render() {
    return (
      <div className="row bg-white m-md-3 rounded shadow-box p-md-3">
        <div className="col-12 col-md-3 options-account ">
          <div className="container m-0 p-0">
            <div
              className="row option-account selected"
              id="optionPerfil"
              type="button"
              onClick={this.handlePerfil}
            >
              <div className="col ">Perfil</div>
            </div>
            <div
              className="row option-account"
              type="button"
              id="optionDirs"
              onClick={this.handleDirecciones}
            >
              <div className="col">Direcciones</div>
            </div>
            <div
              className="row option-account"
              type="button"
              onClick={this.handleCompras}
              id="optionCompras"
            >
              <div className="col">Compras</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9" id="PanelAcc">
          <PerfilUser id={this.props.id} />
        </div>
      </div>
    );
  }
}

class PerfilUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      staticUser: "",
      errMsgFile: ""
    };
    Perfil = this;
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleModificarVals = this.handleModificarVals.bind(this);
    this.handleGuardar = this.handleGuardar.bind(this);
  }
  componentDidMount() {
    $(".tipo-numero").on("input", function() {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
    $(".container").bootstrapMaterialDesign();
  }
  componentDidUpdate() {
    const ctx = this;
    $(".tipo-numero").on("input", function() {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
    $(".container").bootstrapMaterialDesign();
    $("#btnChangeF").click(function() {
      $("#foto").trigger("click");
    });
    $("#foto").change(function(e) {
      var data = new FormData(document.getElementById("FormPerfil"));
      data.append("tip", "user");
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
        success: function(data) {
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

  handleModificarVals(e) {
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
  handleGuardar() {
    const nombre = this.state.nombre;
    const apps = this.state.apps;
    const mail = this.state.mail;
    const pass = this.state.pass;
    const repass = this.state.repass;
    const user = this.state.user;
    var isError = false;
    const ctx = this;
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
    toastr.options = {
      positionClass: "toast-bottom-center"
    };
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
    console.log(this.state);

    if (!emptyt(user) && user != this.state.staticUser) {
      console.log("es diferente");
      const dat = {
        permit: "SI",
        user: user
      };
      $.ajax({
        type: "POST",
        url: "phpModels/veryfyUser.php",
        data: dat,
        success: function(response) {
          console.log(response);

          if (response.status === "Exist") {
            isError = "true";
            toastr.error("Usuario ya existe");
          }
          if (!isError) {
            const dat = {
              permit: "SI",
              nombre: ctx.state.nombre,
              ap: ctx.state.apps.split(" ")[0],
              am: ctx.state.apps.split(" ")[1],
              mail: ctx.state.mail,
              pass: ctx.state.pass,
              tel: $("#telef").val(),
              id: ctx.props.id,
              user: ctx.state.user.toLowerCase()
            };
            $.ajax({
              type: "POST",
              url: "phpModels/setUser.php",
              data: dat,
              success: function(response) {
                if (response.status === "success") {
                  toastr.options = {
                    positionClass: "toast-bottom-center"
                  };
                  toastr.success("Datos modificados");
                  ctx.setState({
                    filled: false
                  });
                } else {
                  toastr.error("Email existente");
                }
              }
            });
          }
        }
      });
    } else {
      if (!isError) {
        const dat = {
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
        const ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/setUser.php",
          data: dat,
          success: function(response) {
            if (response.status === "success") {
              toastr.options = {
                positionClass: "toast-bottom-center"
              };
              toastr.success("Datos modificados");
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
  render() {
    if (!this.state.filled) {
      dat = {
        permit: "SI",
        id: this.props.id
      };
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getProfileUser.php",
        data: dat,
        success: function(response) {
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
              staticUser: response.user
            });
          }
        }
      });
    }
    return (
      <div id="ContenedorPerfil" className="container">
        {this.state.filled ? (
          <div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <img
                  src={this.state.foto}
                  className="img-perfil-user rounded-circle img-fluid"
                  id="fotos"
                  alt=""
                />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <strong>
                  <span className="text-center" id="btnChangeF">
                    Cambiar foto
                  </span>
                </strong>
              </div>
              {this.state.errFile && (
                <div className="col-12 d-flex justify-content-center">
                  <small className="form-text text-danger">
                    {this.state.errMsgFile}
                  </small>
                </div>
              )}
              <div className="col-12 text-center">
                <h4>
                  {this.state.nombre} {this.state.apps}
                </h4>
              </div>
            </div>
            <div className="row">
              <form
                className="form-inline col"
                enctype="multipart/form-data"
                id="FormPerfil"
              >
                <div className="container">
                  <div className="row d-none">
                    <input type="file" className="" name="userF" id="foto" />
                  </div>
                  <div className="row">
                    <div className="form-group col-12 col-md-6 ">
                      <label className="bmd-label-floating">Nombre*</label>
                      <input
                        type="text"
                        className="form-control  w-100"
                        value={this.state.nombre}
                        name="name"
                        onChange={this.handleModificarVals}
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label className="bmd-label-floating">Apellidos*</label>
                      <input
                        type="text"
                        className="form-control  w-100"
                        value={this.state.apps}
                        name="apps"
                        onChange={this.handleModificarVals}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-12 col-md-6 ">
                      <label className="bmd-label-floating">Usuario</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        value={this.state.user}
                        name="user"
                        onChange={this.handleModificarVals}
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label className="bmd-label-floating">Email*</label>
                      <input
                        type="email"
                        className="form-control  w-100"
                        value={this.state.mail}
                        name="mail"
                        onChange={this.handleModificarVals}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-12 col-md-6 ">
                      <label className="bmd-label-floating">Contraseña</label>
                      <input
                        type="password"
                        className="form-control w-100"
                        value={this.state.pass}
                        name="pass"
                        onChange={this.handleModificarVals}
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label className="bmd-label-floating">
                        Nueva contraseña
                      </label>
                      <input
                        type="password"
                        className="form-control  w-100"
                        value={this.state.repass}
                        name="repass"
                        onChange={this.handleModificarVals}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-12 col-md-6 ">
                      <label className="bmd-label-floating tipo-numero">
                        Telefono
                      </label>
                      <input
                        type="text"
                        className="form-control w-100 tipo-numero"
                        value={this.state.tel}
                        name="tel"
                        id="telef"
                        maxlength="10"
                        onChange={this.handleModificarVals}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="row mt-3">
              <div className="col">
                <span className="form-group bmd-form-group">
                  <button
                    type="submit"
                    className="btn btn-warning "
                    onClick={this.handleGuardar}
                  >
                    Guardar
                  </button>
                </span>
              </div>
            </div>
          </div>
        ) : (
          <h4>Cargando...</h4>
        )}
      </div>
    );
  }
}
var idDir = null;
var modal = null;
class DireccionesUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleBuscarCP = this.handleBuscarCP.bind(this);
    this.handleAbrirModalNuevo = this.handleAbrirModalNuevo.bind(this);
    this.handleGuardar = this.handleGuardar.bind(this);
    Direcciones = this;
  }
  componentDidUpdate() {
    AccionesModal();
  }
  componentDidMount() {
    AccionesModal();
  }

  handleGuardar() {
    const ctx = this;
    if (idDir == 0) {
      var isThereError = false;
      const name = $("#name").val();
      const app = $("#apps")
        .val()
        .split(" ")[0];
      const apm = $("#apps")
        .val()
        .split(" ")[1];
      const cp = $("#CP").val();
      const estado = $("#estado").val();
      const municipio = $("#municipio").val();
      const callep = $("#callep").val();
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
      const calles1 = $("#calles1").val();
      const calles2 = $("#calles2").val();
      const telf = $("#tel").val();
      const referes = $("#refer").val();
      const col = $("#colonia").val();
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
      const ids = ctx.props.id;
      if (!isThereError) {
        const dat = {
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

        console.log(dat);
        $.ajax({
          type: "POST",
          url: "phpModels/newDir.php",
          data: dat,
          error: function(response) {
            console.log("Errror");

            console.log(reponse);
          },
          success: function(response) {
            console.log(response);
            if (
              response.status == "Error" ||
              response.status == "empty" ||
              response.status == "NoI"
            ) {
              ctx.setState({
                err: true
              });
            }
            if (response.status == "success") {
              ctx.setState({
                success: true
              });
              sleep(1000).then($("#btnClose").trigger("click"));
              toastr.options = {
                positionClass: "toast-bottom-center"
              };
              toastr.success("Direccion guardada");

              Direcciones.setState({
                filled: false
              });
            }
          }
        });
      }
    } else {
      var isThereError = false;
      const name = $("#name").val();
      const app = $("#apps")
        .val()
        .split(" ")[0];
      const apm = $("#apps")
        .val()
        .split(" ")[1];
      const cp = $("#CP").val();
      const estado = $("#estado").val();
      const municipio = $("#municipio").val();
      const callep = $("#callep").val();
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
      const calles1 = $("#calles1").val();
      const calles2 = $("#calles2").val();
      const telf = $("#tel").val();
      const referes = $("#refer").val();
      const col = $("#colonia").val();

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
      if (!isThereError) {
        const dat = {
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
          id: idDir,
          tel: telf,
          colonia: col
        };
        console.log(dat);

        $.ajax({
          type: "POST",
          url: "phpModels/setDir.php",
          data: dat,
          success: function(response) {
            console.log("res");
            console.log(response);
            if (
              response.status == "Error" ||
              response.status == "empty" ||
              response.status == "NoI"
            ) {
              ctx.setState({
                err: true
              });
            }
            if ((response.status = "success")) {
              ctx.setState({
                success: true
              });
              $("#btnClose").trigger("click");
              toastr.options = {
                positionClass: "toast-bottom-center"
              };
              toastr.warning("Direccion modificada");
            }
          }
        });
      }
    }
  }

  handleAbrirModalNuevo() {}
  handleBuscarCP() {
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
          const tam = codigo.length;
          const faltan = 5 - tam;
          for (let index = 0; index < faltan; index++) {
            codigo = "0" + codigo;
          }
          $("#CP").val(codigo);
          console.log("Nuevo CP " + codigo + " faltaban:" + faltan);
        }
        $.ajax({
          type: "GET",
          url:
            "https://api-codigos-postales.herokuapp.com/v2/codigo_postal/" +
            codigo,
          data: "",
          success: function(response) {
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

  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI",
        id: this.props.id
      };
      var dirs = [];
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getDirs.php",
        data: dat,
        success: function(response) {
          if (response.status == "Error") {
            return;
          }
          if (response.status == "NoE") {
            return;
          }
          if (response.status == "NoH") {
            return;
          }

          let tam = Object.keys(response).length;

          for (let index = 0; index < tam; index++) {
            dirs.push(response[index]);
          }

          ctx.setState({
            filled: true,
            data: dirs
          });
        }
      });
    }
    return (
      <div>
        <div
          id="btnAddDir"
          className="rounded-circle border border d-flex justify-content-center align-items-center"
          type="button"
          data-toggle="modal"
          data-target="#ModDir"
          data-id="0"
          onClick={this.handleAbrirModalNuevo}
        >
          Añadir
        </div>
        <div className="container pt-5 pr-5">
          {this.state.filled ? (
            this.state.data.map(prod => <Dir datos={prod} />)
          ) : (
            <h4 className="text-center">No tienes direcciones</h4>
          )}
          <div className="row">
            <div className="col">
              <div
                className="modal fade"
                id="ModDir"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="title">
                        {}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body container p-0 m-0">
                      <div className="row  scroll-content">
                        <div className="col">
                          <form className="container">
                            <div className="row">
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Nombre
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="name"
                                />
                                {this.state.errName && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Apellidos
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="apps"
                                />
                                {this.state.errAps && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Codigo postal
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100 tipo-numero"
                                  id="CP"
                                />
                                {this.state.errCp && (
                                  <small className="form-text text-danger">
                                    Error
                                  </small>
                                )}
                              </div>
                              <div className="form-group col-12 col-md-6 d-flex align-items-end">
                                <a
                                  className="btn btn-primary btn-raised p-md-1 m-md-0"
                                  id="btnBuscarCP"
                                  onClick={this.handleBuscarCP}
                                >
                                  Buscar
                                </a>
                                <a
                                  className="btn btn-info p-md-1 m-md-0"
                                  href="https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx"
                                  target="_blank"
                                >
                                  Consultar
                                </a>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12" />
                            </div>
                            <div className="row">
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Estado
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="estado"
                                />
                                {this.state.errEstad && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Municipio
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="municipio"
                                />
                                {this.state.errMun && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-12 ">
                                <label className="bmd-label-floating">
                                  Colonia
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100 "
                                  id="colonia"
                                />
                                {this.state.errTel && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Calle
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="callep"
                                />
                                {this.state.errCalle && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                              <div className="form-group col-6 col-md-3">
                                <label className="bmd-label-floating">
                                  Num. Interior
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100 "
                                  id="numI"
                                />
                              </div>
                              <div className="form-group col-6 col-md-3">
                                <label className="bmd-label-floating">
                                  Num. Exterior
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100 "
                                  id="numE"
                                />
                              </div>
                            </div>
                            <div className="row ">
                              <div className="col-12 mb-0">
                                <h6>Entre calles</h6>
                              </div>
                              <div className="form-group col-12 col-md-6 mt-0">
                                <label className="bmd-label-floating">
                                  Calle 1
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="calles1"
                                />
                                {this.state.errCalles1 && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Calle 2
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="calles2"
                                />
                                {this.state.errCalles2 && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-12 ">
                                <label className="bmd-label-floating">
                                  Telefono
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100 tipo-numero"
                                  id="tel"
                                />
                                {this.state.errTel && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-12 ">
                                <label className="bmd-label-floating">
                                  Referencias
                                </label>
                                <textarea
                                  className="form-control"
                                  name=""
                                  id="refer"
                                  cols="30"
                                  rows="3"
                                />
                                {this.state.errRefer && (
                                  <small className="form-text text-danger">
                                    Campo necesario
                                  </small>
                                )}
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="btnClose"
                        data-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        id="saveDir"
                        className="btn btn-primary btn-raised"
                        onClick={this.handleGuardar}
                      >
                        Guardar
                      </button>
                      {this.state.errorSave && (
                        <small className="form-text text-danger">
                          Hubo un error intenta de nuevo
                        </small>
                      )}
                      {this.state.success && (
                        <small className="form-text text-success">
                          Datos guardados
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Dir extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      success: false
    };
    this.handleEliminar = this.handleEliminar.bind(this);
  }
  handleEliminar() {
    const dat = {
      permit: "SI",
      id: this.props.datos.id
    };
    $.ajax({
      type: "POST",
      url: "phpModels/delDir.php",
      data: dat,
      success: function(response) {
        console.log("Del dir res");
        console.log(response);

        if (response.status === "Error") {
          toastr.options = {
            positionClass: "toast-bottom-center"
          };
          toastr.error("Error", "Al parecer hubo un error :(");
          return;
        }
        if (response.status === "NoE") {
          toastr.options = {
            positionClass: "toast-bottom-center"
          };
          toastr.warning("Advertencia", "Esta direccion no existe");
          return;
        }
        if (response.status === "OK") {
          toastr.options = {
            positionClass: "toast-bottom-center"
          };
          toastr.success("Direccion eliminada");
          Direcciones.setState({
            filled: false
          });
        }
      }
    });
  }
  render() {
    return (
      <div className="row m-1">
        <div className="col">
          <div className="container">
            <div className="row container-dir rounded border p-3 m-2">
              <div className="col-12">
                <h6>{this.props.datos.nombre}</h6>
              </div>
              <div className="col-12 romper-texto">
                <address>
                  {this.props.datos.calle}
                  <br />
                  {this.props.datos.numeroI + " " + this.props.datos.numeroE}
                  <br />
                  {this.props.datos.codigo}
                  <br />
                  {this.props.datos.municipio},{this.props.datos.estado}
                  <br />
                </address>
              </div>
              <div className="col-12">
                <div className="container">
                  <div className="row mt-2">
                    <div className="col-5">
                      <a
                        href="#"
                        type="button"
                        data-toggle="modal"
                        data-target="#ModDir"
                        data-id={this.props.datos.id}
                      >
                        Modificar
                      </a>
                    </div>
                    <div className="col-5">
                      <button
                        className="btn btn-danger"
                        onClick={this.handleEliminar}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class CompraContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      data: null
    };
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }
  componentDidUpdate() {
    const ctx = this;
    $("#ModDetC").on("show.bs.modal", function(event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      let id = button.data("id");
      let total = button.data("total");
      let tipo = button.data("tipo");
      let modal = $("#ModDetC");
      modal.find("#Total").text("$" + total);
      modal.find("#Tipo").text(tipo);
      const dat = {
        permit: "SI",
        id: id
      };
      var prods = [];
      $.ajax({
        type: "POST",
        url: "phpModels/getIdsProds.php",
        data: dat,
        success: function(response) {
          let tam = Object.keys(response).length;
          for (let index = 0; index < tam; index++) {
            prods.push(response[index]);
          }
          var fotos = [];
          var prodsDetMin = [];

          let totalC = 0;
          for (let index = 0; index < tam; index++) {
            const dat = {
              permit: "SI",
              id: prods[index]["idP"],
              idC: prods[index]["idC"]
            };
            let urls = "";
            let nombre = "";
            let precio = 0;
            let cant = 0;
            $.ajax({
              type: "POST",
              url: "phpModels/getProdMin.php",
              data: dat,
              success: function(response) {
                nombre = response["nombre"];
                precio = response["precio"];
                $.ajax({
                  type: "POST",
                  url: "phpModels/getImgProC.php",
                  data: dat,
                  success: function(response) {
                    urls = response["url"];
                    $.ajax({
                      type: "POST",
                      url: "phpModels/getCantProdC.php",
                      data: dat,
                      success: function(response) {
                        cant = response["cant"];
                        console.log("Datos");
                        let total = precio * cant;
                        totalC = totalC + total;
                        let produ = {
                          url: urls,
                          nom: nombre,
                          cantidad: cant,
                          totals: total
                        };
                        prodsDetMin.push(produ);
                        modal.find("#Total").text("$" + totalC);
                        ReactDOM.render(
                          <ProdsContainer datos={prodsDetMin} />,
                          document.getElementById("ProdDet")
                        );
                      }
                    });
                  }
                });
              }
            });
          }
        }
      });
      // modal.find("#name").val(response[0]["nombre"]);
    });
  }
  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI",
        id: this.props.id
      };
      var compr = [];
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getCompras.php",
        data: dat,
        success: function(response) {
          console.log(response);

          if (response.status == "Error") {
            console.log("Hubo un error");

            return;
          }
          if (response.status == "NoE") {
            console.log("Usuario no existe");
            return;
          }
          if (response.status == "NoH") {
            console.log("No hay compras");

            return;
          }
          let tam = Object.keys(response).length;
          for (let index = 0; index < tam; index++) {
            compr.push(response[index]);
          }
          ctx.setState({
            filled: true,
            data: compr
          });
        }
      });
    }
    return (
      <div className="container pt-5 pr-5">
        {this.state.filled ? (
          this.state.data.map(prod => <Compra datos={prod} />)
        ) : (
          <h4 className="text-center">No has realizado compras</h4>
        )}
        <div className="row">
          <div
            className="modal fade"
            id="ModDetC"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog " role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="title">
                    Detalles de compra
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body container p-0 m-0 scroll-content ">
                  <div className="row">
                    <div className="col">
                      <div className="container p-3">
                        <div className="row">
                          <div className="col">
                            <h6>Productos</h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="container">
                            <div id="ProdDet" />

                            <div className="row mt-3">
                              <div className="col-9">Pago total</div>
                              <div className="col-3" id="Total" />
                            </div>
                            <div className="row mt-3">
                              <div className="col-9">Metodo de pago</div>
                              <div className="col-3" id="Tipo">
                                PayPal
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-info"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class ProdsContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("Propiedades Contenedor");
    console.log(this.props.datos);
  }
  render() {
    return (
      <div>
        {this.props.datos.map(producto => (
          <ModalProd datos={producto} />
        ))}
      </div>
    );
  }
}
class ModalProd extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="row m-1">
        <div class="col-3">
          <img class="img-fluid rounded" src={this.props.datos.url} alt="" />
        </div>
        <div class="col-3 d-flex align-items-center">
          <span>Nombre: {this.props.datos.nom}</span>
        </div>
        <div class="col-3 d-flex align-items-center">
          <span>Cantidad: {this.props.datos.cantidad}</span>
        </div>
        <div class="col-3 d-flex align-items-center">
          <span>Total: {this.props.datos.totals}</span>
        </div>
      </div>
    );
  }
}

class Compra extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row shadow-box p-4">
              <div className="col-10">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h5>Compra #{this.props.datos.id}</h5>
                    </div>
                    <div className="col-12">
                      <h6>
                        {this.props.datos.fechaPed} -{" "}
                        {this.props.datos.status != "entregado"
                          ? "Pendiente"
                          : this.datos.fechaEnt}
                      </h6>
                    </div>
                    <div className="col-12">
                      <span>Productos : {this.props.datos.nump} </span>
                    </div>
                    <div className="col-12">
                      <span>Total : $ {this.props.datos.total}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-2 d-flex align-items-center">
                <a
                  href="#"
                  type="button"
                  data-toggle="modal"
                  data-target="#ModDetC"
                  data-id={this.props.datos.id}
                  data-total={this.props.datos.total}
                  data-tipo={this.props.datos.tipo}
                >
                  Ver detalles
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false
    };
    Cuentas = this;
  }
  render() {
    return (
      <div>
        {isLogged ? (
          isAdmin ? (
            <CuentaAdmin id={idUsuario} />
          ) : (
            <CuentaUser id={idUsuario} />
          )
        ) : (
          <h4 className="text-center">Necesitas iniciar sesión</h4>
        )}
      </div>
    );
  }
}

function validarFormulario() {}

function AccionesModal() {
  //AccionesDirs(this);

  $("#ModDir").on("show.bs.modal", function(event) {
    $(".container").bootstrapMaterialDesign();
    $(".tipo-numero").on("input", function() {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
    var button = $(event.relatedTarget); // Button that triggered the modal
    idDir = button.data("id");
    modal = $("#ModDir");
    if (idDir == 0) {
      modal.find(".modal-title").text("Nueva direccion");
    } else {
      modal.find(".modal-title").text("Modificar direccion");
      const dat = {
        permit: "SI",
        id: idDir
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getDirEspecifico.php",
        data: dat,
        success: function(response) {
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
          modal
            .find("#apps")
            .val(response[0]["app"] + " " + response[0]["apm"]);
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
