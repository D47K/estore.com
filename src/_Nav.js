class Inicio extends React.Component {
  constructor(props) {
    super(props);
  }
  handleInicio() {
    location.reload();
  }
  componentDidMount() {
    $(".nav-link").bootstrapMaterialDesign();
  }
  render() {
    return (
      <a id="Inicio" className="nav-link" href="#" onClick={this.handleInicio}>
        Inicio <span className="sr-only">(current)</span>
      </a>
    );
  }
}

class BtnBundles extends React.Component {
  constructor(props) {
    super(props);
    this.handleBundle = this.handleBundle.bind(this);
  }
  handleBundle() {}
  componentDidMount() {}
  componentDidUpdate() {
    $(".nav-link").bootstrapMaterialDesign();
  }
  render() {
    return (
      <a class="nav-link" href="#">
        Bundles
      </a>
    );
  }
}

//Utiliza _CategoriaMenu.js
//Utiliza _MarcaMenu.js
