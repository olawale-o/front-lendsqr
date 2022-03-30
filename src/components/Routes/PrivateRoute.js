import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import PropType from 'prop-types';
import currentUserSelector from '../../store/selectors/currentUserSelector';

const PrivateRoute = ({ children }) => {
  const user = useRecoilValue(currentUserSelector);
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropType.node.isRequired,
};
