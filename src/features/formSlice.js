import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    cardNumber: '',
    name: '',
    mobileNumber: '',
    gender: '',
    isFormValid: false,
  },
  reducers: {
    updateCardNumber: (state, action) => {
      state.cardNumber = action.payload;
      state.isFormValid = validateForm(state);
    },
    updateName: (state, action) => {
      state.name = action.payload;
      state.isFormValid = validateForm(state);
    },
    updateMobileNumber: (state, action) => {
      state.mobileNumber = action.payload;
      state.isFormValid = validateForm(state);
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
      state.isFormValid = validateForm(state);
    },
    resetForm: (state) => {
      state.cardNumber = '';
      state.name = '';
      state.mobileNumber = '';
      state.gender = '';
      state.isFormValid = false;
    },
  },
});

const validateForm = (formState) => {
  const { cardNumber, name, mobileNumber, gender } = formState;

  const isCardNumberValid = /^\d{16}$/.test(cardNumber);
  const isNameValid = /^[a-zA-Z]+$/.test(name);
  const isMobileNumberValid =
    /^[6-9]\d{9}$/.test(mobileNumber) && typeof mobileNumber === 'string';

  return (
    isCardNumberValid &&
    isNameValid &&
    isMobileNumberValid &&
    gender !== ''
  );
};

export const {
  updateCardNumber,
  updateName,
  updateMobileNumber,
  updateGender,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
