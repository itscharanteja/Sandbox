import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import contacts from "./contacts";

ReactDOM.render(
  <div>
    <App
      head="My contacts"
      name={contacts[0].name}
      tel={contacts[0].phone}
      src={contacts[0].imgURL}
      mail={contacts[0].email}
    />
    <App
      name={contacts[1].name}
      tel={contacts[1].phone}
      src={contacts[1].imgURL}
      mail={contacts[1].email}
    />
    <App
      name={contacts[2].name}
      tel={contacts[2].phone}
      src={contacts[2].imgURL}
      mail={contacts[2].email}
    />
  </div>,
  document.getElementById("root")
);

//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.
