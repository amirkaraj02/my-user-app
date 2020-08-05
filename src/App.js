import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserList from "./components/user-list.component";
import createUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={UserList} />{" "}
      <Route path="/users" component={createUser} />{" "}
    </Router>
  );
}

export default App;
