import { useSelector } from 'react-redux';
import { selectContacts } from '/src/redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacs = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacs.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact name={contact.name} phone={contact.number} id={contact.id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;