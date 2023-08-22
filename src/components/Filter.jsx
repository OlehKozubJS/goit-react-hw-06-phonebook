import propTypes from 'prop-types';
import FilterStyles from './PhonebookCSS/Filter.module.css';
import { useDispatch } from 'react-redux';
import {
  addNewContact,
  deleteContact,
} from '../components/redux/contactsSlice';
import { searchQueryInput } from '../components/redux/filterSlice';

export const Filter = ({ changeFunction }) => {
  const dispatch = useDispatch();

  const handleAdd = id => dispatch(addNewContact(id));
  const handleDelete = data => dispatch(deleteContact(data));
  const handleSearchQueryInput = value => dispatch(searchQueryInput(value));

  return (
    <label htmlFor="searchInput" className={FilterStyles.searchInputLabel}>
      <h3 className={FilterStyles.searchInputHeader}>Find contacts by name</h3>
      <input
        type="text"
        id="searchInput"
        className={FilterStyles.searchInput}
        onChange={event => changeFunction(event.currentTarget.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  changeFunction: propTypes.func.isRequired,
};
