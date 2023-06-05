import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css";

class App extends Component {
  
  state = {
    contacts: [
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
