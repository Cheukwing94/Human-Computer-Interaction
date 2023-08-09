import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../orderCSS.css";
import { order } from "../menu/FliterFood";

const CartItem = ({ name, price, description, picture, quantity, index, counting, removeItem }) => {
  useEffect(() => {
    document.body.className = "body-cart";
  }, []);

  const [count, setCount] = useState(quantity);

  const addcount = () => {
    if (count >= 0) {
      setCount(count + 1);
      order[index].quantity += 1;
      counting();
    }
  };

  const removecount = () => {
    if (count > 0) {
      order[index].quantity -= 1;
      setCount(count - 1);
      counting();
    }
  };

  const handleRemoveItem = () => {
    removeItem(index);
  }

  return (
    <div className="addedItem">
      <img src={picture} className="itemImg" alt={name} />
      <div className="NamePrice">
        <div className="itemName"> {name} </div>
        <div className="itemDescr"> {description} </div>
        <div className="itemQuantity">
          <span className="count-button">
            <AiOutlineMinus onClick={() => removecount()} />
          </span>
          <div className="count">{count}</div>
          <span className="count-button">
            <AiOutlinePlus onClick={() => addcount()} />
          </span>

        </div>
      </div>
      <div className="itemPrice"> £ {price}</div>
      <div className="cartBin">
        <RiDeleteBin6Line onClick={handleRemoveItem} />
      </div>
    </div>
  );
};

export default CartItem;
