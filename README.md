# QA Automation – Authentication Web Application

## 📌 Project Overview
This project demonstrates a **QA Automation scenario for an Authentication Module**, developed as part of an **internal hackathon / QA case study**.

The application includes:
- Login functionality
- Forgot Password workflow
- Error message validation
- Advanced UI enhancements
- API-level automation testing

The solution follows **real-world enterprise QA practices** by combining **frontend validation** with **backend automation**, without relying on browser automation tools.

---

## 🧠 Problem Statement
Enterprise web applications require rigorous testing before deployment.  
As a QA Automation Engineer, the goal is to **design, test, and validate** the authentication module to ensure correctness, reliability, and proper error handling.

---

## 🏗️ Tech Stack

### Frontend
- React (HTML, CSS, JavaScript)
- Advanced UI features:
  - 🌗 Dark / Light Mode
  - 👁️ Show / Hide Password
  - 🔔 Toast Notifications
  - 📱 Mobile Responsive Design

### Backend
- Node.js
- Express.js
- REST APIs

### QA Automation
- JavaScript (API-level testing)
- Fetch API
- Data-driven test cases

---

## 📁 Project Folder Structure

qa-auth-webapp/
│
├── backend/
│ ├── server.js
│ ├── package.json
│
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ ├── Login.js
│ │ ├── ForgotPassword.js
│ │ ├── styles.css
│ │ └── index.js
│ └── package.json
│
├── automation/
│ ├── apiTests.js
│ └── package.json
│
└── README.md

---

## ⚙️ Features Implemented

### 🔐 Authentication Features
- Login with valid credentials
- Login error handling for invalid inputs
- Forgot Password workflow
- Input validation and error messages

### 🎨 Advanced UI Enhancements
- Dark / Light mode toggle
- Password visibility toggle (eye icon)
- Toast notifications for success & error
- Mobile responsive layout

### 🧪 QA Automation
- Automated login test cases
- Automated forgot password test cases
- Positive, negative, and edge case validation
- API-based automation (fast & stable)

---

## ▶️ How to Run the Project

### 1️⃣ Start Backend Server
```bash
cd backend
node server.js
Backend running at http://localhost:5000
2️⃣ Start Frontend Application
cd frontend
npm start
http://localhost:3000
3️⃣ Run QA Automation Tests
cd automation
node apiTests.js
Expected output:
Login Test: PASS
Forgot Password Test: PASS
🧪 Manual Testing Scenarios (UI)
Login Tests
Scenario	Input	Expected Result
Valid Login	admin / admin123	Login successful
Invalid Login	admin / wrong	Invalid credentials
Empty Fields	blank	All fields required
Forgot Password Tests
Scenario	Input	Expected Result
Valid Email	admin@gmail.com
	Reset link sent
Invalid Email	test@gmail.com
	Email not registered
🧠 QA Strategy Used

Manual UI testing for frontend validation

Automated API testing for backend logic

Data-driven test scenarios

Error and edge-case handling

Separation of frontend, backend, and automation layers

🎯 Key Learning Outcomes

Designed and tested an authentication module

Implemented real-world QA automation practices

Improved UI/UX with modern features

Gained hands-on experience with full-stack testing

Demonstrated readiness for QA / Automation Engineer roles

🏁 Conclusion

This project reflects a real enterprise QA workflow, where UI behavior is validated manually and backend logic is verified through automation.
The approach ensures speed, stability, and reliability, aligning with industry standards followed by companies like HCLTech.

👤 Author

B Ajay Mahadev
B.Tech – Electronics & Communication Engineering
Web Development Enthusiast
