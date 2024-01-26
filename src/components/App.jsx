import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';
import styles from './Contactbook.module.css';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
  });

  const handleFilterChange = event => {
    setState({
      ...state,
      filter: event.target.value,
    });
  };

  const addContact = (name, number) => {
    if (name.trim() === '' || number.trim() === '') return;

    const isDuplicate = state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(` ${name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setState({
      contacts: [...state.contacts, newContact],
      filter: '',
    });
  };

  const deleteContact = id => {
    const updatedContacts = state.contacts.filter(contact => contact.id !== id);
    setState({
      contacts: updatedContacts,
      filter: '',
    });
  };

  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.PhonebookContainer}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
      </div>

      <div className={styles.contactsContainer}>
        <h2>Contacts</h2>
        <Filter value={state.filter} onChange={handleFilterChange} />
        <ContactList
          className={styles.form}
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
};
