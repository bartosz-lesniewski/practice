function Hamburger() {
	return (
		<nav role="navigation">
			<div id="menuToggle">
				<input type="checkbox" />

				<span></span>
				<span></span>
				<span></span>

				<ul id="menu">
					<a href="#">
						<li className="menu-ham-mobile">DASHBOARD</li>
					</a>
					<a href="#">
						<li>RECIPES</li>
					</a>
					<a href="#">
						<li>CHALLENGE</li>
					</a>
					<a href="#">
						<li>USER PANEL</li>
					</a>
				</ul>
			</div>
		</nav>
	);
}

export default Hamburger;
