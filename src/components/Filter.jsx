import propTypes from 'prop-types';
import FilterStyles from './PhonebookCSS/Filter.module.css';
import { useDispatch } from 'react-redux';
import { searchQueryInput } from '../components/redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label htmlFor="searchInput" className={FilterStyles.searchInputLabel}>
      <h3 className={FilterStyles.searchInputHeader}>Find contacts by name</h3>
      <input
        type="text"
        id="searchInput"
        className={FilterStyles.searchInput}
        onChange={event =>
          dispatch(searchQueryInput(event.currentTarget.value))
        }
      />
    </label>
  );
};

Filter.propTypes = {
  changeFunction: propTypes.func.isRequired,
};
