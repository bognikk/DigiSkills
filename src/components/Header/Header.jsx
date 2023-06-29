import Button from "../UIElements/Button";

import logo from "../../assets/logos/logo-dark.png";
import "./Header.scss";
import { useEffect, useState } from "react";

const Header = () => {
	const [stickyClass, setStickyClass] = useState("");

	useEffect(() => {
		window.addEventListener("scroll", stickyHeader);
		return () => window.removeEventListener("scroll", stickyHeader);
	}, []);

	const stickyHeader = () => {
		if (window !== undefined) {
			let windowHeight = window.scrollY;
			let headerHeight = document.querySelector("header").offsetHeight;
			windowHeight > headerHeight
				? setStickyClass("stickyHeader")
				: setStickyClass("");
		}
	};

	return (
		<header className={`main-header ${stickyClass}`}>
			<div className="main-header__left">
				<a href="#top">
					<img src={logo} alt="main logo" />
				</a>
			</div>
			<div className="main-header-right">
				<div className="main-header-right__navigation">
					<ul>
						<li>
							<a href="#top">Training Match</a>
						</li>
						<li>
							<a href="#top">Digital Initiatives</a>
						</li>
						<li>
							<a href="#top">Inspiring Stories</a>
						</li>
						<li>
							<a href="#top">Our Mission</a>
						</li>
						<li>
							<a href="#top">Contact</a>
						</li>
					</ul>
				</div>
				<div className="main-header-right__login">
					<Button>Log in</Button>
					<p>Become a digital partner</p>
				</div>
				<div className="main-header-right__translate">
					<p tabIndex="0">EN</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
