import React from "react";
import AddContactForm from "./components/AddContactForm";
import ContactTable from "./components/ContactTable";

const App = () => {
return (
<div>
<h1>Contact List</h1>
<AddContactForm />
<ContactTable />
</div>
);
};

export default App;