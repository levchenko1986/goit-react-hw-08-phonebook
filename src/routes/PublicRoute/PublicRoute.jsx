import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../../redux/authorization/auth-selectors';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  children,
}) {
  const isLoggedIn = useSelector(getIsAuth);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
