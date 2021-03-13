// in this task i create two kind of users.
// first is normal user and you can change in console his name or points.
// second one is premium user and he have special extra points and you can increase or decrease it by 1 in console.

const users = [];
const premiumUsers = [];

function User(name, points) {
	this.name = name;
	this.points = points;
}

User.prototype.userNewName = function (name) {
	this.name = name;
};
User.prototype.changePoints = function (points) {
	this.points = points;
};

function PremiumUser(name, points, extraPoints) {
	User.call(this, name, points);
	this.extraPoints = extraPoints;
}
PremiumUser.prototype.increaseExtraPoints = function () {
	this.extraPoints++;
};
PremiumUser.prototype.decreaseExtraPoints = function () {
	this.extraPoints--;
};

Object.setPrototypeOf(PremiumUser.prototype, User.prototype);

function showUser() {
	users.forEach((user) => console.log(user));
}

function showPremiumUser() {
	premiumUsers.forEach((premiumUser) => console.log(premiumUser));
}

function clearConsole() {
	console.clear();
}

document.addEventListener("DOMContentLoaded", () => {
	const btnCreate = document.querySelector(".createUser");
	const btnCreatePremium = document.querySelector(".createPremiumUser");
	const btnShow = document.querySelector(".showUser");
	const btnShowPremium = document.querySelector(".showPremiumUser");
	const btnClear = document.querySelector(".clearConsole");

	btnCreate.addEventListener("click", () => {
		const name = prompt("what is your name?");
		const points = Number(prompt("how much points do you have?"));

		users.push(new User(name, points));
	});

	btnCreatePremium.addEventListener("click", () => {
		const name = prompt("what is your name?");
		const points = Number(prompt("how much points do you have?"));
		const extraPoints = Number(prompt("how much extra points do you have?"));

		premiumUsers.push(new PremiumUser(name, points, extraPoints));
	});

	btnShow.addEventListener("click", showUser);
	btnShowPremium.addEventListener("click", showPremiumUser);

	btnClear.addEventListener("click", clearConsole);
});
