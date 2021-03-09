let userArray = [];

const createUser = document.querySelector('.createUser').addEventListener('click', function(user) {
    user.name = prompt('what is your name?');
    user.age = prompt('what is your age?');

    userArray.push(user);
});
const showUser = document.querySelector('.showUser').addEventListener('click', () => {
    userArray.forEach((user) => console.log(user))
});
const clearConsole = document.querySelector('.clearConsole').addEventListener('click', function() {
    console.clear()
});


