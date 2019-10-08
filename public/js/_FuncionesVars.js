var _MaterialUI = MaterialUI,
    Button = _MaterialUI.Button,
    Grid = _MaterialUI.Grid,
    createMuiTheme = _MaterialUI.createMuiTheme,
    withStyles = _MaterialUI.withStyles,
    makeStyles = _MaterialUI.makeStyles,
    TextField = _MaterialUI.TextField,
    CircularProgress = _MaterialUI.CircularProgress,
    AppBar = _MaterialUI.AppBar,
    MenuIcon = _MaterialUI.MenuIcon,
    Toolbar = _MaterialUI.Toolbar,
    IconButton = _MaterialUI.IconButton,
    Typography = _MaterialUI.Typography;

//Variables globales

var isAdmin = false;
var isLogged = false;
var idUsuario = null;

//Variables de componentes necesarios actualizar en tiempo de ejecucion
var Cuentas = null;
var Direcciones = null;
var Perfil = null;
var contenedor_principal = document.getElementById("contenedor_principal");

var ButtonDanger = withStyles(function (theme) {
  return {
    root: {
      color: "white",
      backgroundColor: "red",
      "&:hover": {
        backgroundColor: "rgb(210,12,12)"
      }
    }
  };
})(Button);

function emptyt(text) {
  if ($.trim(text).length == 0) {
    return true;
  } else {
    return false;
  }
}
// Funcion que crea una promesa con tiempo de en milisegundos
function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
}

function VerificadorLogin() {
  var dat = {
    permit: "SI"
  };
  $.ajax({
    type: "POST",
    url: "phpModels/getLogin.php",
    data: dat,
    success: function success(response) {
      console.log(response);

      if (response.status == "OK") {
        if (response.rol == "administrador") {
          var _dat = {
            permit: "SI",
            id: response.id
          };
          $.ajax({
            type: "POST",
            url: "phpModels/getAdmin.php",
            data: _dat,
            success: function success(response) {
              console.log(response);

              if (response.status == "OK") {
                isAdmin = true;
                ReactDOM.render(React.createElement(Admin, {
                  nombre: response.nombre,
                  id: response.id,
                  foto: response.foto
                }), document.getElementById("dropUser"));
                ReactDOM.render(React.createElement(UserBtn, { auth: "true", url: response.foto }), document.getElementById("btnNav"));
                isAdmin = true;
                idUsuario = response.id;
                isLogged = true;
                if (Cuentas != null) {
                  console.log("exist");
                  var valor = Cuentas.state.updated;
                  Cuentas.setState({
                    updated: !valor
                  });
                }
              }
            }
          });
        } else if (response.rol == "cliente") {
          var _dat2 = {
            permit: "SI",
            id: response.id
          };
          $.ajax({
            type: "POST",
            url: "phpModels/getUser.php",
            data: _dat2,
            success: function success(response) {
              console.log(response);

              if (response.status == "OK") {
                ReactDOM.render(React.createElement(User, {
                  nombre: response.nombre,
                  id: response.id,
                  foto: response.foto
                }), document.getElementById("dropUser"));
                ReactDOM.render(React.createElement(UserBtn, { auth: "true", url: response.foto }), document.getElementById("btnNav"));
                isAdmin = false;
                idUsuario = response.id;
                isLogged = true;
                var val = CarritoComp.state.sinc;
                var nval = !val;
                toastr.info("recarga");
                CarritoComp.setState({
                  sinc: nval
                });
              }
            }
          });
        }
      } else {
        ReactDOM.render(React.createElement(Authorizador, null), document.getElementById("dropUser"));
        ReactDOM.render(React.createElement(UserBtn, { auth: "false" }), document.getElementById("btnNav"));
      }
    }
  });
}

function getCurrentLocation() {
  return window.location.href;
}