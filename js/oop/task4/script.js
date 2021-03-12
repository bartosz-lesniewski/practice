const users = [];
const premiumUsers = [];

function createUser(name, points) {
	const user = {};
	user.name = name;
	user.points = points;

	return user;
}

function createPremiumUser(name, points, extraPoints) {
	const premiumUser = {};
	premiumUser.name = name;
	premiumUser.points = points;
	premiumUser.extraPoints = extraPoints;

	return premiumUser;
}

function showUser() {
	users.forEach((user) => console.log(user));
}

function showPremiumUser() {
	premiumUsers.forEach((premiumUser) => console.log(premiumUser));
}

const clearConsole = () => console.clear();

document.addEventListener("DOMContentLoaded", () => {
	const btnCreate = document.querySelector(".createUser");
	const btnCreatePremium = document.querySelector(".createPremiumUser");
	const btnShow = document.querySelector(".showUser");
	const btnShowPremium = document.querySelector(".showPremiumUser");
	const btnClear = document.querySelector(".clearConsole");

	btnCreate.addEventListener("click", () => {
		const name = prompt("what is your name?");
		const points = prompt("how much points do you have?");

		users.push(createUser(name, points));
	});

	btnCreatePremium.addEventListener("click", () => {
		const name = prompt("what is your name?");
		const points = prompt("how much points do you have?");
		const extraPoints = prompt("how much extra points do you have?");

		premiumUsers.push(createPremiumUser(name, points, extraPoints));
	});

	btnShow.addEventListener("click", showUser);
	btnShowPremium.addEventListener("click", showPremiumUser);

	btnClear.addEventListener("click", clearConsole);
});
