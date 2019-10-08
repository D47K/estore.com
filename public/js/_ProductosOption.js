var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProdsOption = null;
var imagenes = [];
var filesImg = [];
var imgsRutas = [];

var ProductosOption = function (_React$Component) {
  _inherits(ProductosOption, _React$Component);

  function ProductosOption(props) {
    _classCallCheck(this, ProductosOption);

    var _this = _possibleConstructorReturn(this, (ProductosOption.__proto__ || Object.getPrototypeOf(ProductosOption)).call(this, props));

    _this.state = {
      filled: false,
      prods: null,
      images: [],
      imgRutas: []
    };
    ProdsOption = _this;
    _this.handleGuardarImages = _this.handleGuardarImages.bind(_this);
    _this.handleGuardar = _this.handleGuardar.bind(_this);
    return _this;
  }

  _createClass(ProductosOption, [{
    key: "handleLimit",
    value: function handleLimit() {
      toastr.options = {
        closeButton: true,
        positionClass: "toast-bottom-left",
        preventDuplicates: true,
        showDuration: "1000"
      };
      toastr.warning("Limite de imagenes alcanzada");
    }
  }, {
    key: "handleQuitarImg",
    value: function handleQuitarImg() {}
  }, {
    key: "handleGuardar",
    value: function handleGuardar() {
      toastr.options = {
        closeButton: true,
        positionClass: "toast-bottom-left",
        preventDuplicates: true,
        showDuration: "1000"
      };
      isError = false;
      var nombre = $("#name").val();
      var modelo = $("#model").val();
      var realp = $("#RealP").val();
      var pubp = $("#PubP").val();
      var descr = $("#desc").val();
      var stock = [];
      $("input", $("#sucurStock")).each(function () {
        var id = $(this).prop("id").charAt(5);
        var stk = {
          idti: id,
          stockti: $(this).val()
        };
        stock.push(stk);
      });
      console.log("Stokcs");
      console.log(stock);

      var marca = $("#selMarca").find(":selected").val();
      var proveedor = $("#selProveedor").find(":selected").val();
      var cates = [];

      $("input", $("#catesCheck")).each(function () {
        var id = $(this).prop("id");
        var cat = $(this).prop("checked");
        var dat = {
          idCat: id,
          val: cat
        };
        cates.push(dat);
      });
      var conta = 0;
      for (var i = 0; i < cates.length; i++) {
        if (!cates[i]["val"]) {
          conta++;
        }
      }

      if (conta === cates.length) {
        toastr.error("Selecciona almenos una categoria");
        isError = true;
      }
      if (emptyt(nombre)) {
        toastr.error("Obligatorio un nombre");
        isError = true;
      }
      if (emptyt(modelo)) {
        toastr.error("Falta el modelo");
        isError = true;
      }
      if (emptyt(realp)) {
        toastr.error("Falta precio legitimo");
        isError = true;
      }
      if (emptyt(pubp)) {
        toastr.error("Falta precio publico");
        isError = true;
      }
      if (this.state.images.length < 1) {
        toastr.error("El producto debe tener minimo una imagen");
        isError = true;
      }
      if (parseInt(marca) === 0) {
        toastr.error("Selecciona una marca");
        isError = true;
      }
      if (parseInt(proveedor) === 0) {
        toastr.error("Selecciona un proveedor");
        isError = true;
      }
      if (emptyt(descr)) {
        toastr.error("Introduce una descripcion");
        isError = true;
      }

      if (!isError) {
        var dat = {
          permit: "SI",
          nombre: nombre,
          modelo: modelo,
          realp: realp,
          pubp: pubp,
          desc: descr,
          idm: marca,
          idp: proveedor
        };
        $.ajax({
          type: "POST",
          url: "phpModels/newProdP1.php",
          data: dat,
          success: function success(response) {
            toastr.info("Guardando...");
            console.log(response);

            if (status.response == "Error") {
              toastr.error("Hubo un error, verifica tu conexion");
              return;
            }
            if (response.status === "OK") {
              toastr.info("Se guardaron los datos principales");
              var id = response.id; //Id nuevo del producto

              /**
               * Se guardan las imagenes en la base de datos
               */
              var imagenes = ProdsOption.state.imgRutas;

              var _loop = function _loop(_i) {
                var image = {
                  permit: "SI",
                  idp: id,
                  tipo: imagenes[_i]["ext"],
                  dire: imagenes[_i]["ruta"]
                };
                $.ajax({
                  type: "POST",
                  url: "phpModels/saveRP.php",
                  data: image,
                  success: function success(response) {
                    console.log(response);

                    if (response.status == "success") {
                      toastr.options = {
                        closeButton: true,
                        positionClass: "toast-bottom-left",
                        preventDuplicates: true,
                        showDuration: "200"
                      };
                      toastr.info("Imagen #" + (_i + 1) + " guardada");
                    }
                  }
                });
              };

              for (var _i = 0; _i < imagenes.length; _i++) {
                _loop(_i);
              }
              /**
               * Se guardan las categorias
               */
              for (var j = 0; j < cates.length; j++) {
                if (cates[j]["val"]) {
                  var cate = {
                    permit: "SI",
                    idP: id,
                    idC: cates[j]["idCat"]
                  };
                  $.ajax({
                    type: "POST",
                    url: "phpModels/newProdP2.php",
                    data: cate,
                    success: function success(response) {
                      console.log(response);
                      if (response.status == "OK") {
                        toastr.success("Categorias guardadas");
                      }
                    }
                  });
                }
              }
              /**
               * Se guardan los stocks
               */
              for (var _j = 0; _j < stock.length; _j++) {
                if (!isNaN(parseInt(stock[_j]["stockti"]))) {
                  if (parseInt(stock[_j]["stockti"]) > 0) {
                    var stk = {
                      permit: "SI",
                      idP: id,
                      idT: stock[_j]["idti"],
                      stok: stock[_j]["stockti"]
                    };
                    $.ajax({
                      type: "POST",
                      url: "phpModels/newProdP3.php",
                      data: stk,
                      success: function success(response) {
                        console.log(response);
                        if (response.status == "OK") {
                          toastr.success("Stocks guardados");
                        }
                      }
                    });
                  }
                }
              }
              $("#btnClose").trigger("click");
            }
          }
        });
      }
    }
  }, {
    key: "handleNuevo",
    value: function handleNuevo() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccionesModalP1();
      $("#RealP").keypress(function (e) {
        return filterFloat(e, this);
      });
      $("#PubP").keypress(function (e) {
        return filterFloat(e, this);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccionesModalP2();
    }
  }, {
    key: "handleA\xF1adir",
    value: function handleAAdir() {
      $("#imagenP").trigger("click");
    }
  }, {
    key: "handleGuardarImages",
    value: function handleGuardarImages() {
      toastr.options = {
        closeButton: true,
        positionClass: "toast-bottom-left",
        preventDuplicates: true,
        showDuration: "1000"
      };
      var fileInput = document.getElementById("imagenP");
      files = fileInput.files;
      // cache files.length
      // localize file var in the loop
      var file = files[0];
      filesImg.push(file);
      var tmppath = URL.createObjectURL(file);
      var img = {
        url: tmppath
      };

      var datas = new FormData(document.getElementById("dataP"));
      datas.append("permit", "SI");
      $.ajax({
        type: "POST",
        url: "phpModels/saveCacheImagen.php",
        data: datas,
        cache: false,
        contentType: false,
        processData: false,
        success: function success(response) {
          console.log(response);

          if (response.status === "InvalidFile") {
            toastr.error("Archivos *." + response.ext + " no válidos, se requiere una imagen");
            return;
          }
          if (response.status === "ExcededSize") {
            toastr.error("Tamaño máximo excedido (Máx. 3Mb)");
            return;
          }
          if (response.status === "OK") {
            imagenes.push(img);
            var rut = {
              ruta: response.ruta,
              ext: response.ext
            };
            imgsRutas.push(rut);
            ProdsOption.setState({
              images: imagenes,
              imgRutas: imgsRutas
            });
            ReactDOM.render(React.createElement(Imgs, { data: imagenes }), document.getElementById("ImgCont"));
            return;
          }
          toastr.error("Verifica tu conexión a internet");
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var dat = {
          permit: "SI"
        };

        $.ajax({
          type: "POST",
          url: "phpModels/getProdD.php",
          data: dat,

          success: function success(response) {
            if (response.status) {
              if (response.status === "Error") {
                toastr.error("Hubo un error verifica conexion");
              }
              if (response.status === "NoE") {
                toastr.error("Hubo un error verifica conexion");
              }
              if (response.status === "NoH") {
                toastr.error("No hay productos");
              }
              return;
            }
            var tam = Object.keys(response).length;
            var prod = [];
            for (var index = 0; index < tam; index++) {
              prod.push(response[index]);
            }
            ProdsOption.setState({
              filled: true,
              prods: prod
            });
          }
        });
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          {
            id: "btnAddDir",
            className: "rounded-circle border border d-flex justify-content-center align-items-center",
            type: "button",
            "data-toggle": "modal",
            "data-target": "#ModProd",
            "data-id": "0",
            onClick: this.handleNuevo
          },
          "A\xF1adir"
        ),
        React.createElement(
          "div",
          { className: "container pt-5 pr-5" },
          this.state.filled ? this.state.prods.map(function (prod) {
            return React.createElement(ProdEspecif, { datos: prod });
          }) : React.createElement(
            "h4",
            { className: "text-center" },
            "No hay productos"
          ),
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(
              "div",
              { className: "col" },
              React.createElement(
                "div",
                {
                  className: "modal fade",
                  id: "ModProd",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "exampleModalLabel",
                  "aria-hidden": "true"
                },
                React.createElement(
                  "div",
                  { className: "modal-dialog", role: "document" },
                  React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                      "div",
                      { className: "modal-header" },
                      React.createElement("h5", { className: "modal-title", id: "title" }),
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "close",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        },
                        React.createElement(
                          "span",
                          { "aria-hidden": "true" },
                          "\xD7"
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-body container p-0 m-0" },
                      React.createElement(
                        "div",
                        { className: "row  scroll-content" },
                        React.createElement(
                          "div",
                          { className: "col" },
                          React.createElement(
                            "form",
                            {
                              className: "container",
                              enctype: "multipart/form-data",
                              id: "dataP"
                            },
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Nombre"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "name"
                                })
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Modelo"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100",
                                  id: "model"
                                })
                              )
                            ),
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Precio Real"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100 ",
                                  id: "RealP"
                                })
                              ),
                              React.createElement(
                                "div",
                                { className: "form-group col-12 col-md-6" },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Precio Publico"
                                ),
                                React.createElement("input", {
                                  type: "text",
                                  className: "form-control w-100 ",
                                  id: "PubP"
                                })
                              )
                            ),
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "form-group col-12 " },
                                React.createElement(
                                  "label",
                                  { className: "bmd-label-floating" },
                                  "Descripcion"
                                ),
                                React.createElement("textarea", {
                                  className: "form-control",
                                  name: "",
                                  id: "desc",
                                  cols: "30",
                                  rows: "3"
                                })
                              )
                            ),
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "col-12" },
                                React.createElement(
                                  "span",
                                  null,
                                  "Stock"
                                )
                              ),
                              React.createElement("div", { className: "col-12", id: "sucurStock" })
                            ),
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement("div", {
                                className: "col-12 col-md-4",
                                id: "optionsMar"
                              }),
                              React.createElement("div", {
                                className: "col-12 col-md-4",
                                id: "optionsProv"
                              }),
                              React.createElement("div", {
                                className: "col-12 col-md-4",
                                id: "optionsCates"
                              })
                            ),
                            React.createElement(
                              "div",
                              { className: "row p-1 shadow-box m-1" },
                              React.createElement(
                                "div",
                                { className: "col-12" },
                                React.createElement(
                                  "h5",
                                  null,
                                  "Imagenes (6 max.)"
                                )
                              ),
                              React.createElement("div", {
                                className: "col-12 d-flex flex-wrap",
                                id: "ImgCont"
                              })
                            ),
                            React.createElement(
                              "div",
                              { className: "row" },
                              React.createElement(
                                "div",
                                { className: "col-12" },
                                this.state.images.length >= 6 ? React.createElement(
                                  "a",
                                  {
                                    className: "btn btn-primary ",
                                    onClick: this.handleLimit
                                  },
                                  "A\xF1adir imagen"
                                ) : React.createElement(
                                  "a",
                                  {
                                    className: "btn btn-primary",
                                    onClick: this.handleAñadir
                                  },
                                  "A\xF1adir imagen"
                                ),
                                React.createElement("input", {
                                  className: "d-none",
                                  type: "file",
                                  id: "imagenP",
                                  name: "imagenP",
                                  onChange: this.handleGuardarImages
                                })
                              )
                            )
                          )
                        )
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "modal-footer" },
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          className: "btn btn-danger",
                          id: "btnClose",
                          "data-dismiss": "modal"
                        },
                        "Cancelar"
                      ),
                      React.createElement(
                        "button",
                        {
                          id: "saveDir",
                          className: "btn btn-primary btn-raised",
                          onClick: this.handleGuardar
                        },
                        "Guardar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ProductosOption;
}(React.Component);

var Imgs = function (_React$Component2) {
  _inherits(Imgs, _React$Component2);

  function Imgs(props) {
    _classCallCheck(this, Imgs);

    var _this2 = _possibleConstructorReturn(this, (Imgs.__proto__ || Object.getPrototypeOf(Imgs)).call(this, props));

    _this2.state = {
      datas: _this2.props.data
    };
    _this2.componentDidMount = _this2.componentDidMount.bind(_this2);
    _this2.componentDidUpdate = _this2.componentDidUpdate.bind(_this2);
    return _this2;
  }

  _createClass(Imgs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var contx = this;
      $(".img-producto-mod").click(function () {
        var index = $(this).prop("id").charAt(3);
        var imag = ProdsOption.state.images;
        var imgr = ProdsOption.state.imgRutas;
        var imagN = [];
        var imgrN = [];
        for (var i = 0; i < imag.length; i++) {
          if (!(parseInt(i) == parseInt(index))) {
            imagN.push(imag[i]);
            imgrN.push(imgr[i]);
          } else {
            var dat = {
              dir: "../" + imgr[i]["ruta"]
            };

            $.ajax({
              type: "POST",
              url: "phpModels/delImg.php",
              data: dat,
              success: function success(response) {}
            });
          }
        }
        imagenes = imagN;

        imgsRutas = imgrN;
        ProdsOption.setState({
          images: imagN,
          imgRutas: imgrN
        });
        contx.setState({
          datas: imagenes
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var contx = this;
      $(".img-producto-mod").click(function () {
        var index = $(this).prop("id").charAt(3);

        var imag = ProdsOption.state.images;
        var imgr = ProdsOption.state.imgRutas;
        var imagN = [];
        var imgrN = [];
        for (var i = 0; i < imag.length; i++) {
          if (!(parseInt(i) == parseInt(index))) {
            imagN.push(imag[i]);
            imgrN.push(imgr[i]);
          } else {
            var dat = {
              dir: "../" + imgr[i]["ruta"]
            };

            $.ajax({
              type: "POST",
              url: "phpModels/delImg.php",
              data: dat,
              success: function success(response) {}
            });
          }
        }
        imagenes = imagN;

        imgsRutas = imgrN;
        ProdsOption.setState({
          images: imagN,
          imgRutas: imgrN
        });
        contx.setState({
          datas: imagenes
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.datas.map(function (img, index, array) {
          return React.createElement("img", {
            src: img.url,
            id: "idi" + index,
            className: "img-producto-mod border rounded p-0 type-pointer"
          });
        })
      );
    }
  }]);

  return Imgs;
}(React.Component);

var ProdEspecif = function (_React$Component3) {
  _inherits(ProdEspecif, _React$Component3);

  function ProdEspecif(props) {
    _classCallCheck(this, ProdEspecif);

    return _possibleConstructorReturn(this, (ProdEspecif.__proto__ || Object.getPrototypeOf(ProdEspecif)).call(this, props));
  }

  _createClass(ProdEspecif, [{
    key: "handleEliminar",
    value: function handleEliminar() {
      var dat = {
        permit: "SI",
        id: this.props.datos.id
      };
      $.ajax({
        type: "POST",
        url: "phpModels/delProd.php",
        data: dat,
        success: function success(response) {
          console.log(response);
          if (response.status == "OK") {
            toastr.info("Producto eliminada");
            ProdsOption.setState({
              filled: false
            });
          } else {
            toastr.error("Error", "Intenta de nuevo");
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row m-1 shadow-sm" },
        React.createElement(
          "div",
          { className: "col" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "row container-dir rounded border p-3 m-2" },
              React.createElement(
                "div",
                { "class": "col-6 " },
                React.createElement("img", {
                  "class": "img-fluid rounded img-producto-det",
                  src: this.props.datos.foto,
                  alt: ""
                })
              ),
              React.createElement(
                "div",
                { className: "col-12" },
                React.createElement(
                  "h6",
                  null,
                  this.props.datos.nombre
                )
              ),
              React.createElement(
                "div",
                { className: "col-12 romper-texto" },
                React.createElement(
                  "p",
                  null,
                  "Marca: ",
                  this.props.datos.marca,
                  React.createElement("br", null),
                  "Modelo: ",
                  this.props.datos.modelo,
                  React.createElement("br", null),
                  "Precio: ",
                  this.props.datos.preciopub,
                  React.createElement("br", null),
                  "Decripcion: ",
                  textoLimitado(this.props.datos.desc, 35),
                  "...",
                  React.createElement("br", null),
                  "Proveedor :",
                  this.props.datos.proveedor
                )
              ),
              React.createElement(
                "div",
                { className: "col-12" },
                React.createElement(
                  "div",
                  { className: "container" },
                  React.createElement(
                    "div",
                    { className: "row mt-2" },
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "a",
                        {
                          href: "#",
                          type: "button",
                          "data-toggle": "modal",
                          "data-target": "#ModProd",
                          "data-id": this.props.datos.id
                        },
                        "Modificar"
                      )
                    ),
                    React.createElement(
                      "div",
                      { className: "col-5" },
                      React.createElement(
                        "button",
                        {
                          className: "btn btn-danger",
                          onClick: this.handleEliminar
                        },
                        "Eliminar"
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ProdEspecif;
}(React.Component);

var OptSucur = function (_React$Component4) {
  _inherits(OptSucur, _React$Component4);

  function OptSucur(props) {
    _classCallCheck(this, OptSucur);

    var _this4 = _possibleConstructorReturn(this, (OptSucur.__proto__ || Object.getPrototypeOf(OptSucur)).call(this, props));

    _this4.state = {
      filled: false,
      sucur: null
    };
    return _this4;
  }

  _createClass(OptSucur, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      $("body").bootstrapMaterialDesign();
      $(".tipo-numero").on("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var dat = {
          permit: "SI"
        };
        var ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/getSucursales.php",
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
            var marc = [];
            for (var index = 0; index < tam; index++) {
              marc.push(response[index]);
            }
            ctx.setState({
              sucur: marc,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        { className: "form-group" },
        this.state.filled ? this.state.sucur.map(function (suc) {
          return React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { "for": "exampleInputName2", className: "bmd-label-floating" },
              suc.nombre
            ),
            React.createElement("input", {
              type: "text",
              className: "form-control tipo-numero",
              id: "sucur" + suc.id
            })
          );
        }) : "No hay sucursales"
      );
    }
  }]);

  return OptSucur;
}(React.Component);

var OptionMarcas = function (_React$Component5) {
  _inherits(OptionMarcas, _React$Component5);

  function OptionMarcas(props) {
    _classCallCheck(this, OptionMarcas);

    var _this5 = _possibleConstructorReturn(this, (OptionMarcas.__proto__ || Object.getPrototypeOf(OptionMarcas)).call(this, props));

    _this5.state = {
      filled: false,
      marcas: null
    };
    return _this5;
  }

  _createClass(OptionMarcas, [{
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var dat = {
          permit: "SI"
        };
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
            var marc = [];
            for (var index = 0; index < tam; index++) {
              marc.push(response[index]);
            }
            ctx.setState({
              marcas: marc,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { "for": "selMarca", className: "bmd-label-floating" },
          "Marca"
        ),
        React.createElement(
          "select",
          { className: "form-control", id: "selMarca" },
          this.state.filled ? this.state.marcas.map(function (marca) {
            return React.createElement(
              "option",
              { value: marca.id, selected: true },
              marca.nombre
            );
          }) : React.createElement(
            "option",
            { value: "0", selected: true },
            "Sin marcas"
          )
        )
      );
    }
  }]);

  return OptionMarcas;
}(React.Component);

var OptionCategorias = function (_React$Component6) {
  _inherits(OptionCategorias, _React$Component6);

  function OptionCategorias(props) {
    _classCallCheck(this, OptionCategorias);

    var _this6 = _possibleConstructorReturn(this, (OptionCategorias.__proto__ || Object.getPrototypeOf(OptionCategorias)).call(this, props));

    _this6.state = {
      filled: false,
      cates: null
    };
    return _this6;
  }

  _createClass(OptionCategorias, [{
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var dat = {
          permit: "SI"
        };
        var ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/getCategorias.php",
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
            var cate = [];
            for (var index = 0; index < tam; index++) {
              cate.push(response[index]);
            }
            console.log("Categorias");
            console.log(cate);

            ctx.setState({
              cates: cate,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        { className: "form-group col-12 col-md-6" },
        React.createElement(
          "label",
          { className: "", "for": "inlineFormCustomSelectPref" },
          "Categoria"
        ),
        React.createElement(
          "div",
          {
            style: { height: 100, width: 100, overflow: "auto" },
            id: "catesCheck"
          },
          this.state.filled ? this.state.cates.map(function (cater) {
            return React.createElement(
              "div",
              { className: "checkbox" },
              React.createElement("input", { className: "cate-li", type: "checkbox", id: cater.id }),
              " ",
              cater.nombre
            );
          }) : "Sin categorias"
        )
      );
    }
  }]);

  return OptionCategorias;
}(React.Component);

var MiniCheck = function (_React$Component7) {
  _inherits(MiniCheck, _React$Component7);

  function MiniCheck(props) {
    _classCallCheck(this, MiniCheck);

    return _possibleConstructorReturn(this, (MiniCheck.__proto__ || Object.getPrototypeOf(MiniCheck)).call(this, props));
  }

  _createClass(MiniCheck, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "checkbox" },
        React.createElement(
          "label",
          null,
          React.createElement("input", { type: "checkbox" }),
          " ",
          this.props.nombre
        )
      );
    }
  }]);

  return MiniCheck;
}(React.Component);

var OptionProvee = function (_React$Component8) {
  _inherits(OptionProvee, _React$Component8);

  function OptionProvee(props) {
    _classCallCheck(this, OptionProvee);

    var _this8 = _possibleConstructorReturn(this, (OptionProvee.__proto__ || Object.getPrototypeOf(OptionProvee)).call(this, props));

    _this8.state = {
      filled: false,
      cates: null
    };
    return _this8;
  }

  _createClass(OptionProvee, [{
    key: "render",
    value: function render() {
      if (!this.state.filled) {
        var dat = {
          permit: "SI"
        };
        var ctx = this;
        $.ajax({
          type: "POST",
          url: "phpModels/getProveedores.php",
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
            var cate = [];
            for (var index = 0; index < tam; index++) {
              cate.push(response[index]);
            }
            ctx.setState({
              cates: cate,
              filled: true
            });
          }
        });
      }
      return React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { "for": "selProveedor", className: "bmd-label-floating" },
          "Proveedor"
        ),
        React.createElement(
          "select",
          { className: "form-control", id: "selProveedor" },
          this.state.filled ? this.state.cates.map(function (cater) {
            return React.createElement(
              "option",
              { value: cater.id, selected: true },
              cater.nombre
            );
          }) : React.createElement(
            "option",
            { value: "0", selected: true },
            "Sin proveedores"
          )
        )
      );
    }
  }]);

  return OptionProvee;
}(React.Component);

function AccionesModalP1() {
  //AccionesDirs(this);

  $("#ModProd").on("show.bs.modal", function (event) {
    $(".tipo-precio").on("input", function () {
      this.value = this.value.replace(/[^0-9.]/g, "");
    });
    var button = $(event.relatedTarget); // Button that triggered the modal
    idProd = button.data("id");
    modal = $("#ModProd");
    $(".container").bootstrapMaterialDesign();
    if (idProd == 0) {
      modal.find(".modal-title").text("Nuevo producto");
      imagenes = [];
      filesImg = [];
      imgsRutas = [];
      ReactDOM.render("", document.getElementById("ImgCont"));
      var modal = $("#ModProd");
      modal.find("#name").val("");
      modal.find("#model").val("");
      modal.find("#RealP").val("");
      modal.find("#PubP").val("");
      modal.find("#desc").val("");
      ReactDOM.render("", document.getElementById("optionsMar"));
      ReactDOM.render("", document.getElementById("optionsProv"));
      ReactDOM.render("", document.getElementById("optionsCates"));
      ReactDOM.render("", document.getElementById("sucurStock"));
      ReactDOM.render(React.createElement(OptionMarcas, null), document.getElementById("optionsMar"));
      ReactDOM.render(React.createElement(OptionProvee, null), document.getElementById("optionsProv"));
      ReactDOM.render(React.createElement(OptionCategorias, null), document.getElementById("optionsCates"));
      ReactDOM.render(React.createElement(OptSucur, null), document.getElementById("sucurStock"));
    }
  });
}

function AccionesModalP2() {
  $("#ModProd").on("show.bs.modal", function (event) {
    $(".tipo-precio").on("input", function () {
      this.value = this.value.replace(/[^0-9.]/g, "");
    });
    var button = $(event.relatedTarget); // Button that triggered the modal
    idProd = button.data("id");
    ReactDOM.render(React.createElement(OptionMarcas, null), document.getElementById("optionsMar"));
    ReactDOM.render(React.createElement(OptionProvee, null), document.getElementById("optionsProv"));
    ReactDOM.render(React.createElement(OptionCategorias, null), document.getElementById("optionsCates"));
    $(".container").bootstrapMaterialDesign();
    ReactDOM.render(React.createElement(OptSucur, null), document.getElementById("sucurStock"));
    if (idProd > 0) {
      imagenes = [];
      filesImg = [];
      imgsRutas = [];
      var dat = {
        permit: "SI",
        id: idProd
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getProDE.php",
        data: dat,
        success: function success(response) {
          if (response.status) {
            if (response.status == "Error") {
              return;
            }
            if (response.status == "NoE") {
              return;
            }
            if (response.status == "NoH") {
              return;
            }
          }
          var modal = $("#ModProd");
          modal.find(".modal-title").text("Modificar producto");
          modal.find("#name").val(response[0]["nombre"]);
          modal.find("#model").val(response[0]["modelo"]);
          modal.find("#RealP").val(response[0]["precioreal"]);
          modal.find("#PubP").val(response[0]["preciopub"]);
          modal.find("#desc").val(response[0]["desc"]);
          $('#selMarca option[value="' + response[0]["idmarca"] + '"]').prop("selected", true);
          $('#selProveedor option[value="' + response[0]["idproveedor"] + '"]').prop("selected", true);
          var dat = {
            permit: "SI",
            id: idProd
          };
          //Obtenemos sus categorias
          $.ajax({
            type: "POST",
            url: "phpModels/getCatesProd.php",
            data: dat,
            success: function success(response) {
              var tam = Object.keys(response).length;
              for (var index = 0; index < tam; index++) {
                $("#catesCheck").find("#" + response[index]["id"]).prop("checked", true);
              }
            }
          });
          $("#name").focus();
        }
      });
      //Obtenemos los stocks en cada tienda
      $.ajax({
        type: "POST",
        url: "phpModels/getStocks.php",
        data: dat,
        success: function success(response) {
          console.log("Stocks");
          console.log(response);
          var tam = Object.keys(response).length;
          for (var index = 0; index < tam; index++) {
            $("#sucurStock").find("#sucur" + response[index]["id"]).val(response[index]["stock"]);
          }
        }
      });
      //Obtenemos sus imagenes
      $.ajax({
        type: "POST",
        url: "phpModels/getImgsProd.php",
        data: dat,
        success: function success(response) {
          var tam = Object.keys(response).length;
          for (var index = 0; index < tam; index++) {
            var img = {
              url: response[index].url
            };
            imagenes.push(img);
            ReactDOM.render(React.createElement(Imgs, { data: imagenes }), document.getElementById("ImgCont"));
          }
        }
      });
    }
  });
}

function textoLimitado(text, num) {
  console.log("Recibido: " + text);
  console.log("Tamaño: " + text.length);
  if (text.length < num) {
    return text;
  } else {
    var tam = text.length;
    var nuevo = "";
    for (var index = 0; index < num; index++) {
      nuevo += text.charAt(index);
    }
    return nuevo;
  }
}

function filterFloat(evt, input) {
  // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
  var key = window.Event ? evt.which : evt.keyCode;
  var chark = String.fromCharCode(key);
  var tempValue = input.value + chark;
  if (key >= 48 && key <= 57) {
    if (filter(tempValue) === false) {
      return false;
    } else {
      return true;
    }
  } else {
    if (key == 8 || key == 13 || key == 0) {
      return true;
    } else if (key == 46) {
      if (filter(tempValue) === false) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
function filter(__val__) {
  var preg = /^([0-9]+\.?[0-9]{0,2})$/;
  if (preg.test(__val__) === true) {
    return true;
  } else {
    return false;
  }
}