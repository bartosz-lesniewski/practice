import Nav from "./Nav";
import User from "./User";

function Header() {
	return (
		<header className="header flex-center">
			<div className="header-margin">
				<Nav />
				<User />
			</div>
		</header>
	);
}

export default Header;
