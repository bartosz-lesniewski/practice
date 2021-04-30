import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Table from "./components/Table";
import MobileDays from "./components/MobileDays";
import "./app.css";
import "./footer.css";
import "./header.css";
import "./main.css";
import "./mediaqueries.css";
import "./nav.css";
import "./slider.css";
import "./table.css";
import "./user.css";

function App() {
	return (
		<div className="main-wrapper">
			<Header />
			<Main />
			<Table />
			<Footer />
			<MobileDays />
		</div>
	);
}

export default App;
