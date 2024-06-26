import React, { useEffect, useState } from "react";
import { useForm } from "./hooks/useForm";

export const SimpleFormUseEffect = () => {

  //Create a custom hooks that manages taking the values from the inputs and update
  //the state of the form
  const {handleInputValueChange, resetForm, address, location, username} = useForm({
    address: "",
    location: "",
    username: "",
  })

  return (
    <>
      <input
        type="text"
        name="address"
        value={address}
        onChange={(event) => handleInputValueChange(event)}
      ></input>
      <input
        type="text"
        name="location"
        value={location}
        onChange={(event) => handleInputValueChange(event)}
      ></input>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => handleInputValueChange(event)}
      ></input>

      <button onClick={resetForm}> Limpiar formulario </button>


    </>
  );
};
