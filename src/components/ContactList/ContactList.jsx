import React, { Component } from "react";
import css from "./ContactList.module.css";

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <ul>
          {contacts?.map((contact) => {
            return (
              <div className={css["container-contact"]} key={contact.id}>
                <li>{contact.name}: {contact.number}</li>
                <button className={css["delete-contact"]}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
