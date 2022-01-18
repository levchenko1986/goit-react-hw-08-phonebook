import styles from '../UserMenu/UserMenu.module.css';
import { useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authorization/auth-selectors';
import { GoOctoface } from 'react-icons/go';
export default function UserMenu() {
  const userEmail = useSelector(getUserEmail);
  return (
    userEmail && (
      <span className={styles.userEmail}>
        <GoOctoface className={styles.userIcon} />
        {`${userEmail}`}
      </span>
    )
  );
}
