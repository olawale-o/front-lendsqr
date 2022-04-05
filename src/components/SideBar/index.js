import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import PropType from 'prop-types';
import './style.css';
import { AiOutlineHome, AiOutlineMoneyCollect, AiOutlinePoweroff } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import LogoutModal from '../Modal/LogoutModal';
import { loading, currentUser } from '../../store'
import { removeStorage } from '../../storage';

const activeLink = {
  color: '#fff',
  fontWeight: 600,
  backgroundColor: '#3f51af',
};

const Sidebar = () => {
  const [isLoading, setIsLoading] = useRecoilState(loading);
  const [user, setUser] = useRecoilState(currentUser);
  const [open, setOpen] = React.useState(false);

  const onOpen = () => {
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const onClose = () => {
    document.body.removeAttribute('style');
    setOpen(false);
  };

  const onConfirm = () => {
    setIsLoading(!isLoading);
    setUser(null);
    removeStorage('token');
    onClose();
  }
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
          <NavLink to={`/${user.id}/transfer`} className="nav__link">
            <FaExchangeAlt className="icon" />
          </NavLink>
        </li>
      </ul>
      <div className="nav_bottom">
        <button type="button" className="logout-button" onClick={onOpen}>
          <AiOutlinePoweroff className="icon" />
        </button>
      </div>
      <LogoutModal
        isOpen={open}
        onClose={onClose}
        isLoading={isLoading}
        onConfirm={onConfirm}
      />
    </nav>
  );
};

export default Sidebar;
