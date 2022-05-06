import React from 'react';
import { useState } from 'react';

export default function AccountCreate({ handleAccountCreate }) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAccountCreate(formData);
      }}
    >
      <h3>Create Account</h3>
      <label>
        Name:
        <input type='text' name='name' value={name} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}