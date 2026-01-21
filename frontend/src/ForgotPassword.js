import { useState } from "react";
import "./styles.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    setToast(data.message);

    setTimeout(() => setToast(""), 3000);
  };

  return (
    <>
      <h2>Forgot Password</h2>

      <input
        type="email"
        placeholder="Enter registered email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}

export default ForgotPassword;
