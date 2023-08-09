import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineCalendar, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { CiHospital1 } from 'react-icons/ci'


const NavBar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState(getNavbarWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setNavbarWidth(getNavbarWidth());
  }, [isHovering]);

  function getNavbarWidth() {
    const width = window.innerWidth >= 750
      ? isHovering ? 130 : 50
      : 0;
    return width
  }

  function handleResize() {
    setNavbarWidth(getNavbarWidth());
  }

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  return (
    <>
      <div className="navbar">
        <div className="Header">
          <CiHospital1 className="headerIcon" />
          <div className="logoImg">ABC Hosiptal Patient Diary</div>
        </div>
        <div className="patient-name">
          Hello ABC patient, how is your feeling today?
        </div>
        <div className="menu">
          <nav
            className="navMenu"
            id="myNavMenu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="menuItem">
              <Link to="/journey">
                <BsFillJournalBookmarkFill style={{ fontSize: "1.5rem" }} />
                {isHovering && window.innerWidth >= 750 && <span>Journal</span>}
              </Link>
            </div>
            <div className="menuItem">
              <Link to="/calendar">
                <AiOutlineCalendar style={{ fontSize: "1.5rem" }} />
                {isHovering && window.innerWidth >= 750 && <span>Calendar</span>}
              </Link>
            </div>
            <div className="menuItem">
              <Link to="/symptoms">
                <MdOutlineEmojiEmotions style={{ fontSize: "1.5rem" }} />
                {isHovering && window.innerWidth >= 750 && <span>Symptoms</span>}
              </Link>
            </div>
            <div className="menuItem">
              <Link to="/settings">
                <AiOutlineSetting style={{ fontSize: "1.5rem" }} />
                {isHovering && window.innerWidth >= 750 && <span>Settings</span>}
              </Link>
            </div>
          </nav>
          <div className="outlet" style={{ marginLeft: navbarWidth }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
