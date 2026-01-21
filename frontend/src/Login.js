import { useState } from "react";
import "./styles.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    setToast(data.message);

    setTimeout(() => setToast(""), 3000);
  };

  return (
    <>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <div className="password-box">
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span onClick={() => setShow(!show)} className="eye">
          👁️
        </span>
      </div>

      <button onClick={handleLogin}>Login</button>

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}

export default Login;
