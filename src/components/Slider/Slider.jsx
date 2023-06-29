// import Button from "../UIElements/Button";

import slide1 from "../../assets/images/slide/slide-01.png";
import slide2 from "../../assets/images/slide/slide-02.png";
import slide3 from "../../assets/images/slide/slide-03.png";
import slide4 from "../../assets/images/slide/slide-04.png";

import Flickity from "flickity";
import "flickity/dist/flickity.min.css";
import "./Slider.scss";

// const Flickity = require("flickity");

const Slider = () => {
	let flky = new Flickity(".carousel", {
		// options, defaults listed

		accessibility: true,
		// enable keyboard navigation, pressing left & right keys

		adaptiveHeight: false,
		// set carousel height to the selected slide

		autoPlay: false,
		// advances to the next cell
		// if true, default is 3 seconds
		// or set time between advances in milliseconds
		// i.e. `autoPlay: 1000` will advance every 1 second

		cellAlign: "center",
		// alignment of cells, 'center', 'left', or 'right'
		// or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right)

		cellSelector: undefined,
		// specify selector for cell elements

		contain: true,
		// will contain cells to container
		// so no excess scroll at beginning or end
		// has no effect if wrapAround is enabled

		draggable: ">1",
		// enables dragging & flicking
		// if at least 2 cells

		dragThreshold: 3,
		// number of pixels a user must scroll horizontally to start dragging
		// increase to allow more room for vertical scroll for touch devices

		freeScroll: false,
		// enables content to be freely scrolled and flicked
		// without aligning cells

		friction: 0.2,
		// smaller number = easier to flick farther

		groupCells: false,
		// group cells together in slides

		initialIndex: 0,
		// zero-based index of the initial selected cell

		lazyLoad: true,
		// enable lazy-loading images
		// set img data-flickity-lazyload="src.jpg"
		// set to number to load images adjacent cells

		percentPosition: true,
		// sets positioning in percent values, rather than pixels
		// Enable if items have percent widths
		// Disable if items have pixel widths, like images

		prevNextButtons: true,
		// creates and enables buttons to click to previous & next cells

		pageDots: true,
		// create and enable page dots

		resize: true,
		// listens to window resize events to adjust size & positions

		rightToLeft: false,
		// enables right-to-left layout

		setGallerySize: true,
		// sets the height of gallery
		// disable if gallery already has height set with CSS

		watchCSS: false,
		// watches the content of :after of the element
		// activates if #element:after { content: 'flickity' }

		wrapAround: false,
		// at end of cells, wraps-around to first for infinite scrolling
	});

	return (
		<section className="slider">
			<h2>Our most ambitious initiatives</h2>
			<div className="carousel">
				{/* <div className="carousel-cell">
					<li>
						<a tabIndex="0" href="#top" className="slide-01">
							<div className="image">
								<img src={slide1} alt="typing on keyboard" />
							</div>
							<div className="content">
								<p>Hack Your Future</p>
								<a tabIndex="1" href="#top">
									View more
								</a>
							</div>
						</a>
					</li>
				</div> */}
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
						<img src={slide2} alt="typing on keyboard" />
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
						<img src={slide3} alt="typing on keyboard" />
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
						<img src={slide4} alt="typing on keyboard" />
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
