import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import PhonebookStyles from './PhonebookCSS/Pnonebook.module.css';

export const App = () => {
  return (
    <div className={PhonebookStyles.phonebook}>
      <h1 className={PhonebookStyles.phonebookHeader}>Phonebook</h1>
      <ContactForm />
      <h2 className={PhonebookStyles.contactsHeader}>Contacts</h2>
      <Filter className="filterInput" />
      <ContactList className="contactList" />
    </div>
  );
};
