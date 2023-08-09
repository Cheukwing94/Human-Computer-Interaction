import React from "react";
import "../orderCSS.css"

const OrderItem = ({ name, quantity }) => {
    return (
        <div className="orderCard">
            <div className="ordered-detail">
                <div className="ordered-name">{name}</div>
                <div className="ordered-quantity">{quantity}</div>
            </div>
        </div>
    )
}

export default OrderItem;