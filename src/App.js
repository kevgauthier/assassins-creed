import React from 'react';
import logo from './images/logo-assassins-creed-revelations.png';
import urlShopCTA from './images/banner-ads.jpg';
import './App.css';






function PreheadAds(props) {
	return (
		<div className="wrapStoreCta">
			<a href="#" target="_blank"><img src={urlShopCTA} className="ads-space img-responsive" alt="assasins-creed-shop-cta" /></a>
			</div>
		);
}



function SiteNav(props) {
	return (
		<div className="wrapNav">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<nav className="navigation">
							<ul>
								<li><a href="#">Game Info</a></li>
								<li><a href="#">Assassins Creed Universe</a></li>
								<li><a href="#">Uplay</a></li>
								<li><a href="#">Forums</a></li>
								<li><a href="#">Register for Updates</a></li>
								<li><a href="#">Pre-Order</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

function SiteFooter(props){
	return (
		<footer className="sitefooter">
			<div className="container">
				<div className="row">
				<div className="col-sm-12"><div className="sep"></div></div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="logoFooter">
							<a href="#" target="_blank" className="logoLink"><img src="./images/ubisoft.png"  alt="Ubisoft"/></a>
							<a href="#" target="_blank" className="logoLink"><img src="./images/xbox.png"  alt="Xbox"/></a>
							<a href="#" target="_blank" className="logoLink"><img src="./images/ps3.png"  alt="PS3"/></a>
							<a href="#" target="_blank" className="logoLink"><img src="./images/pc.png"  alt="PC"/></a>
							<a href="#" target="_blank" className="logoLink"><img src="./images/esrb.png"  alt="logoName"/></a>
							<a href="#" target="_blank" className="logoLink"><img src="./images/mature.png"  alt="logoName"/></a>
							
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="copyrights"><p>© 2011 Ubisoft Entertainment. All Rights Reserved. Assassin’s Creed, Ubisoft, and the Ubisoft logo are trademarks of Ubisoft Entertainment in the US and/or other countries. “PlayStation” and the “PS” Family logo are registered trademarks and “PS3” and the PlayStation Network logo are trademarks of Sony Computer Entertainment Inc. KINECT, Xbox, Xbox 360, Xbox LIVE, and the Xbox logos are trademarks of the Microsoft group of companies and are used under license from Microsoft. Software platform logo (TM and ©) EMA 2006.</p></div>
					</div>
				</div>
			</div>
		</footer>

	);
}

function SliderCarousel(props){
	return (
		<section className="siderBanner">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="slider">
							<div className="slider_items" style={{backgroundImage:"url(./images/slide_1.jpg)"}}>
							</div>
							<div className="slider_items" style={{backgroundImage:"url(./images/slide_2.jpg)"}}>
							</div>
							<div className="slider_items" style={{backgroundImage:"url(./images/slide_3.jpg)"}}>
							</div>
							
						</div>
					</div>
				</div>
			</div>		
			<div className="container wrapThumbNav">
				<div className="row">
					<div className="col-sm-12">
						<div className="thumbNav">
							<div className="slider-nav-thumbnails">
								
								
								<div className="outerthumb">
									<div className="itemCol">
										<div className="itemcol-img">
											<div className="linkImgBox" style={{backgroundImage:"url(./images/thumbItem.jpg)"}}></div>
										</div>
										<div className="itemcol-txt">
											<h3>Assassin Creed</h3>
											<p>The Truth is written in blood all is forgotten but never seen. Assasins 
		will come to those that disrespect our laws.</p>
										</div>
									</div>
								</div>

								<div className="outerthumb">
									<div className="itemCol">
										<div className="itemcol-img">
											<div className="linkImgBox" style={{backgroundImage:"url(./images/thumbItem2.jpg)"}}></div>
										</div>
										<div className="itemcol-txt">
											<h3>Assassin Creed</h3>
											<p>The Truth is written in blood all is forgotten but never seen. Assasins 
		will come to those that disrespect our laws.</p>
										</div>
									</div>
								</div>

								<div className="outerthumb">
									<div className="itemCol">
										<div className="itemcol-img">
											<div className="linkImgBox" style={{backgroundImage:"url(./images/thumbItem3.jpg)"}}></div>
										</div>
										<div className="itemcol-txt">
											<h3>Assassin Creed</h3>
											<p>The Truth is written in blood all is forgotten but never seen. Assasins 
		will come to those that disrespect our laws.</p>
										</div>
									</div>
								</div>

								
							</div>
						</div>
					</div>
				</div>
			</div>	
		</section>	
	);
}


function App() {
	return (
		<div className="App">
		
			<header className="App-header">
			{/* preheader section */}
				<div className="container">
					<div className="row">
						<div className="col-sm-12 col-md-4">
							<img src={logo} className="App-logo" alt="logo" />
							<button className="toggle_menu burger">
								<span></span>
								<span></span>
								<span></span>
							</button>
						</div>
						<div  className="col-sm-12 col-md-8"><PreheadAds /></div>
					</div>
				</div>
			{/* end preheader section */}

			{/* nav section */}
				<SiteNav />
			{/* end nav section */}			
				
			</header>

		{/*section carousel*/}
		<SliderCarousel />
	{/*end section carousel*/}


			{/* content section */}	
			<div id="wrapMainContent" className="container">
				<div className="row equal">
					<div className="col-md-4">
						<div className="leftCol">
							<div className="titleCol"><h2>Life of an Assassin</h2></div>
							<div className="colBoxes">
								{/* loop items */}	
								<div className="itemCol">
									<div className="itemcol-img">
										<a href="#" className="linkImgBox" style={{backgroundImage:"url(./images/thumbItem.jpg)"}}></a>
									</div>
									<div className="itemcol-txt">
										<h3><a href="#">Assassin Creed</a></h3>
										<p>The Truth is written in blood all is forgotten but never seen. Assasins 
	will come to those that disrespect our laws.</p>
									</div>
								</div>
								{/* end loop */}
								{/* loop items */}	
								<div className="itemCol">
									<div className="itemcol-img">
										<a href="#" className="linkImgBox" style={{backgroundImage:"url(./images/thumbItem.jpg)"}}></a>
									</div>
									<div className="itemcol-txt">
										<h3><a href="#">Assassin Creed</a></h3>
										<p>The Truth is written in blood all is forgotten but never seen. Assasins 
	will come to those that disrespect our laws.</p>
									</div>
								</div>
								{/* end loop */}
								{/* loop items */}	
								<div className="itemCol">
									<div className="itemcol-img">
										<a href="#" className="linkImgBox" style={{backgroundImage:"url(./images/thumbItem.jpg)"}}></a>
									</div>
									<div className="itemcol-txt">
										<h3><a href="#">Assassin Creed</a></h3>
										<p>The Truth is written in blood all is forgotten but never seen. Assasins 
	will come to those that disrespect our laws.</p>
									</div>
								</div>
								{/* end loop */}
							</div>	

						</div>
					</div>
					<div className="col-md-8">

					<div className="rightCol">
							<div className="titleCol"><h2>Life of an Assassin</h2></div>
							<div className="colBoxes">
								{/* loop items */}	
								<div className="itemCol">
									<div className="itemcol-img">
										<a href="#" className="linkImgBox" style={{backgroundImage:"url(./images/thumbItem.jpg)"}}></a>
									</div>
									<div className="itemcol-txt">
										<h3><a href="#">Assassin Creed</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
								{/* end loop */}
								{/* loop items */}	
								<div className="itemCol">
									<div className="itemcol-img">
										<a href="#" className="linkImgBox" style={{backgroundImage:"url(./images/thumbItem.jpg)"}}></a>
									</div>
									<div className="itemcol-txt">
										<h3><a href="#">Assassin Creed</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
								{/* end loop */}
								{/* loop items */}	
								<div className="itemCol">
									<div className="itemcol-img">
										<a href="#" className="linkImgBox" style={{backgroundImage:"url(./images/thumbItem.jpg)"}}></a>
									</div>
									<div className="itemcol-txt">
										<h3><a href="#">Assassin Creed</a></h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									</div>
								</div>
								{/* end loop */}
							</div>	

						</div>


					</div>
				</div>
			</div>
			{/* end content section */}				

			{/* footer section */}	
			<SiteFooter />
			{/* footer section */}	
		</div>
	);
}




export default App;
