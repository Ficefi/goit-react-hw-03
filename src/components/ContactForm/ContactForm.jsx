import { Formik, Form, Field, ErrorMessage } from "formik";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symb long")
    .max(50, "Name must be less than 50 symb long")
    .matches(/^[^0-9][^@#%^&$*]+$/, "Your name isn`t right")
    .required("This is a required field"),
  number: Yup.string()
    .min(7, "Number must be a 7 symb")
    .max(7, "Number must be a 7 symb")
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, "It`s must be a phone number")
    .required("This is a required field"),
});

export const ContactForm = ({ addUser }) => {
  const nameID = useId();
  const phoneID = useId();

  const init = {
    name: "",
    number: "",
  };

  return (
    <Formik
      validationSchema={userSchema}
      initialValues={init}
      onSubmit={(values, actions) => {
        addUser({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor={nameID}>Name</label>
        <Field type="text" name="name" id={nameID}></Field>
        <ErrorMessage name="name" component="span" />
        <label htmlFor={phoneID}>Number</label>
        <Field type="tel" name="number" id={phoneID}></Field>
        <ErrorMessage name="number" component="span" />
        <button type="submit">Add contact {<BsFillPersonPlusFill />}</button>
      </Form>
    </Formik>
  );
};
