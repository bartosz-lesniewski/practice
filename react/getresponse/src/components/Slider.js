import arrowleft from "../img/arrowleft.png";
import arrowright from "../img/arrowright.png";
import Weeks from "./Weeks";
import { useState } from "react";

function Slider() {
	const Slides = ({ slide }) => {
		const [currentWeek, setCurrentWeek] = useState(6);
		const { length } = slide;

		const prev = () => {
			setCurrentWeek(currentWeek === 0 ? 0 : currentWeek - 1);
		};
		const next = () => {
			setCurrentWeek(currentWeek === length - 1 ? 11 : currentWeek + 1);
		};

		if (!Array.isArray(slide) || slide <= 0) {
			return null;
		}
		return (
			<section className="slider head--width">
				{slide.map((s, i) => (
					<div
						className={
							i === currentWeek ? "slider__weeks active" : "slider__weeks"
						}
						key={s.title}
					>
						<button onClick={prev} className="slider__button__1">
							<img src={arrowleft} />
						</button>
						<h1 className="week">{s.title}</h1>
						<button onClick={next} className="slider__button__2">
							<img src={arrowright} />
						</button>
					</div>
				))}
			</section>
		);
	};

	return <Slides slide={Weeks} />;
}

export default Slider;
