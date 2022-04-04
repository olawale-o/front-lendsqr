import { NavLink } from 'react-router-dom';
import PropType from 'prop-types';
import './style.css';
import { AiOutlineHome, AiOutlineMoneyCollect, AiOutlinePoweroff } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';

const activeLink = {
  color: '#fff',
  fontWeight: 600,
  backgroundColor: '#3f51af',
};

const Sidebar = ({ currentUser }) => {
  return (
    <nav className="side-nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to={`/${currentUser.id}`}
            className="nav__link"
            style={({ isActive }) => isActive ? activeLink : undefined }
            end
          >
            <AiOutlineHome className="icon" />
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={`/${currentUser.id}/fund`}
            className="nav__link"
            style={({ isActive }) => isActive ? activeLink : undefined }
          >
            <AiOutlineMoneyCollect className="icon" />
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={`/${currentUser.id}/transfer`} className="nav__link">
            <FaExchangeAlt className="icon" />
          </NavLink>
        </li>
      </ul>
      <div className="nav_bottom">
        <button type="button" className="logout-button">
          <AiOutlinePoweroff className="icon" />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;

Sidebar.propType = {
  currentUser: PropType.shape({
    id: PropType.string.isRequired,
  }).isRequired,
};
