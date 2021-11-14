import s from './ContactsList.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactsListItem}>
          <span> {name}: </span>
          <span>{number}</span>
          <button
            className={s.contactListBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactsList.protoTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};
