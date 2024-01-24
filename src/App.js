
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import React from 'react';
import {useEffect} from 'react';
import Profile from "./components/Profile";
import Explore from './components/Explore';
import Author from './components/Author';
import Categories from './components/Categories';
import Tags from './components/Tags';
import CategoriesPost from './components/CategoriesPost' ;
import TagPost from './components/TagPost';
import AuthorPost from './components/AuthorPost';

function App() {
 


  
  return (
    <div>
     <BrowserRouter>
          <Routes>
           
            <Route path="/categories/:topic/:postid" element={<CategoriesPost/>}></Route>
            <Route path="/authors/:topic/:postid" element={<AuthorPost/>}></Route>
            <Route path="/tags/:topic/:postid" element={<TagPost/>}></Route>
            <Route path="/quotes/:main/:subId/:mainId" element={<Profile/>}></Route>
            <Route path="/" element={<Explore/>}></Route>
            <Route path="/quotes-collections" element={<Explore/>}></Route>
            <Route path="/quotes-collections/categories" element={<Categories/>}></Route>
            <Route path="/quotes-collections/authors" element={<Author/>}></Route>
            <Route path="/quotes-collections/tags" element={<Tags/>}></Route>

            </Routes>
            </BrowserRouter>
    </div>
    

      
  );
}

export default App;
