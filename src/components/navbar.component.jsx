import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          User App{" "}
        </Link>{" "}
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/users/add" className="nav-link">
                Create User{" "}
              </Link>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
      </nav>
    );
  }
}
