idAdmin = 0;
AdminContainerCtx = null;
class AdminContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      admins: null,
      filed: false,
      static: ""
    };
    AdminContainerCtx = this;
    this.handleGuardar = this.handleGuardar.bind(this);
  }
  handleGuardar() {
    console.log(this.state);

    toastr.options = {
      positionClass: "toast-bottom-left"
    };
    var isError = false;
    const nombre = $("#nombre").val();
    const appes = $("#appes").val();
    const usuario = $("#usuario").val();
    const email = $("#email").val();
    const pass = $("#pass").val();
    const repass = $("#repass").val();
    const tel = $("#telef").val();
    const mod = $("#PerMod").prop("checked");
    const sucr = $("#SucurSel").val();
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
      const dat = {
        permit: "SI",
        user: usuario
      };
      $.ajax({
        type: "POST",
        url: "phpModels/veryfyUser.php",
        data: dat,
        success: function(response) {
          if (response.status === "Exist") {
            isError = "true";
            toastr.error("Usuario ya existe");
          }
          if (!isError) {
            const dat = {
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
            console.log(dat);

            const ctx = this;
            $.ajax({
              type: "POST",
              url: "phpModels/" + url,
              data: dat,
              success: function(response) {
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
        const dat = {
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
        console.log(dat);

        const ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/" + url,
          data: dat,
          success: function(response) {
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
  componentWillMount() {
    //  VerificadorLogin();
  }
  componentDidUpdate() {
    AccionModalAdmin();
  }
  componentDidMount() {
    AccionModalAdmin();
  }
  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI"
      };
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getAdmins.php",
        data: dat,
        success: function(response) {
          if (response.status == "NoE") {
            return;
          }
          if (response.status == "Error") {
            return;
          }

          let tam = Object.keys(response).length;
          var admin = [];
          for (let index = 0; index < tam; index++) {
            admin.push(response[index]);
          }
          ctx.setState({
            admins: admin,
            filled: true
          });
        }
      });
    }
    return (
      <div className="col  bg-white shadow-box mt-3 mb-5">
        {isAdmin ? (
          <div className="d-flex justify-content-center algn-items-center flex-wrap">
            {this.state.filled ? (
              this.state.admins.map(admin => (
                <AdminCard
                  foto={admin.foto}
                  name={admin.nombre}
                  app={admin.apellidop}
                  apm={admin.apellidom}
                  mod={admin.mod}
                  ver={admin.ver}
                  id={admin.id}
                  idA={this.props.id}
                  idSuc={admin.tienda}
                />
              ))
            ) : (
              <h3>No hay admins</h3>
            )}
            <div
              class="card-user border rounded bg-light d-flex justify-content-center algn-items-center "
              id="newAdmin"
            >
              <div class="p-auto m-auto d-flex justify-content-center algn-items-center flex-wrap  ">
                <a
                  href="#"
                  type="button"
                  data-toggle="modal"
                  data-target="#ModAdmin"
                  data-id="0"
                >
                  Agregar nuevo
                </a>
                <img
                  class="img-log-plus "
                  src="media/svg/contacto.svg"
                  alt=""
                />
              </div>
            </div>
            <div id="modal">
              <div
                className="modal fade"
                id="ModAdmin"
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
                      <div>
                        <div className="row">
                          <form
                            className="form-inline col"
                            enctype="multipart/form-data"
                            id="FormPerfil"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="form-group col-12 col-md-6 ">
                                  <label className="bmd-label-floating">
                                    Nombre*
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control  w-100"
                                    name="name"
                                    id="nombre"
                                  />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <label className="bmd-label-floating">
                                    Apellidos*
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control  w-100"
                                    name="apps"
                                    id="appes"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="form-group col-12 col-md-6 ">
                                  <label className="bmd-label-floating">
                                    Usuario
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control w-100"
                                    name="user"
                                    id="usuario"
                                  />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <label className="bmd-label-floating">
                                    Email*
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control  w-100"
                                    name="mail"
                                    id="email"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="form-group col-12 col-md-6 ">
                                  <label className="bmd-label-floating">
                                    Contraseña
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control w-100"
                                    name="pass"
                                    id="pass"
                                    minlenght="8"
                                  />
                                </div>
                                <div className="form-group col-12 col-md-6">
                                  <label className="bmd-label-floating">
                                    Nueva contraseña
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control  w-100"
                                    name="repass"
                                    id="repass"
                                    minlenght="8"
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
                                    name="tel"
                                    id="telef"
                                    maxlength="10"
                                  />
                                </div>
                              </div>
                              <div className="row" id="Sucursal" />
                              <div className="row mt-4 d-flex justify-content-center">
                                <span className="text-warning ">Permisos</span>
                                <div class="form-check col-12">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="PerVer"
                                    disabled
                                  />
                                  <label class="form-check-label" for="PerVer">
                                    Ver
                                  </label>
                                </div>
                                <div class="form-check col-12">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="PerMod"
                                  />
                                  <label class="form-check-label" for="PerMod">
                                    Modificar
                                  </label>
                                </div>
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
        ) : (
          <h3 className="m-5 p-5">No has iniciado como administrador</h3>
        )}
      </div>
    );
  }
}

class AdminCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleEliminar = this.handleEliminar.bind(this);
  }
  handleEliminar() {
    const dat = {
      permit: "SI",
      id: this.props.id
    };
    $.ajax({
      type: "POST",
      url: "phpModels/deleteAdmin.php",
      data: dat,
      success: function(response) {
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
  render() {
    return (
      <div className="card-user border rounded bg-light shadow-box">
        <div className="img-user d-flex justify-content-center algn-items-center h-50 p-3">
          <img
            src={this.props.foto}
            className="rounded-circle  img-perfil-user"
            alt=""
          />
        </div>
        <div className="details-user container h-50 ">
          <div className="row">
            <h6 className="col-12 text-center">
              {this.props.name + " " + this.props.app + " " + this.props.apm}
              {this.props.id == this.props.idA && "(Tu)"}
            </h6>
          </div>
          <div className="row mb-0 pb-0">
            <p className="col-12 mb-0 pb-0">
              Permisos:
              <ul>
                {this.props.ver == "true" ? <li>Ver</li> : ""}
                {this.props.mod == "true" ? <li>Modificar</li> : ""}
              </ul>
            </p>
          </div>
          <div className="row mt-0 pt-0">
            <p className="col-12 mt-0 pt-0">
              ID sucursal:
              {this.props.idSuc}
            </p>
          </div>
          <div className="row">
            {this.props.id == this.props.idA ? (
              <span className="text-info">
                Si quieres modificar tus datos ve a tu perfil
              </span>
            ) : (
              <div>
                <button
                  className="btn btn-primary btn-raised col-12 col-md-6"
                  data-toggle="modal"
                  data-target="#ModAdmin"
                  data-id={this.props.id}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger col-12 col-md-6"
                  onClick={this.handleEliminar}
                >
                  Eliminar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

class OptionSucursales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      sucurs: null
    };
  }
  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI"
      };
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getSucursales.php",
        data: dat,
        success: function(response) {
          console.log(response);

          if (response.status == "NoE") {
            return;
          }
          if (response.status == "Error") {
            return;
          }

          let tam = Object.keys(response).length;
          var sucur = [];
          for (let index = 0; index < tam; index++) {
            sucur.push(response[index]);
          }
          ctx.setState({
            sucurs: sucur,
            filled: true
          });
        }
      });
    }
    return (
      <div className="form-group col-12 col-md-6">
        <label className="" for="inlineFormCustomSelectPref">
          Sucursal
        </label>
        <select className="custom-select " id="SucurSel">
          {this.state.filled ? (
            this.state.sucurs.map(sucur => (
              <option value={sucur.id} selected>
                {sucur.nombre}
              </option>
            ))
          ) : (
            <option value="0" selected>
              Sin sucursales
            </option>
          )}
        </select>
      </div>
    );
  }
}
function AccionModalAdmin() {
  $("#ModAdmin").on("show.bs.modal", function(event) {
    $(".container").bootstrapMaterialDesign();
    $("#PerVer").prop("checked", "true");
    $(".tipo-numero").on("input", function() {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
    var button = $(event.relatedTarget); // Button that triggered the modal
    idAdmin = button.data("id");
    modal = $("#ModAdmin");
    if (idAdmin == 0) {
      modal.find(".modal-title").text("Nuevo administrador");
      ReactDOM.render(
        <OptionSucursales />,
        document.getElementById("Sucursal")
      );
      modal.find("#nombre").val("");
      modal.find("#appes").val("");
      modal.find("#usuario").val("");
      modal.find("#email").val("");
      modal.find("#telef").val("");
    } else {
      ReactDOM.render("", document.getElementById("Sucursal"));
      modal.find(".modal-title").text("Modificar administrador");
      const dat = {
        permit: "SI",
        id: idAdmin
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getAdmin.php",
        data: dat,
        success: function(response) {
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
          modal
            .find("#appes")
            .val(response.apellidop + " " + response.apellidom);
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
