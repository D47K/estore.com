class Producto extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      id: this.props.match.params.id,
      ready: false,
      detalles: null,
      img: null
    };
  }
  render() {
    if (!this.state.ready) {
      const dat = {
        permit: "SI",
        id: this.props.match.params.id
      };
      console.log("Datos");
      console.log(dat);

      var detail = [];
      var ctxx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getProducto.php",
        data: dat,
        success: function(response) {
          if (response.status == "NoE") {
            return;
          }
          if (response.status == "Error") {
            return;
          }
          var resp = response;
          $.ajax({
            type: "POST",
            url: "phpModels/getImgs.php",
            data: dat,
            success: function(respons) {
              console.log(respons);

              if (respons.status == "NoE") {
                return;
              }
              if (respons.status == "Error") {
                return;
              }
              imgsp = [];
              let tam = Object.keys(respons).length;
              console.log("Tam :" + tam);

              for (let index = 0; index < tam; index++) {
                imgsp.push(respons[index]);
              }
              ctxx.setState({
                ready: true,
                detalles: resp,
                img: imgsp
              });
            }
          });
        }
      });
    }
    return (
      <div className="col-12 bg-white mt-3 mb-3">
        <div className="row">
          {this.state.img != null && <ProductoImage medias={this.state.img} />}
          {this.state.ready && (
            <ProductoDetail
              id={this.state.detalles.id}
              prodName={this.state.detalles.nombre}
              price={this.state.detalles.precio}
              description={this.state.detalles.descr}
              stock={this.state.detalles.stock}
            />
          )}
        </div>
        <hr />
      </div>
    );
  }
}
/**
 *  <div className="row container-fluid comments p-2" id="commentContainer">
          <AllComments />
        </div>
 */
class ProductoImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-12 col-lg-8" id="ProdImage">
        <div className="row m-2">
          {this.props.medias.map(media => (
            <div className="col-4 col-lg-2">
              <img className="imgMini" src={media.url} alt="Imagen" />
            </div>
          ))}
        </div>
        <div className="row mb-3">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <img
              src="media/img/img1.jpg"
              className="img-fluid "
              id="FullImg"
              alt="FullImage"
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $(".imgMini").click(function(e) {
      $(".imgMini")
        .parent()
        .removeClass("border border-primary");
      console.log("success");
      const url = $(this).attr("src");
      $("#FullImg").attr("src", url);
      $(this)
        .parent()
        .addClass("border border-primary");
    });
  }
}

class ProductoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      added: false,
      err: false,
      errMes: ""
    };
    this.handleCompraVenta = this.handleCompraVenta.bind(this);
    this.handleAñadir = this.handleAñadir.bind(this);
    this.handleRemover = this.handleRemover.bind(this);
  }
  handleCompraVenta() {}
  handleAñadir() {
    if (!this.state.added) {
      const prod = {
        id: this.props.id
      };
      const prodsCarrito = CarritoComp.state.prods;
      prodsCarrito.push(prod);
      CarritoComp.setState({
        prods: prodsCarrito,
        filled: false
      });

      console.log(CarritoComp.state.prods);

      this.setState({
        added: true
      });
    } else {
      alert("Producto ya en el carrito");
      console.log("Producto ya en el carrito");
    }
  }
  handleRemover() {
    if (this.state.added) {
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
        filled: false
      });
      this.setState({
        added: false
      });
    }
  }
  componentDidMount() {
    const ctx = this;
    /*
    var altura = $("#detallesProd").offset().top;
    var bottom =
      altura + $("#detallesProd").height() + $("#detallesProd").height() / 2;
    var derecha =
      $(window).width() -
      ($("#detallesProd").offset().left + $("#detallesProd").outerWidth());
    var actual = $("#detallesProd").width() + 30;
    $(window).on("scroll", function() {
      if ($(window).scrollTop() > altura && $(window).width() > 768) {
        $("#detallesProd").addClass("hold-det-prod");
        $("#detallesProd").css("right", derecha + "px");
        $("#detallesProd").css("width", actual + "px");

        if ($(window).scrollTop() > bottom) {
          $("#detallesProd").addClass("d-none");
        } else {
          $("#detallesProd").removeClass("d-none");
        }
      } else {
        $("#detallesProd").removeClass("hold-det-prod");
        $("#detallesProd").css("right", "0px");
        $("#detallesProd").css("z-index", "0");
      }
    });
*/
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
      if (parseInt($("#iptCant").val()) > parseInt(ctx.props.stock)) {
        ctx.setState({
          err: true,
          errMes: "Cantidad no disponible"
        });
      } else {
        ctx.setState({
          err: false
        });
      }
    });
  }

  render() {
    return (
      <div className="col-12 col-lg-4 ">
        <div className="row">
          <div className="col-12 mt-3">
            <h3 className="text-center">
              <strong>{this.props.prodName}</strong>
            </h3>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-12">
            <span className="price">
              $<span>{this.props.price}</span>
            </span>
          </div>
        </div>
        <div className="row mt-3  ">
          <div className="col-12">
            <h6>Descripcion</h6>
          </div>
          <div classNAme="col-12 ">
            <p className="pl-4">{this.props.description}</p>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-12">
            <form>
              <div className="form-group row d-flex justify-content-center ">
                <label for="iptCant" class="col-sm-12 col-form-label ">
                  Cantidad
                </label>
                <div className="col-sm-12 p-3">
                  {this.state.err && (
                    <small className="form-text  text-danger">
                      {this.state.errMes}
                    </small>
                  )}
                  <input type="number" class="form-control" id="iptCant" />
                  <small className="form-text text-info">
                    {this.props.stock + " Disponibles"}
                  </small>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-4 ">
          <div className="col-12 col-lg-5 m-0 p-0 d-flex justify-content-center">
            <button class="btn btn-primary " onClick={this.handleCompraVenta}>
              {isAdmin ? "Vender" : "Comprar"}
            </button>
          </div>
          <div className="col-12 col-lg-6 m-0 p-0 d-flex justify-content-center">
            {this.state.added ? (
              <button className="btn btn-primary" onClick={this.handleRemove}>
                Remover
              </button>
            ) : (
              <button className="btn btn-primary" onClick={this.handleAñadir}>
                Añadir a carrito
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
