import Button from "../UIElements/Button";

import "./GetInTouch.scss";

const GetInTouch = () => {
	return (
		<section className="get-in-touch">
			<div className="get-in-touch__content">
				<h2>Do you have any questions?</h2>
				<h4>Ask our team!</h4>
				<Button inverse>Get in touch</Button>
			</div>
		</section>
	);
};

export default GetInTouch;
