import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.css';
import Sidebar from '../../components/SideBar';

const Account = () => {
  return (
    <div className="account">
      <Sidebar />
      <div className="outlet"><Outlet /></div>
    </div>
  );
}
export default Account;
