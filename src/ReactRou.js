// import {BrowserRouter,NavLink} from 'react-router-dom';
const {
  BrowserRouter,
  HashRouter,
  NavLink,
  Route,
  Router,
  Switch
} = ReactRouterDOM;

// Component
class ProductShortInfo extends React.Component {
  render() {
    return (
      <div className="product">
        <h3>Andress</h3>
        <p>Price: $900</p>
      </div>
    );
  }
}

// Component
class ProductFeature extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <h3>
        Some Features of Samsung Galaxy S9!
        {this.props.match.params.id}
      </h3>
    );
  }
}

// Component
class ProductImages extends React.Component {
  render() {
    return <h3>Some Images of Samsung Galaxy S9</h3>;
  }
}

// Component
class ProductComments extends React.Component {
  render() {
    return <h3>Some Customer Comments</h3>;
  }
}

var URLactual = window.location;

//console.log(URLactual);

class Product extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ProductShortInfo />
          <div className="product-nav">
            <NavLink to="/" activeClassName="selected">
              Feature
            </NavLink>

            <NavLink to="/images" activeClassName="selected">
              Images
            </NavLink>

            <NavLink to="/comments" activeClassName="selected">
              Comments
            </NavLink>
          </div>
          <div className="route-place">
            <Switch>
              <Route path="/:id" component={ProductFeature} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
/**
 *    <Route exact path="/images" exact component={ProductImages} />
              <Route path="/comments" exact component={ProductComments} />
 */
//
class App extends React.Component {
  render() {
    return <Product />;
  }
}

// Render
ReactDOM.render(<App />, document.getElementById("root"));
