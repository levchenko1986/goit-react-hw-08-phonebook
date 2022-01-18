import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../../redux/authorization/auth-selectors';
export default function PrivateRoute({ children, redirectTo }) {
  const isLoggedIn = useSelector(getIsAuth);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
