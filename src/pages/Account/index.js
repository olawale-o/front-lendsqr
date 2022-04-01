import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import './style.css';
import Sidebar from '../../components/SideBar';
import { currentUserSelector } from '../../store'

const Account = () => {
  const currentUser = useRecoilValue(currentUserSelector);
  return (
    <div className="account">
      <Sidebar currentUser={currentUser} />
      <div className="outlet"><Outlet /></div>
    </div>
  );
}
export default Account;
