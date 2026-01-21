const fetch = require("node-fetch");

const BASE = "http://localhost:5000";

async function runTests() {
  console.log("Running API Automation Tests...");

  const loginTests = [
    { username: "admin", password: "admin123", expected: "success" },
    { username: "admin", password: "wrong", expected: "error" },
    { username: "", password: "", expected: "error" }
  ];

  for (let t of loginTests) {
    const res = await fetch(`${BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t)
    });
    const data = await res.json();
    console.log("Login:", data.status === t.expected ? "PASS" : "FAIL");
  }

  const forgot = await fetch(`${BASE}/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@gmail.com" })
  });

  console.log("Forgot Password:", (await forgot.json()).status === "success" ? "PASS" : "FAIL");
}

runTests();
