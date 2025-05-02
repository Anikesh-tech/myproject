import React, { useState } from "react";
import "../css/Auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-wrapper">
      <div className="auth-toggle">
        <button
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          Signup
        </button>
      </div>

      <div className={`auth-form ${isLogin ? "show-login" : "show-signup"}`}>
        {isLogin ? (
          <form className="glass-form">
            <h2>Login</h2>
            <input type="email" placeholder="Email ID" required />
            <input type="password" placeholder="Password" required />
            <input type="tel" placeholder="Phone Number" required />
            <button type="submit">Login</button>
            <div className="auth-links">
              <a href="#">Forgot Password?</a>
              <a href="#">Login with Google</a>
            </div>
          </form>
        ) : (
          <form className="glass-form">
            <h2>Signup</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email ID" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Pincode" />
            <button type="submit">Signup</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Auth;
