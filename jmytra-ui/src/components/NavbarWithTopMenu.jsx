import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./Sidebar"; 
import "./NavbarWithTopMenu.css";
import { ReactComponent as LogoSVG } from './../images/logo.svg';

export default function NavBarWithTopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);  // hamburger open/close
  const [openIndex, setOpenIndex] = useState(null);     // dropdown open index

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const toggleDropdown = (e, index, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className="topbar">
        {/* Left: Hamburger */}
        <div className="hamburger" onClick={toggleMobile} aria-label="menu">
          <FaIcons.FaBars />
        </div>

        {/* Small logo near left (optional) */}
        <div className="logo">
          <LogoSVG className="logo-svg" aria-hidden="true" />
        </div>

        {/* Desktop Menu (centered) */}
        <ul className="menu desktop-menu">
          {SidebarData.map((item, index) => (
            <li key={index} className="menu-item">
              <Link
                to={item.path}
                onClick={(e) => toggleDropdown(e, index, !!item.children)}
              >
                {item.icon}
                <span>{item.title}</span>
                {item.children && <FaIcons.FaCaretDown className="caret" />}
              </Link>

              {/* Desktop Dropdown */}
              {item.children && (
                <ul className="dropdown">
                  {item.children.map((child, cIndex) => (
                    <li key={cIndex}>
                      <Link to={child.path}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right: compact search (expands on hover) */}
        <div className="top-search" title="Search">
          <button className="search-btn" aria-label="open search">
            <FaIcons.FaSearch />
          </button>
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
              onChange={(e) => {
                const ev = new CustomEvent('global-search', { detail: { value: e.target.value } });
                window.dispatchEvent(ev);
              }}
            onKeyDown={(e) => {
              // allow Enter to propagate as normal
            }}
          />
        </div>

        {/* Right: Site title */}
        <div className="site-title">
          <div className="title-main">Jmytra4u</div>
          <div className="title-sub">Learn Java, with a mitra by your side.</div>
        </div>

        {/* Mobile Sliding Menu */}
        <ul className={`menu mobile-menu ${mobileOpen ? "open" : ""}`}>
          {SidebarData.map((item, index) => (
            <li key={index} className="menu-item">
              <Link
                to={item.path}
                onClick={(e) => toggleDropdown(e, index, !!item.children)}
              >
                {item.icon}
                <span>{item.title}</span>
                {item.children && <FaIcons.FaCaretDown className="caret" />}
              </Link>

              {/* Mobile dropdown */}
              {item.children && openIndex === index && (
                <ul className="mobile-dropdown">
                  {item.children.map((child, cIndex) => (
                    <li key={cIndex}>
                      <Link to={child.path}>{child.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}