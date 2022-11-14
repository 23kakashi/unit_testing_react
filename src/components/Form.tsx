import React, { FormEvent, useState } from "react";

interface Props {
  onSubmit(): void;
}

export const formSubmit = () => {};

const Form = () => {
  const [name, setName] = useState("Tapish");
  const [formData, setFormData] = useState({ name: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    if (name === "name") {
      const res = e.target.value.replace(/[^a-z]/gi, "");
      setFormData({
        ...formData,
        [name]: res,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:8080/posts', {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(formData)
    })
  };

  return (
    <div data-testid="registration_form">
      <h1 data-testid="owner">{name}</h1>
      <form onSubmit={handleSubmit} data-testid="form">
        <input
          type="text"
          onChange={handleChange}
          // onKeyPress={handleDigits}
          data-testid="name"
          name="name"
          value={formData.name}
        />
        <button data-testid="submit" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
