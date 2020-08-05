import React, { Component } from "react";

import axios from "axios";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.OnChangeSurname = this.OnChangeSurname.bind(this);
    this.OnChangePersonalPhone = this.OnChangePersonalPhone.bind(this);
    this.OnChangeWorkPhone = this.OnChangeWorkPhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      surname: "",
      personalPhone: "",
      workPhone: "",
    };
  }

  onChangeUser(e) {
    this.setState({
      name: e.target.value,
    });
  }
  OnChangeSurname(e) {
    this.setState({
      surname: e.target.value,
    });
  }
  OnChangePersonalPhone(e) {
    this.setState({
      personalPhone: e.target.value,
    });
  }

  OnChangeWorkPhone(e) {
    this.setState({
      workPhone: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      surname: this.state.surname,
      personalPhone: this.state.personalPhone,
      workPhone: this.state.workPhone,
    };

    console.log(user);

    axios
      .post("http://localhost:4001/users/add", user)
      .then((res) => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <div className="container">
        <h3> Create New User </h3>{" "}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Name: </label>{" "}
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeUser}
            />{" "}
            <label> Surname: </label>{" "}
            <input
              type="text"
              required
              className="form-control"
              value={this.state.surname}
              onChange={this.OnChangeSurname}
            />{" "}
            <label> Personal Phone Number: </label>{" "}
            <input
              type="number"
              required
              className="form-control"
              value={this.state.personalPhone}
              onChange={this.OnChangePersonalPhone}
            />{" "}
            <label> Work Phone Number: </label>{" "}
            <input
              type="number"
              required
              className="form-control"
              value={this.state.workPhone}
              onChange={this.OnChangeWorkPhone}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>{" "}
        </form>{" "}
      </div>
    );
  }
}
