import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import PhonebookStyles from './PhonebookCSS/Pnonebook.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  addNewContact,
  deleteContact,
} from '../components/redux/contactsSlice';
import {
  searchQueryInput,
  getFilteredContacts,
} from '../components/redux/filterSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDelete = data => dispatch(deleteContact(data));
  const handleAdd = id => dispatch(addNewContact(id));
  const handleSearchQueryInput = value => dispatch(searchQueryInput(value));
  const handleFilteredContacts = contacts =>
    dispatch(getFilteredContacts(contacts));

  useEffect(() => {
    handleFilteredContacts(contacts);
  }, [filter.filter]);

  return (
    <div className={PhonebookStyles.phonebook}>
      <div>{JSON.stringify(filter.filteredContacts) + ' ' + filter.filter}</div>
      <h1 className={PhonebookStyles.phonebookHeader}>Phonebook</h1>
      <ContactForm submitFunction={handleAdd} />
      <h2 className={PhonebookStyles.contactsHeader}>Contacts</h2>
      <Filter className="filterInput" changeFunction={handleSearchQueryInput} />
      <ContactList className="contactList" clickFunction={handleDelete} />
    </div>
  );
};
