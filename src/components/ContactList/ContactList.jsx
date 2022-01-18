import '../../App.module.css';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors.js';
import { TiDelete } from 'react-icons/ti';

function ContactList() {
  const data = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  return (
    <ul className={styles.contactList}>
      {data.length === 0 && (
        <p>
          There are no contacts in your phonebook. Please add something using a
          form you can find from above.
        </p>
      )}
      {data.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.contactListItem}>
            <span className={styles.contactListSpan}>{name}</span>
            <span className={styles.contactListSpan}>{number}</span>
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
