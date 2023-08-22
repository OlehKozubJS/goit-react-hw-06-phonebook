import ContactListStyles from './PhonebookCSS/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../components/redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getFilteredContacts = (query, items) => {
    const filteredItems = items.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredItems;
  };

  const data = getFilteredContacts(filter, contacts);

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
            onClick={event =>
              dispatch(deleteContact(event.currentTarget.dataset.id))
            }
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
