import "./App.css";
import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactsList/ContactList";

const usersList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const key = "saved-users";

export const App = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = window.localStorage.getItem(key);

    if (savedUsers !== null) {
      return JSON.parse(savedUsers);
    }

    return usersList;
  });
  const [valueSearchBox, setValueSearchBox] = useState("");

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(valueSearchBox.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(users));
  }, [users]);

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
      <h2
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Phonebook
      </h2>
      <ContactForm addUser={addToList} />
      <SearchBox value={valueSearchBox} onSearch={setValueSearchBox} />
      <ContactList users={visibleUsers} onDelete={deleteFromList} />
    </div>
  );
};
