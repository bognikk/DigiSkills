import Button from "../UIElements/Button";

import "./LearnMore.scss";

const LearnMore = () => {
	return (
		<section className="learn-more">
			<div className="learn-more__wrapper">
				<div className="learn-more__content">
					<h2>This week’s fantastical highlight</h2>
					<p>
						Mauris augue neque gravida in. Amet consectetur adipiscing elit ut
						aliquam purus sit amet. Lectus mauris ultrices eros in cursus. Vel
						quam elementum pulvinar etiam non quam lacus suspendisse.
					</p>
					<p>
						Turpis massa sed elementum tempus. Pellentesque massa placerat duis
						ultricies lacus. Tincidunt nunc pulvinar sapien et. Scelerisque
						eleifend donec pretium vulputate sapien nec sagittis. Semper feugiat
						nibh sed pulvinar proin. Consectetur libero id faucibus nisl
						tincidunt. Nunc id cursus metus aliquam.
					</p>
					<Button>I want to know more</Button>
				</div>
				<div className="badge">Sponsored</div>
			</div>
		</section>
	);
};

export default LearnMore;
