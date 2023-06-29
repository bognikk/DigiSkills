import Button from "../UIElements/Button";
import RollingText from "../UIElements/RollingText";
import briefcase from "../../assets/icons/briefcase-icon.svg";
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
						<select>
							<option value="hide">
								{/* <img src={briefcase} alt="briefcase icon" /> Select a project */}
							</option>
							<option data-content={briefcase} value="Project 1">
								Project 1
							</option>
							<option value="fa fa-address-card" className="fa">
								&#xf2bb;Project 2
							</option>
							<option value="Project 3">Project 3</option>
						</select>
						<Button>Start my search</Button>
					</div>
					<p>Or enjoy a little browsing!</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
