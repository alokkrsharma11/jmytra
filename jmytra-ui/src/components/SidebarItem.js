import React, { useState } from "react";

// SidebarItem Component
const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={item.cName}>
      <a href={item.path} onClick={item.children ? toggleDropdown : undefined}>
        {item.icon}
        <span style={{ marginLeft: "10px" }}>{item.title}</span>
      </a>

      {item.children && isOpen && (
        <ul className="dropdown">
          {item.children.map((child, index) => (
            <li key={index}>
              <a href={child.path}>{child.title}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;