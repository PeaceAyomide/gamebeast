import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationAndLogin from './RegistrationAndLogin';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Games from './Pages/Games/Games';
import PlayStation5 from './Pages/PlayStation5/PlayStation5';
import Myself from './Pages/Myself/Myself';
import Services from './Pages/Services/Services';
import ProtectedRoutes from './ProtectedRoutes';
import BicycleLoader from './Pages/BikeLoader/BikeLoader';

const PasswordWithFirebase = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderTimeout = () => {
    setTimeout(() => {
      setLoading(false); // Set loading to false when loading is complete
    }, 7000); // You can adjust the time as needed
  };

  
  return (
    <BrowserRouter>
      <div>
       
          <>
            
            <Routes>
              <Route path="/" element={<RegistrationAndLogin />} />
              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/home"
                  element={
                    
                    <>
                      <Navbar />
                      <Home />
                    </>
                  }
                />
                <Route
                  path="/games"
                  element={
                    <>
                   
                      <Navbar />
                      <Games />
                    </>
                  }
                />
                <Route
                  path="/playstation5"
                  element={
                    <>
                      {/* Include BicycleLoader here if needed */}
                      <Navbar />
                      <PlayStation5 />
                    </>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <>
                      {/* Include BicycleLoader here if needed */}
                      <Navbar />
                      <Services />
                    </>
                  }
                />
                <Route
                  path="/myself"
                  element={
                    <>
                      {/* Include BicycleLoader here if needed */}
                      <Navbar />
                      <Myself />
                    </>
                  }
                />
              </Route>
            </Routes>
          </>
      </div>
    </BrowserRouter>
  );
};

export default PasswordWithFirebase;
