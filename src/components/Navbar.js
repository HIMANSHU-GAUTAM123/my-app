import React from 'react'
import im from '../assets/images/w3tinder/tinder.png'

const Navbar = () => {
  return (
    <div>
      <header className="header header-fixed bg-white style-2 border-0">
			<div className="container">
				<div className="header-content">
					<div className="left-content header-logo logo-lg">
						<a href="home.html">
							<img src={im} alt=""/>
						</a>
					</div>
					<div className="mid-content">
					</div>
					<div className="right-content">
					</div>
				</div>
			</div>
		</header>
    </div>
  )
}

export default Navbar
