import { useEffect } from "react";
import "./TextHover.scss";

const TextHover = (props) => {
	useEffect(() => {
		let elements = document.querySelectorAll(".text-hover");

		elements.forEach((element) => {
			let innerText = element.innerText;
			element.innerHTML = "";

			let textContainer = document.createElement("div");
			textContainer.classList.add("block");

			for (let letter of innerText) {
				let span = document.createElement("span");
				span.innerText = letter.trim() === "" ? "\xa0" : letter;
				span.classList.add("letter");
				textContainer.appendChild(span);
			}

			element.appendChild(textContainer);
			element.appendChild(textContainer.cloneNode(true));
		});
	}, []);
	return <span className="text-hover">{props.children}</span>;
};

export default TextHover;
