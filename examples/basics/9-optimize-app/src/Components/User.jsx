import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>Name: {name}</h1>
      <h2>location: {location}</h2>

      <p>count: {count}</p>
      <p>count2: {count2}</p>
    </div>
  );
};

export default User;
