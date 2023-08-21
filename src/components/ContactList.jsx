import ContactListStyles from './PhonebookCSS/ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = ({ clickFunction }) => {
  const contacts = useSelector(state => state.contacts);
  const filteredContacts = useSelector(state => state.filter.filteredContacts);
  const filter = useSelector(state => state.filter.filter);
  const data = filter !== '' ? filteredContacts : contacts;

  return (
    <ul className={ContactListStyles.contactList}>
      {data.map(item => (
        <li key={item.id} className={ContactListStyles.contactListItem}>
          <span className={ContactListStyles.contactListItemText}>
            {item.name}: {item.number}
          </span>
          <button
            data-id={item.id}
            className={ContactListStyles.contactListItemButton}
            onClick={event => clickFunction(event.currentTarget.dataset.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
