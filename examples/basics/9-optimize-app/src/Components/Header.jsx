import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [appTheme, setAppTheme] = useState("Light");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          {/* <li>
            <a href="/">Home</a>
          </li> */}
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>

        <button
          className="app-theme-btn"
          onClick={() => {
            appTheme === "Light" ? setAppTheme("Dark") : setAppTheme("Light");
          }}
        >
          {appTheme}
        </button>
      </div>
    </div>
  );
};

export default Header;
