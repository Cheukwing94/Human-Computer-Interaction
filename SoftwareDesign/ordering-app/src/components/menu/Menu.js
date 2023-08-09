import React, { useState, useEffect } from "react";
import FliterFood from "./FliterFood";
import { FliterFoodType } from "./FliterFoodType";
import { Food } from "./Food";
import '../orderCSS.css';


const Menu = ({ addNumber }) => {
    useEffect(() => {
        document.body.className = 'body-menu';
    }, []);

    const [selectedFood, setselectedFood] = useState('Sides');

    const [activeButton, setActiveButton] = useState('Sides');

    const showFoodItem = (e) => {
        setselectedFood(e.target.innerText);
        const name = e.target.name;
        setActiveButton(name);
    }


    return (

        <div className="foodMenu">
            <div className="Menu">
                {FliterFoodType.map((items) => {
                    return (

                        <button name={items.title}
                            className={activeButton === items.title ? "foodMenuItemNoClick" : "foodMenuItemClicked"}
                            onClick={showFoodItem}>
                            {items.title}
                        </button>

                    )
                })}
            </div>

            <div className="displayFood">
                {Food.map((food) => {
                    if (food.type === selectedFood) {

                        return (
                            <FliterFood
                                name={food.foodName}
                                description={food.description}
                                price={food.price}
                                picture={food.picture}
                                addNumber={addNumber}
                            />
                        )
                    }
                })}

            </div>

        </div>


    );

};

export default Menu;