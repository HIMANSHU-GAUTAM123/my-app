import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../assets/css/style.css';
import $ from 'jquery';
import jQuery from 'jquery';

const Footer = () => {
  const location = useLocation();
  const[check,setcheck]=useState(0);

  useEffect(() => {
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
      $(".menubar-nav .nav-link").removeClass("active");
      $(`.menubar-nav .nav-link[href='${activeLink}']`).addClass('active');
    }
  }, [location,check]);

  const handle=(()=>{
	jQuery('.menu-toggler').on('click',function(){
		jQuery('.sidebar').toggleClass('show');
		jQuery('.menu-toggler').toggleClass('show');
		jQuery('.dark-overlay').toggleClass('active');
    jQuery(".nav-link").removeClass("active");
		jQuery(this).addClass("active");
		
	});
	
	jQuery('.nav-color').on('click',function(){
		jQuery('.dark-overlay').removeClass('active');
	});
	
	jQuery('.dark-overlay').on('click',function(){
		jQuery('.menu-toggler,.sidebar').removeClass('show');
			jQuery(this).removeClass('active');
			setcheck(check+1);
	});
	
	
})

  
    $(".xyx").on("click", function () {
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
      localStorage.setItem('activeLink', $(this).attr('href'));
    });
	

  

  return (
    <div>
      <div className="menubar-area style-3 footer-fixed">
        <div className="toolbar-inner menubar-nav" >
			
          <Link  to={`${process.env.PUBLIC_URL}/quotes-collection`} className="xyx nav-link active" >
            <i className="fa-solid fa-house"></i>
          </Link>
		  
          <Link  to={`${process.env.PUBLIC_URL}/quotes-collection/categories`} className="xyx nav-link" >
            <i className="fa-solid fa-icons"></i>
          </Link>
          <Link  to={`${process.env.PUBLIC_URL}/quotes-collection/authors`} className="xyx nav-link" >
            <i className="fa-solid fa-user"></i>
          </Link>
          <Link  to={`${process.env.PUBLIC_URL}/quotes-collection/tags`} className="xyx nav-link" >
            <i className="fa-solid fa-fire"></i>
          </Link>
          <div  onClick={handle} className="xzx nav-link menu-toggler">
            <i className="fa-solid fa-gear"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
