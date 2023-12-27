
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import React from 'react';
import {useEffect} from 'react';
import Swiper from "./components/Swiper";
import Profile from "./components/Profile";
function App() {
 


  
  return (
    <div>
     <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<Swiper/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>

            </Routes>
            </BrowserRouter>
    </div>
    

      
  );
}

export default App;
