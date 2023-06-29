import Button from "../UIElements/Button";
import logo from "../../assets/logos/logo-light.png";

import "./Footer.scss";

const Footer = () => {
	return (
		<section className="footer">
			<div className="footer__top">
				<div className="column footer-logo">
					<img src={logo} alt="main logo" />
				</div>
				<div className="column">
					<ul>
						<li>
							<a href="#top">Menu</a>
						</li>
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
				<div className="column">
					<ul>
						<li>
							<a href="#top">Andere links</a>
						</li>
						<li>
							<a href="#top">Login</a>
						</li>
						<li>
							<a href="#top">Become a digital partner</a>
						</li>
						<li>
							<a href="#top">My uQ Skills test</a>
						</li>
					</ul>
				</div>
				<div className="column contact">
					<h2>Come visit us</h2>
					<p>Bouwensstraat 21 2140 Antwerp, Belgium</p>
					<a href="email:hello@digiskillsbelgium.be">
						hello@digiskillsbelgium.be
					</a>
					<br />
					<br />
					<a href="tel:32(0)34320003">+32 (0) 3 432 00 03</a>
					<br />
					<Button inverse>Cpntact us</Button>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="copyright">&copy; Digiskillsbelgium 2023.</div>
				<ul>
					<li>
						<a href="#top">Terms & Conditions</a>
					</li>
					<li>
						<a href="#top">Privacy Policy</a>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Footer;
