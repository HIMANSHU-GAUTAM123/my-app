
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import React from 'react';
import {useEffect} from 'react';
import Swiper from "./components/Swiper";
import Profile from "./components/Profile";
import Explore from './components/Explore';
import Author from './components/Author';
import Categories from './components/Categories';
import Tags from './components/Tags';

function App() {
 


  
  return (
    <div>
     <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<Swiper/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/explore" element={<Explore/>}></Route>
            <Route path="/categories" element={<Categories/>}></Route>
            <Route path="/authors" element={<Author/>}></Route>
            <Route path="/tags" element={<Tags/>}></Route>

            </Routes>
            </BrowserRouter>
    </div>
    

      
  );
}

export default App;
