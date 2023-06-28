import { Link } from "react-router-dom";

import "./Button.scss";

const Button = (props) => {
	if (props.href) {
		return (
			<a
				className={`button ${props.inverse && "button--inverse"}`}
				href={props.href}
			>
				{props.children}
			</a>
		);
	}
	if (props.to) {
		return (
			<Link
				to={props.to}
				exact={props.exact}
				className={`button ${props.inverse && "button--inverse"}`}
			>
				{props.children}
			</Link>
		);
	}
	return (
		<button
			className={`button  ${props.inverse && "button--inverse"}`}
			type={props.type}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
