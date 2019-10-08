var ProdsOption = null;
var imagenes = [];
var filesImg = [];
var imgsRutas = [];
class ProductosOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      prods: null,
      images: [],
      imgRutas: []
    };
    ProdsOption = this;
    this.handleGuardarImages = this.handleGuardarImages.bind(this);
    this.handleGuardar = this.handleGuardar.bind(this);
  }
  handleLimit() {
    toastr.options = {
      closeButton: true,
      positionClass: "toast-bottom-left",
      preventDuplicates: true,
      showDuration: "1000"
    };
    toastr.warning("Limite de imagenes alcanzada");
  }

  handleQuitarImg() {}
  handleGuardar() {
    toastr.options = {
      closeButton: true,
      positionClass: "toast-bottom-left",
      preventDuplicates: true,
      showDuration: "1000"
    };
    isError = false;
    const nombre = $("#name").val();
    const modelo = $("#model").val();
    const realp = $("#RealP").val();
    const pubp = $("#PubP").val();
    const descr = $("#desc").val();
    var stock = [];
    $("input", $("#sucurStock")).each(function() {
      const id = $(this)
        .prop("id")
        .charAt(5);
      const stk = {
        idti: id,
        stockti: $(this).val()
      };
      stock.push(stk);
    });
    console.log("Stokcs");
    console.log(stock);

    const marca = $("#selMarca")
      .find(":selected")
      .val();
    const proveedor = $("#selProveedor")
      .find(":selected")
      .val();
    var cates = [];

    $("input", $("#catesCheck")).each(function() {
      const id = $(this).prop("id");
      const cat = $(this).prop("checked");
      const dat = {
        idCat: id,
        val: cat
      };
      cates.push(dat);
    });
    var conta = 0;
    for (let i = 0; i < cates.length; i++) {
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
      const dat = {
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
        success: function(response) {
          toastr.info("Guardando...");
          console.log(response);

          if (status.response == "Error") {
            toastr.error("Hubo un error, verifica tu conexion");
            return;
          }
          if (response.status === "OK") {
            toastr.info("Se guardaron los datos principales");
            const id = response.id; //Id nuevo del producto

            /**
             * Se guardan las imagenes en la base de datos
             */
            var imagenes = ProdsOption.state.imgRutas;
            for (let i = 0; i < imagenes.length; i++) {
              const image = {
                permit: "SI",
                idp: id,
                tipo: imagenes[i]["ext"],
                dire: imagenes[i]["ruta"]
              };
              $.ajax({
                type: "POST",
                url: "phpModels/saveRP.php",
                data: image,
                success: function(response) {
                  console.log(response);

                  if (response.status == "success") {
                    toastr.options = {
                      closeButton: true,
                      positionClass: "toast-bottom-left",
                      preventDuplicates: true,
                      showDuration: "200"
                    };
                    toastr.info("Imagen #" + (i + 1) + " guardada");
                  }
                }
              });
            }
            /**
             * Se guardan las categorias
             */
            for (let j = 0; j < cates.length; j++) {
              if (cates[j]["val"]) {
                const cate = {
                  permit: "SI",
                  idP: id,
                  idC: cates[j]["idCat"]
                };
                $.ajax({
                  type: "POST",
                  url: "phpModels/newProdP2.php",
                  data: cate,
                  success: function(response) {
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
            for (let j = 0; j < stock.length; j++) {
              if (!isNaN(parseInt(stock[j]["stockti"]))) {
                if (parseInt(stock[j]["stockti"]) > 0) {
                  const stk = {
                    permit: "SI",
                    idP: id,
                    idT: stock[j]["idti"],
                    stok: stock[j]["stockti"]
                  };
                  $.ajax({
                    type: "POST",
                    url: "phpModels/newProdP3.php",
                    data: stk,
                    success: function(response) {
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
  handleNuevo() {}
  componentDidMount() {
    AccionesModalP1();
    $("#RealP").keypress(function(e) {
      return filterFloat(e, this);
    });
    $("#PubP").keypress(function(e) {
      return filterFloat(e, this);
    });
  }
  componentDidUpdate() {
    AccionesModalP2();
  }
  handleAñadir() {
    $("#imagenP").trigger("click");
  }

  handleGuardarImages() {
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
    const img = {
      url: tmppath
    };

    const datas = new FormData(document.getElementById("dataP"));
    datas.append("permit", "SI");
    $.ajax({
      type: "POST",
      url: "phpModels/saveCacheImagen.php",
      data: datas,
      cache: false,
      contentType: false,
      processData: false,
      success: function(response) {
        console.log(response);

        if (response.status === "InvalidFile") {
          toastr.error(
            "Archivos *." + response.ext + " no válidos, se requiere una imagen"
          );
          return;
        }
        if (response.status === "ExcededSize") {
          toastr.error("Tamaño máximo excedido (Máx. 3Mb)");
          return;
        }
        if (response.status === "OK") {
          imagenes.push(img);
          const rut = {
            ruta: response.ruta,
            ext: response.ext
          };
          imgsRutas.push(rut);
          ProdsOption.setState({
            images: imagenes,
            imgRutas: imgsRutas
          });
          ReactDOM.render(
            <Imgs data={imagenes} />,
            document.getElementById("ImgCont")
          );
          return;
        }
        toastr.error("Verifica tu conexión a internet");
      }
    });
  }
  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI"
      };

      $.ajax({
        type: "POST",
        url: "phpModels/getProdD.php",
        data: dat,

        success: function(response) {
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
          let tam = Object.keys(response).length;
          var prod = [];
          for (let index = 0; index < tam; index++) {
            prod.push(response[index]);
          }
          ProdsOption.setState({
            filled: true,
            prods: prod
          });
        }
      });
    }
    return (
      <div>
        <div
          id="btnAddDir"
          className="rounded-circle border border d-flex justify-content-center align-items-center"
          type="button"
          data-toggle="modal"
          data-target="#ModProd"
          data-id="0"
          onClick={this.handleNuevo}
        >
          Añadir
        </div>
        <div className="container pt-5 pr-5">
          {this.state.filled ? (
            this.state.prods.map(prod => <ProdEspecif datos={prod} />)
          ) : (
            <h4 className="text-center">No hay productos</h4>
          )}
          <div className="row">
            <div className="col">
              <div
                className="modal fade"
                id="ModProd"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="title">
                        {}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body container p-0 m-0">
                      <div className="row  scroll-content">
                        <div className="col">
                          <form
                            className="container"
                            enctype="multipart/form-data"
                            id="dataP"
                          >
                            <div className="row">
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Nombre
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="name"
                                />
                              </div>
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Modelo
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100"
                                  id="model"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Precio Real
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100 "
                                  id="RealP"
                                />
                              </div>
                              <div className="form-group col-12 col-md-6">
                                <label className="bmd-label-floating">
                                  Precio Publico
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-100 "
                                  id="PubP"
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="form-group col-12 ">
                                <label className="bmd-label-floating">
                                  Descripcion
                                </label>
                                <textarea
                                  className="form-control"
                                  name=""
                                  id="desc"
                                  cols="30"
                                  rows="3"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <span>Stock</span>
                              </div>
                              <div className="col-12" id="sucurStock" />
                            </div>
                            <div className="row">
                              <div
                                className="col-12 col-md-4"
                                id="optionsMar"
                              />
                              <div
                                className="col-12 col-md-4"
                                id="optionsProv"
                              />
                              <div
                                className="col-12 col-md-4"
                                id="optionsCates"
                              />
                            </div>

                            <div className="row p-1 shadow-box m-1">
                              <div className="col-12">
                                <h5>Imagenes (6 max.)</h5>
                              </div>
                              <div
                                className="col-12 d-flex flex-wrap"
                                id="ImgCont"
                              />
                            </div>
                            <div className="row">
                              <div className="col-12">
                                {this.state.images.length >= 6 ? (
                                  <a
                                    className="btn btn-primary "
                                    onClick={this.handleLimit}
                                  >
                                    Añadir imagen
                                  </a>
                                ) : (
                                  <a
                                    className="btn btn-primary"
                                    onClick={this.handleAñadir}
                                  >
                                    Añadir imagen
                                  </a>
                                )}
                                <input
                                  className="d-none"
                                  type="file"
                                  id="imagenP"
                                  name="imagenP"
                                  onChange={this.handleGuardarImages}
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="btnClose"
                        data-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        id="saveDir"
                        className="btn btn-primary btn-raised"
                        onClick={this.handleGuardar}
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Imgs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: this.props.data
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }
  componentDidMount() {
    const contx = this;
    $(".img-producto-mod").click(function() {
      const index = $(this)
        .prop("id")
        .charAt(3);
      const imag = ProdsOption.state.images;
      const imgr = ProdsOption.state.imgRutas;
      var imagN = [];
      var imgrN = [];
      for (let i = 0; i < imag.length; i++) {
        if (!(parseInt(i) == parseInt(index))) {
          imagN.push(imag[i]);
          imgrN.push(imgr[i]);
        } else {
          const dat = {
            dir: "../" + imgr[i]["ruta"]
          };

          $.ajax({
            type: "POST",
            url: "phpModels/delImg.php",
            data: dat,
            success: function(response) {}
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
  componentDidUpdate() {
    const contx = this;
    $(".img-producto-mod").click(function() {
      const index = $(this)
        .prop("id")
        .charAt(3);

      const imag = ProdsOption.state.images;
      const imgr = ProdsOption.state.imgRutas;
      var imagN = [];
      var imgrN = [];
      for (let i = 0; i < imag.length; i++) {
        if (!(parseInt(i) == parseInt(index))) {
          imagN.push(imag[i]);
          imgrN.push(imgr[i]);
        } else {
          const dat = {
            dir: "../" + imgr[i]["ruta"]
          };

          $.ajax({
            type: "POST",
            url: "phpModels/delImg.php",
            data: dat,
            success: function(response) {}
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

  render() {
    return (
      <div>
        {this.state.datas.map(function(img, index, array) {
          return (
            <img
              src={img.url}
              id={"idi" + index}
              className="img-producto-mod border rounded p-0 type-pointer"
            />
          );
        })}
      </div>
    );
  }
}

class ProdEspecif extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEliminar() {
    const dat = {
      permit: "SI",
      id: this.props.datos.id
    };
    $.ajax({
      type: "POST",
      url: "phpModels/delProd.php",
      data: dat,
      success: function(response) {
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
  render() {
    return (
      <div className="row m-1 shadow-sm">
        <div className="col">
          <div className="container">
            <div className="row container-dir rounded border p-3 m-2">
              <div class="col-6 ">
                <img
                  class="img-fluid rounded img-producto-det"
                  src={this.props.datos.foto}
                  alt=""
                />
              </div>
              <div className="col-12">
                <h6>{this.props.datos.nombre}</h6>
              </div>
              <div className="col-12 romper-texto">
                <p>
                  Marca: {this.props.datos.marca}
                  <br />
                  Modelo: {this.props.datos.modelo}
                  <br />
                  Precio: {this.props.datos.preciopub}
                  <br />
                  Decripcion: {textoLimitado(this.props.datos.desc, 35)}...
                  <br />
                  Proveedor :{this.props.datos.proveedor}
                </p>
              </div>
              <div className="col-12">
                <div className="container">
                  <div className="row mt-2">
                    <div className="col-5">
                      <a
                        href="#"
                        type="button"
                        data-toggle="modal"
                        data-target="#ModProd"
                        data-id={this.props.datos.id}
                      >
                        Modificar
                      </a>
                    </div>
                    <div className="col-5">
                      <button
                        className="btn btn-danger"
                        onClick={this.handleEliminar}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class OptSucur extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      sucur: null
    };
  }
  componentDidUpdate() {
    $("body").bootstrapMaterialDesign();
    $(".tipo-numero").on("input", function() {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  }
  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI"
      };
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getSucursales.php",
        data: dat,
        success: function(response) {
          console.log(response);

          if (response.status == "NoE") {
            return;
          }
          if (response.status == "Error") {
            return;
          }

          let tam = Object.keys(response).length;
          var marc = [];
          for (let index = 0; index < tam; index++) {
            marc.push(response[index]);
          }
          ctx.setState({
            sucur: marc,
            filled: true
          });
        }
      });
    }
    return (
      <div className="form-group">
        {this.state.filled
          ? this.state.sucur.map(suc => (
              <div>
                <label for="exampleInputName2" className="bmd-label-floating">
                  {suc.nombre}
                </label>
                <input
                  type="text"
                  className="form-control tipo-numero"
                  id={"sucur" + suc.id}
                />
              </div>
            ))
          : "No hay sucursales"}
      </div>
    );
  }
}

class OptionMarcas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      marcas: null
    };
  }
  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI"
      };
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getMarcas.php",
        data: dat,
        success: function(response) {
          console.log(response);

          if (response.status == "NoE") {
            return;
          }
          if (response.status == "Error") {
            return;
          }

          let tam = Object.keys(response).length;
          var marc = [];
          for (let index = 0; index < tam; index++) {
            marc.push(response[index]);
          }
          ctx.setState({
            marcas: marc,
            filled: true
          });
        }
      });
    }
    return (
      <div className="form-group">
        <label for="selMarca" className="bmd-label-floating">
          Marca
        </label>
        <select className="form-control" id="selMarca">
          {this.state.filled ? (
            this.state.marcas.map(marca => (
              <option value={marca.id} selected>
                {marca.nombre}
              </option>
            ))
          ) : (
            <option value="0" selected>
              Sin marcas
            </option>
          )}
        </select>
      </div>
    );
  }
}
class OptionCategorias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      cates: null
    };
  }
  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI"
      };
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getCategorias.php",
        data: dat,
        success: function(response) {
          console.log(response);

          if (response.status == "NoE") {
            return;
          }
          if (response.status == "Error") {
            return;
          }

          let tam = Object.keys(response).length;
          var cate = [];
          for (let index = 0; index < tam; index++) {
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
    return (
      <div className="form-group col-12 col-md-6">
        <label className="" for="inlineFormCustomSelectPref">
          Categoria
        </label>
        <div
          style={{ height: 100, width: 100, overflow: "auto" }}
          id="catesCheck"
        >
          {this.state.filled
            ? this.state.cates.map(cater => (
                <div className="checkbox">
                  <input className="cate-li" type="checkbox" id={cater.id} />{" "}
                  {cater.nombre}
                </div>
              ))
            : "Sin categorias"}
        </div>
      </div>
    );
  }
}
class MiniCheck extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="checkbox">
        <label>
          <input type="checkbox" /> {this.props.nombre}
        </label>
      </div>
    );
  }
}
class OptionProvee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filled: false,
      cates: null
    };
  }
  render() {
    if (!this.state.filled) {
      const dat = {
        permit: "SI"
      };
      const ctx = this;
      $.ajax({
        type: "POST",
        url: "phpModels/getProveedores.php",
        data: dat,
        success: function(response) {
          console.log(response);

          if (response.status == "NoE") {
            return;
          }
          if (response.status == "Error") {
            return;
          }

          let tam = Object.keys(response).length;
          var cate = [];
          for (let index = 0; index < tam; index++) {
            cate.push(response[index]);
          }
          ctx.setState({
            cates: cate,
            filled: true
          });
        }
      });
    }
    return (
      <div className="form-group">
        <label for="selProveedor" className="bmd-label-floating">
          Proveedor
        </label>
        <select className="form-control" id="selProveedor">
          {this.state.filled ? (
            this.state.cates.map(cater => (
              <option value={cater.id} selected>
                {cater.nombre}
              </option>
            ))
          ) : (
            <option value="0" selected>
              Sin proveedores
            </option>
          )}
        </select>
      </div>
    );
  }
}

function AccionesModalP1() {
  //AccionesDirs(this);

  $("#ModProd").on("show.bs.modal", function(event) {
    $(".tipo-precio").on("input", function() {
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
      ReactDOM.render(<OptionMarcas />, document.getElementById("optionsMar"));
      ReactDOM.render(<OptionProvee />, document.getElementById("optionsProv"));
      ReactDOM.render(
        <OptionCategorias />,
        document.getElementById("optionsCates")
      );
      ReactDOM.render(<OptSucur />, document.getElementById("sucurStock"));
    }
  });
}

function AccionesModalP2() {
  $("#ModProd").on("show.bs.modal", function(event) {
    $(".tipo-precio").on("input", function() {
      this.value = this.value.replace(/[^0-9.]/g, "");
    });
    var button = $(event.relatedTarget); // Button that triggered the modal
    idProd = button.data("id");
    ReactDOM.render(<OptionMarcas />, document.getElementById("optionsMar"));
    ReactDOM.render(<OptionProvee />, document.getElementById("optionsProv"));
    ReactDOM.render(
      <OptionCategorias />,
      document.getElementById("optionsCates")
    );
    $(".container").bootstrapMaterialDesign();
    ReactDOM.render(<OptSucur />, document.getElementById("sucurStock"));
    if (idProd > 0) {
      imagenes = [];
      filesImg = [];
      imgsRutas = [];
      const dat = {
        permit: "SI",
        id: idProd
      };
      $.ajax({
        type: "POST",
        url: "phpModels/getProDE.php",
        data: dat,
        success: function(response) {
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
          $('#selMarca option[value="' + response[0]["idmarca"] + '"]').prop(
            "selected",
            true
          );
          $(
            '#selProveedor option[value="' + response[0]["idproveedor"] + '"]'
          ).prop("selected", true);
          const dat = {
            permit: "SI",
            id: idProd
          };
          //Obtenemos sus categorias
          $.ajax({
            type: "POST",
            url: "phpModels/getCatesProd.php",
            data: dat,
            success: function(response) {
              let tam = Object.keys(response).length;
              for (let index = 0; index < tam; index++) {
                $("#catesCheck")
                  .find("#" + response[index]["id"])
                  .prop("checked", true);
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
        success: function(response) {
          console.log("Stocks");
          console.log(response);
          let tam = Object.keys(response).length;
          for (let index = 0; index < tam; index++) {
            $("#sucurStock")
              .find("#sucur" + response[index]["id"])
              .val(response[index]["stock"]);
          }
        }
      });
      //Obtenemos sus imagenes
      $.ajax({
        type: "POST",
        url: "phpModels/getImgsProd.php",
        data: dat,
        success: function(response) {
          let tam = Object.keys(response).length;
          for (let index = 0; index < tam; index++) {
            const img = {
              url: response[index].url
            };
            imagenes.push(img);
            ReactDOM.render(
              <Imgs data={imagenes} />,
              document.getElementById("ImgCont")
            );
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
    const tam = text.length;
    var nuevo = "";
    for (let index = 0; index < num; index++) {
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
