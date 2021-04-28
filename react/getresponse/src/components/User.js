import Layer216 from "../img/Layer216.svg";
import arrowbottom from "../img/arrowbottom.png";

function User() {
	return (
		<div className="user header--width">
			<img className="user__img" src={Layer216} alt="user picture" />
			<p className="user__id">Olivia Wilde</p>
			<img src={arrowbottom} alt="arrow bottom" />
		</div>
	);
}

export default User;
