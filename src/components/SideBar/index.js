import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import './style.css';
import { AiOutlineHome, AiOutlineMoneyCollect } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';

const Sidebar = ({ currentUser }) => {
  return (
    <nav className="side-nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to={`/${currentUser.id}`} className="nav__link">
            <AiOutlineHome className="icon" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to={`/${currentUser.id}/fund`} className="nav__link">
            <AiOutlineMoneyCollect className="icon" />
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/#" className="nav__link">
            <FaExchangeAlt className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

Sidebar.propType = {
  currentUser: PropType.shape({
    id: PropType.string.isRequired,
  }).isRequired,
};
