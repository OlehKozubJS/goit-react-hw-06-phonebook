import propTypes from 'prop-types';
import ContactFormStyles from './PhonebookCSS/ContactForm.module.css';
import { Alert } from './Alert';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addNewContact } from '../components/redux/contactsSlice';
import { nanoid } from 'nanoid';

export const ContactForm = ({ submitFunction }) => {
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleAdd = id => dispatch(addNewContact(id));

  const closeAlert = () => {
    setName('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.currentTarget.elements;
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      setName(name.value);
    } else {
      handleAdd({ id: nanoid(), name: name.value, number: number.value });
      setName('');
    }
    event.currentTarget.reset();
  };

  return (
    <>
      <form className={ContactFormStyles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">
          <h3 className={ContactFormStyles.contactFormInputHeader}>Name</h3>
          <input
            type="text"
            className={ContactFormStyles.contactFormInput}
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          <h3 className={ContactFormStyles.contactFormInputHeader}>Number</h3>
          <input
            type="tel"
            id="number"
            name="number"
            className={ContactFormStyles.contactFormInput}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          className={ContactFormStyles.contactFormSubmitButton}
          type="submit"
        >
          Add contact
        </button>
      </form>
      <Alert isInContacts={!!name} name={name} clickFunction={closeAlert} />
    </>
  );
};

ContactForm.propTypes = {
  submitFunction: propTypes.func.isRequired,
};
