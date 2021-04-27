function Nav() {
	return (
		<nav className="navigation header--width">
			<ul className="menu ul-ham">
				<li className="menu__item ham-item">
					<a className="menu__link dashboard" href="#">
						DASHBOARD
					</a>
				</li>
				<li className="menu__item ham-item">
					<a className="menu__link recipes" href="#">
						RECIPES
					</a>
				</li>
				<li className="menu__item ham-item">
					<a className="menu__link challenge" href="#">
						CHALLENGE
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
