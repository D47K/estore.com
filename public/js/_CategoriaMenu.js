var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Categorias = function (_React$Component) {
  _inherits(Categorias, _React$Component);

  function Categorias(props) {
    _classCallCheck(this, Categorias);

    var _this = _possibleConstructorReturn(this, (Categorias.__proto__ || Object.getPrototypeOf(Categorias)).call(this, props));

    _this.state = {
      filled: false,
      categorias: null
    };
    return _this;
  }

  _createClass(Categorias, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      $(".onCategoria").click(function (e) {
        var idC = $(this).attr("id");
        console.log("mandando " + idC);

        ReactDOM.render("", document.getElementById("cateContainer"));
        ReactDOM.render(React.createElement(Categoria, { id: idC }), document.getElementById("cateContainer"));
        ReactDOM.render("", document.getElementById("ProdCaro"));
        ReactDOM.render("", document.getElementById("Perfil"));
        ReactDOM.render("", document.getElementById("prodContainer"));
      });
      $("#lkCategoria").hover(function () {
        $("#Categorias").removeClass("d-none");
      }, function () {
        $("#Categorias").addClass("d-none");
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var cates = [];
        var dat = { permit: "SI" };
        var ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/getCategorias.php",
          data: dat,
          success: function success(response) {
            console.log("Yess");

            console.log(response);

            var tam = Object.keys(response).length;

            for (var index = 0; index < tam; index++) {
              cates.push(response[index]);
            }
            ctx.setState({
              filled: true,
              categorias: cates
            });
          }
        });
      }

      return React.createElement(
        HashRouter,
        null,
        React.createElement(
          "a",
          { "class": "nav-link", href: "#" },
          "Categorias"
        ),
        React.createElement(
          "ul",
          {
            "class": " rounded bg-light mylist  mt-0 pt-0 d-none animated bounceIn",
            id: "Categorias"
          },
          this.state.filled ? this.state.categorias.map(function (cate) {
            return React.createElement(
              "li",
              null,
              React.createElement(
                NavLink,
                { to: "/categoria/" + cate.id + "/" + cate.nombre },
                cate.nombre
              )
            );
          }) : "No hay categorias"
        )
      );
    }
  }]);

  return Categorias;
}(React.Component);

var Categoria = function (_React$Component2) {
  _inherits(Categoria, _React$Component2);

  function Categoria(props) {
    _classCallCheck(this, Categoria);

    var _this2 = _possibleConstructorReturn(this, (Categoria.__proto__ || Object.getPrototypeOf(Categoria)).call(this, props));

    _this2.state = {
      filled: false,
      items: null,
      cName: ""
    };
    return _this2;
  }

  _createClass(Categoria, [{
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
          url: "phpModels/getCategoria.php",
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
        { "class": "col-12 bg-white border  rounded mt-3 mb-3 border-success" },
        this.state.filled ? React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { "class": "row " },
            React.createElement(
              "h4",
              null,
              this.state.cName
            )
          ),
          React.createElement(
            "div",
            { "class": "row d-flex justify-content-centeralign-self-center flex-wrap text-center" },
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
          "Categoria vacia"
        )
      );
    }
  }]);

  return Categoria;
}(React.Component);