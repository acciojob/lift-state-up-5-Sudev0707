
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };


  return (
    <div>
      {/* Do not remove the main div */}
      <h1>lift state up</h1>
      {isLoggedIn ? <h2>Welcome back!</h2> : <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />}
    </div>
  )
}

export default App
