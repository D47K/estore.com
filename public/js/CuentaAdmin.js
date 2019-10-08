var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CuentaAdmin = function (_React$Component) {
  _inherits(CuentaAdmin, _React$Component);

  function CuentaAdmin(props) {
    _classCallCheck(this, CuentaAdmin);

    var _this = _possibleConstructorReturn(this, (CuentaAdmin.__proto__ || Object.getPrototypeOf(CuentaAdmin)).call(this, props));

    _this.handlePerfil = _this.handlePerfil.bind(_this);
    _this.handleDirecciones = _this.handleDirecciones.bind(_this);
    _this.handleCompras = _this.handleCompras.bind(_this);
    _this.handleGuardar = _this.handleGuardar.bind(_this);
    _this.state = {
      updated: false
    };
    return _this;
  }

  _createClass(CuentaAdmin, [{
    key: "handleGuardar",
    value: function handleGuardar() {}
  }, {
    key: "handlePerfil",
    value: function handlePerfil() {
      ReactDOM.render(React.createElement(PerfilAdmin, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionPerfil").addClass("selected");
    }
  }, {
    key: "handleAdministradores",
    value: function handleAdministradores() {
      ReactDOM.render(React.createElement(Administradores, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionVentas").addClass("selected");
    }
  }, {
    key: "handleVentas",
    value: function handleVentas() {
      ReactDOM.render(React.createElement(Ventas, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionVentas").addClass("selected");
    }
  }, {
    key: "handlePedidosAtendidos",
    value: function handlePedidosAtendidos() {
      ReactDOM.render(React.createElement(PedidosAtendidos, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionPedidosAtt").addClass("selected");
    }
  }, {
    key: "handlePedidosCola",
    value: function handlePedidosCola() {
      ReactDOM.render(React.createElement(PedidosEnCola, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionPedidosCola").addClass("selected");
    }
  }, {
    key: "handleProductos",
    value: function handleProductos() {
      ReactDOM.render(React.createElement(ProductosActuales, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionProductos").addClass("selected");
    }
  }, {
    key: "handleProveedores",
    value: function handleProveedores() {
      ReactDOM.render(React.createElement(Proveedores, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionProveedor").addClass("selected");
    }
  }, {
    key: "handleSucursales",
    value: function handleSucursales() {
      ReactDOM.render(React.createElement(Sucursales, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionSucursal").addClass("selected");
    }
  }, {
    key: "handleMarcas",
    value: function handleMarcas() {
      ReactDOM.render(React.createElement(Marcas, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionMarcas").addClass("selected");
    }
  }, {
    key: "handleCategorias",
    value: function handleCategorias() {
      ReactDOM.render(React.createElement(Categorias, { id: this.props.id }), document.getElementById("PanelAcc"));
      $(".selected").removeClass("selected");
      $("#optionCategorias").addClass("selected");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row bg-white m-md-3 rounded shadow-box p-md-3" },
        React.createElement(
          "div",
          { className: "col-12 col-md-3 options-account " },
          React.createElement(
            "div",
            { className: "container m-0 p-0" },
            React.createElement(
              "div",
              {
                className: "row option-account selected",
                id: "optionPerfil",
                type: "button",
                onClick: this.handlePerfil
              },
              React.createElement(
                "div",
                { className: "col " },
                "Perfil"
              )
            ),
            React.createElement(
              "div",
              { className: "row option-account", id: "optionAdmins", type: "button" },
              React.createElement(
                "div",
                { className: "col " },
                "Administradores"
              )
            ),
            React.createElement(
              "div",
              { className: "row option-account", id: "optionVentas", type: "button" },
              React.createElement(
                "div",
                { className: "col " },
                "Ventas"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionPedidosAtt",
                type: "button"
              },
              React.createElement(
                "div",
                { className: "col " },
                "Pedidos atendidos"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionPedidosCola",
                type: "button"
              },
              React.createElement(
                "div",
                { className: "col " },
                "Pedidos en cola"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionProductos",
                type: "button"
              },
              React.createElement(
                "div",
                { className: "col " },
                "Productos"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionProveedor",
                type: "button"
              },
              React.createElement(
                "div",
                { className: "col " },
                "Proveedores"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionSucursal",
                type: "button"
              },
              React.createElement(
                "div",
                { className: "col " },
                "Sucursales"
              )
            ),
            React.createElement(
              "div",
              { className: "row option-account", id: "optionMarcas", type: "button" },
              React.createElement(
                "div",
                { className: "col " },
                "Marcas"
              )
            ),
            React.createElement(
              "div",
              {
                className: "row option-account",
                id: "optionCategorias",
                type: "button"
              },
              React.createElement(
                "div",
                { className: "col " },
                "Categorias"
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-12 col-md-9", id: "PanelAcc" },
          React.createElement(PerfilAdmin, { id: this.props.id })
        )
      );
    }
  }]);

  return CuentaAdmin;
}(React.Component);

var PerfilAdmin = function (_React$Component2) {
  _inherits(PerfilAdmin, _React$Component2);

  function PerfilAdmin(props) {
    _classCallCheck(this, PerfilAdmin);

    return _possibleConstructorReturn(this, (PerfilAdmin.__proto__ || Object.getPrototypeOf(PerfilAdmin)).call(this, props));
  }

  _createClass(PerfilAdmin, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return PerfilAdmin;
}(React.Component);

var Administradores = function (_React$Component3) {
  _inherits(Administradores, _React$Component3);

  function Administradores(props) {
    _classCallCheck(this, Administradores);

    return _possibleConstructorReturn(this, (Administradores.__proto__ || Object.getPrototypeOf(Administradores)).call(this, props));
  }

  _createClass(Administradores, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return Administradores;
}(React.Component);

var Ventas = function (_React$Component4) {
  _inherits(Ventas, _React$Component4);

  function Ventas(props) {
    _classCallCheck(this, Ventas);

    return _possibleConstructorReturn(this, (Ventas.__proto__ || Object.getPrototypeOf(Ventas)).call(this, props));
  }

  _createClass(Ventas, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return Ventas;
}(React.Component);

var PedidosAtendidos = function (_React$Component5) {
  _inherits(PedidosAtendidos, _React$Component5);

  function PedidosAtendidos(props) {
    _classCallCheck(this, PedidosAtendidos);

    return _possibleConstructorReturn(this, (PedidosAtendidos.__proto__ || Object.getPrototypeOf(PedidosAtendidos)).call(this, props));
  }

  _createClass(PedidosAtendidos, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return PedidosAtendidos;
}(React.Component);

var PedidosEnCola = function (_React$Component6) {
  _inherits(PedidosEnCola, _React$Component6);

  function PedidosEnCola(props) {
    _classCallCheck(this, PedidosEnCola);

    return _possibleConstructorReturn(this, (PedidosEnCola.__proto__ || Object.getPrototypeOf(PedidosEnCola)).call(this, props));
  }

  _createClass(PedidosEnCola, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return PedidosEnCola;
}(React.Component);

var ProductosActuales = function (_React$Component7) {
  _inherits(ProductosActuales, _React$Component7);

  function ProductosActuales(props) {
    _classCallCheck(this, ProductosActuales);

    return _possibleConstructorReturn(this, (ProductosActuales.__proto__ || Object.getPrototypeOf(ProductosActuales)).call(this, props));
  }

  _createClass(ProductosActuales, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return ProductosActuales;
}(React.Component);

var Proveedores = function (_React$Component8) {
  _inherits(Proveedores, _React$Component8);

  function Proveedores(props) {
    _classCallCheck(this, Proveedores);

    return _possibleConstructorReturn(this, (Proveedores.__proto__ || Object.getPrototypeOf(Proveedores)).call(this, props));
  }

  _createClass(Proveedores, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return Proveedores;
}(React.Component);

var Sucursales = function (_React$Component9) {
  _inherits(Sucursales, _React$Component9);

  function Sucursales(props) {
    _classCallCheck(this, Sucursales);

    return _possibleConstructorReturn(this, (Sucursales.__proto__ || Object.getPrototypeOf(Sucursales)).call(this, props));
  }

  _createClass(Sucursales, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return Sucursales;
}(React.Component);

var Marcas = function (_React$Component10) {
  _inherits(Marcas, _React$Component10);

  function Marcas(props) {
    _classCallCheck(this, Marcas);

    return _possibleConstructorReturn(this, (Marcas.__proto__ || Object.getPrototypeOf(Marcas)).call(this, props));
  }

  _createClass(Marcas, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return Marcas;
}(React.Component);

var Categorias = function (_React$Component11) {
  _inherits(Categorias, _React$Component11);

  function Categorias(props) {
    _classCallCheck(this, Categorias);

    return _possibleConstructorReturn(this, (Categorias.__proto__ || Object.getPrototypeOf(Categorias)).call(this, props));
  }

  _createClass(Categorias, [{
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return Categorias;
}(React.Component);