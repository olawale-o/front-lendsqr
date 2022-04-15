import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import {
  AiOutlineHome,
  AiOutlineMoneyCollect,
  AiOutlinePoweroff,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';

const activeLink = {
  color: '#fff',
  fontWeight: 600,
  backgroundColor: '#3f51af',
};

const Sidebar = ({ user, setOpen }) => {
  const onOpen = () => {
    // document.body.style.overflow = 'hidden';
    setOpen(true);
  };

  return (
    <nav className="side-nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to={`/${user.id}`}
            className="nav__link"
            style={({ isActive }) => isActive ? activeLink : undefined }
            end
          >
            <AiOutlineHome className="icon" />
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={`/${user.id}/fund`}
            className="nav__link"
            style={({ isActive }) => isActive ? activeLink : undefined }
          >
            <AiOutlineMoneyCollect className="icon" />
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={`/${user.id}/transfer`}
            className="nav__link"
            style={({ isActive }) => isActive ? activeLink : undefined }
          >
            <FaExchangeAlt className="icon" />
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={`/${user.id}/transaction`}
            className="nav__link"
            style={({ isActive }) => isActive ? activeLink : undefined }
          >
            <AiOutlineUnorderedList className="icon" />
          </NavLink>
        </li>
      </ul>
      <div className="nav_bottom">
        <button type="button" className="logout-button" onClick={onOpen}>
          <AiOutlinePoweroff className="icon" />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
