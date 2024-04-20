import css from './App.module.css';

import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { FcContacts } from "react-icons/fc";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">
        Phonebook <FcContacts className="icon" />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;