import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();

    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("parent Did mount");
  }

  render() {
    console.log("Parent rendering");
    return (
      <div>
        {/* <UserClass name={"Suresh class"} location={"Hyderabad class"} /> */}
        <UserClass name={"First"} location={"Hyderabad class"} />
        <UserClass name={"Second"} location={"Hyderabad class"} />
        {/* <UserClass name={"Third"} location={"Hyderabad class"} /> */}
        {/* <UserClass /> */}
      </div>
    );
  }
}

export default About;
