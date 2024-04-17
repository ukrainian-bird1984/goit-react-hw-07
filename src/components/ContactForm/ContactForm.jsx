import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { addContact } from '/src/redux/contactsSlice.js';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const initialContactValues = {
    name: '',
    number: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));

    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required').trim(),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/g, 'The number format must be 123-45-67')
      .required('Required')
      .trim(),
  });

  return (
    <div>
      <Formik
        initialValues={initialContactValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.name}>
          <label className={css.label}>
            <span>Name</span>
            <Field type="text" name="name" placeholder="Name Surname"></Field>
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field type="tel" name="number" placeholder="xxx-xx-xx"></Field>
            <ErrorMessage name="number" component="span" />
          </label>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;