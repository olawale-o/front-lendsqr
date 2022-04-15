import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import './style.css';
import Sidebar from '../../components/SideBar';
import { loading, currentUser } from '../../store';
import { removeStorage } from '../../storage';
import LogoutModal from '../../components/Modal/LogoutModal';

const Account = () => {
  const modalRef = React.useRef();
  const [user, setUser] = useRecoilState(currentUser);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useRecoilState(loading);

  const onClose = () => {
    // document.body.removeAttribute('style');
    setOpen(false);
  };

  const onConfirm = () => {
    setIsLoading(!isLoading);
    setUser(null);
    removeStorage('token');
    setIsLoading(!!isLoading);
    // onClose();
  }

  const checkIfClickedOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', checkIfClickedOutside, true);
    return () => document.removeEventListener('click', checkIfClickedOutside, true);
  }, []);
  return (
    <div className="account">
      <Sidebar user={user} setOpen={setOpen} />
      <div className="outlet"><Outlet /></div>
      <LogoutModal
        isLoading={isLoading}
        isOpen={open}
        onClose={onClose}
        onConfirm={onConfirm}
        el={modalRef}
      />
    </div>
  );
}
export default Account;
