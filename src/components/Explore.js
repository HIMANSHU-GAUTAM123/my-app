import React from 'react';
import '../assets/css/style.css';
import $ from 'jquery';
import jQuery from 'jquery';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from '../api/axios';
import Loader from './Loader';


const Explore = () => {
	
	const[res,setRes]=useState(null);
	const[author,setAuthor]=useState(null);
	const[badges,setBadges]=useState(null);
	const[isloading,setIsloading]=useState(true);
	const lim=4;
	

    useEffect(()=>{
        const getData = async (e) => {
            try {
              const response = await axios.post('/get-categories',
			{
					page_index:0,
					limit:lim
			}
			  );
			  const response2=await axios.post('/get-authors',{
				page_index:0,
				limit:lim
		});
			  const response3=await axios.post('/get-badges',{
				page_index:0,
				limit:lim
		});
			  setRes(response);
			  setAuthor(response2);
			  setBadges(response3);
			  setIsloading(false);
			 // console.log(s);
			  // console.log(res.data);
              
             
             
            } catch (err) {
              console.log(err);
            }
          };
      
          // console.log("Fetching user entry data");
          getData();


       

    },[]);

	// useEffect(() => {
	// 	// Check if res is not null before accessing data
	// 	if (res && res.data) {
	// 	  console.log(res.data);
	// 	}
	//   }, [res]);
	  useEffect(() => {
		if (res && author && badges) {
		    // Get Started ==========
			if(jQuery('.get-started').length > 0){
				var swiperGetStarted = new Swiper('.get-started', {
					speed: 1500,
					slidesPerView: "auto",
					spaceBetween: 0,
					autoplay: {
					   delay: 1500,
					},
					loop:false,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					},
				});
			}
			
			if(jQuery('.filter-swiper').length > 0){
				var swiperFilterSwiper = new Swiper('.filter-swiper', {
					speed: 500,
					slidesPerView: "auto",
					spaceBetween: 12,
					loop: false,
				});
			}
			
			if(jQuery('.chat-swiper').length > 0){
				var chatSwiper = new Swiper('.chat-swiper', {
					speed: 500,
					slidesPerView: 'auto',
					a11y: false,
					spaceBetween: 15,
					freeMode: true,
					loop: false,
				});
			}
			
			if(jQuery('.subscription-swiper').length > 0){
				var subscriptionSwiper = new Swiper('.subscription-swiper', {
					speed: 500,
					slidesPerView: 1,
					spaceBetween: 15,
					loop: false,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					},
				});
			}
			
			if(jQuery('.subscription-swiper2').length > 0){
				var subscriptionSwiper2 = new Swiper('.subscription-swiper2', {
					speed: 500,
					slidesPerView: 1,
					spaceBetween: 15,
					loop: false,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					},
				});
				subscriptionSwiper2.on('transitionEnd', function() {
				  var swiperSelector = $('.subscribe-content');
				  swiperSelector.addClass('d-none');
				  if(subscriptionSwiper2.realIndex == 0){
					  $('#plus').removeClass('d-none');
					  $('#premium-plus').removeClass('d-none');
				  }
				  if(subscriptionSwiper2.realIndex == 1){
					  $('#gold').removeClass('d-none');
					  $('#premium').removeClass('d-none');
				  }
				  if(subscriptionSwiper2.realIndex == 2){
					  $('#platinum').removeClass('d-none');
				  }
				});
			}
		
			if(jQuery('.package-swiper').length > 0){
				var packageSwiper = new Swiper('.package-swiper', {
					speed: 500,
					slidesPerView: 2.3,
					spaceBetween: 15,
					loop: true,
					/* autoplay: {
						delay: 1500,
					}, */
				});
			}
		
			if(jQuery('.tag-swiper').length > 0){
				var tagSwiper = new Swiper('.tag-swiper', {
					speed: 500,
					slidesPerView: "auto",
					spaceBetween: 10,
					a11y: false,
					loop:false,
					autoplay: {
						delay: 2000,
					},
				});
			}
			
			
			if(jQuery('.client-swiper').length > 0){
				var clientSwiper = new Swiper('.client-swiper', {
					speed: 500,
					slidesPerView: 1.5,
					spaceBetween: 15,
					loop: false,
				});
			}
			
			// Reels Swiper ==========
			if(jQuery('.media-swiper').length > 0){
				var swiper = new Swiper(".media-swiper",{
					direction: "vertical",
					slidesPerView: 1,
					mousewheel: true,
				});
			}
			
			if(jQuery('.tag-select').length > 0){
				var tagSelect = new Swiper('.tag-select', {
					speed: 500,
					slidesPerView: "auto",
					spaceBetween: 10,
					loop:false,
				});
			}
		
			if(jQuery('.tag-select2').length > 0){
				var tagSelect2 = new Swiper('.tag-select2', {
					speed: 500,
					slidesPerView: "auto",
					spaceBetween: 10,
					loop:false,
				});
			}
		
			if(jQuery('.spot-swiper1').length > 0){
				var spotSwiper1 = new Swiper('.spot-swiper1', {
					speed: 500,
					slidesPerView: 2.1,
					spaceBetween: 6,
					freeMode: true,
					loop: false,
				});
			}
	
		//   console.log('Data loaded:', res.data);
		}
	  }, [res, author, badges]);

    



   return isloading?(<Loader/>

 ):(

    <div>
		
		<body class="header-large bg-white" data-theme-color="color-primary-2">
		<div class="page-wrapper">
        {/* <!-- Header -->	 */}
		<header className="header header-fixed border-0 style-2 bg-white">
			<div className="container">
				<div className="header-content">
					<div className="left-content header-logo logo-lg">
						<a href="/">
							<img src={require('../assets/images/w3tinder/tinder.png')} alt=""/>
						</a>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content d-flex gap-2">
						<a href="javascript:void(0);" className="filter-icon" data-bs-toggle="offcanvas" data-bs-target="#settingCanvas" aria-controls="offcanvasBottom">
							<i className="flaticon flaticon-settings-sliders"></i>
						</a>
						<a href="javascript:void(0);" className="menu-toggler">
							<i className="icon feather icon-grid"></i>
						</a>
					</div>
				</div>
			</div>
		</header>
	{/* <!-- Header --> */}



      
      <div className="page-content p-t100 p-b50">
		<div className="container">
			{/* <!-- Nav tabs --> */}
			<div className="default-tab style-2">
				<ul className="nav nav-tabs" role="tablist">
					<li className="nav-item" role="presentation">
						<a className="nav-link" data-bs-toggle="tab" href="#home1" aria-selected="false" role="tab" tabindex="-1">12 Likes</a>
					</li>
					<li className="nav-item" role="presentation">
						<a className="nav-link active" data-bs-toggle="tab" href="#profile1" aria-selected="true" role="tab">Top Picks</a>
					</li>
				</ul>
				<div className="tab-content">
					
					<div className="tab-pane fade active show" id="profile1" role="tabpanel">
						<div className="title-bar">
							<h6 className="title">Categories</h6>
							<Link to="/categories"><p>View All</p></Link>
						</div>
						<div className="swiper-btn-center-lr">
							<div className="swiper spot-swiper1 mb-3">
								<div className="swiper-wrapper">
									{res && Object.values(res.data).map(item =>{

										return(
											Object.values(item).map(e=>{
												return(
													e["image_url"] &&
									<div className="swiper-slide">
									<div className="dz-media-card style-4">
									<a href="profile-detail.html">
										<div className="dz-media">
										<img src={e["image_url"]} alt=""  />
										{/* {console.log(e["image_url"])} */}
										</div>
										<div className="dz-content">
										<div className="left-content">
										<h6 className="title">{e["category_name"]}</h6>
											<span className="active-status">Recently Active</span>
										</div>
										<div className="dz-icon ms-auto me-0">
											<i className="flaticon flaticon-star-1"></i>
										</div>
										</div>
									</a>
									</div>
									</div>



											);}));})}
							


			</div>
							</div>

							<div className="title-bar">
								<h6 className="title">Authors</h6>
								<Link to="/authors"><p>View All</p></Link>
							</div>

							<div className="swiper spot-swiper1 mb-3">
								<div className="swiper-wrapper">
									

								{author && Object.values(author.data).map(item =>{

														return(
															Object.values(item).map(e=>{
																return(
																	e["image_url"] &&
														<div className="swiper-slide">
														<div className="dz-media-card style-4">
														<a href="profile-detail.html">
														<div className="dz-media">
														<img src={e["image_url"]} alt=""  />
														 {/* {console.log(e["image_url"])}  */}
														</div>
														<div className="dz-content">
														<div className="left-content">
														<h6 className="title">{e["author_name"]}</h6>
															<span className="active-status">Recently Active</span>
														</div>
														<div className="dz-icon ms-auto me-0">
															<i className="flaticon flaticon-star-1"></i>
														</div>
														</div>
														</a>
														</div>
														</div>



															);}));})}


								</div>
							</div>

							<div className="title-bar">
								<h6 className="title">Tags</h6>
								<Link to="/tags"><p>View All</p></Link>
							</div>

							<div className="swiper spot-swiper1 mb-3">
								<div className="swiper-wrapper">
									
									
								{badges && Object.values(badges.data).map(item =>{

									return(
										Object.values(item).map(e=>{
											return(
												e["image_url"] &&
									<div className="swiper-slide">
									<div className="dz-media-card style-4">
									<a href="profile-detail.html">
									<div className="dz-media">
									<img src={e["image_url"]} alt=""  />
									{/* {console.log(e["image_url"])} */}
									</div>
									<div className="dz-content">
									<div className="left-content">
										<h6 className="title">{e["badge_name"]}</h6>
										<span className="active-status">Recently Active</span>
									</div>
									<div className="dz-icon ms-auto me-0">
										<i className="flaticon flaticon-star-1"></i>
									</div>
									</div>
									</a>
									</div>
									</div>



										);}));})}
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>								
	</div>
	{/* <!-- Page Content End --> */}
     {/* <!-- Menubar --> */}
	<div className="menubar-area style-3 footer-fixed">
		<div className="toolbar-inner menubar-nav">
			
			<a href="explore.html" className="nav-link">
				<i className="flaticon flaticon-magnifying-glass"></i>
			</a>
			<Link to="/" className="nav-link">
				<i className="flaticon flaticon-sparkle"></i>
			</Link>
			<a href="chat-list.html" className="nav-link">
				<i className="flaticon flaticon-chat-2"></i>
			</a>
			<a href="profile.html" className="nav-link">
				<i className="fa-solid fa-user"></i>
			</a>
		</div>
	</div>
	{/* <!-- Menubar --> */}


				</div>
			</body>
    </div>
  )
}

export default Explore
