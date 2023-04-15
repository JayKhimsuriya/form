import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../features/formSlice";

const AddContactForm = () => {
  const dispatch = useDispatch();
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      cardNumber,
      name,
      mobileNumber,
      gender,
    };

    dispatch(addContact(newContact));

    setCardNumber("");
    setName("");
    setMobileNumber("");
    setGender("");
  };

  const isFormValid =
    cardNumber !== "" &&
    name !== "" &&
    mobileNumber !== "" &&
    gender !== "" &&
    /^[0-9]*$/.test(mobileNumber) &&
    mobileNumber.length === 10 &&
    /^[6789]\d{9}$/.test(mobileNumber) &&
    /^[0-9]*$/.test(cardNumber) &&
    cardNumber.length === 16;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Debit Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={handleCardNumberChange}
          maxLength="16"
          pattern="\d{4}-?\d{4}-?\d{4}-?\d{4}"
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          pattern="[a-zA-Z ]*"
          required
        />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          pattern="[6789][0-9]{9}"
          required
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={handleGenderChange} required>
          <option value="">--Please select a gender--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" disabled={!isFormValid}>
        Add Contact
      </button>
    </form>
  );
};

export default AddContactForm;
