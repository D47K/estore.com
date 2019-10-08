/**
 * Componente opciones de usuario normal
 */
class User extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handlePerfil = this.handlePerfil.bind(this);
  }
  handleClose() {
    /**
     * ReactDOM.render(<Authorizador />, document.getElementById("dropUser"));
    ReactDOM.render(
      <UserBtn auth="false" />,
      document.getElementById("btnNav")
    );
     */
    location.reload();
    $.get("phpModels/logout.php", "", function(data, textStatus, jqXHR) {
      var isAdmin = false;
      var isLogged = false;
      var idUsuario = null;
      location.reload();
    });
  }
  componentDidMount() {
    $(window).on("scroll", function() {
      $(".dropdown-menu").removeClass("show");
    });
  }
  handlePerfil() {
    dat = {
      permit: "SI",
      id: this.props.id
    };
    $.ajax({
      type: "POST",
      url: "phpModels/getProfileUser.php",
      data: dat,
      success: function(response) {
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
  render() {
    return (
      <div className="dropdown">
        <span
          href="#"
          className="dropdown-toggler"
          id="dropBtn"
          data-toggle="dropdown"
        >
          <div className="imgP  d-none d-md-block">
            <img
              className="photoP border rounded-circle m-0"
              src={this.props.foto}
            />
          </div>
          <span className="d-block d-md-none mb-0">Cuenta</span>
        </span>
        <div
          className="dropdown-menu dropm"
          id="dropMenu"
          aria-labelledby="navbarDropdown"
        >
          <HashRouter>
            <h6 className="dropdown-header">{this.props.nombre}</h6>
            <NavLink to="/cuenta" className="dropdown-item">
              Cuenta
            </NavLink>
            <NavLink to="/carrito" className="dropdown-item" href="#">
              Carrito
            </NavLink>
            <hr />
            <a className="dropdown-item" href="#" onClick={this.handleClose}>
              Cerrar sesión
            </a>
          </HashRouter>
        </div>
      </div>
    );
  }
}

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleAdmins = this.handleAdmins.bind(this);
  }
  componentDidMount() {
    $(window).on("scroll", function() {
      $(".dropdown-menu").removeClass("show");
    });
  }

  handleClose() {
    /**
     *   ReactDOM.render(<Authorizador />, document.getElementById("dropUser"));
    ReactDOM.render(
      <UserBtn auth="false" />,
      document.getElementById("btnNav")
    );
     */
    $.get("phpModels/logout.php", "", function(data, textStatus, jqXHR) {
      var isAdmin = false;
      var isLogged = false;
      var idUsuario = null;
      location.reload();
    });
  }
  handleAdmins() {
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

        ReactDOM.render(
          <AdminContainer datos={response} id={ctx.props.id} />,
          document.getElementById("AdminCards")
        );
        ReactDOM.render("", document.getElementById("prodContainer"));
        ReactDOM.render("", document.getElementById("Perfil"));
        ReactDOM.render("", document.getElementById("ProdCaro"));
      }
    });
  }
  render() {
    return (
      <HashRouter>
        <div className="dropdown">
          <span
            href="#"
            className="dropdown-toggler"
            id="dropBtn"
            data-toggle="dropdown"
          >
            <div className="imgP  d-none d-md-block">
              <img
                className="photoP border rounded-circle m-0"
                src={this.props.foto}
              />
            </div>
            <span className="d-block d-md-none mb-0">Cuenta</span>
          </span>
          <div
            className="dropdown-menu dropm"
            id="dropMenu"
            aria-labelledby="navbarDropdown"
          >
            <h6 className="dropdown-header">{this.props.nombre}</h6>
            <NavLink to="/cuenta" className="dropdown-item" href="#">
              Cuenta
            </NavLink>
            <NavLink to="/carrito" className="dropdown-item" href="#">
              Carrito
            </NavLink>
            <hr />
            <a className="dropdown-item" href="#" onClick={this.handleClose}>
              Cerrar sesión
            </a>
          </div>
        </div>
      </HashRouter>
    );
  }
}

class Perfil extends React.Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
  }
  handleSave() {}

  render() {
    return (
      <div classNameName="col-12">
        <div className="row d-flex justify-content-center align-items-center">
          <h4>{this.props.data.nombre} </h4>
        </div>
        <div className="row">
          <div className="col-12 col-md-7 offset-md-5">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo usuario"
                />
                <small id="emailHelp" className="form-text text-muted">
                  {this.props.data.user}
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo nombre"
                />
                <small id="emailHelp" className="form-text text-muted">
                  {this.props.data.nombre}
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Apellido Paterno</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo Apellido Paterno"
                />
                <small id="emailHelp" className="form-text text-muted">
                  {this.props.data.app}
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Apellido Materno</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nuevo Apellido Materno"
                />
                <small id="emailHelp" className="form-text text-muted">
                  {this.props.data.apm}
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nueva contraseña"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Confirmar contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirme contraseña"
                />
              </div>
              <div className="form-group">
                <label for="my-input">Foto de perfil</label>
                <input
                  id="my-input"
                  className="form-control-file"
                  type="file"
                  name=""
                />
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <button
                  type="button"
                  onClick={this.handleSave}
                  className="btn btn-primary"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Componente boton imagen usuario
 */
class UserBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.auth);

    return this.props.auth == "true" ? (
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img
          class="photoP border rounded-circle m-0"
          src={this.props.url}
          alt="Foto"
        />
      </button>
    ) : (
      <button
        class="navbar-toggler  "
        id="btnD"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="linHor" />
        <span class="linHor" />
        <span class="linHor" />
      </button>
    );
  }
}
/**
 * Fin componente boton imagen usuario
 */
