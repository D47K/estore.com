/* Componente carrito*/
var CarritoComp = null;
var carritoProds = [];
var carritoDataProd = [];
var CarritoE = null;
class Carrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prods: [],
      dataProds: [],
      filled: false,
      sinc: false,
      sincred: false
    };
    CarritoComp = this;

    this.handleQuitar = this.handleQuitar.bind(this);
  }
  componentDidMount() {
    $("#btnCarrito").click(function(e) {
      $(".list-carro").toggleClass("d-none");
    });
  }
  handleQuitar(id) {
    const produs = carritoProds;
    var newP = [];
    for (let i = 0; i < produs.length; i++) {
      if (!produs[i]["id"] === id) {
        newP.push(produs[i]);
      }
    }
    this.setState({
      prods: newP,
      filled: false
    });
  }
  render() {
    if (!isAdmin && isLogged && !this.state.sincred) {
      const ctx = this;
      const dat = {
        permit: "SI",
        id: idUsuario
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getCarrito.php",
        data: dat,
        success: function(response) {
          const idcarr = response[0].id;
          toastr.info("recibido " + idcarr);
          const dats = {
            permit: "SI",
            id: idcarr
          };
          $.ajax({
            type: "POST",
            url: "phpModels/getCarritoIds.php",
            data: dats,
            success: function(response) {
              const tam = Object.keys(response).length;
              var prodes = [];
              for (let i = 0; i < tam; i++) {
                prodes.push(response[i]);
              }
              const val = ctx.state.sinc;
              const nval = !val;
              ctx.setState({
                prods: prodes,
                sinc: nval,
                sincred: true
              });
              const val1 = CarritoE.state.sinc;
              const nval1 = !val1;
              CarritoE.setState({
                sinc: nval1
              });
            }
          });
        }
      });
    }
    if (!this.state.filled) {
      for (let i = 0; i < this.state.prods.length; i++) {
        const dat = {
          permit: "SI",
          id: this.state.prods[i]["id"]
        };
        $.ajax({
          type: "POST",
          url: "phpModels/getCarrProd.php",
          data: dat,
          success: function(response) {
            console.log(response);
            if (response.status == "OK") {
              const produ = {
                idp: response.id,
                nombre: response.nombre,
                modelo: response.modelo,
                precio: response.precio,
                marca: response.marca,
                descr: response.descr
              };
              CarritoComp.setState({
                dataProds: CarritoComp.state.dataProds.concat(produ),
                filled: true
              });
            }
          }
        });
      }
    }
    return (
      <HashRouter>
        <div className="container ">
          <div className="row">
            <div className="col ">
              <div id="carrito" className=" animated fadeInRight ">
                <div className="list-carro rounded border border-success  animated fadeInUp d-none ">
                  <ul className="container mb-1">
                    <li className="mb-2">
                      <strong className="text-info">
                        Productos en el Carrito
                      </strong>
                    </li>
                    {this.state.filled ? (
                      this.state.dataProds.map(produ => (
                        <li className="row m-0">
                          <p className="col-12 pl-1 mb-0">{produ.nombre}</p>
                        </li>
                      ))
                    ) : (
                      <li>No hay productos en tu carrito</li>
                    )}
                  </ul>
                  <div className="mt-0 ml-1 d-flex justify-content-center ">
                    <NavLink
                      to="/carrito"
                      className="btn btn-primary  btn-raised fixed-bottom box-shadow"
                    >
                      Ir a carrito
                    </NavLink>
                  </div>
                </div>
                <div className="contenido d-flex justify-content-center align-items-center h-100">
                  <div className="centro" id="btnCarrito">
                    <div className="numart align-self-center justify-self-center">
                      <strong>{this.state.prods.length}</strong>
                    </div>
                    <img src="media/svg/cart.svg" alt="Carrito" />
                  </div>
                </div>
                <div className="base" />
              </div>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
/* Fin componente carrito*/

class CarroCompra extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      errMes: "",
      sinc: false
    };
    CarritoE = this;
  }
  componentDidMount() {
    const altura = $("nav").offset().top;
    $("#Botron").addClass("d-none");
    $("nav").addClass("fixed-top");
    $(window).on("scroll", function() {
      $("nav").addClass("fixed-top");
    });
  }
  render() {
    return (
      <div class="container  bg-white rounded mt-2  shadow-box mb-5">
        <div class="row p-3">
          <h4>Carrito</h4>
        </div>
        <div class="row ">
          <div class="col-12">
            <div class="container">
              {CarritoComp.state.filled ? (
                CarritoComp.state.dataProds.map(prod => (
                  <div>
                    <ItemCarrito
                      id={prod.id}
                      nombre={prod.nombre}
                      marca={prod.marca}
                      modelo={prod.modelo}
                      price={prod.precio}
                      descr={prod.descr}
                    />
                    <hr />
                  </div>
                ))
              ) : (
                <div
                  style={{ height: 300 }}
                  className="d-flex justify-content-center align-items-center"
                >
                  <h4 className="text.center">No hay productos en carrito</h4>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        {CarritoComp.state.filled && (
          <div className="row ">
            <div className="col-12 col-md m-2 d-flex justify-content-center">
              {CarritoComp.state.total}
            </div>
            <div className="col-12 col-md m-2 d-flex justify-content-center">
              <div className="row">
                <div className="col">Direccion:</div>
              </div>
              <div className="row">
                <div className="col">Enviar :</div>
              </div>
            </div>
            <div className="col-12 col-md m-2 d-flex justify-content-center">
              <button className="btn btn-primary btn-raised">Comprar</button>
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}
class ItemCarrito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false,
      errMes: "",
      cost: this.props.price,
      stock: 0,
      costst: this.props.price
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const contx = this;
    $("#iptCant").keyup(function(event) {
      if (event.shiftKey) {
        event.preventDefault();
        return;
      }
      if (event.keyCode == 46 || event.keyCode == 8) {
      } else {
        if (event.keyCode < 95) {
          if (event.keyCode < 48 || event.keyCode > 57) {
            event.preventDefault();
            return;
          }
        } else {
          if (event.keyCode < 96 || event.keyCode > 105) {
            event.preventDefault();
            return;
          }
        }
      }
      contx.setState({
        cost: contx.state.costst * parseInt($("#iptCant").val())
      });
      console.log(contx.state.cost);

      if (parseInt($("#iptCant").val()) > parseInt(contx.state.stock)) {
        contx.setState({
          err: true,
          errMes: "Cantidad no disponible"
        });
      } else {
        contx.setState({
          err: false
        });
      }
    });
  }
  render() {
    return (
      <div class="row  p-2 m-2">
        <div class="col-lg-2 col-12 d-flex justify-content-center align-items-center">
          <img
            src="media/img/2.png"
            class="img-thumbnail img-carr-prod"
            alt=""
          />
        </div>
        <div class="col-lg-7 col-12 container ">
          <div class="row">
            <strong class="romper-texto header-producto-carro">
              {this.props.nombre}
            </strong>
          </div>
          <div class="row">
            <p class="textito pr-3 d-none d-md-block ">{this.props.descr}</p>
          </div>
          <div class="row text-center d-none d-lg-block">
            <span class="col-md-6 col-12 ">Marca: {this.props.marca}</span>
            <span class="col-md-6 col-12">Modelo:{this.props.modelo}</span>
          </div>
        </div>
        <div class="col-lg-3 col-12 container">
          <div className="form-group row  ">
            <label for="iptCant" class="col-sm-12  col-form-label ml-2 pl-1 ">
              Cantidad
            </label>
            <div className="col-sm-12 col-lg-12 ">
              {this.state.err && (
                <small className="form-text  text-danger">
                  {this.state.errMes}
                </small>
              )}
              <input
                type="number"
                class="form-control"
                id="iptCant"
                placeholder="Cantidad"
                min="1"
              />
              <small className="form-text text-info">
                {this.state.stock} Disponibles
              </small>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12 text-center">
              <h3>
                ${" "}
                {!isNaN(this.state.cost) ? this.state.cost : this.state.costst}
              </h3>
            </div>
          </div>
        </div>
        <div class="col-12  p-2 text-center">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-12">
                <a href="#">Quitar del carrito</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
