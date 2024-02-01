
import '../assets/css/style.css';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';
import React from 'react';
import '../assets/css/style.css';
import $ from 'jquery';
import jQuery from 'jquery';

const Settings = () => {
  const changetheme=(()=>{
    jQuery('.theme-btn').on('click',function(){
      jQuery('body').toggleClass('theme-dark');
      jQuery('.theme-btn').toggleClass('active');
  var logoSrc = $(".app-logo").attr("src");
      
      
  });
  })
  return (
    <div>
     
    <div class="dark-overlay"></div>
	<div class="sidebar">
		<div class="inner-sidebar">

			<ul class="nav navbar-nav">	
				<li>
					<Link to={`${process.env.PUBLIC_URL}/quotes-collection`} class="nav-link active" >
						<span class="dz-icon">
							<i class="icon feather icon-home"></i>
						</span>
						<span>Home</span>
					</Link>
				</li>
				
				<li>
					<Link to={`${process.env.PUBLIC_URL}/quotes-collection/categories`} class="nav-link" >
						<span class="dz-icon">
							<i class="fa-solid fa-icons"></i>
						</span>
						<span>Categories</span>
					</Link>
				</li>
				<li>
					<Link to={`${process.env.PUBLIC_URL}/quotes-collection/authors`} class="nav-link" >
						<span class="dz-icon">
							<i className="fa-solid fa-user"></i>
						</span>
						<span>Author</span>
					</Link>
				</li>
				<li>
					<Link to={`${process.env.PUBLIC_URL}/quotes-collection/tags`} class="nav-link" >
						<span class="dz-icon">
							<i class="fa-solid fa-fire"></i>
						</span>
						<span>Tags</span>
					</Link>
				</li>
				</ul>
			<div class="sidebar-bottom">
				<ul class="app-setting">
					<li>
						<div class="mode">
							<span class="dz-icon">                        
								<i class="icon feather icon-moon"></i>
							</span>					
							<span>Dark Mode</span>
							<div class="custom-switch" onClick={changetheme}>
								<input type="checkbox" class="switch-input theme-btn" id="toggle-dark-menu"/>
								<label class="custom-switch-label" for="toggle-dark-menu"></label>
							</div>					
						</div>
					</li>
				</ul>
				<div class="app-info">
					<h6 class="name">9letters.com</h6>
					<span class="ver-info">Version 1.0</span>
				</div>
			</div>
		</div>
	</div>
    
      
    </div>
  )
}

export default Settings
