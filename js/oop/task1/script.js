const usersArray = [];

function createUser(name, age) {
    const user = {}
    user.name = name;
    user.age = age;
    
    return user
}

function showUser() {
    usersArray.forEach((user) => console.log(user))
}

const clearConsole = () => console.clear()

document.addEventListener('DOMContentLoaded', () =>{
    const btnCreate = document.querySelector('.createUser');
    const btnShow = document.querySelector('.showUser');
    const btnClear = document.querySelector('.clearConsole');

    btnCreate.addEventListener('click', () => {
        const name = window.prompt('what is your name?');
        const age = window.prompt('what is your age?');

        usersArray.push(createUser(name, age))
    });
    
    btnShow.addEventListener('click', showUser);
    
    btnClear.addEventListener('click', clearConsole)
});


// const createUser = document.querySelector('.createUser').addEventListener('click', function(user) {
//     user.name = prompt('what is your name?');
//     user.age = prompt('what is your age?');

//     userArray.push(user);
// });
// const showUser = document.querySelector('.showUser').addEventListener('click', () => {
//     userArray.forEach((user) => console.log(user))
// });
// const clearConsole = document.querySelector('.clearConsole').addEventListener('click', function() {
//     console.clear()
// });