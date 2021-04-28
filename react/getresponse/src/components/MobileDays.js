import arrowleft from "../img/arrowleft.png";
import arrowright from "../img/arrowright.png";
import Days from "./Days";
import { useState } from "react";
import Hamburger from "./Hamburger";

function MobileDays() {
	const Slides = ({ slide }) => {
		const [currentWeek, setCurrentWeek] = useState(0);
		const { length } = slide;

		const prev = () => {
			setCurrentWeek(currentWeek === 0 ? 0 : currentWeek - 1);
		};
		const next = () => {
			setCurrentWeek(currentWeek === length - 1 ? 2 : currentWeek + 1);
		};

		if (!Array.isArray(slide) || slide.length <= 0) {
			return null;
		}
		return (
			<section className="slider_days">
				<Hamburger />
				{slide.map((s, i) => (
					<div
						className={i === currentWeek ? "slider__day active" : "slider__day"}
						key={s.image}
					>
						<button onClick={prev} className="slider__button__1-day">
							<img src={arrowleft} />
						</button>
						{i === currentWeek && (
							<img
								className="img-mobile"
								src={s.image}
								alt={`Image for ${s.title}`}
							/>
						)}
						<button onClick={next} className="slider__button__2-day">
							<img src={arrowright} />
						</button>
					</div>
				))}
			</section>
		);
	};

	return <Slides slide={Days} />;
}

export default MobileDays;
