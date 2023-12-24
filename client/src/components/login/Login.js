import React from 'react';
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
  return (
    <div className="landing-page"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1525921429624-479b6a26d84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDQ0MzF8MHwxfHNlYXJjaHwxfHxjb2xsZWdlfGVufDB8fHx8MTcwMzQzODY3N3ww&ixlib=rb-4.0.3&q=80&w=1800')`,
      }}
    >
      <div className="container">
        <h1 >Welcome to College ERP Portal</h1>
        <div className="login-buttons">
          <Link
            type="button"
            to="/login/facultylogin"
            className="faculty-login"
          >
            Faculty Login
          </Link>
          <Link
            type="button"
            to="/login/studentlogin"
            className="student-login"
          >
            Student Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
