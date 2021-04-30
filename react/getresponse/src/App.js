import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Table from "./components/Table";
import MobileDays from "./components/MobileDays";
import "./all.css";

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
