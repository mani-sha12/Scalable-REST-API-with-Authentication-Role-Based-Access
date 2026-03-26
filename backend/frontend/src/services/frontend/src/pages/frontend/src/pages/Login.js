import React, { useState } from 'react';
import { login } from '../services/api';

function Login() {
  const [form, setForm] = useState({ email:'', password:'' });
  const [msg, setMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await login(form);
      localStorage.setItem('token', res.data.token);
      setMsg('Logged in successfully');
    } catch(err) {
      setMsg(err.response?.data.message || 'Error');
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={e => setForm({...form,email:e.target.value})} />
        <input placeholder="Password" type="password" onChange={e => setForm({...form,password:e.target.value})} />
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default Login;
