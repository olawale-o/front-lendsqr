import React from 'react';
import { useRecoilValue } from 'recoil';
import './style.css';
import { titlelize } from '../../../utils/string';
import { currentUserSelector } from '../../../store';

const Profile = () => {
  const user = useRecoilValue(currentUserSelector);
  return (
    <div className="profile">
      <div className="card">
        <div className="card-top">
          <div className="card-top__upper">
            <span className="email">wale@test.com</span>
          </div>
          <div className="card-top__lower">
            <span className="name">{titlelize(user.first_name+' '+user.last_name)}</span>
            <span className="account-number">{user.account_no}</span>
          </div>
        </div>
        <div className="card-bottom">
          <span className="balance">$ {user.balance}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
