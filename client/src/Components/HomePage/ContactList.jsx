import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  return (
    <>
      <div className="contact-list">
        <div className="contact-class">
          {contacts &&
            contacts.map((contact) => {
              {
                console.log(contact);
              }

              return (
                <ContactCard
                  key={contact._id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  contactId={contact._id}
                  id={contact._id}
                  contactID={contact._id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ContactList;
