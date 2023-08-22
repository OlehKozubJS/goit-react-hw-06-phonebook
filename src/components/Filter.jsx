import FilterStyles from './PhonebookCSS/Filter.module.css';
import { useDispatch } from 'react-redux';
import { searchQueryInput } from '../redux/filterSlice';

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
