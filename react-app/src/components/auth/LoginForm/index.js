import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session'
import { useDispatch } from 'react-redux';
import SignUpForm from '../SignUpForm'
import logo from '../../../images/logo.png'
import './LoginForm.css'

const LoginForm = ({ authenticated, setAuthenticated }) => {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

  function passwordToggle() {
    setShowPassword(!showPassword);
    }


const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login({email, password}));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  } else {
    return (
        <div className = 'container__login'>
            <div className = 'content__container'>
                <div className = 'left__content'>
                    <div className = 'login__logo'>
                        <a href="/">
                            <img alt='logo' className = 'logo__img' src={logo}></img>
                        </a>
                        <div className='loginform__header'>Pick up where you left off</div>
                    </div>
                    <div className = 'form__container'>
                        <form onSubmit={onLogin}>
                            <div className="login-errors-container">
                                <ul className="login-errors-list">
                                    {errors &&
                                        errors.map((error, idx) => (
                                            <li key={idx}>{error}</li>
                                        ))}
                                </ul>
                            </div>
                            {/* <div className='loginform__login'>Log In</div> */}
                            <div className="email-label-container">
                                    <label className="email-label">Email:</label>
                                </div>
                                <div className="email-input-container">
                                    <input
                                        className="email-input"
                                        name="email"
                                        type="text"
                                        value={email}
                                        onChange={updateEmail}
                                    />
                                </div>
                                <div className="password-label-container">
                                    <label className="password-label">Password:</label>
                                </div>
                                <div className="password-input-container">
                                    <input
                                        className="password-input"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={updatePassword}
                                    />
                                </div>
                                <div className="show-password" onClick={passwordToggle}>
                                    show password
                                </div>
                                <div className="login-button-container">
                                    <button className="login-button" type="submit">
                                        Log In
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
                <div className = 'right__content'>
                    <SignUpForm authenticated={authenticated}
                                setAuthenticated={setAuthenticated}/>
                </div>
        </div>
    </div>
    );
    };
}

export default LoginForm;
