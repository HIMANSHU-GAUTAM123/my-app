import './css/style.css';
import $ from 'jquery';
import jQuery from 'jquery';
function App() {
  
  
  return (
    <div>
    



{/* <!-- Header -->	 */}
		<header className="header header-fixed border-0 style-2 bg-white">
			<div className="container">
				<div className="header-content">
					<div className="left-content header-logo logo-lg">
						<a href="home.html">
							<img src={require('./assets/images/w3tinder/tinder.png')} alt=""/>
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
    <div className="page-content space-top p-b65">
      <div className="container fixed-full-area">
        <div className="dzSwipe_card-cont dz-gallery-slider">
          <div className="dzSwipe_card">
            <div className="dz-media">
              <img src={require('./assets/images/w3tinder/slider/pic1.png')} alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <span className="badge badge-primary d-inline-flex gap-1 mb-2"><i className="icon feather icon-map-pin"></i>Nearby</span>
                <h4 className="title"><a href="profile-detail.html">Harleen , 24</a></h4>
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
              <img src="../assets/images/w3tinder/slider/pic3.png" alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <span className="badge badge-primary d-inline-flex gap-1 mb-2"><i className="icon feather icon-map-pin"></i>Nearby</span>
                <h4 className="title"><a href="profile-detail.html">Richard , 21</a></h4>
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
              <img src="../assets/images/w3tinder/slider/pic2.png" alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <h4 className="title"><a href="profile-detail.html">Natasha , 22</a></h4>
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
              <img src="../assets/images/w3tinder/slider/pic3.png" alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <h4 className="title"><a href="profile-detail.html">Lisa Ray , 25</a></h4>
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
              <img src="../assets/images/w3tinder/slider/pic4.png" alt=""/>
            </div>
            <div className="dz-content">
              <div className="left-content">
                <span className="badge badge-primary mb-2">New here</span>
                <h4 className="title"><a href="profile-detail.html">Richard , 22</a></h4>
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
    

      
  );
}

export default App;
