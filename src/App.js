import React, { Component } from 'react';
import Section from './components/Section';
import Form from './components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmithandle = data => {
    data.id = shortid.generate();
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, data],
      };
    });
    const duplicateName = this.state.contacts.find(
      contact => contact.name === data.name,
    );

    if (duplicateName) {
      alert(`${data.name} is already on contacts`);
      return;
    }
    if (data.name === '') {
      alert(`please, write the name from the contacts`);
      return;
    }
    if (data.number === '') {
      alert(`please, write the name from the number`);
    }
  };
  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmithandle} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={this.visibleContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
export default App;
