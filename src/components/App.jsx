import "./App.css";
import { useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactsList/ContactList";

const usersList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const App = () => {
  const [users, setUsers] = useState(usersList);
  const [valueSearchBox, setValueSearchBox] = useState("");

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(valueSearchBox.toLowerCase())
  );

  const addToList = (newbie) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newbie];
    });
  };

  const deleteFromList = (userID) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userID);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm addUser={addToList} />
      <SearchBox value={valueSearchBox} onSearch={setValueSearchBox} />
      <ContactList users={visibleUsers} onDelete={deleteFromList} />
    </div>
  );
};
