var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Marcas = function (_React$Component) {
  _inherits(Marcas, _React$Component);

  function Marcas(props) {
    _classCallCheck(this, Marcas);

    var _this = _possibleConstructorReturn(this, (Marcas.__proto__ || Object.getPrototypeOf(Marcas)).call(this, props));

    _this.state = {
      filled: false,
      marca: null
    };
    return _this;
  }

  _createClass(Marcas, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      $(".onMarca").click(function (e) {
        var idC = $(this).attr("id");
        console.log("mandando " + idC);

        ReactDOM.render("", document.getElementById("cateContainer"));
        ReactDOM.render(React.createElement(Marca, { id: idC }), document.getElementById("cateContainer"));
        ReactDOM.render("", document.getElementById("ProdCaro"));
        ReactDOM.render("", document.getElementById("Perfil"));
        ReactDOM.render("", document.getElementById("prodContainer"));
      });
      $("#lkMarca").hover(function () {
        $("#Marcas").removeClass("d-none");
      }, function () {
        $("#Marcas").addClass("d-none");
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var marcas = [];
        var dat = { permit: "SI" };
        var ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/getMarcas.php",
          data: dat,
          success: function success(response) {
            console.log(response);

            if (response.status == "NoE") {
              return;
            }
            if (response.status == "Error") {
              return;
            }
            var tam = Object.keys(response).length;
            for (var index = 0; index < tam; index++) {
              marcas.push(response[index]);
            }
            ctx.setState({
              filled: true,
              marca: marcas
            });
          }
        });
      }

      return React.createElement(
        HashRouter,
        null,
        React.createElement(
          "a",
          { "class": "nav-link ", href: "#" },
          "Marcas"
        ),
        React.createElement(
          "ul",
          {
            "class": " rounded bg-light mylist mt-0 pt-0  d-none animated bounceIn",
            id: "Marcas"
          },
          this.state.filled ? this.state.marca.map(function (marca) {
            return React.createElement(
              "li",
              null,
              React.createElement(
                NavLink,
                { to: "/marca/" + marca.id + "/" + marca.nombre },
                marca.nombre
              )
            );
          }) : React.createElement(
            "li",
            null,
            "No hay marcas"
          )
        )
      );
    }
  }]);

  return Marcas;
}(React.Component);

var Marca = function (_React$Component2) {
  _inherits(Marca, _React$Component2);

  function Marca(props) {
    _classCallCheck(this, Marca);

    var _this2 = _possibleConstructorReturn(this, (Marca.__proto__ || Object.getPrototypeOf(Marca)).call(this, props));

    _this2.state = {
      filled: false,
      items: null,
      cName: ""
    };
    console.log(props);
    return _this2;
  }

  _createClass(Marca, [{
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var dat = {
          permit: "SI",
          idC: this.props.match.params.id
        };
        var catName = "";
        var prods = [];
        var ctxx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/getMarca.php",
          data: dat,
          success: function success(response) {
            console.log(response);

            if (response.status == "NoE") {
              return;
            }
            if (response.status == "Error") {
              return;
            }
            catName = response[0]["nombrec"];
            var tam = Object.keys(response).length;
            for (var index = 0; index < tam; index++) {
              if (index == 0) {
                prods.push(response[index]);
              } else {
                var exist = false;
                for (var idx = 0; idx < prods.length; idx++) {
                  if (parseInt(prods[idx]["id"]) === parseInt(response[index]["id"])) {
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
      return React.createElement(
        "div",
        { "class": "col-12" },
        this.state.filled ? React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
              "h4",
              null,
              this.state.cName
            )
          ),
          React.createElement(
            "div",
            { "class": "row d-flex justify-content-center justify-content-lg-start align-content-center flex-wrap  text-center" },
            this.state.items.map(function (prod) {
              return React.createElement(ItemCategoria, {
                id: prod.id,
                name: prod.nombre,
                descr: prod.descr,
                price: prod.precio,
                img: prod.foto
              });
            })
          )
        ) : React.createElement(
          "h4",
          null,
          "Marca vacia"
        )
      );
    }
  }]);

  return Marca;
}(React.Component);