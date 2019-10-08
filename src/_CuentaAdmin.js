class CuentaAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.handlePerfil = this.handlePerfil.bind(this);
    this.handleAdministradores = this.handleAdministradores.bind(this);
    this.handleCategorias = this.handleCategorias.bind(this);
    this.handleMarcas = this.handleMarcas.bind(this);
    this.handlePedidosAtendidos = this.handlePedidosAtendidos.bind(this);
    this.handleProductos = this.handleProductos.bind(this);
    this.handleProveedores = this.handleProveedores.bind(this);
    this.handleSucursales = this.handleSucursales.bind(this);
    this.handleMarcas = this.handleMarcas.bind(this);
    this.handleCategorias = this.handleCategorias.bind(this);
    this.state = {
      updated: false
    };
  }
  handleGuardar() {}
  handlePerfil() {
    ReactDOM.render(
      <PerfilAdmin id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionPerfil").addClass("selected");
  }
  handleAdministradores() {
    ReactDOM.render(
      <AdminContainer id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionAdmins").addClass("selected");
  }
  handleVentas() {
    ReactDOM.render(
      <Ventas id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionVentas").addClass("selected");
  }
  handlePedidosAtendidos() {
    ReactDOM.render(
      <PedidosAtendidos id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionPedidosAtt").addClass("selected");
  }
  handlePedidosCola() {
    ReactDOM.render(
      <PedidosEnCola id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionPedidosCola").addClass("selected");
  }
  handleProductos() {
    ReactDOM.render(
      <ProductosOption id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionProductos").addClass("selected");
  }

  handleProveedores() {
    ReactDOM.render(
      <Proveedores id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionProveedor").addClass("selected");
  }
  handleSucursales() {
    ReactDOM.render(
      <Sucursales id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionSucursal").addClass("selected");
  }
  handleMarcas() {
    ReactDOM.render(
      <MarcasAdmin id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionMarcas").addClass("selected");
  }
  handleCategorias() {
    ReactDOM.render(
      <CategoriasAdmin id={this.props.id} />,
      document.getElementById("PanelAcc")
    );
    $(".selected").removeClass("selected");
    $("#optionCategorias").addClass("selected");
  }
  componentDidMount() {}
  render() {
    return (
      <div className="row bg-white m-md-3 rounded shadow-box p-md-3">
        <div className="col-12 col-md-3 options-account ">
          <div className="container m-0 p-0 scroll-content">
            <div
              className="row option-account selected"
              id="optionPerfil"
              onClick={this.handlePerfil}
            >
              <div className="col ">Perfil</div>
            </div>
            <div
              className="row option-account"
              id="optionAdmins"
              onClick={this.handleAdministradores}
            >
              <div className="col ">Administradores</div>
            </div>

            <div className="row option-account" id="optionVentas">
              <div className="col ">Ventas</div>
            </div>
            <div className="row option-account" id="optionPedidosAtt">
              <div className="col ">Pedidos atendidos</div>
            </div>
            <div className="row option-account" id="optionPedidosCola">
              <div className="col ">Pedidos en cola</div>
            </div>
            <div
              className="row option-account"
              id="optionProductos"
              onClick={this.handleProductos}
            >
              <div className="col ">Productos</div>
            </div>
            <div
              className="row option-account"
              id="optionProveedor"
              onClick={this.handleProveedores}
            >
              <div className="col ">Proveedores</div>
            </div>
            <div
              className="row option-account"
              id="optionSucursal"
              onClick={this.handleSucursales}
            >
              <div className="col ">Sucursales</div>
            </div>
            <div
              className="row option-account"
              id="optionMarcas"
              onClick={this.handleMarcas}
            >
              <div className="col ">Marcas</div>
            </div>
            <div
              className="row option-account"
              id="optionCategorias"
              onClick={this.handleCategorias}
            >
              <div className="col ">Categorias</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-9" id="PanelAcc">
          <PerfilAdmin id={this.props.id} />
        </div>
      </div>
    );
  }
}

class PerfilAdmin extends React.Component {
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
      errMsgFile: "",
      staticUser: ""
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
      const dat = {
        permit: "SI",
        user: user
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
              nombre: ctx.state.nombre,
              ap: ctx.state.apps.split(" ")[0],
              am: ctx.state.apps.split(" ")[1],
              mail: ctx.state.mail.toLowerCase(),
              pass: ctx.state.pass,
              tel: $("#telef").val(),
              id: ctx.props.id,
              user: ctx.state.user.toLowerCase()
            };
            const ctx = this;
            $.ajax({
              type: "POST",
              url: "phpModels/setAdmin.php",
              data: dat,
              success: function(response) {
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
        const dat = {
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
        const ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/setAdmin.php",
          data: dat,
          success: function(response) {
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
  render() {
    if (!this.state.filled) {
      dat = {
        permit: "SI",
        id: this.props.id
      };
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getProfileAdmin.php",
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
              ver: response.ver,
              mod: response.mod,
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
                  <div className="row mt-4">
                    <span className="text-info">
                      Tienes el permiso de {this.state.ver == "true" && "ver"}
                      {this.state.mod == "true" && " y modificar"}{" "}
                    </span>
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
class Administradores extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h4>Categorias</h4>;
  }
}
class Ventas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h4>Categorias</h4>;
  }
}
class PedidosAtendidos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h4>Categorias</h4>;
  }
}

class PedidosEnCola extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h4>Categorias</h4>;
  }
}

class ProductosActuales extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h4>Categorias</h4>;
  }
}
var idProv = null;
var ProvComp = null;
class Proveedores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      provers: []
    };
    ProvComp = this;
    this.handleGuardar = this.handleGuardar.bind(this);
  }
  componentWillMount() {
    AccionesModalPrP1();
  }
  componentDidUpdate() {
    AccionesModalPrP2();
  }
  handleGuardar() {
    const ctx = this;
    const nombre = $("#name").val();
    const app = $("#appes")
      .val()
      .split(" ")[0];
    const apm = $("#appes")
      .val()
      .split(" ")[1];
    const org = $("#org").val();
    if (emptyt(nombre) || emptyt(app) || emptyt(apm) || emptyt(org)) {
      toastr.error("Llena todos los campos");
    } else if (idProv == 0) {
      const dat = {
        permit: "SI",
        nom: nombre,
        ap: app,
        am: apm,
        og: org
      };
      $.ajax({
        type: "POST",
        url: "phpModels/newProveed.php",
        data: dat,
        success: function(response) {
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
      const dat = {
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
        data: dat,
        success: function(response) {
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
  componentDidMount() {}
  render() {
    if (!this.state.filled) {
      const ctx = this;
      const dat = {
        permit: "Si"
      };
      var provs = [];
      $.ajax({
        type: "POST",
        url: "phpModels/getProveedores",
        data: dat,
        success: function(response) {
          console.log(response);

          const tam = Object.keys(response).length;
          console.log(tam);

          for (let i = 0; i < tam; i++) {
            const prov = {
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
    return (
      <div>
        <div
          id="btnAddDir"
          className="rounded-circle border border d-flex justify-content-center align-items-center"
          type="button"
          data-toggle="modal"
          data-target="#ModProv"
          data-id="0"
          onClick={this.handleNuevo}
        >
          Añadir
        </div>
        <div className="container pt-5 pr-5">
          {this.state.filled ? (
            this.state.provers.map(prov => <ProvEspecif datos={prov} />)
          ) : (
            <h4 className="text-center">No hay proveedores</h4>
          )}
          <div className="row">
            <div className="col">
              <div
                className="modal fade"
                id="ModProv"
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
                          <form
                            className="container"
                            enctype="multipart/form-data"
                            id="dataP"
                          >
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
                              </div>
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Apellidos
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="appes"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-12 ">
                                <label className="bmd-label-floating">
                                  Organizacion
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="org"
                                />
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
class ProvEspecif extends React.Component {
  constructor(props) {
    super(props);
    this.handleEliminar = this.handleEliminar.bind(this);
  }
  handleEliminar() {
    const dat = {
      permit: "SI",
      id: this.props.datos.id
    };
    $.ajax({
      type: "POST",
      url: "phpModels/delProv.php",
      data: dat,
      success: function(response) {
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
  render() {
    return (
      <div className="row m-1 shadow-sm">
        <div className="col">
          <div className="container">
            <div className="row container-dir rounded border p-3 m-2">
              <div className="col-12 romper-texto">
                <p>
                  Nombre: {this.props.datos.nombre}
                  <br />
                  Apellidos: {this.props.datos.app + " " + this.props.datos.apm}
                  <br />
                  Organizacion: {this.props.datos.org}
                </p>
              </div>
              <div className="col-12">
                <div className="container">
                  <div className="row mt-2">
                    <div className="col-5">
                      <a
                        href="#"
                        type="button"
                        data-toggle="modal"
                        data-target="#ModProv"
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
var idSucurs = null;
var SucurComp = null;
class Sucursales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      provers: []
    };
    SucurComp = this;
    this.handleGuardar = this.handleGuardar.bind(this);
  }
  componentDidMount() {
    AccionesModalSrP1();
  }
  componentDidUpdate() {
    AccionesModalSrP2();
  }
  handleGuardar() {
    const ctx = this;
    const nombre = $("#name").val();
    const calle = $("#calle").val();
    const estado = $("#estado").val();
    const muni = $("#muni").val();
    if (emptyt(nombre) || emptyt(calle) || emptyt(estado) || emptyt(muni)) {
      toastr.error("Llena todos los campos");
    } else if (idSucurs == 0) {
      const dat = {
        permit: "SI",
        nom: nombre,
        call: calle,
        estad: estado,
        mun: muni
      };
      $.ajax({
        type: "POST",
        url: "phpModels/newSucur.php",
        data: dat,
        success: function(response) {
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
      const dat = {
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
        data: dat,
        success: function(response) {
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
  render() {
    if (!this.state.filled) {
      const ctx = this;
      const dat = {
        permit: "Si"
      };
      var provs = [];
      $.ajax({
        type: "POST",
        url: "phpModels/getSucursales.php",
        data: dat,
        success: function(response) {
          console.log(response);

          const tam = Object.keys(response).length;
          console.log(tam);

          for (let i = 0; i < tam; i++) {
            const prov = {
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
    return (
      <div>
        <div
          id="btnAddDir"
          className="rounded-circle border border d-flex justify-content-center align-items-center"
          type="button"
          data-toggle="modal"
          data-target="#ModSucur"
          data-id="0"
          onClick={this.handleNuevo}
        >
          Añadir
        </div>
        <div className="container pt-5 pr-5">
          {this.state.filled ? (
            this.state.provers.map(prov => <SucurEspecif datos={prov} />)
          ) : (
            <h4 className="text-center">No hay sucursales</h4>
          )}
          <div className="row">
            <div className="col">
              <div
                className="modal fade"
                id="ModSucur"
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
                          <form
                            className="container"
                            enctype="multipart/form-data"
                            id="dataP"
                          >
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
                              </div>
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Calle
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="calle"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Municipio
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="muni"
                                />
                              </div>
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Estado
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="estado"
                                />
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
class SucurEspecif extends React.Component {
  constructor(props) {
    super(props);
    this.handleEliminar = this.handleEliminar.bind(this);
  }
  handleEliminar() {
    const dat = {
      permit: "SI",
      id: this.props.datos.id
    };
    $.ajax({
      type: "POST",
      url: "phpModels/delSucur.php",
      data: dat,
      success: function(response) {
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
  render() {
    return (
      <div className="row m-1 shadow-sm">
        <div className="col">
          <div className="container">
            <div className="row container-dir rounded border p-3 m-2">
              <div className="col-12 romper-texto">
                <p>
                  Nombre: {this.props.datos.nombre}
                  <br />
                  Calle: {this.props.datos.app}
                  <br />
                  Municipio: {this.props.datos.apm}
                  <br />
                  Estado: {this.props.datos.org}
                </p>
              </div>
              <div className="col-12">
                <div className="container">
                  <div className="row mt-2">
                    <div className="col-5">
                      <a
                        href="#"
                        type="button"
                        data-toggle="modal"
                        data-target="#ModSucur"
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

var idMar = null;
var MarcaComp = null;

class MarcasAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      provers: []
    };
    MarcaComp = this;
    this.handleGuardar = this.handleGuardar.bind(this);
  }
  componentDidMount() {
    AccionesModalMrP1();
  }
  componentDidUpdate() {
    AccionesModalMrP2();
  }
  handleGuardar() {
    const ctx = this;
    const nombre = $("#name").val();
    if (emptyt(nombre)) {
      toastr.error("Da un nombre ");
    } else if (idMar == 0) {
      const dat = {
        permit: "SI",
        nom: nombre
      };
      $.ajax({
        type: "POST",
        url: "phpModels/newMarca.php",
        data: dat,
        success: function(response) {
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
      const dat = {
        permit: "SI",
        id: idMar,
        nom: nombre
      };
      $.ajax({
        type: "POST",
        url: "phpModels/setMarca.php",
        data: dat,
        success: function(response) {
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
  render() {
    if (!this.state.filled) {
      const ctx = this;
      const dat = {
        permit: "Si"
      };
      var provs = [];
      $.ajax({
        type: "POST",
        url: "phpModels/getMarcas.php",
        data: dat,
        success: function(response) {
          console.log(response);

          const tam = Object.keys(response).length;
          console.log(tam);

          for (let i = 0; i < tam; i++) {
            const prov = {
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
    return (
      <div>
        <div
          id="btnAddDir"
          className="rounded-circle border border d-flex justify-content-center align-items-center"
          type="button"
          data-toggle="modal"
          data-target="#ModMarca"
          data-id="0"
          onClick={this.handleNuevo}
        >
          Añadir
        </div>
        <div className="container pt-5 pr-5">
          {this.state.filled ? (
            this.state.provers.map(prov => <MarcaEspecif datos={prov} />)
          ) : (
            <h4 className="text-center">No hay marcas</h4>
          )}
          <div className="row">
            <div className="col">
              <div
                className="modal fade"
                id="ModMarca"
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
                          <form
                            className="container"
                            enctype="multipart/form-data"
                            id="dataP"
                          >
                            <div className="row">
                              <div className="form-group col-12 ">
                                <label className="bmd-label-floating">
                                  Nombre
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="name"
                                />
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
class MarcaEspecif extends React.Component {
  constructor(props) {
    super(props);
    this.handleEliminar = this.handleEliminar.bind(this);
  }
  handleEliminar() {
    const dat = {
      permit: "SI",
      id: this.props.datos.id
    };
    $.ajax({
      type: "POST",
      url: "phpModels/delMarca.php",
      data: dat,
      success: function(response) {
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
  render() {
    return (
      <div className="row m-1 shadow-sm">
        <div className="col">
          <div className="container">
            <div className="row container-dir rounded border p-3 m-2">
              <div className="col-12 romper-texto">
                <p>
                  Nombre: {this.props.datos.nombre}
                  <br />
                </p>
              </div>
              <div className="col-12">
                <div className="container">
                  <div className="row mt-2">
                    <div className="col-5">
                      <a
                        href="#"
                        type="button"
                        data-toggle="modal"
                        data-target="#ModMarca"
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

var idCateg = null;
var CategComp = null;

class CategoriasAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      provers: []
    };
    CategComp = this;
    this.handleGuardar = this.handleGuardar.bind(this);
  }
  componentDidMount() {
    AccionesModalCrP1();
  }
  componentDidUpdate() {
    AccionesModalCrP2();
  }
  handleGuardar() {
    const ctx = this;
    const nombre = $("#name").val();
    if (emptyt(nombre)) {
      toastr.error("Da un nombre ");
    } else if (idCateg == 0) {
      const dat = {
        permit: "SI",
        nom: nombre
      };
      $.ajax({
        type: "POST",
        url: "phpModels/newCate.php",
        data: dat,
        success: function(response) {
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
      const dat = {
        permit: "SI",
        id: idCateg,
        nom: nombre
      };
      $.ajax({
        type: "POST",
        url: "phpModels/setCate.php",
        data: dat,
        success: function(response) {
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
  render() {
    if (!this.state.filled) {
      const ctx = this;
      const dat = {
        permit: "Si"
      };
      var provs = [];
      $.ajax({
        type: "POST",
        url: "phpModels/getCategorias.php",
        data: dat,
        success: function(response) {
          console.log(response);

          const tam = Object.keys(response).length;
          console.log(tam);

          for (let i = 0; i < tam; i++) {
            const prov = {
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
    return (
      <div>
        <div
          id="btnAddDir"
          className="rounded-circle border border d-flex justify-content-center align-items-center"
          type="button"
          data-toggle="modal"
          data-target="#ModCate"
          data-id="0"
          onClick={this.handleNuevo}
        >
          Añadir
        </div>
        <div className="container pt-5 pr-5">
          {this.state.filled ? (
            this.state.provers.map(prov => <CategoriaEspecif datos={prov} />)
          ) : (
            <h4 className="text-center">No hay marcas</h4>
          )}
          <div className="row">
            <div className="col">
              <div
                className="modal fade"
                id="ModCate"
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
                          <form
                            className="container"
                            enctype="multipart/form-data"
                            id="dataP"
                          >
                            <div className="row">
                              <div className="form-group col-12 ">
                                <label className="bmd-label-floating">
                                  Nombre
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="name"
                                />
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
class CategoriaEspecif extends React.Component {
  constructor(props) {
    super(props);
    this.handleEliminar = this.handleEliminar.bind(this);
  }
  handleEliminar() {
    const dat = {
      permit: "SI",
      id: this.props.datos.id
    };
    $.ajax({
      type: "POST",
      url: "phpModels/delCate.php",
      data: dat,
      success: function(response) {
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
  render() {
    return (
      <div className="row m-1 shadow-sm">
        <div className="col">
          <div className="container">
            <div className="row container-dir rounded border p-3 m-2">
              <div className="col-12 romper-texto">
                <p>
                  Nombre: {this.props.datos.nombre}
                  <br />
                </p>
              </div>
              <div className="col-12">
                <div className="container">
                  <div className="row mt-2">
                    <div className="col-5">
                      <a
                        href="#"
                        type="button"
                        data-toggle="modal"
                        data-target="#ModCate"
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

function AccionesModalCrP1() {
  //AccionesDirs(this);
  $("#ModCate").on("show.bs.modal", function(event) {
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
  $("#ModCate").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idCateg = button.data("id");
    modal = $("#ModCate");
    $(".container").bootstrapMaterialDesign();
    if (idCateg > 0) {
      modal.find(".modal-title").text("Modificar marca");
      const dat = {
        permit: "Si",
        id: idCateg
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getCate.php",
        data: dat,
        success: function(response) {
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
  $("#ModMarca").on("show.bs.modal", function(event) {
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
  $("#ModMarca").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idMar = button.data("id");
    modal = $("#ModMarca");
    $(".container").bootstrapMaterialDesign();
    if (idMar > 0) {
      modal.find(".modal-title").text("Modificar marca");
      const dat = {
        permit: "Si",
        id: idMar
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getMarc.php",
        data: dat,
        success: function(response) {
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
  $("#ModSucur").on("show.bs.modal", function(event) {
    $(".tipo-precio").on("input", function() {
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
  $("#ModSucur").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idSucurs = button.data("id");
    modal = $("#ModSucur");
    $(".container").bootstrapMaterialDesign();
    if (idSucurs > 0) {
      const dat = {
        permit: "Si",
        id: idSucurs
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getSucur.php",
        data: dat,
        success: function(response) {
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
  $("#ModProv").on("show.bs.modal", function(event) {
    $(".tipo-precio").on("input", function() {
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
  $("#ModProv").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    idProv = button.data("id");
    modal = $("#ModProv");
    $(".container").bootstrapMaterialDesign();
    if (idProv > 0) {
      const dat = {
        permit: "Si",
        id: idProv
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getProveer.php",
        data: dat,
        success: function(response) {
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
