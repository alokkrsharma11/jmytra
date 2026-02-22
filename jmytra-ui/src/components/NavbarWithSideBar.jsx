// Navbar.jsx
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebar"; // <- import the array, not a component
import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // for dropdowns

  const showSidebar = () => setSidebar(!sidebar);

  const toggleDropdown = (e, index, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      setOpenIndex(openIndex === index ? null : index);
    } else {
      // allow normal navigation for leaf items
      setSidebar(false);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link
                  to={item.path}
                  onClick={(e) => toggleDropdown(e, index, !!item.children)}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>

                {item.children && openIndex === index && (
                  <ul className="dropdown">
                    {item.children.map((child, cIndex) => (
                      <li key={cIndex} className={child.cName}>
                          <ul className="dropdown">
                        <Link to={child.path}>{child.title}</Link>
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}