import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilter = event => {
    const filterValue = event.target.value;
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className={css.search}>
      <h4>Find contact by name</h4>
      <input
        className={css.input}
        type="text"
        placeholder="Enter name..."
        value={filterValue}
        onChange={handleFilter}
      />
    </div>
  );
};

export default SearchBox;