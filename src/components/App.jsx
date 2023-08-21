import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import PhonebookStyles from './PhonebookCSS/Pnonebook.module.css';
import { useDispatch } from 'react-redux';
import {
  addNewContact,
  deleteContact,
} from '../components/redux/contactsSlice';
import { searchQueryInput } from '../components/redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();

  const handleAdd = id => dispatch(addNewContact(id));
  const handleDelete = data => dispatch(deleteContact(data));
  const handleSearchQueryInput = value => dispatch(searchQueryInput(value));

  return (
    <div className={PhonebookStyles.phonebook}>
      <h1 className={PhonebookStyles.phonebookHeader}>Phonebook</h1>
      <ContactForm submitFunction={handleAdd} />
      <h2 className={PhonebookStyles.contactsHeader}>Contacts</h2>
      <Filter className="filterInput" changeFunction={handleSearchQueryInput} />
      <ContactList className="contactList" clickFunction={handleDelete} />
    </div>
  );
};
