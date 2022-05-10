import { useState } from 'react';

export default function AccountCreate({ handleAccountCreate }) {
  const [formData, setFormData] = useState({
    category: 'Checking',
    balance: '',
  });
  const { category, balance } = formData;

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
        Category:
      </label>
        <select name='category' value={category} onChange={handleChange} defaultValue={"default"} >
        <option value={"default"} disabled>
          Choose an option
        </option>
        <option value="Checking">Checking</option>
        <option value="Savings">Savings</option>
      </select>
     
      <br />
      <label>
        Balance:
      <input type='text' name='balance' value={balance} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}