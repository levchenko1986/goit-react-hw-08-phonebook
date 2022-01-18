import '../../App.module.css';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors.js';
import { TiDelete } from 'react-icons/ti';
import { RiAccountPinCircleFill } from 'react-icons/ri';
function ContactList() {
  const data = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  return (
    <ul className={styles.ContactList}>
      {data.length === 0 && (
        <p>
          There are no contacts in your phonebook. Please add something using a
          form you can find from above.
        </p>
      )}
      {data.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.ContactListItem}>
            <span className={styles.ContactListSpan}>{name}</span>
            <span className={styles.ContactListSpan}>{number}</span>
            <button
              key={id}
              className={styles.btnDelete}
              type="button"
              onClick={() => {
                dispatch(deleteContacts(id));
              }}
            >
              <TiDelete className={styles.deleteIcon} />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default ContactList;
