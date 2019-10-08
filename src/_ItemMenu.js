class ItemCategoria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false
    };
    this.handleCompraVenta = this.handleCompraVenta.bind(this);
    this.handleAñadir = this.handleAñadir.bind(this);
    this.handleRemover = this.handleRemover.bind(this);
  }
  handleCompraVenta() {
    ReactDOM.render(
      <Producto id={this.props.id} />,
      document.getElementById("prodContainer")
    );
    ReactDOM.render("", document.getElementById("Perfil"));
    ReactDOM.render("", document.getElementById("AdminCards"));
    ReactDOM.render("", document.getElementById("cateContainer"));
  }
  handleAñadir() {
    if (!this.state.added) {
      const ctx = this;
      const prod = {
        id: this.props.id
      };
      const prodsCarrito = CarritoComp.state.prods;
      prodsCarrito.push(prod);
      CarritoComp.setState({
        prods: prodsCarrito,
        filled: false,
        dataProds: []
      });
      this.setState({
        added: true
      });

      if (!isAdmin && isLogged) {
        toastr.info("Se añadira a carrito");
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
            const dats = {
              permit: "SI",
              idc: idcarr,
              idp: ctx.props.id
            };
            $.ajax({
              type: "POST",
              url: "phpModels/addCarrito.php",
              data: dats,
              success: function(response) {
                if (response.status == "OK") {
                  console.log("Guardado");
                }
              }
            });
          }
        });
      }
    }
  }
  handleRemover() {
    if (this.state.added) {
      console.log(this.props);
      const prodsCarrito = CarritoComp.state.prods;
      const tam = prodsCarrito.length;
      const prodsNew = [];
      for (let index = 0; index < tam; index++) {
        if (
          !(parseInt(prodsCarrito[index]["id"]) === parseInt(this.props.id))
        ) {
          prodsNew.push(prodsCarrito[index]);
        }
      }
      CarritoComp.setState({
        prods: prodsNew,
        filled: false,
        dataProds: []
      });
      this.setState({
        added: false
      });
    }
  }
  render() {
    if (!isAdmin && isLogged) {
      while (!CarritoComp.state.sinc) {}
      const prodsCarrito = CarritoComp.state.prods;
      const tam = prodsCarrito.length;
      const prodsNew = [];
      for (let index = 0; index < tam; index++) {
        if (parseInt(prodsCarrito[index]["id"]) === parseInt(this.props.id)) {
          toastr.info("ID:" + this.props.id + " añadido");
          this.setState({
            added: false
          });
        }
      }
    }
    return (
      <div className="card-producto  shadow-box  p-3 m-2 row">
        <div className="img-producto d-flex justify-content-center align-self-center col-12">
          <img src={this.props.img} className="img-fluid rounded" alt="" />
        </div>
        <div className="body-producto col-12 mt-2">
          <p className="row text-center">
            <span>{this.props.name}</span>
          </p>
          <p className="row text-center">
            <span>{textoLimitado(this.props.descr, 25)}...</span>
          </p>
          <p className="row text-center">
            <span>${this.props.price}.00</span>
          </p>
          <p className="row">
            <NavLink
              to={"compra/producto/" + this.props.id + "/" + this.props.name}
              className="col-12 btn btn-success btn-raised align-self-center"
            >
              {isAdmin ? "Vender" : "Comprar"}
            </NavLink>
            {this.state.added ? (
              <button className="btn btn-primary" onClick={this.handleRemover}>
                Remover
              </button>
            ) : (
              <button className="btn btn-primary" onClick={this.handleAñadir}>
                Añadir a carrito
              </button>
            )}
          </p>
        </div>
      </div>
    );
  }
}
