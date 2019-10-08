var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Producto = function (_React$Component) {
  _inherits(Producto, _React$Component);

  function Producto(props) {
    _classCallCheck(this, Producto);

    var _this = _possibleConstructorReturn(this, (Producto.__proto__ || Object.getPrototypeOf(Producto)).call(this, props));

    console.log(props);

    _this.state = {
      id: _this.props.match.params.id,
      ready: false,
      detalles: null,
      img: null
    };
    return _this;
  }

  _createClass(Producto, [{
    key: "render",
    value: function render() {
      if (!this.state.ready) {
        var dat = {
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
          success: function success(response) {
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
              success: function success(respons) {
                console.log(respons);

                if (respons.status == "NoE") {
                  return;
                }
                if (respons.status == "Error") {
                  return;
                }
                imgsp = [];
                var tam = Object.keys(respons).length;
                console.log("Tam :" + tam);

                for (var index = 0; index < tam; index++) {
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
      return React.createElement(
        "div",
        { className: "col-12 bg-white mt-3 mb-3" },
        React.createElement(
          "div",
          { className: "row" },
          this.state.img != null && React.createElement(ProductoImage, { medias: this.state.img }),
          this.state.ready && React.createElement(ProductoDetail, {
            id: this.state.detalles.id,
            prodName: this.state.detalles.nombre,
            price: this.state.detalles.precio,
            description: this.state.detalles.descr,
            stock: this.state.detalles.stock
          })
        ),
        React.createElement("hr", null)
      );
    }
  }]);

  return Producto;
}(React.Component);
/**
 *  <div className="row container-fluid comments p-2" id="commentContainer">
          <AllComments />
        </div>
 */


var ProductoImage = function (_React$Component2) {
  _inherits(ProductoImage, _React$Component2);

  function ProductoImage(props) {
    _classCallCheck(this, ProductoImage);

    return _possibleConstructorReturn(this, (ProductoImage.__proto__ || Object.getPrototypeOf(ProductoImage)).call(this, props));
  }

  _createClass(ProductoImage, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "col-12 col-lg-8", id: "ProdImage" },
        React.createElement(
          "div",
          { className: "row m-2" },
          this.props.medias.map(function (media) {
            return React.createElement(
              "div",
              { className: "col-4 col-lg-2" },
              React.createElement("img", { className: "imgMini", src: media.url, alt: "Imagen" })
            );
          })
        ),
        React.createElement(
          "div",
          { className: "row mb-3" },
          React.createElement(
            "div",
            { className: "col-12 d-flex justify-content-center align-items-center" },
            React.createElement("img", {
              src: "media/img/img1.jpg",
              className: "img-fluid ",
              id: "FullImg",
              alt: "FullImage"
            })
          )
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      $(".imgMini").click(function (e) {
        $(".imgMini").parent().removeClass("border border-primary");
        console.log("success");
        var url = $(this).attr("src");
        $("#FullImg").attr("src", url);
        $(this).parent().addClass("border border-primary");
      });
    }
  }]);

  return ProductoImage;
}(React.Component);

var ProductoDetail = function (_React$Component3) {
  _inherits(ProductoDetail, _React$Component3);

  function ProductoDetail(props) {
    _classCallCheck(this, ProductoDetail);

    var _this3 = _possibleConstructorReturn(this, (ProductoDetail.__proto__ || Object.getPrototypeOf(ProductoDetail)).call(this, props));

    _this3.state = {
      id: _this3.props.id,
      added: false,
      err: false,
      errMes: ""
    };
    _this3.handleCompraVenta = _this3.handleCompraVenta.bind(_this3);
    _this3.handleAñadir = _this3.handleAñadir.bind(_this3);
    _this3.handleRemover = _this3.handleRemover.bind(_this3);
    return _this3;
  }

  _createClass(ProductoDetail, [{
    key: "handleCompraVenta",
    value: function handleCompraVenta() {}
  }, {
    key: "handleA\xF1adir",
    value: function handleAAdir() {
      if (!this.state.added) {
        var prod = {
          id: this.props.id
        };
        var prodsCarrito = CarritoComp.state.prods;
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
  }, {
    key: "handleRemover",
    value: function handleRemover() {
      if (this.state.added) {
        var prodsCarrito = CarritoComp.state.prods;
        var tam = prodsCarrito.length;
        var prodsNew = [];
        for (var index = 0; index < tam; index++) {
          if (!(parseInt(prodsCarrito[index]["id"]) === parseInt(this.props.id))) {
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
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var ctx = this;
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
      $("#iptCant").keyup(function (event) {
        if (event.shiftKey) {
          event.preventDefault();
          return;
        }
        if (event.keyCode == 46 || event.keyCode == 8) {} else {
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
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "col-12 col-lg-4 " },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-12 mt-3" },
            React.createElement(
              "h3",
              { className: "text-center" },
              React.createElement(
                "strong",
                null,
                this.props.prodName
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row mt-3 " },
          React.createElement(
            "div",
            { className: "col-12" },
            React.createElement(
              "span",
              { className: "price" },
              "$",
              React.createElement(
                "span",
                null,
                this.props.price
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row mt-3  " },
          React.createElement(
            "div",
            { className: "col-12" },
            React.createElement(
              "h6",
              null,
              "Descripcion"
            )
          ),
          React.createElement(
            "div",
            { classNAme: "col-12 " },
            React.createElement(
              "p",
              { className: "pl-4" },
              this.props.description
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row mt-3 " },
          React.createElement(
            "div",
            { className: "col-12" },
            React.createElement(
              "form",
              null,
              React.createElement(
                "div",
                { className: "form-group row d-flex justify-content-center " },
                React.createElement(
                  "label",
                  { "for": "iptCant", "class": "col-sm-12 col-form-label " },
                  "Cantidad"
                ),
                React.createElement(
                  "div",
                  { className: "col-sm-12 p-3" },
                  this.state.err && React.createElement(
                    "small",
                    { className: "form-text  text-danger" },
                    this.state.errMes
                  ),
                  React.createElement("input", { type: "number", "class": "form-control", id: "iptCant" }),
                  React.createElement(
                    "small",
                    { className: "form-text text-info" },
                    this.props.stock + " Disponibles"
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row mt-4 " },
          React.createElement(
            "div",
            { className: "col-12 col-lg-5 m-0 p-0 d-flex justify-content-center" },
            React.createElement(
              "button",
              { "class": "btn btn-primary ", onClick: this.handleCompraVenta },
              isAdmin ? "Vender" : "Comprar"
            )
          ),
          React.createElement(
            "div",
            { className: "col-12 col-lg-6 m-0 p-0 d-flex justify-content-center" },
            this.state.added ? React.createElement(
              "button",
              { className: "btn btn-primary", onClick: this.handleRemove },
              "Remover"
            ) : React.createElement(
              "button",
              { className: "btn btn-primary", onClick: this.handleAñadir },
              "A\xF1adir a carrito"
            )
          )
        )
      );
    }
  }]);

  return ProductoDetail;
}(React.Component);