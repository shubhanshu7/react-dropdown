import React, { useState } from 'react';
import './Dropdown.css'; //  stylesheet for styling

const Dropdown = ({ items }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onMouseEnter={toggleDropdown}>
        {selectedItem ? selectedItem : 'Select an option'} ▼
      </button>

      {isDropdownOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
