import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from './PrivateRoutes';
import { login } from '../actions/auth';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PublicRoutes } from './PublicRoutes';
import {startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const auth = getAuth();

  const [checking, setchecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false)
  
  useEffect(() => {
    
 onAuthStateChanged(auth, (user) => {
    
    if (user) {
          dispatch( login(user.uid, user.displayName) );
          setisLoggedIn(true);

          dispatch(startLoadingNotes(user.uid));

      }else{
        setisLoggedIn(false);
      }
    setchecking(false)
    
    });

  }, [ dispatch, setchecking, setisLoggedIn])
  
  
  if (checking) {
    return (
      <h1>Wait...</h1>
    )
  }


  return (
    
        <Routes>
          <Route path="/" element={
              <PrivateRoutes isAuth={isLoggedIn}>
                <JournalScreen/> 
              </PrivateRoutes>

          }/>
               
          <Route path="/*" element={
              <PublicRoutes isAuth={isLoggedIn}>
                <AuthRouter/> 
              </PublicRoutes>

          }/>
               
        </Routes>
  )
}
