import React from 'react';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/authorization/auth-operations';
import {AiFillHome, AiFillContacts, AiOutlineLogin, AiOutlineLogout, AiTwotoneRocket} from 'react-icons/ai';
import styles from './Menu.module.css';
import '../../App.module.css';
export default function Menu({ isAuth, dispatch }) {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to={'/'} className={styles.homePageLink}>
            <AiFillHome className={styles.headerIcon} />
            Home
          </Link>
        </li>
        {isAuth === true && (
          <li>
            <Link to={'/contacts'} className={styles.homePageLink}>
              <AiFillContacts className={styles.headerIcon} />
              Contacts
            </Link>
          </li>
        )}
      </ul>

      <ul className={styles.authList}>
        {isAuth === true ? (
          <>
            <li className={styles.authItem}>
              <button
                type="button"
                className={(styles.authLinks, styles.OutLink)}
                onClick={() => {
                  dispatch(logOut());
                }}
              >
                <AiOutlineLogout className={styles.headerIcon} />
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li className={styles.authItem}>
              <Link className={styles.authLinks} to={'/auth/register'}>
                <AiTwotoneRocket className={styles.headerIcon} />
                Sign up
              </Link>
            </li>
            <li className={styles.authItem}>
              <Link to={'/auth/login'} className={styles.authLinks}>
                <AiOutlineLogin className={styles.headerIcon} />
                Log in
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
