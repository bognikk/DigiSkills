import slide1 from "../../assets/images/slide/slide-01.png";
import slide2 from "../../assets/images/slide/slide-02.png";
import slide3 from "../../assets/images/slide/slide-03.png";

import "flickity/dist/flickity.min.css";
import "./Slider.scss";
import { useEffect, useRef } from "react";

const Slider = () => {
	useEffect(() => {
		initFlickity();
	}, []);

	const carousel = useRef(null);

	async function initFlickity() {
		if (typeof window !== "undefined" && carousel.current) {
			const Flickity = (await import("flickity")).default;
			new Flickity(carousel.current, {
				lazyLoad: true,
				wrapAround: false,
				autoPlay: false,
				cellAlign: "left",
				freeScroll: false,
				prevNextButtons: false,
				draggable: false,
			});
		}
	}

	return (
		<section className="slider">
			<h2>Our most ambitious initiatives</h2>

			<div ref={carousel} className="w-full">
				<div className="carousel-cell">
					<div className="image">
						<img src={slide1} alt="typing on keyboard" />
					</div>
					<div className="content">
						<p>Hack Your Future</p>
						<a tabIndex="1" href="#top">
							View more
						</a>
					</div>
				</div>

				<div className="carousel-cell">
					<div className="image">
						<img src={slide2} alt="a guy working on a laptop" />
					</div>
					<div className="content">
						<p>BeCode Belgium</p>
						<a tabIndex="1" href="#top">
							View more
						</a>
					</div>
				</div>
				<div className="carousel-cell">
					<div className="image">
						<img src={slide3} alt="girl working" />
					</div>
					<div className="content">
						<p>my UQ Skills</p>
						<a tabIndex="1" href="#top">
							View more
						</a>
					</div>
				</div>
				<div className="carousel-cell">
					<div className="image">
						<img src={slide1} alt="typing on keyboard" />
					</div>
					<div className="content">
						<p>Hack Your Future</p>
						<a tabIndex="1" href="#top">
							View more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Slider;
