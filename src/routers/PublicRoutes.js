import React from 'react';
import { Navigate } from 'react-router';



export const PublicRoutes = ({ isAuth,children }) => {
  
return isAuth ? <Navigate to="/" /> : children;   

}
    

// PublicRoutes.propTypes = {
//     isAuth: PropTypes.bool.isRequired,
//     element: PropTypes.object.isRequired
// }