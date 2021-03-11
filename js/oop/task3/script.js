// same task as task2 but this time i used "new", not "Object.create"

const users = []

function User(name, score) {
    this.name = name;
    this.score = score;
};

User.prototype.increaseScore = function(){
    this.score++;
};

User.prototype.decreaseScore = function(){
    this.score--;
};

User.prototype.render = function() {
    const addUser = document.createElement('li');
    addUser.innerHTML = `
        <p>Name: ${this.name}</p>
        <p score>Score: ${this.score}</p>
        <button btnIncrease>increase score</button>
        <button btnDecrease>decrease score</button>
        `;
    addUser.querySelector('[btnIncrease]').addEventListener('click', () => {
        this.increaseScore();
        addUser.querySelector('[score]').innerHTML =`Score: ${this.score}`;
    });

    addUser.querySelector('[btnDecrease]').addEventListener('click', () => {
        this.decreaseScore();
        addUser.querySelector('[score]').innerHTML =`Score: ${this.score}`;
    })
        
    const displayUser = document.querySelector('ul')
    displayUser.appendChild(addUser)
    };

document.addEventListener('DOMContentLoaded', () => {
    const btnCreateUser = document.querySelector('.createUser');

    btnCreateUser.addEventListener('click', () => {
        const name = prompt('what is your name?');
        const score = Number(prompt('what balanace do you have?'));
        const dataUser = new User(name, score)
        users.push(dataUser)
        dataUser.render()
})
});
