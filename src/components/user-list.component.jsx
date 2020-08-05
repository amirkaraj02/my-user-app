import React, { Component } from "react";
import axios from "axios";

const UserL = (props) => {
  return (
    <tr>
      <td>{props.userl.name}</td>
      <td>{props.userl.surname}</td>
      <td>{props.userl.personalPhone}</td>
      <td>{props.userl.workPhone}</td>
    </tr>
  );
};

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] }; // users array for list view
  }

  //list of user from db
  componentDidMount() {
    axios
      .get("http://localhost:4001/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  userlist() {
    return this.state.users.map((currentUser) => {
      return <UserL userl={currentUser} key={currentUser._id} />;
    });
  }

  render() {
    return (
      <div className="container">
        <h3>User List</h3>
        <table className="table">
          <thead className="thead-inner">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Personal Phone</th>
              <th>Work Phone</th>
            </tr>
          </thead>
          <tbody>{this.userlist()}</tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
