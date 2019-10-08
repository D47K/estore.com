var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Componente carrito*/
var CarritoComp = null;
var carritoProds = [];
var carritoDataProd = [];
var CarritoE = null;

var Carrito = function (_React$Component) {
  _inherits(Carrito, _React$Component);

  function Carrito(props) {
    _classCallCheck(this, Carrito);

    var _this = _possibleConstructorReturn(this, (Carrito.__proto__ || Object.getPrototypeOf(Carrito)).call(this, props));

    _this.state = {
      prods: [],
      dataProds: [],
      filled: false,
      sinc: false,
      sincred: false
    };
    CarritoComp = _this;

    _this.handleQuitar = _this.handleQuitar.bind(_this);
    return _this;
  }

  _createClass(Carrito, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $("#btnCarrito").click(function (e) {
        $(".list-carro").toggleClass("d-none");
      });
    }
  }, {
    key: "handleQuitar",
    value: function handleQuitar(id) {
      var produs = carritoProds;
      var newP = [];
      for (var i = 0; i < produs.length; i++) {
        if (!produs[i]["id"] === id) {
          newP.push(produs[i]);
        }
      }
      this.setState({
        prods: newP,
        filled: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!isAdmin && isLogged && !this.state.sincred) {
        var ctx = this;
        var dat = {
          permit: "SI",
          id: idUsuario
        };
        $.ajax({
          type: "POST",
          url: "phpModels/getCarrito.php",
          data: dat,
          success: function success(response) {
            var idcarr = response[0].id;
            toastr.info("recibido " + idcarr);
            var dats = {
              permit: "SI",
              id: idcarr
            };
            $.ajax({
              type: "POST",
              url: "phpModels/getCarritoIds.php",
              data: dats,
              success: function success(response) {
                var tam = Object.keys(response).length;
                var prodes = [];
                for (var i = 0; i < tam; i++) {
                  prodes.push(response[i]);
                }
                var val = ctx.state.sinc;
                var nval = !val;
                ctx.setState({
                  prods: prodes,
                  sinc: nval,
                  sincred: true
                });
                var val1 = CarritoE.state.sinc;
                var nval1 = !val1;
                CarritoE.setState({
                  sinc: nval1
                });
              }
            });
          }
        });
      }
      if (!this.state.filled) {
        for (var i = 0; i < this.state.prods.length; i++) {
          var _dat = {
            permit: "SI",
            id: this.state.prods[i]["id"]
          };
          $.ajax({
            type: "POST",
            url: "phpModels/getCarrProd.php",
            data: _dat,
            success: function success(response) {
              console.log(response);
              if (response.status == "OK") {
                var produ = {
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
      return React.createElement(
        HashRouter,
        null,
        React.createElement(
          "div",
          { className: "container " },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col " },
              React.createElement(
                "div",
                { id: "carrito", className: " animated fadeInRight " },
                React.createElement(
                  "div",
                  { className: "list-carro rounded border border-success  animated fadeInUp d-none " },
                  React.createElement(
                    "ul",
                    { className: "container mb-1" },
                    React.createElement(
                      "li",
                      { className: "mb-2" },
                      React.createElement(
                        "strong",
                        { className: "text-info" },
                        "Productos en el Carrito"
                      )
                    ),
                    this.state.filled ? this.state.dataProds.map(function (produ) {
                      return React.createElement(
                        "li",
                        { className: "row m-0" },
                        React.createElement(
                          "p",
                          { className: "col-12 pl-1 mb-0" },
                          produ.nombre
                        )
                      );
                    }) : React.createElement(
                      "li",
                      null,
                      "No hay productos en tu carrito"
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "mt-0 ml-1 d-flex justify-content-center " },
                    React.createElement(
                      NavLink,
                      {
                        to: "/carrito",
                        className: "btn btn-primary  btn-raised fixed-bottom box-shadow"
                      },
                      "Ir a carrito"
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "contenido d-flex justify-content-center align-items-center h-100" },
                  React.createElement(
                    "div",
                    { className: "centro", id: "btnCarrito" },
                    React.createElement(
                      "div",
                      { className: "numart align-self-center justify-self-center" },
                      React.createElement(
                        "strong",
                        null,
                        this.state.prods.length
                      )
                    ),
                    React.createElement("img", { src: "media/svg/cart.svg", alt: "Carrito" })
                  )
                ),
                React.createElement("div", { className: "base" })
              )
            )
          )
        )
      );
    }
  }]);

  return Carrito;
}(React.Component);
/* Fin componente carrito*/

var CarroCompra = function (_React$Component2) {
  _inherits(CarroCompra, _React$Component2);

  function CarroCompra(props) {
    _classCallCheck(this, CarroCompra);

    var _this2 = _possibleConstructorReturn(this, (CarroCompra.__proto__ || Object.getPrototypeOf(CarroCompra)).call(this, props));

    _this2.state = {
      err: false,
      errMes: "",
      sinc: false
    };
    CarritoE = _this2;
    return _this2;
  }

  _createClass(CarroCompra, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var altura = $("nav").offset().top;
      $("#Botron").addClass("d-none");
      $("nav").addClass("fixed-top");
      $(window).on("scroll", function () {
        $("nav").addClass("fixed-top");
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "container  bg-white rounded mt-2  shadow-box mb-5" },
        React.createElement(
          "div",
          { "class": "row p-3" },
          React.createElement(
            "h4",
            null,
            "Carrito"
          )
        ),
        React.createElement(
          "div",
          { "class": "row " },
          React.createElement(
            "div",
            { "class": "col-12" },
            React.createElement(
              "div",
              { "class": "container" },
              CarritoComp.state.filled ? CarritoComp.state.dataProds.map(function (prod) {
                return React.createElement(
                  "div",
                  null,
                  React.createElement(ItemCarrito, {
                    id: prod.id,
                    nombre: prod.nombre,
                    marca: prod.marca,
                    modelo: prod.modelo,
                    price: prod.precio,
                    descr: prod.descr
                  }),
                  React.createElement("hr", null)
                );
              }) : React.createElement(
                "div",
                {
                  style: { height: 300 },
                  className: "d-flex justify-content-center align-items-center"
                },
                React.createElement(
                  "h4",
                  { className: "text.center" },
                  "No hay productos en carrito"
                )
              )
            )
          )
        ),
        React.createElement("hr", null),
        CarritoComp.state.filled && React.createElement(
          "div",
          { className: "row " },
          React.createElement(
            "div",
            { className: "col-12 col-md m-2 d-flex justify-content-center" },
            CarritoComp.state.total
          ),
          React.createElement(
            "div",
            { className: "col-12 col-md m-2 d-flex justify-content-center" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col" },
                "Direccion:"
              )
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col" },
                "Enviar :"
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-12 col-md m-2 d-flex justify-content-center" },
            React.createElement(
              "button",
              { className: "btn btn-primary btn-raised" },
              "Comprar"
            )
          )
        ),
        " "
      );
    }
  }]);

  return CarroCompra;
}(React.Component);

var ItemCarrito = function (_React$Component3) {
  _inherits(ItemCarrito, _React$Component3);

  function ItemCarrito(props) {
    _classCallCheck(this, ItemCarrito);

    var _this3 = _possibleConstructorReturn(this, (ItemCarrito.__proto__ || Object.getPrototypeOf(ItemCarrito)).call(this, props));

    _this3.state = {
      err: false,
      errMes: "",
      cost: _this3.props.price,
      stock: 0,
      costst: _this3.props.price
    };
    _this3.componentDidMount = _this3.componentDidMount.bind(_this3);
    return _this3;
  }

  _createClass(ItemCarrito, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var contx = this;
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
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "row  p-2 m-2" },
        React.createElement(
          "div",
          { "class": "col-lg-2 col-12 d-flex justify-content-center align-items-center" },
          React.createElement("img", {
            src: "media/img/2.png",
            "class": "img-thumbnail img-carr-prod",
            alt: ""
          })
        ),
        React.createElement(
          "div",
          { "class": "col-lg-7 col-12 container " },
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
              "strong",
              { "class": "romper-texto header-producto-carro" },
              this.props.nombre
            )
          ),
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
              "p",
              { "class": "textito pr-3 d-none d-md-block " },
              this.props.descr
            )
          ),
          React.createElement(
            "div",
            { "class": "row text-center d-none d-lg-block" },
            React.createElement(
              "span",
              { "class": "col-md-6 col-12 " },
              "Marca: ",
              this.props.marca
            ),
            React.createElement(
              "span",
              { "class": "col-md-6 col-12" },
              "Modelo:",
              this.props.modelo
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "col-lg-3 col-12 container" },
          React.createElement(
            "div",
            { className: "form-group row  " },
            React.createElement(
              "label",
              { "for": "iptCant", "class": "col-sm-12  col-form-label ml-2 pl-1 " },
              "Cantidad"
            ),
            React.createElement(
              "div",
              { className: "col-sm-12 col-lg-12 " },
              this.state.err && React.createElement(
                "small",
                { className: "form-text  text-danger" },
                this.state.errMes
              ),
              React.createElement("input", {
                type: "number",
                "class": "form-control",
                id: "iptCant",
                placeholder: "Cantidad",
                min: "1"
              }),
              React.createElement(
                "small",
                { className: "form-text text-info" },
                this.state.stock,
                " Disponibles"
              )
            )
          ),
          React.createElement(
            "div",
            { "class": "row mt-2" },
            React.createElement(
              "div",
              { "class": "col-12 text-center" },
              React.createElement(
                "h3",
                null,
                "$",
                " ",
                !isNaN(this.state.cost) ? this.state.cost : this.state.costst
              )
            )
          )
        ),
        React.createElement(
          "div",
          { "class": "col-12  p-2 text-center" },
          React.createElement(
            "div",
            { "class": "container" },
            React.createElement(
              "div",
              { "class": "row" },
              React.createElement(
                "div",
                { "class": "col-md-6 col-12" },
                React.createElement(
                  "a",
                  { href: "#" },
                  "Quitar del carrito"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ItemCarrito;
}(React.Component);