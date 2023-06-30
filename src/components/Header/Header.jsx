import HeaderRight from "./HeaderRight/Headerright";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import logo from "../../assets/logos/logo-dark.png";
import "./Header.scss";
import { useEffect, useState } from "react";

const Header = () => {
	const [stickyClass, setStickyClass] = useState("");
	const [drawerIsOpen, setDrawerIsOpen] = useState(false);

	const openDrawerHandler = () => {
		setDrawerIsOpen(true);
	};

	const closeDrawerHandler = () => {
		setDrawerIsOpen(false);
	};

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
			{drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
			<SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
				<div className="main-header-right mobile">
					<HeaderRight />
				</div>
			</SideDrawer>
			<div className="main-header-right">
				<HeaderRight />
			</div>
			<button className="main-header__menu-btn" onClick={openDrawerHandler}>
				<span />
				<span />
				<span />
			</button>
		</header>
	);
};

export default Header;
