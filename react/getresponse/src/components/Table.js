import happy from "../img/happy.png";
import hantlaactive from "../img/hantlaactive.png";
import hantla from "../img/hantla.png";
import check from "../img/check.png";
import printer from "../img/printer.png";
import workoutarrow from "../img/workoutarrow.png";
import orangechecked from "../img/orangechecked.png";
import bodeshakeactive from "../img/bodeshakeactive.png";
import bodeshake from "../img/bodeshake.png";

function Table() {
	return (
		<div className="flex-center">
			<table className="table">
				<tr className="table__tr">
					<th className="table__th table-first-row  table-width-ef table-th-height"></th>
					<th className="table__th table-th-height table-width-main">DAY 64</th>
					<th className="table__th table-th-height table-width-main day65 day65-top">
						DAY 65
					</th>
					<th className="table__th table-th-height table-width-main">DAY 66</th>
					<th className="table__th table-th-height table-width-main">DAY 67</th>
					<th className="table__th table-th-height table-width-main">DAY 68</th>
					<th className="table__th table-th-height table-width-main">DAY 69</th>
					<th className="table__th table-th-height table-width-main">DAY 70</th>
				</tr>
				<tr className="table__tr">
					<td className="table__td table-first-row  table-width-ef table-height-main">
						6:00 <span className="hour-weight">AM</span>
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Shake <img src={bodeshake} alt="coffe photo" />
						<img className="checked-position1" src={orangechecked} />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left day65">
						Bod•ē Shake <img src={bodeshakeactive} alt="coffe photo" />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Shake <img src={bodeshake} alt="coffe photo" />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Shake <img src={bodeshake} alt="coffe photo" />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Shake <img src={bodeshake} alt="coffe photo" />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Shake <img src={bodeshake} alt="coffe photo" />
					</td>
					<td className="table__td table-width-main" rowspan="5">
						<span className="vertical-guilt-free">
							<img className="vertical-guilt-free" src={happy} /> GUILT-FREE DAY
						</span>
					</td>
				</tr>
				<tr className="table__tr">
					<td className="table__td table-first-row table-height-main">
						9:00 <span className="hour-weight">AM</span>
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Ham and Swiss Roll Ups{" "}
						<img className="checked-position2" src={orangechecked} />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left day65">
						Ham and Swiss Roll Ups
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Grilled Steak (HC)
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Ham and Swiss Roll Ups
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Ham and Swiss Roll Ups
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Grilled Steak (HC)
					</td>
				</tr>
				<tr className="table__tr">
					<td className="table__td table-first-row  table-width-ef">
						12:00 <span className="hour-weight">AM</span>
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Turkey Melt
						<img className="checked-position3" src={orangechecked} />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left day65">
						Turkey Melt
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Shake <img src={bodeshake} alt="coffe photo" />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Turkey Melt
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Shake <img src={bodeshake} alt="coffe photo" />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Shake <img src={bodeshake} alt="coffe photo" />
					</td>
				</tr>
				<tr className="table__tr ">
					<td className="table__td table-first-row  table-width-ef table-height-main">
						3:00 <span className="hour-weight">PM</span>
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Burn with Mozarella and Tomato Slices
						<img className="checked-position4" src={orangechecked} />
					</td>
					<td className="table__td table-height-main table-width-main text-align-left day65">
						Bod•ē Burn with Mozarella and Tomato Slices
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Burn with Mozarella and Tomato Slices
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Burn with Mozarella and Tomato Slices
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray
					</td>
				</tr>
				<tr className="table__tr">
					<td className="table__td table-first-row table-width-ef table-height-main">
						6:00 <span className="hour-weight">PM</span>
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Turkey Melt
					</td>
					<td className="table__td table-height-main table-width-main text-align-left day65">
						Turkey Melt
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Garlic Lime Chicken (HC)
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Turkey Melt
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Turkey Melt
					</td>
					<td className="table__td table-height-main table-width-main text-align-left">
						Garlic Lime Chicken (HC)
					</td>
				</tr>
				<tr className="table__tr">
					<td className="table__td table-first-row  table-width-ef table-height-diet"></td>
					<td className="table__td table-first-row width table-height-diet table-width-main">
						LOW-CARB
					</td>
					<td className="table__td table-first-row width table-height-diet table-width-main day65 day65-color">
						LOW-CARB
					</td>
					<td className="table__td table-first-row width table-height-diet table-width-main">
						HIGH-CARB
					</td>
					<td className="table__td table-first-row width table-height-diet table-width-main">
						LOW-CARB
					</td>
					<td className="table__td table-first-row width table-height-diet table-width-main">
						LOW-CARB
					</td>
					<td className="table__td table-first-row width table-height-diet table-width-main">
						HIGH-CARB
					</td>
					<td
						className="table__td table-first-row table-width-main printer"
						rowspan="2"
					>
						<img className="printer-image" src={printer} />
						Print
					</td>
				</tr>
				<tr className="table__tr">
					<td className="table__td table-first-row  table-width-ef table-height-diet">
						Workout <img src={workoutarrow} />
					</td>
					<td className="table__td table-first-row table-height-diet table-width-main">
						<img src={hantlaactive} />
						<img className="check" src={check} />
					</td>
					<td className="table__td table-first-row table-height-diet table-width-main day65 day65-bottom">
						<img src={hantlaactive} />
						<img className="check" src={check} />
					</td>
					<td className="table__td table-first-row table-height-diet table-width-main">
						<img src={hantla} />
					</td>
					<td className="table__td table-first-row table-height-diet table-width-main">
						<img src={hantla} />
					</td>
					<td className="table__td table-first-row table-height-diet table-width-main">
						<img src={hantla} />
					</td>
					<td className="table__td table-first-row table-height-diet table-width-main">
						<img src={hantla} />
					</td>
				</tr>
			</table>
		</div>
	);
}

export default Table;
