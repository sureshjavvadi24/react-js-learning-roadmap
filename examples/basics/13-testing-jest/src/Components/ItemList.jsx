import { addItem } from "../Redux/Slices/cartSlice";
import { RES_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatchAction = useDispatch();

  const handleAddItem = (item) => {
    dispatchAction(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="m-2 p-2 border-gray-200 border-b text-left flex justify-between"
            data-testid="foodItems"
          >
            <div className=" w-9/12">
              <div className="py-2">
                <span> {item?.card?.info?.name}</span> -
                <span> ₹{item?.card?.info?.price / 100}</span>
              </div>
              <p className="text-xs"> {item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-2 relative">
              <div className="absolute bottom-0 mx-8">
                <button
                  className="px-4 py-1 bg-white text-green-500 rounded-md text-s cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
              <img src={RES_IMG_URL + item?.card?.info.imageId} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
