import React from "react";
import "./App.css";
import Home from "./Home.js";
import About from "./Aboutus.js";
import Calander from "./calander";
import Hour from "./Hourly";
import Cities from "./CitiesWeather.js";
import { Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <Link className="CustomLink" to="/">
            Dashboard
          </Link>
          <Link className="CustomLink" to="/hourly">
            Weather/Hour
          </Link>
          <Link className="CustomLink" to="/city">
            Weather/city
          </Link>
          <Link className="CustomLink" to="/calander">
            Calander
          </Link>
          <Link className="CustomLink" to="/about">
            About-us
          </Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/calander" component={Calander} />
          <Route path="/hourly" component={Hour} />
          <Route path="/city" component={Cities} />
        </Switch>
      </div>
    );
  }
}

export default App;

