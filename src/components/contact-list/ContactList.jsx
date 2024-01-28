import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <ul className={styles.contactsList}>
        {this.props.contacts.map(contact => (
          <li key={contact.id}>
            {`${contact.name} - ${contact.number}`}
            <button
              onClick={() => this.props.onDeleteContact(contact.id)}
              className={styles.contactsListBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
