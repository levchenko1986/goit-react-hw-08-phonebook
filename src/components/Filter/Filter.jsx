import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors.js';
import { changeFilter } from '../../redux/contacts/contacts-actions.js';
import '../../App.module.css';
import styles from './Filter.module.css';
function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleOnChange = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <form className={styles.filterForm}>
      <label>
        Find contacts by name
        <input
          className={styles.seacrhInput}
          type="text"
          placeholder="Enter a name"
          value={filter}
          onChange={handleOnChange}
        />
      </label>
    </form>
  );
}
export default Filter;
