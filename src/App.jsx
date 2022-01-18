import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

import { fetchCurrentUser } from './redux/authorization/auth-operations';
import {
  getIsCurrentUser,
  authToken,
  getIsAuth,
} from './redux/authorization/auth-selectors';
import UserMenu from 'components/UserMenu/UserMenu';
const HomePage = lazy(() => import('components/HomePage/HomePage.jsx'));
const PhonebookHome = lazy(() =>
  import('components/PhonebookHome/PhonebookHome.jsx'),
);
const AuthPage = lazy(() => import('components/AuthPage/AuthPage.jsx'));
function App() {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(getIsCurrentUser);
  useEffect(() => {
    if (authToken !== null) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch]);
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      {isCurrentUser ? (
        <span>Loading...</span>
      ) : (
        <div className={styles.mainDiv}>
          {isAuth === true && <UserMenu />}
          <Header />
          <Suspense fallback={<span>Loading...</span>}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />

              <Route
                path="/auth/:authType"
                element={
                  <PublicRoute restricted redirectTo="/contacts">
                    <AuthPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/auth/:authType"
                element={
                  <PublicRoute restricted>
                    <AuthPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/auth/login">
                    <PhonebookHome />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </div>
      )}
    </>
  );
}
export default App;
