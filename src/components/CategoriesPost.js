import '../assets/css/style.css';

import React from 'react';
import {useEffect,useState} from 'react';

import axios from '../api/axios';
import { useSwipeable } from 'react-swipeable';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'; 
import { RWebShare } from "react-web-share";

const Swiper = () => {
  const [post, setPost] =useState(null);
  const [showSwipeIndicator, setShowSwipeIndicator] = useState(true);
  const[call,setcall]=useState(0);
  const [imageCount, setImageCount] = useState(0);
  const lim=20;
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();


  const { postid } = useParams();
  const handleSwipe = (event) => {
    if (event.type === 'touchstart') {
      setShowSwipeIndicator(false);
    }
  };

  window.addEventListener('touchstart', handleSwipe);
  
 

 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('/get-posts',{
            category_id:postid,
            page_index:call,
					  limit:lim
          }
            
          );
          if (response.data && Object.keys(response.data).length > 2) {
            console.log(Object.keys(response.data).length);
            console.log(postid);
            let count = 0;
          Object.values(response.data).forEach(item => {
            Object.values(item).forEach(e => {
              if (e["image_url"]) {
                count++;
              }
            });
          });
          setImageCount(count);
            setPost(response);
          } else {
            console.log("Empty response");
            setPost(null);
            setcall(0);
          }
        } catch (error) {
          console.error('Error fetching category details:', error);
        }
      };
  
      // Fetch data when the component mounts
      fetchData();
    },[call]);
    const handleImageClick = async(categoryId,topic,topic2) => {
      const sanitizedTopic = topic.toLowerCase().replace(/[^a-zA-Z0-9\s\u0900-\u097F-]/g, '').replace(/\s+/g, '-');
      const sanitizedTopic2 = topic2.toLowerCase().replace(/[^a-zA-Z0-9\s\u0900-\u097F-]/g, '').replace(/\s+/g, '-');
      navigate(`${process.env.PUBLIC_URL}/quotes/${sanitizedTopic}/${sanitizedTopic2}/${categoryId}`);
      
      };
      const showPreviousImage = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
          console.log("hi")
        }
        else if(currentIndex==0){
           if(call>0){
            setPost(null);
            setCurrentIndex(lim-1);
            setcall(call-1);
          }
        }
      };
    
      const showNextImage = () => {
        if (currentIndex < imageCount-1) {
          setCurrentIndex(currentIndex + 1);
          console.log("bye")
        }
        else if(currentIndex===imageCount-1){
          console.log("fucj")
          setCurrentIndex(0);
          setPost(null);
          setcall(call+1);
        }
        
      };
    
    
     
      const handlers = useSwipeable({
        onSwipedLeft: showNextImage,
        onSwipedRight: showPreviousImage,
        trackMouse: true,
        preventDefaultTouchmoveEvent: true
        
        
      });


  
  return !post?(<Loader/>): (
    <div >
      
      <div class="page-wrapper">
    {/* <!-- Preloader --> 
	 <div id="preloader">
		<div class="loader">
			<div class="load-circle"><div></div><div></div></div>
		</div>
	</div> 
     <!-- Preloader end--> */}



{/* <!-- Header --> */}
<header className="header header-fixed bg-white">
			<div className="container">
				<div className="header-content">
					<div className="left-content" onClick={() => navigate(-1)}>
						<div >
							<i className="icon feather icon-arrow-left"></i>
              </div>
						<h6 className="title">Back</h6>
					</div>
					<div className="mid-content header-logo">
					</div>
					<div className="right-content dz-meta">
					</div>
				</div>
			</div>
		</header>
	{/* <!-- Header --> */}
  



      {/* <!-- Page Content Start --> */}
    <div className="page-content space-top p-b65" {...handlers}>
      <div className="container fixed-full-area">
        <div className="dzSwipe_card-cont dz-gallery-slider">
        
          


        {post && Object.values(post.data).map(item =>{

						return(
									Object.values(item).map((e,index)=>{
									return(
												e["image_url"] && index===currentIndex &&


      								
      									<div className="dzSwipe_card" onClick={()=> handleImageClick(e["id"],e["category_name"],e["url_title"])}>
                        <div className="dz-media">
                        <img src={e["image_url"]} alt=""  />
                        </div>
                        <div class="dz-icon ms-auto me-0"><i class="flaticon flaticon-star-1"></i></div>
                        <div className="dz-content">
                      
                          <div className="left-content">
                          <div className={`swipe-indicator ${showSwipeIndicator ? 'show' : ''}`}>
      <IoIosArrowBack className="swipe-icon" />Swipe to navigate<IoIosArrowForward className="swipe-icon" /> 
    </div>
          
                          <span class="badge badge-primary mb-2">{e["category_name"]}</span>
                            <h4 className="title"></h4>
                            
                            
                            <ul class="intrest">
                            {e.keywords.split(',').map((keyword, index) => (
                         <li key={index}><span className="badge">{keyword.trim()}</span></li>
                                             ))}
                            
                            
     
							                                </ul>
                           
                          </div>
                          <div  className="dz-icon dz-sp-like"><RWebShare 
					data={{
					  text: `${e.title}`,
					  url: `${process.env.PUBLIC_URL}/quotes/${e["category_name"].toLowerCase().replace(/[^a-zA-Z0-9\s\u0900-\u097F-]/g, '').replace(/\s+/g, '-')}/${e["url_title"].toLowerCase().replace(/[^a-zA-Z0-9\s\u0900-\u097F-]/g, '').replace(/\s+/g, '-')}/${e["id"]}`,
					  title: `Famous quote by ${e.author_name}`,
					}}
					onClick={() => console.log("shared successfully!")}
				  >
					<i className="fa-solid fa-share"></i>
				  </RWebShare></div>
                          
                        </div>
                        <div className="dzSwipe_card__option dzReject">
                          <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className="dzSwipe_card__option dzLike">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        
                        <div className="dzSwipe_card__drag"></div>
                      </div>
                      
                      


											);}));})}




         
          
          
          
         
        </div>
      </div>
    </div>
     {/* <!-- Page Content end --> */}

   

  </div>
    
    </div>
    

      
  );

}

export default Swiper
