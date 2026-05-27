import { useState, useEffect } from "react";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";

function App() {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("activeUser"))
  );
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      {user ? (
        <Home user={user} setUser={setUser} />
      ) : showRegister ? (
        <Register
        setUser={setUser}
        setShowRegister={setShowRegister}
        />
      ) : (
        <Login setUser={setUser}
        setShowRegister={setShowRegister}
        />
      )}
    </div>
  );
}

export default App;
