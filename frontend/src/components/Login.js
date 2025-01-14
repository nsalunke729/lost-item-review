// src/components/Login.js
import React, { useState } from 'react';
import { signInUser } from '../auth';
import { useNavigate  } from 'react-router-dom';    

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

    // Initialize useNavigate hook
    const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await signInUser(email, password);
      console.log("Logged in user:", user);
      setError('');
      // Redirect to dashboard page here
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
