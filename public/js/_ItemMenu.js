var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemCategoria = function (_React$Component) {
  _inherits(ItemCategoria, _React$Component);

  function ItemCategoria(props) {
    _classCallCheck(this, ItemCategoria);

    var _this = _possibleConstructorReturn(this, (ItemCategoria.__proto__ || Object.getPrototypeOf(ItemCategoria)).call(this, props));

    _this.state = {
      added: false
    };
    _this.handleCompraVenta = _this.handleCompraVenta.bind(_this);
    _this.handleAñadir = _this.handleAñadir.bind(_this);
    _this.handleRemover = _this.handleRemover.bind(_this);
    return _this;
  }

  _createClass(ItemCategoria, [{
    key: "handleCompraVenta",
    value: function handleCompraVenta() {
      ReactDOM.render(React.createElement(Producto, { id: this.props.id }), document.getElementById("prodContainer"));
      ReactDOM.render("", document.getElementById("Perfil"));
      ReactDOM.render("", document.getElementById("AdminCards"));
      ReactDOM.render("", document.getElementById("cateContainer"));
    }
  }, {
    key: "handleA\xF1adir",
    value: function handleAAdir() {
      if (!this.state.added) {
        var ctx = this;
        var prod = {
          id: this.props.id
        };
        var prodsCarrito = CarritoComp.state.prods;
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
              var dats = {
                permit: "SI",
                idc: idcarr,
                idp: ctx.props.id
              };
              $.ajax({
                type: "POST",
                url: "phpModels/addCarrito.php",
                data: dats,
                success: function success(response) {
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
  }, {
    key: "handleRemover",
    value: function handleRemover() {
      if (this.state.added) {
        console.log(this.props);
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
          filled: false,
          dataProds: []
        });
        this.setState({
          added: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!isAdmin && isLogged) {
        while (!CarritoComp.state.sinc) {}
        var prodsCarrito = CarritoComp.state.prods;
        var tam = prodsCarrito.length;
        var prodsNew = [];
        for (var index = 0; index < tam; index++) {
          if (parseInt(prodsCarrito[index]["id"]) === parseInt(this.props.id)) {
            toastr.info("ID:" + this.props.id + " añadido");
            this.setState({
              added: false
            });
          }
        }
      }
      return React.createElement(
        "div",
        { className: "card-producto  shadow-box  p-3 m-2 row" },
        React.createElement(
          "div",
          { className: "img-producto d-flex justify-content-center align-self-center col-12" },
          React.createElement("img", { src: this.props.img, className: "img-fluid rounded", alt: "" })
        ),
        React.createElement(
          "div",
          { className: "body-producto col-12 mt-2" },
          React.createElement(
            "p",
            { className: "row text-center" },
            React.createElement(
              "span",
              null,
              this.props.name
            )
          ),
          React.createElement(
            "p",
            { className: "row text-center" },
            React.createElement(
              "span",
              null,
              textoLimitado(this.props.descr, 25),
              "..."
            )
          ),
          React.createElement(
            "p",
            { className: "row text-center" },
            React.createElement(
              "span",
              null,
              "$",
              this.props.price,
              ".00"
            )
          ),
          React.createElement(
            "p",
            { className: "row" },
            React.createElement(
              NavLink,
              {
                to: "compra/producto/" + this.props.id + "/" + this.props.name,
                className: "col-12 btn btn-success btn-raised align-self-center"
              },
              isAdmin ? "Vender" : "Comprar"
            ),
            this.state.added ? React.createElement(
              "button",
              { className: "btn btn-primary", onClick: this.handleRemover },
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

  return ItemCategoria;
}(React.Component);