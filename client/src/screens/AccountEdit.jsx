import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AccountEdit({ accounts }) {
  const [formData, setFormData] = useState({
    category: 'checking',
    balance: '',
  });
  const { category, balance } = formData;
  const { id }= useParams();

  useEffect(() => {
      const prefillFormData = () => {
          const accountItem = accounts.find((account) => account.id === Number(id));
          setFormData({balance: accountItem.balance});
      }
      if (accounts.length) prefillFormData();
  },[accounts]);

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
        //handleAccountCreate(formData);
      }}
    >
      <h3>Edit Account</h3>
      
      <label>
        Category:
      </label>
        <select name='category' value={category} onChange={handleChange} defaultValue={"default"} >
        <option value={"default"} disabled>
          Choose an option
        </option>
        <option value="checking">Checking</option>
        <option value="savings">Savings</option>
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