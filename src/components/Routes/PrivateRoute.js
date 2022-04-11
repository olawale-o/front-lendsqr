import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate, useLocation } from 'react-router-dom';
import PropType from 'prop-types';
import currentUserSelector from '../../store/selectors/currentUserSelector';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = useRecoilValue(currentUserSelector);
  const current = location.pathname.split('')[1];
  return user && user.id.toString() === current ? children : <Navigate to="/" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropType.node.isRequired,
};
