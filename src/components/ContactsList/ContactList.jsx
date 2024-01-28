import { Contact } from "./Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ users, onDelete }) => {
  return (
    <ul className={css.contact_list}>
      {users.map((user) => (
        <Contact user={user} onDelete={onDelete} key={user.id} />
      ))}
    </ul>
  );
};
