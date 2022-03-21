import React from 'react';
import { Routes, Route } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    
        <Routes>
            <Route path="/auth" element={ <AuthRouter/> } />
            <Route  path="/" element= { <JournalScreen/> } />
            <Route path="*" element={ <AuthRouter/> } />
        </Routes>
  )
}
