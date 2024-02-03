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
const Tags = () => {
 

	const[res,setRes]=useState(null);
	const[isloading,setIsloading]=useState(true);
	const[index,setIndex]=useState(1);
	const[cnt,setCnt]=useState(0);
	const resContainerRef = useRef(null);
	
	const navigate = useNavigate();
	const lim=8;
	useEffect(()=>{
		const getData = async (e) => {
            try {
              const response = await axios.post('/get-badges',
			{
					page_index:index-1,
					limit:lim
			}
			  );
			  setRes(response);
			  setIsloading(false);

			  setCnt(response.data.total_count);
            } catch (err) {
              console.log(err);
            }
          };
      
          // console.log("Fetching user entry data");
          getData();

	},[index])
	
	const paginate = (event, value) => {
		setIndex(value);
		if (resContainerRef.current) {
      resContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleImageClick = async(categoryId,topic) => {
		
	
	const sanitizedTopic = topic.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');

	navigate(`${process.env.PUBLIC_URL}/tag/${sanitizedTopic}/${categoryId}`);
	
  };
	  
	
  

	return isloading?(<Loader/>

	):(
    <div>
     

		<body classNameName="header-large bg-white" data-theme-color="color-primary-2" >
		<div class="page-wrapper">
    

  {/* <!-- Header -->	 
  <header className="header header-fixed border-0 style-2 bg-white">
			<div className="container" >
				<div className="header-content">
					<div className="left-content header-logo logo-lg" >
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
	<!-- Header --> */}
	{/* <!-- Header --> */}
	<header class="header header-fixed bg-white">
			<div class="container">
				<div class="header-content">
					<div class="left-content" onClick={() => navigate(-1)}>
						
							<i class="icon feather icon-arrow-left"></i>
						
						<h6 class="title">Back</h6>
					</div>
					<div class="mid-content header-logo">
					</div>
					<div class="right-content dz-meta">
					</div>
				</div>
			</div>
		</header>
	{/* <!-- Header --> */}

{/* page content start */}
<div class="page-content p-t60 p-b50"ref={resContainerRef} >
		<div class="container">
  <div class="tab-content" >
						<div className="row g-2">
							
							{res && Object.values(res.data).map(item =>{

							return(
								Object.values(item).map(e=>{
								return(
									e["image_url"] &&
								<div className="col-6">
								<div className="dz-media-card style-4"  onClick={()=> handleImageClick(e["id"],e["badge_name"])}>
								<div className="dz-media">
								<img src={e["image_url"]} alt=""  />
								</div>
	     						<div className="dz-content">
			  				<div className="left-content">
								<h6 className="title">{e["badge_name"]}</h6>	
								
							</div>
							<div className="dz-icon ms-auto me-0"><i className="flaticon flaticon-star-1"></i></div>
							</div>
									
								</div>
							</div>



	);}));})}
							
							
							
						</div>
            </div>
			{cnt &&
			<div >
			<Stack spacing={2}  sx={{ marginTop: '5%', marginBottom: '5%'  , display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <Pagination count={Math.ceil(cnt/lim)} color="secondary"   size="small"    onChange={paginate}/>
			
      
    </Stack>
	</div>}
            </div>
			
			
            </div>
	

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

export default Tags
