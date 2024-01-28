
import {BrowserRouter, Routes, Route, Navigate, useParams,} from 'react-router-dom';
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
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Settings from './components/Settings';

function App() {
    
 

 


  
  return (
    <div>
      <Navbar/>
     
     <BrowserRouter>
     <Settings/>
          
          <Routes>
           
            <Route path={`${process.env.PUBLIC_URL + '/category/:topic/:postid'}`} element={<CategoriesPost/>}></Route>
            <Route path={`${process.env.PUBLIC_URL + '/author/:topic/:postid'}`} element={<AuthorPost/>}></Route>
            <Route path={`${process.env.PUBLIC_URL + '/tag/:topic/:postid'}`} element={<TagPost/>}></Route>
            
            <Route path={`${process.env.PUBLIC_URL + '/'}`} element={<Explore/>}></Route>
            <Route path={`${process.env.PUBLIC_URL + '/quotes-collection'}`} element={<Explore/>}></Route>
            <Route path={`${process.env.PUBLIC_URL + '/quotes-collection/categories'}`} element={<Categories/>}></Route>
            <Route path={`${process.env.PUBLIC_URL + '/quotes-collection/authors'}`} element={<Author/>}></Route>
            <Route path={`${process.env.PUBLIC_URL + '/quotes-collection/tags'}`} element={<Tags/>}></Route>
            

            <Route path={`${process.env.PUBLIC_URL + '/quotes/:main/:subId/:mainId'}`} element={<Profile/>}></Route>

            </Routes>
            <Footer />
            </BrowserRouter>
            
    </div>
    

      
  );
}

export default App;
