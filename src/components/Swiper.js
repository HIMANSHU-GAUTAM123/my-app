import '../assets/css/style.css';
import $ from 'jquery';
import React from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
const Swiper = () => {
    let lhh;let u;let dzCardSuperLike;
  
    let e, t, a, o = false,
      s = 0,
      i = $('.dzSwipe_card').length,
      n = 80,
      d = 0,
      c = 0,
      r = 0;
  
    u = () => {
     return( ++s === i && (s = 0, $('.dzSwipe_card').removeClass('below')));
    };
  
    lhh = () => {
      
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
  
              console.log('dzCard_moveY->' + c);
  
              const opacityY = d / 100;
              console.log('opacityY->' + opacityY);
  
              const likeOpacity = opacityY >= 0 ? 0 : Math.abs(opacityY);
              console.log('likeOpacity--' + likeOpacity);
  
              const superlikeOpacity = c <= 0 ? 0 : c / 100;
              console.log('superlikeOpacity-' + superlikeOpacity);
  
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
      });
  };
  
    useEffect(() => {
      lhh();
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
    }, []); // The empty dependency array ensures that the effect runs once, similar to componentDidMount
  

  
  return (
    <div >
      
      <div class="page-wrapper">
    {/* <!-- Preloader --> 
	 <div id="preloader">
		<div class="loader">
			<div class="load-circle"><div></div><div></div></div>
		</div>
	</div> 
     <!-- Preloader end--> */}



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
  



      {/* <!-- Page Content Start --> */}
    <div className="page-content space-top p-b65" >
      <div className="container fixed-full-area">
        <div className="dzSwipe_card-cont dz-gallery-slider">
          <div className="dzSwipe_card">
            <div className="dz-media">
              <img src={require('../assets/images/w3tinder/slider/pic1.png')} alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <span className="badge badge-primary d-inline-flex gap-1 mb-2"><i className="icon feather icon-map-pin"></i>Nearby</span>
                <h4 className="title"><Link to={"/profile"}><a href="profile-detail.html">Harleen , 24</a></Link></h4>
                <p className="mb-0"><i className="icon feather icon-map-pin"></i> 3 miles away</p>
              </div>
              <a href="javascript:void(0);" className="dz-icon dz-sp-like"><i className="flaticon flaticon-star-1"></i></a>
            </div>
            <div className="dzSwipe_card__option dzReject">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="dzSwipe_card__option dzLike">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="dzSwipe_card__option dzSuperlike">
              <h5 className="title mb-0">Super Like</h5>
            </div>
            <div className="dzSwipe_card__drag"></div>
          </div>
          
          <div className="dzSwipe_card">
            <div className="dz-media">
              <img src={require('../assets/images/w3tinder/slider/pic3.png')} alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <span className="badge badge-primary d-inline-flex gap-1 mb-2"><i className="icon feather icon-map-pin"></i>Nearby</span>
                <h4 className="title"><Link to={"/profile"}><a href="profile-detail.html">Richard, 24</a></Link></h4>
                <p className="mb-0"><i className="icon feather icon-map-pin"></i> 5 miles away</p>
              </div>
              <a href="javascript:void(0);" className="dz-icon dz-sp-like"><i className="flaticon flaticon-star-1"></i></a>
            </div>
            <div className="dzSwipe_card__option dzReject">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="dzSwipe_card__option dzLike">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="dzSwipe_card__option dzSuperlike">
              <h5 className="title mb-0">Super Like</h5>
            </div>
            <div className="dzSwipe_card__drag"></div>
          </div>
          
          <div className="dzSwipe_card">
            <div className="dz-media">
              <img src={require('../assets/images/w3tinder/slider/pic2.png')} alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <h4 className="title"><Link to={"/profile"}><a href="profile-detail.html">Natasha, 24</a></Link></h4>
                <p className="mb-0"><i className="icon feather icon-map-pin"></i> 2 miles away</p>
              </div>
              <a href="javascript:void(0);" className="dz-icon dz-sp-like"><i className="flaticon flaticon-star-1"></i></a>
            </div>
            <div className="dzSwipe_card__option dzReject">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="dzSwipe_card__option dzLike">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="dzSwipe_card__option dzSuperlike">
              <h5 className="title mb-0">Super Like</h5>
            </div>
            <div className="dzSwipe_card__drag"></div>
          </div>
          
          <div className="dzSwipe_card">
            <div className="dz-media">
              <img src={require('../assets/images/w3tinder/slider/pic3.png')} alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <h4 className="title"><Link to={"/profile"}><a href="profile-detail.html">Suzan , 24</a></Link></h4>
                <ul className="intrest">
                  <li><span className="badge">Photography</span></li>
                  <li><span className="badge">Street Food</span></li>
                  <li><span className="badge">Foodie Tour</span></li>
                </ul>
              </div>
              <a href="javascript:void(0);" className="dz-icon dz-sp-like"><i className="flaticon flaticon-star-1"></i></a>
            </div>
            <div className="dzSwipe_card__option dzReject">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="dzSwipe_card__option dzLike">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="dzSwipe_card__option dzSuperlike">
              <h5 className="title mb-0">Super Like</h5>
            </div>
            <div className="dzSwipe_card__drag"></div>
          </div>
          
          <div className="dzSwipe_card">
            <div className="dz-media">
              <img src={require('../assets/images/w3tinder/slider/pic4.png')} alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <span className="badge badge-primary mb-2">New here</span>
                <h4 className="title"><Link to={"/profile"}><a href="profile-detail.html">Harleen , 24</a></Link></h4>
                <ul className="intrest">
                  <li><span className="badge intrest">Climbing</span></li>
                  <li><span className="badge intrest">Skincare</span></li>
                  <li><span className="badge intrest">Dancing</span></li>
                  <li><span className="badge intrest">Gymnastics</span></li>
                </ul>							
              </div>
              <a href="javascript:void(0);" className="dz-icon dz-sp-like"><i className="flaticon flaticon-star-1"></i></a>
            </div>
            <div className="dzSwipe_card__option dzReject">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="dzSwipe_card__option dzLike">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="dzSwipe_card__option dzSuperlike">
              <h5 className="title mb-0">Super Like</h5>
            </div>
            <div className="dzSwipe_card__drag"></div>
          </div>
        </div>
      </div>
    </div>
    // {/* <!-- Page Content end --> */}

    {/* <!-- Menubar --> */}
	<div className="menubar-area style-3 footer-fixed">
		<div className="toolbar-inner menubar-nav">
			<a href="home.html" className="nav-link active">
				<i className="fa-solid fa-house"></i>
			</a>
			<a href="explore.html" className="nav-link">
				<i className="flaticon flaticon-magnifying-glass"></i>
			</a>
			<a href="wishlist.html" className="nav-link">
				<i className="flaticon flaticon-sparkle"></i>
			</a>
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
    
    </div>
    

      
  );

}

export default Swiper
