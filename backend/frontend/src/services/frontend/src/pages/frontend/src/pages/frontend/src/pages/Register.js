import React, { useState } from 'react';
import { register } from '../services/api';

function Register() {
  const [form, setForm] = useState({ name:'', email:'', password:'' });
  const [msg, setMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await register(form);
      setMsg(res.data.message);
    } catch(err) {
      setMsg(err.response?.data.message || 'Error');
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setForm({...form,name:e.target.value})} />
        <input placeholder="Email" onChange={e => setForm({...form,email:e.target.value})} />
        <input placeholder="Password" type="password" onChange={e => setForm({...form,password:e.target.value})} />
        <button type="submit">Register</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default Register;
