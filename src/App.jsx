import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <>
        <h1>Hola desde react</h1>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </>
    );
  }
}

export default App;
