import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contact-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selector';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.List}>
      {contacts.map(({ id, name, number }) => (
        <div key={id} className={s.ContactContainer}>
          <li className={s.ContactItem}>
            <p className={s.ContactText}>{name}</p>
            <p className={s.ContactText}>{number}</p>
          </li>
          <button
            className={s.ContactBtn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Видалити
          </button>
        </div>
      ))}
    </ul>
  );
};

export default ContactList;
