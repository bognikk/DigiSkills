import { useState } from "react";
import "./DropDown.scss";

const DropDown = () => {
	const options = ["Project 1", "Project 2", "Project 3"];

	const [selectedValue, setSelectedValue] = useState("Select a project");
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (value) => () => {
		setSelectedValue(value);
		setIsOpen(false);
		console.log(selectedValue);
	};

	return (
		<div className={`dropdown ${isOpen ? "open" : ""}`}>
			<button
				className={`dropdown__header ${isOpen ? "open" : "closed"}`}
				onClick={toggling}
			>
				{selectedValue}
			</button>
			{isOpen && (
				<div className="dropdown__list-container">
					<ul className="dropdown__list">
						{options.map((option) => (
							<li
								className="dropdown__list--item"
								onClick={onOptionClicked(option)}
								key={Math.random()}
							>
								<a href="#top">{option}</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DropDown;
