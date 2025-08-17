import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [appTheme, setAppTheme] = useState("Light");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-center px-2.5 py-5 shadow-md sticky top-0 z-1000 bg-white">
      <div className="w-[120px] h-16">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="w-full h-full object-cover rounded-full cursor-pointer"
        />
      </div>
      <div className="flex gap-2.5 items-center">
        <ul className="flex gap-2.5 cursor-pointer">
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
          className="bg-gray-100 px-5 py-1 cursor-pointer"
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
