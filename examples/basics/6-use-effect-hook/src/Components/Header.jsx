import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  // let appTheme = "Light";
  const [appTheme, setAppTheme] = useState("Light");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        {/* <button
          className="app-theme-btn"
          onClick={() => {
            appTheme = "Dark";
            console.log("Theme", appTheme);
          }}
        >
          {appTheme}
        </button> */}
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
