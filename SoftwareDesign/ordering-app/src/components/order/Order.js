import React, { useState } from "react";
import "../orderCSS.css";
import OrderItem from "./OrderItem";
import { confirmedOrders } from "../cart/Cart";

const Order = () => {
  const [show, setShow] = useState(false);



  return (
    <div className="orderRef">
      {confirmedOrders.map((orderWithRef) => {
        return (
          <>
            <div className="orderGrid">
              <div className="order-header">
                <div className="ref">Ref: #{orderWithRef.refNumber}</div>
                <div className="status"> Status: Preparing...</div>
              </div>
              <div className="line-order"></div>
              <div className="orderedItem">
                {orderWithRef.items.map((item, index) => {
                  return (
                    <OrderItem
                      key={index}
                      name={item.name}
                      quantity={item.quantity}
                    />
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
      <div className="waiter-btn">
        <button className="callWaiter" onClick={() => setShow(true)}>
          Call waiter

        </button>
      </div>
      {show ? <div className="message">Waiter is coming, please wait</div> : null}
    </div>
  )
}

export default Order;