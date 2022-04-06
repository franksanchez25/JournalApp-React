import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { GoogleLogin, StartLoginEmailPassword } from '../../actions/auth';
import { removeErrorAction, setErrorAction } from '../../actions/ui';

export const LoginScreen = () => {

  const [formValues, handleInputChange] = useForm({
    email: 'franks@gmail.com',
    password: '123456'
  });

  const dispatch = useDispatch();


  const { errorMessage } = useSelector(state => state.UI);

  const { loading } = useSelector(state => state.UI)
  console.log(loading);

  const handleLogin = (e)=> {

    e.preventDefault();
    if (isValidForm()) {
     
      dispatch( StartLoginEmailPassword(email, password));

   }

  }


  const handleGoogleLogin = ()=>{

    dispatch(GoogleLogin());
  }

  const isValidForm = ()=>{

    if (!validator.isEmail(email)) {
      dispatch(setErrorAction('Invalid Email'));
      return false;
      
    } else if (email.length === 0 || password.length === 0 ) {
      
      dispatch(setErrorAction('email or password cant be empty'));
      return false;
  }

    dispatch(removeErrorAction());
    return true;
}


  const {email, password} = formValues;

  return (
    <>
    <h3 className="auth__title">Login</h3>
    <form onSubmit= { handleLogin }>
      {
          errorMessage && (
            <div className="auth__alert-error">
              {errorMessage}
            </div>
          )

      }
      <input 
      type="text"
      placeholder="Email"
      name="email"
      className="auth__input"
      autoComplete="off"
      value = {email}
      onChange ={handleInputChange}
       />

       <input 
      type="password"
      placeholder="Password"
      name="password"
      className="auth__input"
      password={password}
      onChange ={handleInputChange}
       />

       <button
       type="submit"
       className="btn btn-primary btn-block"
       disabled = { loading }
       >
         Login
       </button>
       <hr/>

       <div className="auth__social-networks">
         <p>Login with social networks</p>

              <div    
              className="google-btn"
              onClick={ handleGoogleLogin }
              >
          <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          </div>
          <p className="btn-text">
              <b>Sign in with google</b>
          </p>
            </div>
       </div>

       <Link to="/register" className="link">
       Create new account
       </Link>
       
    </form>
    </>
  )
}
