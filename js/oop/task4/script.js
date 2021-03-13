// in this task i create two kind of users.
// first is normal user and you can change in console his name or points.
// second one is premium user and he have special extra points and you can increase or decrease it by 1 in console.

const users = [];
const premiumUsers = [];

function showUser() {
	users.forEach((user) => console.log(user));
}

function showPremiumUser() {
	premiumUsers.forEach((premiumUser) => console.log(premiumUser));
}

function clearConsole() {
	console.clear();
}

function CreateUser(name, points) {
	const user = Object.create(userOptions);
	user.name = name;
	user.points = points;

	return user;
}

const userOptions = {
	changeName(name) {
		this.name = name;
	},
	changePoints(points) {
		this.points = points;
	},
};

function CreatePremiumUser(name, points, extraPoints) {
	const premiumUser = CreateUser(name, points);
	premiumUser.extraPoints = extraPoints;
	Object.setPrototypeOf(premiumUser, premiumOptions);

	return premiumUser;
}

const premiumOptions = {
	increaseExtraPoints() {
		this.extraPoints++;
	},
	decreaseExtraPoints() {
		this.extraPoints--;
	},
};

Object.setPrototypeOf(premiumOptions, userOptions);

document.addEventListener("DOMContentLoaded", () => {
	const btnCreate = document.querySelector(".createUser");
	const btnCreatePremium = document.querySelector(".createPremiumUser");
	const btnShow = document.querySelector(".showUser");
	const btnShowPremium = document.querySelector(".showPremiumUser");
	const btnClear = document.querySelector(".clearConsole");

	btnCreate.addEventListener("click", () => {
		const name = prompt("what is your name?");
		const points = prompt("how much points do you have?");

		users.push(CreateUser(name, points));
	});

	btnCreatePremium.addEventListener("click", () => {
		const name = prompt("what is your name?");
		const points = prompt("how much points do you have?");
		const extraPoints = prompt("how much extra points do you have?");

		premiumUsers.push(CreatePremiumUser(name, points, extraPoints));
	});

	btnShow.addEventListener("click", showUser);
	btnShowPremium.addEventListener("click", showPremiumUser);

	btnClear.addEventListener("click", clearConsole);
});
