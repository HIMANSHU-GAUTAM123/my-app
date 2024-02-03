import React from 'react';
import '../assets/css/style.css';
import $ from 'jquery';
import jQuery from 'jquery';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import {useEffect,useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import axios from '../api/axios';
import Loader from './Loader';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import { RWebShare } from "react-web-share";


const Profile = () => {
	const[detail,setDetail]=useState(null);
	const { main,subId, mainId } = useParams();
	const navigate=useNavigate();
	useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.post('/get-post-details',
			{
			  post_id:mainId
			});
			setDetail(response);
			console.log(response.data)
			
		  } catch (error) {
			console.error('Error fetching category details:', error);
		  }
		};
	
		// Fetch data when the component mounts
		fetchData();
	  },[]);

	  const handleClick1=((topic,categoryId)=>{
		const sanitizedTopic = topic.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
		navigate(`${process.env.PUBLIC_URL}/category/${sanitizedTopic}-quotes/${categoryId}`);

	  })
	  const handleClick2=((topic,categoryId)=>{
		const sanitizedTopic = topic.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
		navigate(`${process.env.PUBLIC_URL}/author/${sanitizedTopic}-quotes/${categoryId}`);

	  })
	  const handleClick3=((topic,categoryId)=>{
		const sanitizedTopic = topic.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
		navigate(`${process.env.PUBLIC_URL}/tag/${sanitizedTopic}-quotes/${categoryId}`);

	  })

  return !detail?(<Loader/>): (
	detail &&
    <div >
      <div className="page-wrapper">
    
	{/* <!-- Preloader --> */}
	{/* <div id="preloader">
		<div className="loader">
			<div className="load-circle"><div></div><div></div></div>
		</div>
	</div> */}
    {/* <!-- Preloader end-->
	
	<!-- Header --> */}
		<header className="header header-fixed bg-white">
			<div className="container">
				<div className="header-content">
					<div className="left-content" onClick={() => navigate(-1)}>
						
							<i className="icon feather icon-arrow-left"></i>
						
						<h6 className="title">Back</h6>
					</div>
					<div className="mid-content header-logo">
					</div>
					<div className="right-content dz-meta">
					</div>
				</div>
			</div>
		</header>
	{/* <!-- Header -->
	
	<!-- Page Content Start --> */}
	{detail && Object.values(detail.data).map(e=>{
		return(
			
			

					e.image_url &&
<div>
					<div className="page-content space-top p-b40">
							<div className="container">
						<div className="detail-area">
							<div className="dz-media-card style-2">
								<div className="dz-media">
													<img src={e.image_url} alt=""/>
										</div>
										<div className="dz-content">
											<div className="left-content" onClick={()=>{handleClick1(e.category_name,e.category_id)}}>
											<span class="badge badge-primary mb-2">{e.category_name}</span>
											
												{/* <p className="mb-0"><i className="icon feather icon-map-pin"></i> 5 miles away</p> */}
											</div>
											<div class="dz-icon ms-auto me-0"><i class="flaticon flaticon-star-1"></i></div>
										</div>
									</div>
									<div className="detail-bottom-area">
										<div className="about">
											<h6 className="title">{e.title}</h6>
											<p className="para-text">By {e.author_name}</p>					
										</div>
										{(!!e.about_author && e.about_author!='')?
										<div className="about">
											<h6 className="title">About Author</h6>
											<p className="para-text">{e.about_author}</p>					
										</div>:''}
										<div className="intrests mb-3">
											<h6 className="title">Tags</h6>
											<ul className="dz-tag-list">
												<li> 
													<div className="dz-tag" onClick={()=>{handleClick1(e.category_name,e.category_id)}}>
														<i className=""></i>
														<span>{e.category_name}</span>
													</div>
												</li>
										<li> 
											<div className="dz-tag" onClick={()=>{handleClick2(e.author_name,e.author_id)}}>
												<i className=""></i>
												<span>{e.author_name}</span>
											</div>
										</li>
										<li> 
											<div className="dz-tag" onClick={()=>{handleClick3(e.badge_name,e.badge_id)}}>
												<i className=""></i>
												<span>{e.badge_name}</span>
											</div>
										</li>
										
											
											
									</ul>
								</div>
								
								<div className="fixed ">
					<div className="dz-icon-box">
						<div onClick={() => navigate(-1)} to={`${process.env.PUBLIC_URL}/${main}/${subId}`} className="icon dz-flex-box dislike"><i className="flaticon flaticon-cross font-18"></i></div>
						<div className="icon dz-flex-box dislike"> 
						<RWebShare 
					data={{
					  text: `${e.title}`,
					  url: `${window.location.href}`,
					  title: `Famous quote by ${e.author_name}`,
					}}
					onClick={() => console.log("shared successfully!")}
				  >
					<i className="fa-solid fa-share"></i>
				  </RWebShare>
			
				  </div>
						
					</div>
				</div>
							</div>
							</div>
							
						</div>
						
					</div>
					
				</div>

				)
			

		
	})}
	
	
</div>  



    </div>
  )
}

export default Profile
