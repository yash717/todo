import { useState } from "react";
import Logo from "../../Img/Logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <div className="main-container">
      <div className="left-side-container">
        <img className="logo-img" src={Logo} alt="Logo" />
      </div>
      <div className="right-side-container">
        <div className="page-title">Welcome to Tasker</div>
        <h2 className="page-subtitle">
          Please, insert your information to access your tasks.
        </h2>
        <h2 className="field-name">Email</h2>
        <input
          className="input-field"
          value={email}
          id="email"
          onChange={handleEmail}
          placeholder="Insert your email"
        />
        <h2 className="field-name">Password</h2>
        <input
          className="input-field"
          placeholder="Insert your password"
          type="password"
        />
        <div className="keep-signed-container">
          <input className="checkbox-input" />
          <h2 className="page-subtitle">Remember me</h2>
        </div>
        <Link to="/">
          <button className="sign-in-btn">Sign In</button>
        </Link>
        <h2 className="page-subtitle">
          Dont have an account? <a>Sign Up</a>
        </h2>
      </div>
    </div>
  );
};

export default Login;
