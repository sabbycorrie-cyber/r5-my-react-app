import { useState } from "react";
function Register({ setUser, setShowRegister }) {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();


        if (!username || !password || !email) {
            alert("Please fill in both fields");
            return;
        }

        const newUser = { 
            username,
            password,
            email,
        };

        localStorage.setItem("activeUser", JSON.stringify(newUser)
        );

        setUser(newUser);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit} className="form">

                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)
                }
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)
                }
                />

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)
                }
                />

                <button type="submit">
                    Sign Up
                </button>
            </form>

            <p onClick={() => setShowRegister(false)
            }
            > Already have an account? Login
            </p>
            </div>
        </div>
    );
}

export default Register;