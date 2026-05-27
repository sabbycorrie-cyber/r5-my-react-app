import { useState, useEffect } from "react";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";

function App() {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("activeUser"))
  );

  return (
    <div>
      {user ? (
        <Home user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
}

export default App;
