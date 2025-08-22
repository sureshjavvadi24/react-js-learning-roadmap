import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Redux/Slices/cartSlice";

const Cart = () => {
  const itemsList = useSelector((store) => store.cart.items);

  // console.log(itemsList);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-center items-center gap-10">
        <h1 className="font-bold text-2xl">Cart</h1>
        {itemsList.length !== 0 && (
          <button
            className="p-3 m-2 border-red-300 bg-black text-white rounded-lg cursor-pointer"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        )}
      </div>
      {itemsList.length === 0 && (
        <p className="p-5 m-10 font-bold bg-red-300 w-3/12 mx-auto rounded-2xl">
          Add items to the cart
        </p>
      )}
      <div className="w-6/12 mx-auto">
        <ItemList items={itemsList} />
      </div>
    </div>
  );
};

export default Cart;
