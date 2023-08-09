import React from "react"
import '../orderCSS.css'

import { Link, Outlet } from 'react-router-dom'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiRestaurant } from 'react-icons/bi'

const Sidebarr = ({ basketNo }) => {

    return (
        <>
            <div className="Header">

                <div className="logoImg">
                    <BiRestaurant className="logoIcon" />
                    <div className="logoName"> ABC Restaurant</div>
                </div>

                <nav className="navMenu" id="myNavMenu">

                    <div className="menuItem"><Link to='/menu'> Menu </Link></div>
                    <div className="menuItem"> <Link to="/order"> Your Order </Link> </div>
                    <div className="cart-icon">
                        <Link to="/cart">
                            <HiOutlineShoppingCart fontSize="1.4em" />
                        </Link>
                    </div>
                    {basketNo > 0 && (
                        <div className="cart-count">{basketNo}</div>
                    )}


                </nav>
            </div>
            <div className="outlet">
                <Outlet />
            </div>
        </>
    );
};

export default Sidebarr;