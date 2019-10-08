var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Componente conteneder carousels categoria*/
var Carousels = function (_React$Component) {
  _inherits(Carousels, _React$Component);

  function Carousels(props) {
    _classCallCheck(this, Carousels);

    return _possibleConstructorReturn(this, (Carousels.__proto__ || Object.getPrototypeOf(Carousels)).call(this, props));
  }

  _createClass(Carousels, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "col-12 mt-2" },
        React.createElement(CategoriaCaro, { categoria: "1" }),
        React.createElement(CategoriaCaro, { categoria: "2" }),
        React.createElement(CategoriaCaro, { categoria: "3" })
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }]);

  return Carousels;
}(React.Component);

/* Componente carousel categoria*/


var CategoriaCaro = function (_React$Component2) {
  _inherits(CategoriaCaro, _React$Component2);

  function CategoriaCaro(props) {
    _classCallCheck(this, CategoriaCaro);

    var _this2 = _possibleConstructorReturn(this, (CategoriaCaro.__proto__ || Object.getPrototypeOf(CategoriaCaro)).call(this, props));

    var prod1 = {
      res: "media/img/img1.jpg",
      decr: "Producto 1",
      price: "$50.00",
      id: "1"
    };
    var prod2 = {
      res: "media/img/img1.jpg",
      decr: "Producto 2",
      price: "$60.00",
      id: "2"
    };
    var prod3 = {
      res: "media/img/img1.jpg",
      decr: "Producto 3",
      price: "$60.00",
      id: "2"
    };
    var prod4 = {
      res: "media/img/img1.jpg",
      decr: "Producto 4",
      price: "$60.00",
      id: "2"
    };
    var prod5 = {
      res: "media/img/img1.jpg",
      decr: "Producto 5",
      price: "$60.00",
      id: "2"
    };
    var prod6 = {
      res: "media/img/img1.jpg",
      decr: "Producto 6",
      price: "$60.00",
      id: "2"
    };

    _this2.state = { prods: [prod1, prod2, prod3, prod4, prod5, prod6] };
    return _this2;
  }

  _createClass(CategoriaCaro, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        {
          className: "MultiCarousel container mt-0 animated fadeInLeft",
          "data-items": "1,2,4,4",
          "data-slide": "1",
          id: "MultiCarousel",
          "data-interval": "1000"
        },
        React.createElement(
          "div",
          {
            "class": "MultiCarousel-inner row",
            id: "categoria" + this.props.categoria
          },
          this.state.prods.map(function (prod) {
            return React.createElement(ItemCaro, {
              imgres: prod.res,
              descr: prod.decr,
              price: prod.price,
              idprod: prod.id
            });
          })
        ),
        React.createElement(
          "button",
          { "class": "btn btn-primary leftLst" },
          "<",
          " "
        ),
        React.createElement(
          "button",
          { "class": "btn btn-primary rightLst" },
          " ",
          ">",
          " "
        )
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("MontadoCarousel");
      require(["js/multiCarousel"], function () {
        console.log("Scripts cargaos :v");
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }]);

  return CategoriaCaro;
}(React.Component);
/* Fin componente carousel categoria*/

/* Componente item de carousel categoria*/

var ItemCaro = function (_React$Component3) {
  _inherits(ItemCaro, _React$Component3);

  function ItemCaro(props) {
    _classCallCheck(this, ItemCaro);

    var _this3 = _possibleConstructorReturn(this, (ItemCaro.__proto__ || Object.getPrototypeOf(ItemCaro)).call(this, props));

    _this3.state = {
      added: false
    };
    _this3.handleAñadir = _this3.handleAñadir.bind(_this3);
    _this3.handleRemover = _this3.handleRemover.bind(_this3);
    return _this3;
  }

  _createClass(ItemCaro, [{
    key: "handleA\xF1adir",
    value: function handleAAdir() {
      if (!this.state.added) {
        var prod = {
          id: this.props.idprod
        };
        var prodsCarrito = CarritoComp.state.prods;
        prodsCarrito.push(prod);
        CarritoComp.setState({
          prods: prodsCarrito
        });
        this.setState({
          added: true
        });
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
          if (!(parseInt(prodsCarrito[index]["id"]) === parseInt(this.props.idprod))) {
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
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "item" },
        React.createElement(
          "div",
          { className: "pad15 rounded row" },
          React.createElement(
            "p",
            { className: "lead col-6 col-md-12" },
            React.createElement("img", {
              src: this.props.imgres,
              className: "img-fluid img-card-prod",
              alt: ""
            })
          ),
          React.createElement(
            "p",
            { className: "col-6 col-md-12 d-flex align-items-center justify-content-center" },
            this.props.descr
          ),
          React.createElement(
            "p",
            { className: "col-6 col-md-12" },
            this.props.price
          ),
          React.createElement(
            "p",
            { className: "col-6 col-md-12 mt-1", id: this.props.id },
            React.createElement(
              "button",
              { className: "btn btn-success btn-raised" },
              "Comprar"
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

  return ItemCaro;
}(React.Component);
/* Fin componente item de carousel categoria*/