let createUser = document.querySelector('.createUser').addEventListener('click', function(user) {
    user.name = prompt('what is your name?');
    user.age = prompt('what is your age?');

    createUser = user;
});
const showUser = document.querySelector('.showUser').addEventListener('click', function(){
    console.log(createUser)
});
const clearConsole = document.querySelector('.clearConsole').addEventListener('click', function() {
    console.clear()
});


