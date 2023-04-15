import React from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

const ContactManager = () => {
  return (
    <div>
      <h1>Contact Manager</h1>
      <ContactForm />
      <ContactTable />
    </div>
  );
};

export default ContactManager;
