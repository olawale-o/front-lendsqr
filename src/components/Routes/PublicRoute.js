import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate, useLocation } from 'react-router-dom';
import PropType from 'prop-types';
import currentUserSelector from '../../store/selectors/currentUserSelector';

const PublicRoute = ({ children }) => {
  const user = useRecoilValue(currentUserSelector);
  const location = useLocation();
  const from = location.state?.from?.pathname || `/${user?.id}`;
  if (user) return <Navigate to={from} />;
  return children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropType.node.isRequired,
};
