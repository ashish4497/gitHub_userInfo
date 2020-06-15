import React from "react";
import Userdetail from "./userDetail";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ["titarakshay", "ashish4497", "dasjideepak"],
      id: 0,
      userInfo: {},
    };
  }

  handleChange = (index) => {
    // console.log(index, "check index");
    this.setState({ id: index });
  };

  componentDidMount() {
    let User = this.state.user;
    let id = this.state.id;

    fetch(`https://api.github.com/users/${User[id]}`).then((res) =>
      res.json().then((data) => {
        this.setState({ userInfo: data });
      })
    );
  }
  componentDidUpdate(prevProps, prevState) {
    let User = this.state.user;
    let id = this.state.id;
    if (prevState.id !== this.state.id) {
      return fetch(`https://api.github.com/users/${User[id]}`).then((res) =>
        res.json().then((data) => {
          this.setState({ userInfo: data });
        })
      );
    }
  }

  render() {
    let User = this.state.user;
    return (
      <>
        <div className="user_Name">
          <div>
            {User.map((user, index) => (
              <button onClick={() => this.handleChange(index)}>{user}</button>
            ))}
          </div>
          <Userdetail userProfile={this.state.userInfo} />
        </div>
      </>
    );
  }
}

export default Users;
