import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaUserLarge, FaPhone } from "react-icons/fa6";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .matches(/^[A-Za-z]+$/, "Name must contain only letters")
          .min(3, "Must be at least 3 characters")
          .max(50, "Must be 50 characters or less")
          .required("Enter name"),
        number: Yup.string()
          .matches(
            /^\d{3}-\d{2}-\d{2}$/,
            "Number must be in the format 123-45-67"
          )
          .required("Enter number"),
      })}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.title}>Name</label>
        <div className={css.input}>
          <Field
            className={css.submit}
            type="text"
            name="name"
            placeholder="Name"
            id="name"
          />
          <FaUserLarge className={css.user} size="15" />
        </div>
        <ErrorMessage
          className={css.error}
          name="name"
          component="div"
        />

        <label className={css.title}>Number</label>
        <div className={css.input}>
          <Field
            className={css.submit}
            type="text"
            name="number"
            placeholder="xxx-xx-xx"
            id="number"
          />
          <FaPhone className={css.phone} size="15" />
        </div>
        <ErrorMessage
          className={css.error}
          name="number"
          component="div"
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;