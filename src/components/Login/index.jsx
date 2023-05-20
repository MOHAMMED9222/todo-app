import React, { useState, useContext } from 'react';
import { When } from 'react-if';
import { LoginContext } from '../../Context/Auth';

function Login() {
  const { loggedIn, login, logout } = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'username' ? setUsername(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <When condition={loggedIn}>
        <button style={{ backgroundColor: 'red', marginRight: '10px', color: 'white', borderRadius: '5px', padding: '10px 20px' }} onClick={logout}>Log Out</button>
      </When>

      <When condition={!loggedIn}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginRight: '10px' }}>
          <input
            placeholder="Username"
            name="username"
            onChange={handleChange}
            style={{ marginRight: '10px', borderRadius: '5px' }}
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            onChange={handleChange}
            style={{ marginRight: '10px', borderRadius: '5px' }}
          />
          <button style={{ backgroundColor: '#343A40', color: 'white', borderRadius: '5px', padding: '10px 20px' }}>Login</button>
        </form>
      </When>
    </>
  );
}

export default Login;