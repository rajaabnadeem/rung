import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import './SignUpForm.css'


const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  function passwordToggle() {
      setShowPassword(!showPassword);
  }

  const onSignUp = async (e) => {
      e.preventDefault();

      const user = await dispatch(
          sessionActions.signUp({ first_name, last_name, email, password })
      );
      if (!user.payload.errors) {
          setAuthenticated(true);
          history.push('/');
      } else {
          setErrors(user.payload.errors);
      }
  };

  const updateFirstName = (e) => {
      setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
      setLastName(e.target.value);
  };

  const updateEmail = (e) => {
      setEmail(e.target.value);
  };

  const updatePassword = (e) => {
      setPassword(e.target.value);
  };

  return (
      <div className="signup-container">
          <div className="signup-form-container">
              <div className="signup-title-container">
                  <div className="real-signup-title">New here?</div>
                  <div className="real-signup-title2">Sign up to start listening</div>
              </div>
              <form className ='signup__form' onSubmit={onSignUp}>
                  <div className="signup-errors-container">
                      <ul className="signup-errors-list">
                          {errors &&
                              errors.map((error, idx) => (
                                  <li key={idx}>{error}</li>
                              ))}
                      </ul>
                  </div>
                  <div className="firstname-input-container">
                      <div className="signup-title-b">What's your name?</div>
                      <input
                          className="firstname-input"
                          type="text"
                          name="first_name"
                          onChange={updateFirstName}
                          value={first_name}
                          placeholder="First Name"
                          onClick={() => setShowSignup(true)}
                      ></input>
                  </div>

                  {showSignup && (
                      <div className="trans-div">
                          <div className="lastname-input-container">
                              <input
                                  className="lastname-input"
                                  type="text"
                                  name="last_name"
                                  onChange={updateLastName}
                                  value={last_name}
                                  placeholder="Last Name"
                              ></input>
                          </div>
                          <div className="s-email-input-container">
                              <div className="signup-title-b">
                                  What's your email?
                              </div>
                              <input
                                  className="s-email-input"
                                  type="text"
                                  name="email"
                                  onChange={updateEmail}
                                  value={email}
                              ></input>
                          </div>
                          <div className="s-password-input-container">
                              <div className="signup-title-b">
                                  Create a password:
                              </div>
                              <input
                                  className="password-input"
                                  type={showPassword ? 'text' : 'password'}
                                  name="password"
                                  onChange={updatePassword}
                                  value={password}
                              ></input>
                          </div>
                          <div
                              className="show-password"
                              onClick={passwordToggle}
                          >
                              show password
                          </div>
                      </div>
                  )}
                  <div className="signup-button-container">
                      <button className="signup-button" type="submit">
                          Sign up!
                      </button>
                  </div>
              </form>
          </div>
      </div>
  );
};

export default SignUpForm;





// const SignUpForm = ({authenticated, setAuthenticated}) => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");

//   const onSignUp = async (e) => {
//     e.preventDefault();
//     if (password === repeatPassword) {
//       const user = await signUp(username, email, password);
//       if (!user.errors) {
//         setAuthenticated(true);
//       }
//     }
//   };

  // const updateUsername = (e) => {
  //   setUsername(e.target.value);
  // };

//   const updateEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const updatePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const updateRepeatPassword = (e) => {
//     setRepeatPassword(e.target.value);
//   };

//   if (authenticated) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <form onSubmit={onSignUp}>
//       <div>
//         <label>User Name</label>
//         <input
//           type="text"
//           name="username"
//           onChange={updateUsername}
//           value={username}
//         ></input>
//       </div>
//       <div>
//         <label>Email</label>
//         <input
//           type="text"
//           name="email"
//           onChange={updateEmail}
//           value={email}
//         ></input>
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           onChange={updatePassword}
//           value={password}
//         ></input>
//       </div>
//       <div>
//         <label>Repeat Password</label>
//         <input
//           type="password"
//           name="repeat_password"
//           onChange={updateRepeatPassword}
//           value={repeatPassword}
//           required={true}
//         ></input>
//       </div>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;
