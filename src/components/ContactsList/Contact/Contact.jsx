import { BsFillPersonFill, BsFillTelephoneFill, BsTrash3 } from "react-icons/bs";
import css from "./Contact.module.css";

export const Contact = ({ user, onDelete }) => {
  return (
    <li className={css.user_card}>
      <p>
        {<BsFillPersonFill className={css.user_icon} />}
        {user.name}
      </p>
      <p>
        {<BsFillTelephoneFill className={css.user_icon} />}
        {user.number}
      </p>
      <button className={css.delete_btn} onClick={() => onDelete(user.id)}>
        <BsTrash3 size={24} className={css.trash_icon} />
      </button>
    </li>
  );
};
