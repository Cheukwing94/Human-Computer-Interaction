import React, { useState, useEffect, useCallback } from "react";
import CartItem from "./CartItem";
import '../orderCSS.css';
import { order } from "../menu/FliterFood";
import Notification from "../Notification/Notification";

export const confirmedOrders = [];

const Cart = ({ clearBasket, removeBasket }) => {
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("")

  const counting = useCallback(() => {
    let newTotal = 0;
    for (const item of order) {
      newTotal += item.quantity * item.price;
    }
    setSubtotal(Math.round(newTotal * 100) / 100);
    setServiceFee(Math.round(newTotal * 0.1));
    setTotal(Math.round(newTotal * 100) / 100 + serviceFee);
  }, [serviceFee]);

  useEffect(() => {
    counting();
  }, [counting]);

  const confirmOrder = () => {
    if (total > 0) {
      setMessage("Thanks for ordering! The item(s) is confirmed, please check your order");
      const orderWithRef = {
        refNumber: Math.floor(Math.random() * 1000000),
        items: [...order]
      };
      confirmedOrders.push(orderWithRef);
      order.length = 0; // clear the current order list
      counting(); // update the Cart
      if (!showNotification) {

        setShowNotification(true);
        setTimeout(() => {

          setShowNotification(false);
        }, 4000);

      }
      clearBasket();
    } else if (!showNotification) {
      setMessage("There is no item added...");
      setShowNotification(true);
      setTimeout(() => {

        setShowNotification(false);
      }, 4000);
    }

  };

  const removeItem = (index) => {
    order.splice(index, 1);
    counting();
    removeBasket();
  };

  return (
    <div className="cart">
      <div className="cartItem">
        {order.map((item, index) => {
          return (
            <CartItem
              name={item.name}
              price={item.price}
              description={item.description}
              picture={item.picture}
              quantity={item.quantity}
              index={index}
              counting={counting}
              removeItem={removeItem}
            />
          );
        })}
      </div>
      <div className="line-detail"></div>
      <div className="detailss">
        <div className="detail"> Sub-total: £ {subtotal} </div>
        <div className="detail"> Sevices fee: £ {serviceFee}</div>
        <div className="detail"> Total: £ {total}</div>
      </div>
      <div className="confirm">
        <div className="confirm-button" onClick={confirmOrder}>
          Confirm
        </div>

      </div>
      {showNotification && <Notification message={message} />}
    </div>
  );
};

export default Cart;
