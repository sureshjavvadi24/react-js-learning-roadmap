import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ resCategory, showItem, setShowItem }) => {
  // const [showItem, setShowItem] = useState(false);

  return (
    <div>
      <div className="m-2 p-2 shadow-lg w-6/12 mx-auto">
        <div
          className="flex justify-between cursor-pointer"
          // onClick={() => setShowItem()}

          onClick={() => setShowItem(!showItem)}
        >
          <span className="font-semibold">
            {resCategory.title}({resCategory?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem && <ItemList items={resCategory?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
