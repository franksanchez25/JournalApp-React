import React from 'react';
import { Navigate } from 'react-router';



export const PrivateRoutes = ({ isAuth,children }) => {
  
    console.log(isAuth);
return isAuth ? children : <Navigate to="/auth/login" />;   

}
    
// PrivateRoutes.propTypes = {
//     isAuth: PropTypes.bool.isRequired,
//     element: PropTypes.object.isRequired
// }