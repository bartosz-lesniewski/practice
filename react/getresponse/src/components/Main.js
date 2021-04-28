import Slider from "./Slider";
import brocule from "../img/brocule.png";
import cheese from "../img/cheese.png";
import steak from "../img/steak.png";
import fish from "../img/fish.png";
import chicken from "../img/chicken.png";
import progressbar from "../img/progresbar.png";

function Main() {
	return (
		<div className="flex-center mobile-fc">
			<main className="main mobile-main">
				<section className="head head--width head--margin--left mobile-progress">
					<h3 className="head__h3">YOUR 12 WEEK PROGRESS</h3>
					<img src={progressbar} alt="progress bar" />
				</section>
				<Slider />
				<section className="head head--width mobile-icon-wrapper">
					<h3 className="head__h3-2">SELECT YOUR PROTEIN OPTIONS</h3>
					<div className="icon-food-wrapper">
						<img className="brocule-icon" src={brocule} alt="brocule icon" />
						<img className="cheese-icon" src={cheese} alt="cheese icon" />
						<img className="steak-icon" src={steak} alt="steak icon" />
						<img className="fish-icon" src={fish} alt="fish icon" />
						<img className="chicken-icon" src={chicken} alt="chicken icon" />
					</div>
				</section>
			</main>
		</div>
	);
}

export default Main;
