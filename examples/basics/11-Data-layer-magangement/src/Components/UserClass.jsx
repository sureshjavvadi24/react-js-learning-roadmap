import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { name: "Dummy", location: "Dummy" },
    };

    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sureshjavvadi24");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(this.props.name + "child Did mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.userInfo != prevState.userInfo ||
      this.state.userInfo != prevState.userInfo
    ) {
      // write logic
    }

    console.log(this.props.name + "Child Did update");
  }

  componentWillUnmount() {
    console.log(this.props.name + "child will unmount");
  }

  render() {
    console.log(this.props.name + "child rendering");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="">
        <div className="">
          <img src={avatar_url} alt="DP" className="rounded-lg" />
        </div>
        <h1>Name: {name}</h1>
        <h2>location: {location}</h2>
        {
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h3 className="font-bold">User: {loggedInUser}</h3>
            )}
          </UserContext.Consumer>
        }
      </div>
    );
  }
}

export default UserClass;
