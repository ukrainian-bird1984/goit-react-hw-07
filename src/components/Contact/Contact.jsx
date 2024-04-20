import css from "./Contact.module.css";
import { FaUserLarge, FaPhone, FaTrashCan } from "react-icons/fa6";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.card}>
      <div className={css.info}>
        <p className={css.user}>
          <FaUserLarge />
          {contact.name}
        </p>
        <p className={css.dialer}>
          <FaPhone />
          {contact.number}
        </p>
      </div>

      <button className={css.button} onClick={handleDelete}>
        Delete <FaTrashCan className={css.icon} />
      </button>
    </li>
  );
};

export default Contact;