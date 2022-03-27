import React from 'react';
import { Login, Register } from '../../components/User';

const User = () => {
  const [isFocus, setIsFocus] = React.useState(false);
  const onActive = () => {
    setIsFocus(!isFocus);
  };

  return (
    <div className="auth-container">
      <div className="container">
        <div className={`form-container ${isFocus ? 'slide' : ''}`}>
          <Login onActive={onActive} isFocus={isFocus} />
          <Register onActive={onActive} isFocus={isFocus} />
        </div>
        <div className="overlay-container" />
      </div>
    </div>
  );
}

export default User;
