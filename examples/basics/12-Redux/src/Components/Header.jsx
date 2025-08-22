import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext); // pass the created context

  const cartItems = useSelector((store) => store.cart.items);

  // Don't do like this it make performance issue in the app

  // const store = useSelector((store) => store);

  // const carItems = store.cart.items

  // console.log(cartItems);

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
          <li className="font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>

          <button
            className="bg-gray-100 px-5 py-1 cursor-pointer"
            onClick={() => {
              loginStatus === "Login"
                ? setLoginStatus("logout")
                : setLoginStatus("Login");
            }}
          >
            {loginStatus}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
