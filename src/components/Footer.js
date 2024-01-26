import { Link } from 'react-router-dom';
import React from 'react';
import '../assets/css/style.css';
import $ from 'jquery';
import jQuery from 'jquery';

const Footer = () => {

	const handle=(()=>{
		jQuery('.menu-toggler').on('click',function(){
			jQuery('.sidebar').toggleClass('show');
			jQuery('.menu-toggler').toggleClass('show');
			jQuery('.dark-overlay').toggleClass('active');
		});
		jQuery('.dark-overlay').on('click',function(){
			jQuery('.menu-toggler,.sidebar').removeClass('show');
				jQuery(this).removeClass('active');
		});
		jQuery('.nav-color').on('click',function(){
			jQuery('.dark-overlay').removeClass('active');
		});
		
	})



  return (
	
    <div>
        {/* <!-- Page Content End --> */}
     {/* <!-- Menubar --> */}
	<div className="menubar-area style-3 footer-fixed">
		<div className="toolbar-inner menubar-nav">
			
			<Link to="/" className="nav-link">
            <i class="fa-solid fa-house"></i>
			</Link>
			<Link to="/quotes-collections/categories" className="nav-link">
				<i className="flaticon flaticon-sparkle"></i>
			</Link>
			<Link to="/quotes-collections/authors" className="nav-link">
				<i className="flaticon flaticon-chat-2"></i>
			</Link>
			<Link to="/quotes-collections/tags" className="nav-link">
				<i className="fa-solid fa-user"></i>
			</Link>
            <div onClick={handle} class="menu-toggler">
				<i class="icon feather icon-grid"></i>
						
			</div>
		</div>
	</div>
	{/* <!-- Menubar --> */}
      
    </div>
  )
}

export default Footer
