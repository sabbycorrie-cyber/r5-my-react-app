import {useState} from "react";

function Login({ setUser, setShowRegister }) {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();


        if (!username || !password) {
            alert("Please fill in both fields");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem(username));

        if (storedUser && storedUser.password === password) {

            localStorage.setItem("activeUser", JSON.stringify(storedUser));

            setUser(storedUser);
        } else {
            alert("Incorrect username or password");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
            <h2>Login</h2>

            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>
            </form>

            <p onClick={() => setShowRegister(true)}
                >Don't have an account? Sign up</p>
            </div>
        </div>
    );
}

export default Login;