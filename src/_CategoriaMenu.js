class Categorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      categorias: null
    };
  }

  componentDidUpdate() {
    $(".onCategoria").click(function(e) {
      var idC = $(this).attr("id");
      console.log("mandando " + idC);

      ReactDOM.render("", document.getElementById("cateContainer"));
      ReactDOM.render(
        <Categoria id={idC} />,
        document.getElementById("cateContainer")
      );
      ReactDOM.render("", document.getElementById("ProdCaro"));
      ReactDOM.render("", document.getElementById("Perfil"));
      ReactDOM.render("", document.getElementById("prodContainer"));
    });
    $("#lkCategoria").hover(
      function() {
        $("#Categorias").removeClass("d-none");
      },
      function() {
        $("#Categorias").addClass("d-none");
      }
    );
  }
  render() {
    if (!this.state.filled) {
      var cates = [];
      const dat = { permit: "SI" };
      let ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getCategorias.php",
        data: dat,
        success: function(response) {
          console.log("Yess");

          console.log(response);

          let tam = Object.keys(response).length;

          for (let index = 0; index < tam; index++) {
            cates.push(response[index]);
          }
          ctx.setState({
            filled: true,
            categorias: cates
          });
        }
      });
    }

    return (
      <HashRouter>
        <a class="nav-link" href="#">
          Categorias
        </a>
        <ul
          class=" rounded bg-light mylist  mt-0 pt-0 d-none animated bounceIn"
          id="Categorias"
        >
          {this.state.filled
            ? this.state.categorias.map(cate => (
                <li>
                  <NavLink to={"/categoria/" + cate.id + "/" + cate.nombre}>
                    {cate.nombre}
                  </NavLink>
                </li>
              ))
            : "No hay categorias"}
        </ul>
      </HashRouter>
    );
  }
}

class Categoria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      items: null,
      cName: ""
    };
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
        url: "phpModels/getCategoria.php",
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
      <div class="col-12 bg-white border  rounded mt-3 mb-3 border-success">
        {this.state.filled ? (
          <div>
            <div class="row ">
              <h4>{this.state.cName}</h4>
            </div>
            <div class="row d-flex justify-content-centeralign-self-center flex-wrap text-center">
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
          <h4>Categoria vacia</h4>
        )}
      </div>
    );
  }
}
