import React from 'react';
import { RouteProps } from 'react-router';
import { Route, Navigate } from 'react-router-dom';


function ProtectedRoutes({children}) {
 const auth = localStorage.getItem('token')
return auth ? children : <Navigate to="/login" />
}
export default ProtectedRoutes;
