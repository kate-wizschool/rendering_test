import React, { Component } from "react";
import "./App.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Feature from "./Feature";
import Home from "./Home";
import Image from "./Image";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Router>
          <header>
            <Link to="/home">
              <button>home</button>
            </Link>
            <Link to="/feature">
              <button>feature</button>
            </Link>
            <Link to="/image">
              <button>image</button>
            </Link>
          </header>
          <div></div>
          <main>
            <Route exact path="/home" component={Home} />
            <Route exact path="/feature" component={Feature} />
            <Route exact path="/image" component={Image} />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
