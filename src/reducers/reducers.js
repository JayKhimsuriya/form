import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  contacts: contactReducer,
  // other reducers can be added here
});
