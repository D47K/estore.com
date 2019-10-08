const {
  Button,
  Grid,
  createMuiTheme,
  withStyles,
  makeStyles,
  TextField,
  CircularProgress,
  AppBar,
  MenuIcon,
  Toolbar,
  IconButton,
  Typography
} = MaterialUI;

//Variables globales
var isAdmin = false;
var isLogged = false;
var idUsuario = null;

//Variables de componentes necesarios actualizar en tiempo de ejecucion
var Cuentas = null;
var Direcciones = null;
var Perfil = null;
const contenedor_principal = document.getElementById("contenedor_principal");

const ButtonDanger = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "rgb(210,12,12)"
    }
  }
}))(Button);

function emptyt(text) {
  if ($.trim(text).length == 0) {
    return true;
  } else {
    return false;
  }
}
// Funcion que crea una promesa con tiempo de en milisegundos
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function VerificadorLogin() {
  const dat = {
    permit: "SI"
  };
  $.ajax({
    type: "POST",
    url: "phpModels/getLogin.php",
    data: dat,
    success: function(response) {
      console.log(response);

      if (response.status == "OK") {
        if (response.rol == "administrador") {
          const dat = {
            permit: "SI",
            id: response.id
          };
          $.ajax({
            type: "POST",
            url: "phpModels/getAdmin.php",
            data: dat,
            success: function(response) {
              console.log(response);

              if (response.status == "OK") {
                isAdmin = true;
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
                if (Cuentas != null) {
                  console.log("exist");
                  const valor = Cuentas.state.updated;
                  Cuentas.setState({
                    updated: !valor
                  });
                }
              }
            }
          });
        } else if (response.rol == "cliente") {
          const dat = {
            permit: "SI",
            id: response.id
          };
          $.ajax({
            type: "POST",
            url: "phpModels/getUser.php",
            data: dat,
            success: function(response) {
              console.log(response);

              if (response.status == "OK") {
                ReactDOM.render(
                  <User
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
                isAdmin = false;
                idUsuario = response.id;
                isLogged = true;
                const val = CarritoComp.state.sinc;
                const nval = !val;
                toastr.info("recarga");
                CarritoComp.setState({
                  sinc: nval
                });
              }
            }
          });
        }
      } else {
        ReactDOM.render(<Authorizador />, document.getElementById("dropUser"));
        ReactDOM.render(
          <UserBtn auth="false" />,
          document.getElementById("btnNav")
        );
      }
    }
  });
}

function getCurrentLocation() {
  return window.location.href;
}
