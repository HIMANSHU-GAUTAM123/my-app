import '../assets/css/style.css';
import $ from 'jquery';
import React from 'react';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from '../api/axios';

import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TagPost = () => {
  const [post, setPost] =useState(null);
  const [path, setPath] =useState(null);
  const[call,setcall]=useState(0);
  const lim=20;
  const navigate = useNavigate();

 

  const { postid } = useParams();


 

 
  let lhh;let dzCardSuperLike;
  const u = () => {
    if(++s===i){
     s=0;
      
      setcall(call+1);
    }
  
  //  return( ++s === i && (s = 0, $('.dzSwipe_card').removeClass('below'),setcall(call+1))
    
   //);
  }

  let e, t, a, o = false,
    s = 0,
    i = $('.dzSwipe_card').length,
   
    n = 80,
    d = 0,
    c = 0,
    r = 0;
    //console.log(i);
    

 

  
    
    $(document).on('mousedown touchstart', '.dzSwipe_card:not(.inactive)', function (s) {
      
      if (!o) {
        e = $(this);
        t = $('.dzSwipe_card__option.dzReject', e);
        a = $('.dzSwipe_card__option.dzLike', e);
        dzCardSuperLike = $('.dzSwipe_card__option.dzSuperlike', e);

        const i = s.pageX || s.originalEvent.touches[0].pageX;
        const l = s.pageY || s.originalEvent.touches[0].pageY;

        $(document).on('mousemove touchmove', function (s) {
          const n = s.pageX || s.originalEvent.touches[0].pageX;
          const u = s.pageY || s.originalEvent.touches[0].pageY;
          c = l - u;
          ((d = n - i) || c) && (function () {
            o = true;
            r = d / 10;
            const degY = c / 10;
            let shouldTranslateY = false;

            if (Math.abs(c) > Math.abs(d)) {
              shouldTranslateY = true;
            }

            if (shouldTranslateY) {
              e.css('transform', 'translateY(-' + c + 'px)');
            } else {
              e.css('transform', 'translateX(' + d + 'px) rotate(' + r + 'deg)');
            }

            // console.log('dzCard_moveY->' + c);

            const opacityY = d / 100;
            // console.log('opacityY->' + opacityY);

            const likeOpacity = opacityY >= 0 ? 0 : Math.abs(opacityY);
            // console.log('likeOpacity--' + likeOpacity);

            const superlikeOpacity = c <= 0 ? 0 : c / 100;
            // console.log('superlikeOpacity-' + superlikeOpacity);

            t.css('opacity', likeOpacity);
            a.css('opacity', likeOpacity);

            if (shouldTranslateY) {
              dzCardSuperLike.css('opacity', superlikeOpacity);
            }
          })();
        });

        $(document).on('mouseup touchend', function () {
          $(document).off('mousemove touchmove mouseup touchend');

          if (Math.abs(d) < Math.abs(c)) {
            if (c >= n) {
              e.addClass('to-upside');
            } else if (c <= -80) {
              e.addClass('to-downside');
            }

            if (Math.abs(c) >= n) {
              e.addClass('inactive');
              setTimeout(() => {
                e.addClass('below').removeClass('inactive to-upside to-downside');
                u();
              }, 300);
            }

            if (Math.abs(c) < n) {
              e.addClass('reset');
            }

            setTimeout(() => {
              e.attr('style', '').removeClass('reset').find('.dzSwipe_card__option').attr('style', '');
              c = 0;
              o = false;
            }, 300);
          } else if (Math.abs(d) > 0) {
            if (d >= n) {
              e.addClass('to-right');
            } else if (d <= -80) {
              e.addClass('to-left');
            }

            if (Math.abs(d) >= n) {
              e.addClass('inactive');
              setTimeout(() => {
                e.addClass('below').removeClass('inactive to-left to-right');
                u();
              }, 300);
            }

            if (Math.abs(d) < n) {
              e.addClass('reset');
            }

            setTimeout(() => {
              e.attr('style', '').removeClass('reset').find('.dzSwipe_card__option').attr('style', '');
              d = 0;
              o = false;
            }, 300);
          }
        });
      }
    })



  
    



    // lhh();
    $('.dz-sp-like').on('click', function () {
      
      const e = $(this).parents('.dzSwipe_card');
      const t = e.find('.dzSwipe_card__option.dzSuperlike');
      t.css('opacity', '1');
      e.slideUp(300, () => {
        u();
        setTimeout(() => {
          e.addClass('below').css('display', '');
          t.css('opacity', '');
        }, 500);
      });
    });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('/get-posts',{
            badge_id:postid,
            page_index:call,
					  limit:lim
          }
         
            
          );
          if (response.data && Object.keys(response.data).length > 2) {
            console.log(response.data);
            console.log(postid);
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
      const sanitizedTopic = topic.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
      const sanitizedTopic2 = topic2.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
      navigate(`${process.env.PUBLIC_URL}/quotes/${sanitizedTopic}/${sanitizedTopic2}/${categoryId}`);
      
      };

  
  return !post?(<Loader/>): (
    <div >
      
      <div className="page-wrapper">
    {/* <!-- Preloader --> 
	 <div id="preloader">
		<div className="loader">
			<div className="load-circle"><div></div><div></div></div>
		</div>
	</div> 
     <!-- Preloader end--> */}



{/* <!-- Header --> */}
<header className="header header-fixed bg-white">
			<div className="container">
				<div className="header-content">
					<div className="left-content"onClick={() => navigate(-1)}>
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
    <div className="page-content space-top p-b65" >
      <div className="container fixed-full-area">
        <div className="dzSwipe_card-cont dz-gallery-slider">
          
          


        {post && Object.values(post.data).map(item =>{

						return(
									Object.values(item).map(e=>{
									return(
												e["image_url"] &&


      									
      									<div className="dzSwipe_card" onClick={()=> handleImageClick(e["id"],e["badge_name"],e["url_title"])}>
                        <div className="dz-media">
                        <img src={e["image_url"]} alt=""  />
                        </div>
                        <div className="dz-content">
                          <div className="left-content">
                          <span class="badge badge-primary mb-2">{e["category_name"]}</span>
                            <h4 className="title"></h4>
                            
                            
                            <ul class="intrest">
                            {e.keywords.split(',').map((keyword, index) => (
                         <li key={index}><span className="badge">{keyword.trim()}</span></li>
                                             ))}
                            
                            
     
							                                </ul>
                           
                          </div>
                          <div  className="dz-icon dz-sp-like"><i class="flaticon flaticon-star-1"></i></div>
                          
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

export default TagPost
