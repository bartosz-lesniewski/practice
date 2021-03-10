const users = [];

function createUser(name, balance) {
    const user = Object.create(newUser);
    user.name = name;
    user.balance = balance;

    return user   
}

const newUser = {
    increaseBalance() {
        this.balance++;
    },
    decreaseBalance() {
        this.balance--;
    },
    render() {
        const addUser = document.createElement('li');
        addUser.innerHTML = `
        <p>Name: ${this.name}</p>
        <p balance>Balance: ${this.balance}</p>
        <button btnIncrease>increase balance</button>
        <button btnDecrease>decrease balance</button>
        `;

        addUser.querySelector('[btnIncrease]').addEventListener('click', () => {
            this.increaseBalance();
            addUser.querySelector('[balance]').innerHTML =`Balance: ${this.balance}`;
        });

        addUser.querySelector('[btnDecrease]').addEventListener('click', () => {
            this.decreaseBalance();
            addUser.querySelector('[balance]').innerHTML =`Balance: ${this.balance}`;
        })
        
        const displayUser = document.querySelector('ul')
        displayUser.appendChild(addUser)
    } 
}

document.addEventListener('DOMContentLoaded', () =>{
    const btnCreateUser = document.querySelector('.createUser');

    btnCreateUser.addEventListener('click', () => {
        const name = window.prompt('what is your name?');
        const balance = window.prompt('what balanace do you have?');

        const dataUser = createUser(name, balance)
        users.push(dataUser); 
        dataUser.render();
    })
});