import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Alert } from './Alert';
import { nanoid } from 'nanoid';
import PhonebookStyles from './PhonebookCSS/Pnonebook.module.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addNewContact,
  deleteContact,
} from '../components/redux/contactsSlice';
import { searchQueryInput } from '../components/redux/filterSlice';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const closeAlert = () => {
    setName('');
  };

  const searchQueryInput = value => {
    setFilter(value);
  };

  const handleDelete = data => dispatch(deleteContact(data));
  const handleAdd = id => dispatch(addNewContact(id));

  return (
    <div className={PhonebookStyles.phonebook}>
      <h1 className={PhonebookStyles.phonebookHeader}>Phonebook</h1>
      <ContactForm submitFunction={handleAdd} />
      <Alert isInContacts={!!name} name={name} clickFunction={closeAlert} />
      <h2 className={PhonebookStyles.contactsHeader}>Contacts</h2>
      <Filter className="filterInput" changeFunction={searchQueryInput} />
      <ContactList
        className="contactList"
        items={filter ? filteredContacts() : contacts}
        clickFunction={handleDelete}
      />
    </div>
  );
};
