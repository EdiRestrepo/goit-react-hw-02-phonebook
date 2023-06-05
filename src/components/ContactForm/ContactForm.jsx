import React, { Component } from "react";
import css from "./ContactForm.module.css";

export class ContactForm extends Component {
  render() {
    const {addContact} = this.props;
    return (
      <div className={css["form-container"]}>
        <form className={css["contact-form"]}>
          <div className={css["input-container"]}>
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
          <div className={css["input-container"]}>
            <label>Number</label>
            <br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
          <div>
            <button className={css["add-contact"]} onClick={addContact}>Add contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
