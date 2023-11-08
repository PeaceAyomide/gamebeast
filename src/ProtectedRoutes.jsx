import React from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { database } from '../src/Pages/Home/FirbaseConfig'

const ProtectedRoutes = () => {
    
    const location = useLocation();

    return database.currentUser ? (
        <Outlet />
      ) : (
        // keep the previous navigation stack
        <Navigate to="/" state={{ from: location }} replace />
      );
    };
    
export default ProtectedRoutes