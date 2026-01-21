import { useState } from "react";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import "./styles.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : "light"}>
      <div className="app-container">
        <div className="card">
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          <h1 className="title">Secure Auth Portal</h1>

          <Login />
          <hr />
          <ForgotPassword />
        </div>
      </div>
    </div>
  );
}

export default App;
