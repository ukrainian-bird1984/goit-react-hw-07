import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectNameFilter, selectFilteredContacts } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {filterContacts && filterContacts.length > 0 ? (
        <ul className={css.list}>
          {filterContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p className={css.text}>No contacts yet</p>
      )}
    </div>
  );
};

export default ContactList;