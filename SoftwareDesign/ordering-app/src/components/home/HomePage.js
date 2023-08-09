import React, { useEffect } from "react";
import '../orderCSS.css'
import { Link } from 'react-router-dom'

const HomePage = () => {


    useEffect(() => {
        document.body.className = 'body-home';
    }, []);



    return (
        <Link to='/menu'>
            <div className="home">
                <div className="homelayout">
                    <div className="welcome">Welcome to ABC restaurant</div>
                    <div className="line"></div>
                    <div className="click">Click to start ordering!!!</div>
                </div>

            </div>
        </Link>
    )
}

export default HomePage;