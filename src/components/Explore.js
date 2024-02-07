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
import { useNavigate } from 'react-router-dom';



const Explore = () => {
	
	const[res,setRes]=useState(null);
	const[author,setAuthor]=useState(null);
	const[badges,setBadges]=useState(null);
	const[isloading,setIsloading]=useState(true);
	const navigate = useNavigate();
	
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

	  const handleImageClick = async(categoryId,topic) => {
		


		
		const sanitizedTopic = topic.toLowerCase().replace(/[^a-zA-Z0-9\s\u0900-\u097F-]/g, '').replace(/\s+/g, '-');
		 navigate(`${process.env.PUBLIC_URL}/category/${sanitizedTopic}-quotes/${categoryId}`);
		
	  };
	  const handleImageClick1 = async(categoryId,topic) => {
		
		


	   
		const sanitizedTopic = topic.toLowerCase().replace(/[^a-zA-Z0-9\s\u0900-\u097F-]/g, '').replace(/\s+/g, '-');
		navigate(`${process.env.PUBLIC_URL}/author/${sanitizedTopic}-quotes/${categoryId}`);
	   
	 };
	 const handleImageClick2 = async(categoryId,topic) => {
		
		const sanitizedTopic = topic.toLowerCase().replace(/[^a-zA-Z0-9\s\u0900-\u097F-]/g, '').replace(/\s+/g, '-');
		navigate(`${process.env.PUBLIC_URL}/tag/${sanitizedTopic}/${categoryId}`);
	   
	 };

    



   return isloading?(<Loader/>

 ):(

    <div>
		
		<body class="header-large bg-white" data-theme-color="color-primary-2">
		<div class="page-wrapper">


	     

        <div className="page-content p-t50 p-b50">
		<div className="container">
			{/* <!-- Nav tabs --> */}
			<div className="default-tab style-2">
				
				<div className="tab-content">
					
					<div className="tab-pane fade active show" id="profile1" role="tabpanel">
						<div className="title-bar">
							<h6 className="title">Categories</h6>
							<Link to={`${process.env.PUBLIC_URL}/quotes-collection/categories`}><p>View All</p></Link>
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
									<div className="dz-media-card style-4" onClick={()=> handleImageClick(e["id"],e["category_name"])}>
									
										<div className="dz-media">
										<img src={e["image_url"]} alt=""  />
										{/* {console.log(e["image_url"])} */}
										</div>
										<div className="dz-content">
										<div className="left-content">
										<h6 className="title">{e["category_name"]}</h6>
											
										</div>
										<div class="dz-icon ms-auto me-0"><i class="flaticon flaticon-star-1"></i></div>
										
										</div>
									
									</div>
									</div>



											);}));})}
							


			</div>
							</div>

							<div className="title-bar">
								<h6 className="title">Authors</h6>
								<Link to={`${process.env.PUBLIC_URL}/quotes-collection/authors`}><p>View All</p></Link>
							</div>

							<div className="swiper spot-swiper1 mb-3">
								<div className="swiper-wrapper">
									

								{author && Object.values(author.data).map(item =>{

														return(
															Object.values(item).map(e=>{
																return(
																	e["image_url"] &&
														<div className="swiper-slide">
														<div className="dz-media-card style-4" onClick={()=> handleImageClick1(e["id"],e["author_name"])}>
														
														<div className="dz-media">
														<img src={e["image_url"]} alt=""  />
														 {/* {console.log(e["image_url"])}  */}
														</div>
														<div className="dz-content">
														<div className="left-content">
														<h6 className="title">{e["author_name"]}</h6>
															
														</div>
														<div class="dz-icon ms-auto me-0"><i class="flaticon flaticon-star-1"></i></div>
														
														</div>
														
														</div>
														</div>



															);}));})}


								</div>
							</div>

							<div className="title-bar">
								<h6 className="title">Tags</h6>
								<Link to={`${process.env.PUBLIC_URL}/quotes-collection/tags`}><p>View All</p></Link>
							</div>

							<div className="swiper spot-swiper1 mb-3">
								<div className="swiper-wrapper">
									
									
								{badges && Object.values(badges.data).map(item =>{

									return(
										Object.values(item).map(e=>{
											return(
												e["image_url"] &&
									<div className="swiper-slide">
									<div className="dz-media-card style-4"  onClick={()=> handleImageClick2(e["id"],e["badge_name"])}>
									
									<div className="dz-media">
									<img src={e["image_url"]} alt=""  />
									{/* {console.log(e["image_url"])} */}
									</div>
									<div className="dz-content">
									<div className="left-content">
										<h6 className="title">{e["badge_name"]}</h6>
										
									</div>
									<div class="dz-icon ms-auto me-0"><i class="flaticon flaticon-star-1"></i></div>
									
									</div>
									
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
	


				</div>
			</body>
    </div>
  )
}

export default Explore
