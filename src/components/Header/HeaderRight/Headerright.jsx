import Button from "../../UIElements/Button";

import "./HeaderRight.scss";

const HeaderRight = () => {
	return (
		<>
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
				<a href="#top">Become a digital partner</a>
			</div>
			<div className="main-header-right__translate">
				<p tabIndex="0">EN</p>
			</div>
		</>
	);
};

export default HeaderRight;
