import Button from "../UIElements/Button";
import DropDown from "../UIElements/DropDown";

import RollingText from "../UIElements/RollingText";
// import briefcase from "../../assets/icons/briefcase-icon.svg";
import "./Hero.scss";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero__image"></div>
			<div className="hero__content">
				<div className="hero__content--text">
					<h2>
						The home of digital skills in{" "}
						<RollingText text1="Belgium" text2="lorem" text3="ipsum" />
					</h2>

					<p>The home of digital skills in Belgium</p>
				</div>
				<div className="hero__content--search">
					<div className="hero__content--search-inner">
						<input type="text" placeholder="Search topics" />
						<DropDown />
						<Button>Start my search</Button>
					</div>
					<p>Or enjoy a little browsing!</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
