import React, { useEffect, useState } from "react";

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const handleInputValueChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
    // console.log(form);
  };

  const resetForm = () => {
    setForm(initialValue);
  };

  useEffect(() => {
    console.log("El componente se cargó");
  }, []);

  return { ...form, form, handleInputValueChange, resetForm };
};
