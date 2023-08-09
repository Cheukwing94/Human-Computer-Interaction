import React, { useState } from "react";
import '../orderCSS.css'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Notification from "../Notification/Notification";



const order = [];




const FliterFood = ({ name, description, price, picture, addNumber }) => {
    const [count, setCount] = useState(0);
    const [added, setAdded] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [message, setMessage] = useState("")
    const [quantityError, setQuantityError] = useState(false)

    const addcount = () => {
        if (count >= 0) {
            setCount(count + 1);
        }
    }

    const removecount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const addedItem = () => {
        if (count >= 0 && !added) {
            setAdded(added => !added);
        }
    }

    const removedItem = () => {
        if (count === 1) {
            setAdded(added => !added);
        }
    }

    const addbutton = (e) => {
        if (count >= 1) {
            order.push(
                {
                    name: name,
                    description: description,
                    quantity: count,
                    price: price,
                    picture: picture
                }
            )
            setAdded(added => !added);
            setShowNotification(true);
            setMessage(count + " " + name + " added to the cart");
            setCount(0);
            addNumber();


        } else if (!quantityError) {
            setQuantityError(false)
            setMessage("You should click + to increase the quantity of food!");
            setTimeout(() => {

                setShowNotification(true);
            }, 100);
        }

        if (showNotification) {

            setShowNotification(false);
            setTimeout(() => {

                setShowNotification(true);
            }, 100);

        }
    }


    return (

        <div className="foodCardGrid">
            <div className="foodCard">
                <span className="count-circle" style={{ display: added ? 'flex' : 'none' }}>{count}</span>

                <img src={picture} className="card-img-top" alt={name} />
                <div className="card-body">
                    <div className="card-text">{name}</div>
                    <div className="card-description">{description}</div>
                    <div className="card-text"> £ {price}</div>
                    <div className="amount">
                        <span className="count-button"><AiOutlineMinus onClick={() => { removecount(); removedItem(); }} /></span>
                        <div className="count">{count}</div>
                        <span className="count-button"><AiOutlinePlus onClick={() => { addcount(); addedItem(); }} /></span>
                        <button className="add-button" onClick={() => { addbutton(); }}>Add</button>
                    </div>
                    {showNotification && <Notification message={message} />}
                    {quantityError && <Notification message={message} />}
                </div>

            </div>
        </div>
    );
}


export { order };
export default FliterFood;