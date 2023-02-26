import React from 'react'
import { FiMail } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io';
import Image from 'next/image';

const Navbar = () => {
	return (
		<section>
			<div className="mainContainer">
				<div className='NavBarTop'>
					<ul className="ContactLinks">
						<li><a href="mailto:addacoding01@gmail.com" target="_blank" rel="noreferrer" ><FiMail className='mailTo' /> Mail Us</a></li>
						<li><a href="https://www.youtube.com/@coding_adda" target="_blank" rel="noreferrer" ><IoLogoYoutube className='YoutubeChannel' /> View Channel</a></li>
					</ul>
				</div>
				<div className="NavBarBottom">
					<div className="logo">
						<Image src="/Logo.png" width="100" height="100" className="" />
					</div>
					<ul className='NavLinks'>
						<li><a className="NavLinks-anchor-tag" to="/">Home</a></li>
						<li><a className="NavLinks-anchor-tag" to="/about">About</a></li>
						<li><a className="NavLinks-anchor-tag" to="/explore">Explore</a></li>
						<li><a className="NavLinks-anchor-tag" to="/blogs">Blogs</a></li>
						<li><a className="NavLinks-anchor-tag" to="/videos">Tutorials</a></li>
					</ul>
					<ul className="">
						<li><a href="#">Login</a></li>
						<li><a href="#">SignUp</a></li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Navbar;
