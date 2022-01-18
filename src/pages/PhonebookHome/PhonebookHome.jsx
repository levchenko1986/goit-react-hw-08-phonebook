import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { getAllContacts } from '../../redux/contacts/contacts-operations';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import styles from '../PhonebookHome/PhonebookHome.module.css';

function PhonebookHome() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);
  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.title}>Phonebook</h2>
      <ContactForm />
      {isLoadingContacts}
      {!isLoadingContacts && (
        <>
          <h2 className={styles.titleh2}>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
export default PhonebookHome;
