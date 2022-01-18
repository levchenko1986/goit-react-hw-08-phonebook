import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.module.css';
import styles from 'components/ContactForm/ContactForm.module.css';
import { addContacts } from 'redux/contacts/contacts-operations.js';
import { getContacts } from 'redux/contacts/contacts-selectors.js';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in your phonebook`)
      : dispatch(addContacts({ name, number }));

    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          autoComplete="off"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="Number"
          value={number}
          autoComplete="off"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={styles.contactFormBtn}>
        Add contact
      </button>
    </form>
  );
}
export default ContactForm;
