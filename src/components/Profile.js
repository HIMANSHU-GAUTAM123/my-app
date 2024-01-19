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
import { useDispatch, useSelector } from 'react-redux';
import {  setAndOpenImage } from '../store/categorySlice';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import { RWebShare } from "react-web-share";


const Profile = () => {
	const[detail,setDetail]=useState(null);
	const { main,subId, mainId } = useParams();
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
					<div className="left-content">
						<a href="javascript:void(0);" className="back-btn">
							<i className="icon feather icon-arrow-left"></i>
						</a>
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
											<div className="left-content">
											<span class="badge badge-primary mb-2">{e.category_name}</span>
											
												{/* <p className="mb-0"><i className="icon feather icon-map-pin"></i> 5 miles away</p> */}
											</div>
											<div class="dz-icon ms-auto me-0"><i class="flaticon flaticon-star-1"></i></div>
										</div>
									</div>
									<div className="detail-bottom-area">
										<div className="about">
											<h6 className="title">Basic information</h6>
											<p className="para-text">{e.title}</p>					
										</div>
										<div className="intrests mb-3">
											<h6 className="title">Tags</h6>
											<ul className="dz-tag-list">
												<li> 
													<div className="dz-tag">
														<i className=""></i>
														<span>{e.category_name}</span>
													</div>
												</li>
										<li> 
											<div className="dz-tag">
												<i className=""></i>
												<span>{e.author_name}</span>
											</div>
										</li>
										<li> 
											<div className="dz-tag">
												<i className=""></i>
												<span>{e.badge_name}</span>
											</div>
										</li>
										
											
											
									</ul>
								</div>
								<div className="languages mb-3">
									<h6 className="title">Languages</h6>
									<ul className="dz-tag-list">
										<li> 
											<div className="dz-tag">
												<span>English</span>
											</div>
										</li>
										<li> 
											<div className="dz-tag">
												<span>Spanish</span>
											</div>
										</li>
										<li> 
											<div className="dz-tag">
												<span>German</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							</div>
						</div>
					</div>
					<div className="footer fixed">
					<div className="dz-icon-box">
						<Link to={`/${main}/${subId}`} className="icon dz-flex-box dislike"><i className="flaticon flaticon-cross font-18"></i></Link>
						<div className="icon dz-flex-box dislike"> 
						<RWebShare 
					data={{
					  text: "Like humans, flamingos make friends for life",
					  url: `${e.image_url}`,
					  title: "Flamingos",
					}}
					onClick={() => console.log("shared successfully!")}
				  >
					<i className="fa-solid fa-share"></i>
				  </RWebShare>
			
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
