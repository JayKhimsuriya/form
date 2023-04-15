import React, { useState } from "react";
import { connect } from "react-redux";
import { addContact } from "../actions";

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    name: "",
    mobileNumber: "",
    gender: "",
  });

  const { cardNumber, name, mobileNumber, gender } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addContact(formData);
    setFormData({
      cardNumber: "",
      name: "",
      mobileNumber: "",
      gender: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cardNumber"
        placeholder="Debit Card Number"
        value={cardNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="mobileNumber"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={gender}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect(null, { addContact })(ContactForm);
