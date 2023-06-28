import Button from "../UIElements/Button";

import "./TakeTheTest.scss";

let testVideo =
	"https://s3-figma-videos-production-sig.figma.com/video/1116279045534363915/TEAM/58cf/c38a/-3da2-4fd3-807a-fb6739930ad2?Expires=1688947200&Signature=D6ljACw5Vm1-RPR-QIYiMcji7T50fQTedY~fXXZ~0xRT6wVAxVmhpTMHPpVsw9qc4phZOfpiJrZMVghgFIBwbdw9wUtWGuREf-017z30uSokyjHKJgfN1kuwRKTUeYTjN~ynZvihhymLHgcWGUyLNKeTA6h~hDF3le~EYrQufdCyFXvyeWricZnSPFWcOF~9lstmpn4iH5JWO5sgB0utuPcxw61AwuC2M96hVOwZiO1GTDLCHwc7AyX5nl1wmVppUfFZbHMW~etgCmK~mqSRDM1172RxkWXEq9wFCzJ~LabR8rU5XoSDohNVSFk5Nq6zMo4h-47NnNnVpKmtyCAskQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

const TakeTheTest = () => {
	return (
		<section className="take-the-test">
			<div className="take-the-test__text">
				<h2>Your perfect training match</h2>
				<h4>Take the free myUQ Skills test to discover your talents!</h4>
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
				<Button>Take the test</Button>
			</div>
			<div className="take-the-test__video">
				<video controls="controls">
					<source src={testVideo} type="video/mp4"></source>
					Your browser does not support the video tag.
				</video>
			</div>
		</section>
	);
};

export default TakeTheTest;
