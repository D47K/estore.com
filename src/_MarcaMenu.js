class Marcas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      marca: null
    };
  }

  componentDidUpdate() {
    $(".onMarca").click(function(e) {
      var idC = $(this).attr("id");
      console.log("mandando " + idC);

      ReactDOM.render("", document.getElementById("cateContainer"));
      ReactDOM.render(
        <Marca id={idC} />,
        document.getElementById("cateContainer")
      );
      ReactDOM.render("", document.getElementById("ProdCaro"));
      ReactDOM.render("", document.getElementById("Perfil"));
      ReactDOM.render("", document.getElementById("prodContainer"));
    });
    $("#lkMarca").hover(
      function() {
        $("#Marcas").removeClass("d-none");
      },
      function() {
        $("#Marcas").addClass("d-none");
      }
    );
  }
  render() {
    if (!this.state.filled) {
      var marcas = [];
      const dat = { permit: "SI" };
      let ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getMarcas.php",
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
          for (let index = 0; index < tam; index++) {
            marcas.push(response[index]);
          }
          ctx.setState({
            filled: true,
            marca: marcas
          });
        }
      });
    }

    return (
      <HashRouter>
        <a class="nav-link " href="#">
          Marcas
        </a>
        <ul
          class=" rounded bg-light mylist mt-0 pt-0  d-none animated bounceIn"
          id="Marcas"
        >
          {this.state.filled ? (
            this.state.marca.map(marca => (
              <li>
                <NavLink to={"/marca/" + marca.id + "/" + marca.nombre}>
                  {marca.nombre}
                </NavLink>
              </li>
            ))
          ) : (
            <li>No hay marcas</li>
          )}
        </ul>
      </HashRouter>
    );
  }
}

class Marca extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      items: null,
      cName: ""
    };
    console.log(props);
  }

  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI",
        idC: this.props.match.params.id
      };
      var catName = "";
      var prods = [];
      var ctxx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getMarca.php",
        data: dat,
        success: function(response) {
          console.log(response);

          if (response.status == "NoE") {
            return;
          }
          if (response.status == "Error") {
            return;
          }
          catName = response[0]["nombrec"];
          let tam = Object.keys(response).length;
          for (let index = 0; index < tam; index++) {
            if (index == 0) {
              prods.push(response[index]);
            } else {
              let exist = false;
              for (let idx = 0; idx < prods.length; idx++) {
                if (
                  parseInt(prods[idx]["id"]) === parseInt(response[index]["id"])
                ) {
                  exist = true;
                }
              }
              if (!exist) {
                prods.push(response[index]);
              }
            }
          }

          ctxx.setState({
            filled: true,
            items: prods,
            cName: catName
          });
        }
      });
    }
    return (
      <div class="col-12">
        {this.state.filled ? (
          <div>
            <div class="row">
              <h4>{this.state.cName}</h4>
            </div>
            <div class="row d-flex justify-content-center justify-content-lg-start align-content-center flex-wrap  text-center">
              {this.state.items.map(prod => (
                <ItemCategoria
                  id={prod.id}
                  name={prod.nombre}
                  descr={prod.descr}
                  price={prod.precio}
                  img={prod.foto}
                />
              ))}
            </div>
          </div>
        ) : (
          <h4>Marca vacia</h4>
        )}
      </div>
    );
  }
}
