/* Componente conteneder carousels categoria*/
class Carousels extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-12 mt-2">
        <CategoriaCaro categoria="1" />

        <CategoriaCaro categoria="2" />

        <CategoriaCaro categoria="3" />
      </div>
    );
  }
  componentDidMount() {}
}

/* Componente carousel categoria*/
class CategoriaCaro extends React.Component {
  constructor(props) {
    super(props);
    const prod1 = {
      res: "media/img/img1.jpg",
      decr: "Producto 1",
      price: "$50.00",
      id: "1"
    };
    const prod2 = {
      res: "media/img/img1.jpg",
      decr: "Producto 2",
      price: "$60.00",
      id: "2"
    };
    const prod3 = {
      res: "media/img/img1.jpg",
      decr: "Producto 3",
      price: "$60.00",
      id: "2"
    };
    const prod4 = {
      res: "media/img/img1.jpg",
      decr: "Producto 4",
      price: "$60.00",
      id: "2"
    };
    const prod5 = {
      res: "media/img/img1.jpg",
      decr: "Producto 5",
      price: "$60.00",
      id: "2"
    };
    const prod6 = {
      res: "media/img/img1.jpg",
      decr: "Producto 6",
      price: "$60.00",
      id: "2"
    };

    this.state = { prods: [prod1, prod2, prod3, prod4, prod5, prod6] };
  }

  render() {
    return (
      <div
        className="MultiCarousel container mt-0 animated fadeInLeft"
        data-items="1,2,4,4"
        data-slide="1"
        id="MultiCarousel"
        data-interval="1000"
      >
        <div
          class="MultiCarousel-inner row"
          id={"categoria" + this.props.categoria}
        >
          {this.state.prods.map(prod => (
            <ItemCaro
              imgres={prod.res}
              descr={prod.decr}
              price={prod.price}
              idprod={prod.id}
            />
          ))}
        </div>
        <button class="btn btn-primary leftLst">{"<"} </button>
        <button class="btn btn-primary rightLst"> {">"} </button>
      </div>
    );
  }
  componentDidMount() {
    console.log("MontadoCarousel");
    require(["js/multiCarousel"], function() {
      console.log("Scripts cargaos :v");
    });
  }
  componentWillMount() {}
}
/* Fin componente carousel categoria*/

/* Componente item de carousel categoria*/

class ItemCaro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false
    };
    this.handleAñadir = this.handleAñadir.bind(this);
    this.handleRemover = this.handleRemover.bind(this);
  }

  handleAñadir() {
    if (!this.state.added) {
      const prod = {
        id: this.props.idprod
      };
      const prodsCarrito = CarritoComp.state.prods;
      prodsCarrito.push(prod);
      CarritoComp.setState({
        prods: prodsCarrito
      });
      this.setState({
        added: true
      });
    }
  }
  handleRemover() {
    if (this.state.added) {
      const prodsCarrito = CarritoComp.state.prods;
      const tam = prodsCarrito.length;
      const prodsNew = [];
      for (let index = 0; index < tam; index++) {
        if (
          !(parseInt(prodsCarrito[index]["id"]) === parseInt(this.props.idprod))
        ) {
          prodsNew.push(prodsCarrito[index]);
        }
      }
      CarritoComp.setState({
        prods: prodsNew
      });
      this.setState({
        added: false
      });
    }
  }
  render() {
    return (
      <div className="item">
        <div className="pad15 rounded row">
          <p className="lead col-6 col-md-12">
            <img
              src={this.props.imgres}
              className="img-fluid img-card-prod"
              alt=""
            />
          </p>
          <p className="col-6 col-md-12 d-flex align-items-center justify-content-center">
            {this.props.descr}
          </p>
          <p className="col-6 col-md-12">{this.props.price}</p>
          <p className="col-6 col-md-12 mt-1" id={this.props.id}>
            <button className="btn btn-success btn-raised">Comprar</button>
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
/* Fin componente item de carousel categoria*/
