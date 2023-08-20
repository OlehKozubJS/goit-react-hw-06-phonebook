import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Alert } from './Alert';
import PhonebookStyles from './PhonebookCSS/Pnonebook.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  addNewContact,
  deleteContact,
} from '../components/redux/contactsSlice';
import { searchQueryInput } from '../components/redux/filterSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filterc = useSelector(state => state.filter);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleDelete = data => dispatch(deleteContact(data));
  const handleAdd = id => dispatch(addNewContact(id));
  const handleSearchQueryInput = value => dispatch(searchQueryInput(value));

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterc.toLowerCase())
    );
  };

  const closeAlert = () => {
    setName('');
  };

  return (
    <div className={PhonebookStyles.phonebook}>
      <h1 className={PhonebookStyles.phonebookHeader}>Phonebook</h1>
      <ContactForm submitFunction={handleAdd} />
      <Alert isInContacts={!!name} name={name} clickFunction={closeAlert} />
      <h2 className={PhonebookStyles.contactsHeader}>Contacts</h2>
      <Filter className="filterInput" changeFunction={handleSearchQueryInput} />
      <ContactList
        className="contactList"
        items={filterc ? filteredContacts() : contacts}
        clickFunction={handleDelete}
      />
    </div>
  );
};
