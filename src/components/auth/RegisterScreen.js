import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { removeErrorAction, setErrorAction } from '../../actions/ui';
import { registerWithEmailPassword } from '../../actions/auth';
export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const {errorMessage} = useSelector(state => state.UI);

  console.log(errorMessage);

    const [formValues, handleInputChange ] = useForm({
      name:'Frank Sanchez',
      email: 'frankS@gmail.com',
      password: '123456',
      password2:'123456'  

    });


    const {name,email,password,password2} = formValues;


  const handleRegister = (e)=> {

    e.preventDefault();
      if(isFormValid()){
      dispatch(registerWithEmailPassword(email,password,name));  
      }

  }


  const isFormValid = ()=> {

    if( name.trim().length === 0 ){
      dispatch(setErrorAction('Name is not valid'));
        return false;

    } else if(!validator.isEmail(email)){
     dispatch(setErrorAction('email is not valid')); 
      return false;

    }else if( password !== password2 || password.length < 5){
      dispatch(setErrorAction('Password should be at least 6 character'));
      return false;
    }

    dispatch(removeErrorAction());
    return true;

  }




  return (
     <>
    <h3 className="auth__title">Register</h3>
    <form onSubmit={ handleRegister }>
      {
          errorMessage && (
        <div className="auth__alert-error">
          {errorMessage}
        </div>
          )
      }

      <input 
      type="text"
      placeholder="Name"
      name="name"
      className="auth__input"
      autoComplete="off"
      value= {name}
      onChange={handleInputChange}
       />

      <input 
      type="text"
      placeholder="Email"
      name="email"
      className="auth__input"
      autoComplete="off"
      value ={email}
      onChange={handleInputChange}
       />

       <input 
      type="password"
      placeholder="Password"
      name="password"
      className="auth__input"
      value={password}
      onChange={handleInputChange}
       />

       <input 
      type="password"
      placeholder="Confirm password"
      name="password2"
      className="auth__input"
      value={password2}
      onChange={handleInputChange}
       />

       <button
       type="submit"
       className="btn btn-primary btn-block bm-5"
       
       >
         Register
       </button>
       <hr/>

    

       <Link to="/login" className="link mt-5">
       Already registered?
       </Link>
       
    </form>
    </>
  )
}
