import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selector';
import { changeFilter } from '../../redux/contacts/contact-actions';
import s from './Filter.module.css';
import shortid from 'shortid';

const Filter = () => {
  const filterId = shortid.generate();
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <p className={s.FilterTitle}>Find contacts bu name</p>
      <input
        id={filterId}
        className={s.InputFilter}
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};

export default Filter;
