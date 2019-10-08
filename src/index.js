const { HashRouter, NavLink, Route, Switch, BrowserRouter } = ReactRouterDOM;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    console.log("Componente Cargado");
    console.log(this.props);
    const altura = $("nav").offset().top;
    $(window).on("scroll", function() {
      if ($(window).scrollTop() > altura) {
        $("nav").addClass("fixed-top");
        $("nav").addClass("animated fadeInDown");
      } else {
        $("nav").removeClass("fixed-top");
        $("nav").removeClass("animated fadeInDown");
      }
    });
    VerificadorLogin();
    $("body").bootstrapMaterialDesign();
  }

  render() {
    return (
      <HashRouter>
        <header>
          <div className="botron container-fluid " id="Botron" />
          <nav className="navbar navbar-expand-md  myNav ">
            <a className="navbar-brand" href="#">
              eStore
            </a>
            <div id="btnNav">
              <button
                className="navbar-toggler  "
                id="btnD"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="linHor" />
                <span className="linHor" />
                <span className="linHor" />
              </button>
            </div>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active " id="btnInicio">
                  <Inicio />
                </li>
                <li className="nav-item " id="lkCategoria">
                  <Categorias />
                </li>
                <li className="nav-item " id="lkMarca">
                  <Marcas />
                </li>
              </ul>
              <div id="dropUser" />
            </div>
          </nav>
        </header>
        <main>
          <section id="loginCtn" />

          <section>
            <Carrito />
          </section>
          <section class="container pt-0 mt-5  " id="Cprincipa">
            <Switch>
              <Route path="/" exact component={Carousels} />
              <Route
                path="/marca/:idm/compra/producto/:id"
                component={Producto}
              />
              <Route
                path="/categoria/:idm/compra/producto/:id"
                component={Producto}
              />
              <Route path="/marca/:id" component={Marca} />
              <Route path="/categoria/:id" component={Categoria} />
              <Route path="/carrito" exact component={CarroCompra} />
              <Route path="/administracion/admins" component={AdminContainer} />
              <Route path="/cuenta" exact component={Account} />
              <Route component={PageNotFound} />
            </Switch>
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-5  col-sm-5 col-md-3">
                <h5>Desarrolladores</h5>
                <ul className="list-unstyled">
                  <li>
                    <span className="link">Andres Hilario Vidal</span>
                  </li>
                  <li>
                    <span className="link">Adan Martinez Cruz</span>
                  </li>
                  <li>
                    <span className="link">Carlos Rey</span>
                  </li>
                  <li>
                    <span className="link">
                      Blanca Esther Hernandez Martinez
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-7 col-sm-6  col-md-4">
                <h5>Tienda física</h5>
                <address>
                  121, Clear Water Bay Road
                  <br />
                  Clear Water Bay, Kowloon
                  <br />
                  HONG KONG
                  <br />
                  Tel.: +852 1234 5678
                  <br />
                  Fax: +852 8765 4321
                  <br />
                  Email:{" "}
                  <a href="mailto:confusion@food.net">confusion@food.net</a>
                </address>
              </div>
              <div className="col-12 col-sm-12 col-md-4 align-self-center">
                <div className="text-center">
                  <a href="http://www.facebook.com/profile.php?id=">Facebook</a>
                  <a href="http://twitter.com/">Twitter</a>
                  <a href="mailto:">Correo electrónico</a>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto ">
                <p>© Copyright 2018 Ristorante Con Fusion</p>
              </div>
            </div>
          </div>
        </footer>
      </HashRouter>
    );
  }
}
