import "./RollingText.scss";

const RollingText = ({ text1, text2, text3 }) => {
	return (
		<div className="scroller">
			<span>
				<span>{text1}</span>
				<br />
				<span>{text2}</span>
				<br />
				<span>{text3}</span>
			</span>
		</div>
	);
};

export default RollingText;
