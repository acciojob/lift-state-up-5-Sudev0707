import React from 'react';

function Login({ isLoggedIn, onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;