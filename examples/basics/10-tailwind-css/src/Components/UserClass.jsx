import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };

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

  // componentDidMount() {
  //   this.timer = setInterval(() => console.log("Hi"), 1000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  render() {
    console.log(this.props.name + "child rendering");
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <div className="git-avatar-container">
          {" "}
          <img src={avatar_url} alt="DP" className="git-avatar" />
        </div>
        <h1>Name: {name}</h1>
        <h2>location: {location}</h2>

        {/* <p>count: {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count inc
        </button>
        <p>count2: {count2}</p> */}
      </div>
    );
  }
}

export default UserClass;
