import React from "react";
import "./App.css";
import Header from "./Header";
import AppContainer from "./AppContainer";
import Field from "./Field";

const formFields = [
  {
    id: 1,
    label: "First Name",
    type: "text",
  },
  {
    id: 2,
    label: "Last Name",
    type: "text",
  },
  {
    id: 3,
    label: "Email",
    type: "email",
  },
  {
    id: 4,
    label: "Date of Birth",
    type: "date",
  },
  {
    id: 5,
    label: "Phone Number",
    type: "number",
  },
  {
    id: 6,
    label: "Sumbit",
    type: "sumbit",
  },
];

function App() {
  return (
    <AppContainer>
      <div className="p-4 mx-auto bg-white shadow-lg rounded-xl">
        <Header title="Welcome to react-typescript course" />
        {formFields.map((field) => (
          /* Don't use react fragment in most of the cases instead this 
          you can use short hand react fragment */
          // <React.Fragment key={field.id}>

          <Field key={field.id} {...field} />
          // </React.Fragment>
        ))}
      </div>
    </AppContainer>
  );
}

export default App;
